import {Pipeline} from "@vql/pipeline"
import {Encoder, Decoder, JsonEncoder, JsonDecoder} from "@vql/encoder"
import {Index, Indexes} from "../../indexes"
import {Schema} from "../../schemas"
import getSecondsOf from "./getSecondsOf"
import ContainerBase from "../ContainerBase"
import ContainerType from "../ContainerType"
import ReadableContainer from "../ReadableContainer"
import WritableContainer from "../WritableContainer"
import DeletableContainer from "../DeletableContainer"
import QueryKeyFieldValue from "../QueryKeyFieldValue"
import {Connector} from "../../connectors"
import {Item} from "../../items"
import {
  getItemsUsingPartitionAndDiscriminatorKeys,
  getItemsUsingPartitionKey,
  getItemUsingCompleteKey,
  getItemUsingIdKey,
  getItemUsingPartitionAndIdKeys,
  removeItemUsingCompleteKey,
  removeItemUsingIdKey,
  removeItemUsingPartitionAndIdKeys,
  setItemUsingCompleteKey,
  setItemUsingIdKey,
  setItemUsingPartitionAndIdKeys
} from "./ops"

type Pipelines = {
  preWrite: Pipeline
  postRead: Pipeline
}

/**
 * A read-write container.
 */
export default class ReadWriteContainer
  extends ContainerBase
  implements ReadableContainer, WritableContainer, DeletableContainer
{
  /**
   * Encoder to use.
   */
  readonly encoder: Encoder

  /**
   * Decoder to use.
   */
  readonly decoder: Decoder

  /**
   * Default TTL, in seconds, to use when setting an item value.
   */
  readonly defaultTtl: number | undefined

  /**
   * Creates a read-write container with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The container name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param pipelines - The pipelines associated to this container.
   * @param encoder  - The serializer to use.
   * @param decoder - The deserializer to use.
   * @param defaultTtl - Default TTL to use.
   */
  constructor(
    connector: Connector,
    kind: ContainerType,
    name: string,
    schema: Schema | undefined,
    indexes: Indexes,
    pipelines: Pipelines,
    encoder?: Encoder,
    decoder?: Decoder,
    defaultTtl?: string
  )

  /**
   * Creates a read-write container with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The container name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param pipelines - The pipelines associated to this container.
   * @param encoder  - The serializer to use.
   * @param decoder - The deserializer to use.
   * @param defaultTtl - Default TTL to use.
   */
  constructor(
    connector: Connector,
    kind: ContainerType,
    name: string,
    schema: Schema | undefined,
    indexes: Indexes,
    readonly pipelines: Pipelines,
    encoder: Encoder | undefined,
    decoder: Decoder | undefined,
    defaultTtl: string | undefined
  ) {
    super(connector, kind, name, schema, indexes)

    this.encoder = encoder ?? new JsonEncoder()
    this.decoder = decoder ?? new JsonDecoder()

    if (defaultTtl) {
      this.defaultTtl = getSecondsOf(defaultTtl)
    }
  }

  /** @override */
  isReadable(): true {
    return true
  }

  /** @override */
  isWritable(): true {
    return true
  }

  /** @override */
  isDeletable(): true {
    return true
  }

  /** @override */
  getItemUsingIdKey(index: Index, id: QueryKeyFieldValue): Promise<Item | undefined> {
    return getItemUsingIdKey(this, index, id)
  }

  /** @override */
  getItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return getItemUsingPartitionAndIdKeys(this, index, partition, id)
  }

  /** @override */
  getItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return getItemUsingCompleteKey(this, index, partition, discriminator, id)
  }

  /** @override */
  getItemsUsingPartitionAndDiscriminatorKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]> {
    return getItemsUsingPartitionAndDiscriminatorKeys(this, index, partition, discriminator)
  }

  /** @override */
  getItemsUsingPartitionKey(index: Index, partition: QueryKeyFieldValue): Promise<Item[]> {
    return getItemsUsingPartitionKey(this, index, partition)
  }

  /** @override */
  setItemUsingIdKey(index: Index, id: QueryKeyFieldValue, item: Item): Promise<Item> {
    return setItemUsingIdKey(this, index, id, item)
  }

  /** @override */
  setItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return setItemUsingPartitionAndIdKeys(this, index, partition, id, item)
  }

  /** @override */
  setItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return setItemUsingCompleteKey(this, index, partition, discriminator, id, item)
  }

  /** @override */
  removeItemUsingIdKey(index: Index, id: QueryKeyFieldValue): Promise<void> {
    return removeItemUsingIdKey(this, index, id)
  }

  /** @override */
  removeItemUsingPartitionAndIdKeys(
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return removeItemUsingPartitionAndIdKeys(this, index, partition, id)
  }

  /** @override */
  removeItemUsingCompleteKey(
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return removeItemUsingCompleteKey(this, index, partition, discriminator, id)
  }
}
