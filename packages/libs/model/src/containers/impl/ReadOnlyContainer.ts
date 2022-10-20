import {Decoder, JsonDecoder} from "@vql/encoder"
import {Pipeline} from "@vql/pipeline"
import {Connector} from "../../connectors"
import {Index, Indexes} from "../../indexes"
import {Item} from "../../items"
import {Schema} from "../../schemas"
import ContainerBase from "../ContainerBase"
import ContainerType from "../ContainerType"
import ReadableContainer from "../ReadableContainer"
import QueryKeyFieldValue from "../QueryKeyFieldValue"
import {
  getItemsUsingPartitionAndDiscriminatorKeys,
  getItemsUsingPartitionKey,
  getItemUsingCompleteKey,
  getItemUsingIdKey,
  getItemUsingPartitionAndIdKeys
} from "./ops"

type Pipelines = {postRead: Pipeline}

/**
 * A read-only container.
 */
export default class ReadOnlyContainer extends ContainerBase implements ReadableContainer {
  /**
   * Decoder to use.
   */
  readonly decoder: Decoder

  /**
   * Creates a read-only table with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The container name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param pipelines - Pipelines associated to this container.
   * @param decoder - The deserializer to use.
   */
  constructor(
    connector: Connector,
    kind: ContainerType,
    name: string,
    schema: Schema | undefined,
    indexes: Indexes,
    pipelines: Pipelines,
    decoder?: Decoder
  )

  /**
   * Creates a read-only table with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The container name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param decoder - The deserializer to use.
   * @param pipelines - The pipelines associated to this container.
   */
  constructor(
    connector: Connector,
    kind: ContainerType,
    name: string,
    schema: Schema | undefined,
    indexes: Indexes,
    readonly pipelines: Pipelines,
    decoder: Decoder | undefined
  ) {
    super(connector, kind, name, schema, indexes)

    this.decoder = decoder ?? new JsonDecoder()
  }

  /** @override */
  isReadable(): true {
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
}
