import {Index} from "../../../indexes"
import {Item} from "../../../items"
import ContainerType from "../../ContainerType"
import WritableContainer from "../../WritableContainer"
import QueryKeyFieldValue from "../../QueryKeyFieldValue"

export function setItemUsingIdKey(
  container: WritableContainer,
  index: Index,
  id: QueryKeyFieldValue,
  item: Item
): Promise<Item> {
  return container.connector.setTableItemUsingIdKey(container, index, id, item)
}

export function setItemUsingPartitionAndIdKeys(
  container: WritableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  id: QueryKeyFieldValue,
  item: Item
): Promise<Item> {
  const {connector: conn} = container

  if (container.kind == ContainerType.stream) {
    return conn.setStreamItemUsingPartitionAndIdKeys(container, index, partition, id, item)
  } else {
    return conn.setTableItemUsingPartitionAndIdKeys(container, index, partition, id, item)
  }
}

export function setItemUsingCompleteKey(
  container: WritableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  discriminator: QueryKeyFieldValue,
  id: QueryKeyFieldValue,
  item: Item
): Promise<Item> {
  return container.connector.setTableItemUsingCompleteKey(
    container,
    index,
    partition,
    discriminator,
    id,
    item
  )
}
