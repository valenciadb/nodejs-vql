import {Index} from "../../../indexes"
import {Item} from "../../../items"
import ContainerType from "../../ContainerType"
import ReadableContainer from "../../ReadableContainer"
import QueryKeyFieldValue from "../../QueryKeyFieldValue"

export function getItemUsingIdKey(
  container: ReadableContainer,
  index: Index,
  id: QueryKeyFieldValue
): Promise<Item | undefined> {
  return container.connector.getTableItemUsingIdKey(container, index, id)
}

export function getItemUsingPartitionAndIdKeys(
  container: ReadableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  id: QueryKeyFieldValue
): Promise<Item | undefined> {
  const {connector: conn} = container

  if (container.kind == ContainerType.stream) {
    return conn.getStreamItemUsingPartitionAndIdKeys(container, index, partition, id)
  } else {
    return conn.getTableItemUsingPartitionAndIdKeys(container, index, partition, id)
  }
}

export function getItemUsingCompleteKey(
  container: ReadableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  discriminator: QueryKeyFieldValue,
  id: QueryKeyFieldValue
): Promise<Item | undefined> {
  return container.connector.getTableItemUsingCompleteKey(
    container,
    index,
    partition,
    discriminator,
    id
  )
}

export function getItemsUsingPartitionAndDiscriminatorKeys(
  container: ReadableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  discriminator: QueryKeyFieldValue
): Promise<Item[]> {
  return container.connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
    container,
    index,
    partition,
    discriminator
  )
}

export function getItemsUsingPartitionKey(
  container: ReadableContainer,
  index: Index,
  partition: QueryKeyFieldValue
): Promise<Item[]> {
  const {connector: conn} = container

  if (container.kind == ContainerType.stream) {
    return conn.getStreamItemsUsingPartitionKey(container, index, partition)
  } else {
    return conn.getTableItemsUsingPartitionKey(container, index, partition)
  }
}
