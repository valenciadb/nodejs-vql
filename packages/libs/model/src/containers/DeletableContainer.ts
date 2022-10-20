import {Index} from "../indexes"
import Container from "./Container"
import QueryKeyFieldValue from "./QueryKeyFieldValue"

/**
 * A container that accepts delete operations.
 */
interface DeletableContainer extends Container {
  /**
   * Removes an item from the storage using only the id key.
   *
   * @param index - The index to use.
   * @param id - The id key to use.
   */
  removeItemUsingIdKey(index: Index, id: QueryKeyFieldValue): Promise<void>

  /**
   * Removes an item from the storage using the partition and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   */
  removeItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void>

  /**
   * Removes an item from the storage using the partition, discriminator and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   */
  removeItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void>

  /**
   * Returns that the container is deletable.
   */
  isDeletable(): true
}

export default DeletableContainer
