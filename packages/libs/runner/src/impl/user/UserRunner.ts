import {
  Index,
  Item,
  Model,
  ModelError,
  Container,
  DeletableContainer,
  ReadableContainer,
  WritableContainer
} from "@vql/model"

import {
  DeleteStmt,
  DmlStmt,
  IndexedQueryStmt,
  KeyValue,
  SelectStmt,
  SetStmt
} from "@vql/parser"

import {ItemQueryResult, ItemsQueryResult, QueryResult} from "../../results"
import Runner from "../../Runner"
import getKeyValueOfQueryCondition from "./getKeyValueOfQueryCondition"
import getPseudoQueryConditionOfValue from "./getPseudoQueryConditionOfValue"
import QueryCondition from "./QueryCondition"

/**
 * A component for running queries on user containers.
 */
export default class UserRunner extends Runner {
  /**
   * Creates a system runner with the given arguments.
   *
   * @param model - The model to use with this runner.
   */
  constructor(model: Model) {
    super(model)
  }

  /**
   * Returns the container object from the model associated to a query.
   *
   * @param q - The query.
   * @returns The container.
   * @throws {@link ModelError} If not found.
   */
  protected getContainerOfQuery(q: DmlStmt): Container {
    // (1) get container
    const {containerName} = q
    const container = this.model.containers.getContainer(containerName)

    if (!container) {
      throw new ModelError(`Container not found in the model: ${containerName}.`)
    }

    // (2) return container
    return container
  }

  /**
   * Returns the container object and the index associated to a query.
   *
   * @param q - The query.
   * @returns The container and the index.
   */
  protected getContainerAndIndexOfQuery(q: IndexedQueryStmt): {
    container: Container
    index: Index
  } {
    // (1) get container
    const container = this.getContainerOfQuery(q)

    // (2) get index
    const conditionKeyFieldNames = q.keyValue.fieldNames
    const index = container.indexes.getIndexUsableWith(conditionKeyFieldNames)

    if (!index) {
      throw new ModelError(
        `Index not found on '${container.name}' for '${conditionKeyFieldNames}'.`
      )
    }

    // (3) return container and index
    return {container, index}
  }

  /**
   * Runs a SELECT query on a user container.
   *
   * @param q - The SELECT query to run.
   * @returns The query result.
   *
   * @privateRemarks
   * When the index used has the same number of key fields as
   * the query key fields, a query of only one item is performed;
   * otherwise, a query of items.
   */
  async runSelectQuery(q: SelectStmt): Promise<QueryResult> {
    // (1) pre
    const {container: c, index} = this.getContainerAndIndexOfQuery(q)

    if (!c.isReadable()) {
      throw new ModelError(`Container '${c.name}' isn't readable.`)
    }

    const container = c as ReadableContainer

    // (2) get query key value
    const condition = parseWhereClause(q.keyValue)

    // (3) get item(s)
    let result: QueryResult

    if (index.length == q.keyValue.values.length) {
      const item = await this.getItem(container, index, condition)
      result = new ItemQueryResult(item)
    } else {
      const items = await this.getItems(container, index, condition)
      result = new ItemsQueryResult(items)
    }

    // (4) return result
    return result
  }

  private async getItem(
    container: ReadableContainer,
    index: Index,
    condition: QueryCondition
  ): Promise<Item | undefined> {
    // (1) get query key value
    const {partition, discriminator, id} = getKeyValueOfQueryCondition(condition, index)

    // (2) get item
    let item: Item | undefined

    if (partition && discriminator && id) {
      item = await container.getItemUsingCompleteKey(index, partition, discriminator, id)
    } else if (partition && id) {
      item = await container.getItemUsingPartitionAndIdKeys(index, partition, id)
    } else {
      item = await container.getItemUsingIdKey(index, id!)
    }

    // (3) return item
    return postRead(container, item)
  }

  private async getItems(
    container: ReadableContainer,
    index: Index,
    condition: QueryCondition
  ): Promise<Item[]> {
    // (1) get query key value
    const {partition, discriminator} = getKeyValueOfQueryCondition(condition, index)

    // (2) get items
    let items: Item[]

    if (partition && discriminator) {
      items = await container.getItemsUsingPartitionAndDiscriminatorKeys(
        index,
        partition,
        discriminator
      )
    } else {
      items = await container.getItemsUsingPartitionKey(index, partition!)
    }

    // (3) return items
    return postReads(container, items)
  }

