import {Pipeline} from "@vql/pipeline"
import {Decoder} from "@vql/encoder"
import {Index} from "../indexes"
import {Item} from "../items"
import Container from "./Container"
import QueryKeyFieldValue from "./QueryKeyFieldValue"

/**
 * A container that can be read.
 */
interface ReadableContainer extends Container {
  /**
   * The deserializer to use.
   */
  readonly decoder: Decoder

  /**
   * The pipeline to run after reading.
   *
   * @remarks
   * The readable containers always contain this pipeline
   * for casting the data types of the key fields.
   */
  readonly pipelines: {postRead: Pipeline}

  /**
   * Returns an item from the storage using only the id key.
   *
   * @param index - The index to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getItemUsingIdKey(index: Index, id: QueryKeyFieldValue): Promise<Item | undefined>

  /**
   * Returns an item from the storage using the partition and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns an item from the storage using the partition, discriminator and id keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   * @param id - The id key to use.
   *
   * @returns The item or undefined if not found.
   */
  getItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined>

  /**
   * Returns items from the storage using the partition and discriminator keys.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   * @param discriminator - The discriminator key to use.
   *
   * @returns The items found. if not found, empty list.
   */
  getItemsUsingPartitionAndDiscriminatorKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]>

  /**
   * Returns items from the storage using the partition key.
   *
   * @param index - The index to use.
   * @param partition - The partition key to use.
   *
   * @returns The items found. if not found, empty list.
   */
  getItemsUsingPartitionKey(index: Index, partition: QueryKeyFieldValue): Promise<Item[]>

  /**
   * Returns that the container is readable.
   */
  isReadable(): true
}

export default ReadableContainer
