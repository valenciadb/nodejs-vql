import {ReadableContainer, WritableContainer} from "../containers"
import DeletableContainer from "../containers/DeletableContainer"
import {Index} from "../indexes"
import {Item} from "../items"
import QueryKeyFieldValue from "../containers/QueryKeyFieldValue"

/**
 * A connector with a database engine or instance.
 */
export default interface Connector {
  /**
   * Connector name.
   */
  readonly name: string

  /**
   * Checks and returns whether the connector can write on storage.
   */
  canWrite(): boolean

  /**
   * Returns an item from the storage using only the id key.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getTableItemUsingIdKey(
    table: ReadableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns an item from the table storage using the partition and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getTableItemUsingPartitionAndIdKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns an item from the stream storage using the partition and id keys.
   *
   * @param stream - The stream to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getStreamItemUsingPartitionAndIdKeys(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns an item from the storage using the partition, discriminator and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getTableItemUsingCompleteKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns table items from the storage using the partition and discriminator keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   *
   * @returns The items found. if not found, empty list.
   */
  getTableItemsUsingPartitionAndDiscriminatorKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]>

  /**
   * Returns table items from the storage using the partition key.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   *
   * @returns The items found. if not found, empty list.
   */
  getTableItemsUsingPartitionKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]>

  /**
   * Returns stream items from the storage using the partition key.
   *
   * @param stream - The stream to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   *
   * @returns The items found. if not found, empty list.
   */
  getStreamItemsUsingPartitionKey(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]>

  /**
   * Removes an item from the storage using only the id key.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param id - The id key to use.
   */
  removeTableItemUsingIdKey(
    table: DeletableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<void>

  /**
   * Removes an item from the storage using the partition and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   */
  removeTableItemUsingPartitionAndIdKeys(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void>

  /**
   * Removes an item from the storage using the partition, discriminator and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   */
  removeTableItemUsingCompleteKey(
    container: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void>

  /**
   * Sets an item into the storage keeping in mind only the id key.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setTableItemUsingIdKey(
    table: WritableContainer,
    index: Index,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>

  /**
   * Sets a table item into the storage using the partition and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setTableItemUsingPartitionAndIdKeys(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>

  /**
   * Sets a stream item into the storage using the partition and id keys.
   *
   * @param stream - The stream to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setStreamItemUsingPartitionAndIdKeys(
    stream: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>

  /**
   * Sets an item into the storage using the partition, discriminator and id keys.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setTableItemUsingCompleteKey(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>
}