  /**
   * Runs a DELETE query on a user container.
   *
   * @param q - The DELETE query to run.
   * @returns The query result.
   */
  async runDeleteQuery(q: DeleteStmt): Promise<QueryResult> {
    // (1) pre
    const {container: c, index} = this.getContainerAndIndexOfQuery(q)

    if (!c.isDeletable()) {
      throw new ModelError(`Container '${c.name}' isn't deletable.`)
    }

    const container = c as DeletableContainer

    // (2) remove item
    const condition = parseWhereClause(q.keyValue)
    await this.removeItem(container, index, condition)

    // (3) return result
    return new ItemQueryResult(undefined)
  }

  private removeItem(
    container: DeletableContainer,
    index: Index,
    condition: QueryCondition
  ): Promise<void> {
    const {partition, discriminator, id} = getKeyValueOfQueryCondition(condition, index)

    if (partition && discriminator && id) {
      return container.removeItemUsingCompleteKey(index, partition, discriminator, id)
    } else if (partition && id) {
      return container.removeItemUsingPartitionAndIdKeys(index, partition, id)
    } else {
      return container.removeItemUsingIdKey(index, id!)
    }
  }

  /**
   * Runs a SET query.
   *
   * @param q - The query to run.
   * @returns The query result.
   *
   * @privateRemarks
   * A shallow copy of the value is performed.
   * The value can be modified in the pipelines or by the connectors
   * and the original value can't be modified by this because it may generate issues.
   */
  async runSetQuery(q: SetStmt): Promise<QueryResult> {
    // (1) pre
    const c = this.getContainerOfQuery(q)

    if (!c.isWritable()) {
      throw new ModelError(`Container '${c.name}' isn't writable.`)
    }

    const container = c as WritableContainer
    const index = container.indexes.primary

    // (2) set item
    let item: Item | undefined = await preWrite(container, {value: q.value})
    const condition = getPseudoQueryConditionOfValue(item.value, container)
    const {partition, discriminator, id} = getKeyValueOfQueryCondition(condition, index)

    if (partition && discriminator && id) {
      item = await container.setItemUsingCompleteKey(index, partition, discriminator, id, item)
    } else if (partition && id) {
      item = await container.setItemUsingPartitionAndIdKeys(index, partition, id, item)
    } else {
      item = await container.setItemUsingIdKey(index, id!, item)
    }

    // (3) return result
    if (q.returning == "*") {
      return new ItemQueryResult(item)
    } else {
      return new ItemQueryResult(undefined, item)
    }
  }
}

/**
 * Builds and returns a query condition for a WHERE clause.
 *
 * @param keyValue - The key value set in the WHERE clause.
 * @returns The query condition.
 */
function parseWhereClause(keyValue: KeyValue): QueryCondition {
  // (1) build condition
  const condition: QueryCondition = {}

  for (const {fieldName, value} of keyValue.values) {
    condition[fieldName] = value
  }

  // (2) return condition
  return condition
}

/**
 * Performs the write-pre operations such as, for example, pipeline
 * or schema check.
 *
 * @param container - Container to query.
 * @param item - Item to set.
 *
 * @returns The item to set, updated if needed.
 */
async function preWrite(container: WritableContainer, item: Item): Promise<Item> {
  return {...item, value: await container.pipelines.preWrite.run({...item.value})}
}

/**
 * Runs the post-operations of an item read such as, for example,
 * the pipeline.
 *
 * @param container - Container read.
 * @param item - Item received.
 *
 * @returns The item processed.
 */
async function postRead(
  container: ReadableContainer,
  item: Item | undefined
): Promise<Item | undefined> {
  if (item) {
    item.value = await container.pipelines.postRead.run(item.value)
  }

  return item
}

/**
 * Runs the post-operations of an items read.
 *
 * @param container - Container read.
 * @param items - Items received.
 *
 * @returns The items processed.
 */
async function postReads(container: ReadableContainer, items: Item[]): Promise<Item[]> {
  for (const item of items) {
    item.value = await container.pipelines.postRead.run(item.value)
  }

  return items
}
