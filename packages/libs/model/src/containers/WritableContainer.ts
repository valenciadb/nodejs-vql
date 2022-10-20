import {Pipeline} from "@vql/pipeline"
import {Encoder} from "@vql/encoder"
import {Index} from "../indexes"
import {Item} from "../items"
import Container from "./Container"
import QueryKeyFieldValue from "./QueryKeyFieldValue"

/**
 * A container that can be written.
 */
interface WritableContainer extends Container {
  /**
   * The deserializer to use.
   */
  readonly encoder: Encoder

  /**
   * The pipelines associated to the container.
   *
   * @remarks
   * The writable containers always contain this pipeline
   * for checking the data types of the key fields.
   */
  readonly pipelines: {preWrite: Pipeline}

  /**
   * Default TTL, in seconds, to use when setting an item value.
   */
  readonly defaultTtl?: number

  /**
   * Sets an item into the storage keeping in mind only the id key.
   *
   * @param index - The index to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setItemUsingIdKey(index: Index, id: QueryKeyFieldValue, item: Item): Promise<Item>

  /**
   * Sets an item into the storage using the partition and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>

  /**
   * Sets an item into the storage using the partition, discriminator and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   * @param item - The item to set.
   */
  setItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item>

  /**
   * Returns that the container is writable.
   */
  isWritable(): true
}

export default WritableContainer
