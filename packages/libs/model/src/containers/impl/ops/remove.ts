import {Index} from "../../../indexes"
import DeletableContainer from "../../DeletableContainer"
import QueryKeyFieldValue from "../../QueryKeyFieldValue"

export function removeItemUsingIdKey(
  container: DeletableContainer,
  index: Index,
  id: QueryKeyFieldValue
): Promise<void> {
  return container.connector.removeTableItemUsingIdKey(container, index, id)
}

export function removeItemUsingPartitionAndIdKeys(
  container: DeletableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  id: QueryKeyFieldValue
): Promise<void> {
  return container.connector.removeTableItemUsingPartitionAndIdKeys(
    container,
    index,
    partition,
    id
  )
}

export function removeItemUsingCompleteKey(
  container: DeletableContainer,
  index: Index,
  partition: QueryKeyFieldValue,
  discriminator: QueryKeyFieldValue,
  id: QueryKeyFieldValue
): Promise<void> {
  return container.connector.removeTableItemUsingCompleteKey(
    container,
    index,
    partition,
    discriminator,
    id
  )
}
