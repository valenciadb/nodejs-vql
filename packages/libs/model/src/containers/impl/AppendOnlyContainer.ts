import {Encoder, JsonEncoder} from "@vql/encoder"
import {Pipeline} from "@vql/pipeline"
import {Connector} from "../../connectors"
import {Index, Indexes} from "../../indexes"
import {Item} from "../../items"
import {Schema} from "../../schemas"
import ContainerBase from "../ContainerBase"
import ContainerType from "../ContainerType"
import WritableContainer from "../WritableContainer"
import getSecondsOf from "./getSecondsOf"
import QueryKeyFieldValue from "../QueryKeyFieldValue"
import {
  setItemUsingCompleteKey,
  setItemUsingIdKey,
  setItemUsingPartitionAndIdKeys
} from "./ops"

type Pipelines = {preWrite: Pipeline}

/**
 * An append-only container.
 */
export default class AppendOnlyContainer extends ContainerBase implements WritableContainer {
  /**
   * Encoder to use.
   */
  readonly encoder: Encoder

  /**
   * Default TTL, in seconds, to use when setting an item value.
   */
  readonly defaultTtl: number | undefined

  /**
   * Creates an append-only table with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param pipelines - The pipelines associated to the container.
   * @param encoder  - The serializer to use.
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
    defaultTtl?: string
  )

  /**
   * Creates an append-only table with the given arguments.
   *
   * @param connector - Connector for performing the storage operations.
   * @param kind - The container type.
   * @param name - The name.
   * @param schema - The schema associated.
   * @param indexes - The indexes.
   * @param pipelines - The pipelines associated to this container.
   * @param encoder  - The serializer to use.
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
    defaultTtl: string | undefined
  ) {
    super(connector, kind, name, schema, indexes)

    this.encoder = encoder ?? new JsonEncoder()

    if (defaultTtl) {
      this.defaultTtl = getSecondsOf(defaultTtl)
    }
  }

  /** @override */
  isWritable(): true {
    return true
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
}
