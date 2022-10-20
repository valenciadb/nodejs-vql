import {ConnectorBase, ReadableContainer} from "@vql/connector"
import {
  DeletableContainer,
  Index,
  Item,
  ItemValue,
  KeyFieldDataType,
  QueryKeyFieldValue,
  WritableContainer
} from "@vql/model"
import {RedisClientType} from "redis"
import RedisConnectorOptions from "./RedisConnectorOptions"
import RedisStreamsConf from "./RedisStreamsConf"

/**
 * A Redis connector.
 */
export default abstract class RedisConnector extends ConnectorBase {
  /**
   * The Redis client to use.
   *
   * @remarks
   * The client must be already connected when passed in the constructor.
   */
  readonly redis: RedisClientType

  /**
   * Consumer group configuration if used.
   */
  readonly streamsConf?: RedisStreamsConf

  /**
   * Creates a Redis connector with the given arguments.
   *
   * @param name - Connector name.
   * @param options - Connection options to use.
   */
  protected constructor(readonly name: string, options: RedisConnectorOptions) {
    super(name, options.separator ?? "/")
    this.redis = options.client
    this.streamsConf = options.streams
  }

  /** @override */
  canWrite(): boolean {
    return true
  }

  /** @override */
  getTableItemUsingIdKey(
    table: ReadableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getTableItemFromStorage(table, id.value)
  }

  /** @override */
  getTableItemUsingPartitionAndIdKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getTableItemFromStorage(table, partition.value, id.value)
  }

  /** @override */
  getTableItemUsingCompleteKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getTableItemFromStorage(table, partition.value, discriminator.value, id.value)
  }

  /** @override */
  getTableItemsUsingPartitionKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    return this.getTableItemsFromStorage(table, partition.value)
  }

  /** @override */
  getTableItemsUsingPartitionAndDiscriminatorKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]> {
    return this.getTableItemsFromStorage(table, partition.value, discriminator.value)
  }

  /** @override */
  removeTableItemUsingIdKey(
    table: DeletableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(table, id.value)
  }

  /** @override */
  removeTableItemUsingPartitionAndIdKeys(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(table, partition.value, id.value)
  }

  /** @override */
  removeTableItemUsingCompleteKey(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(table, partition.value, discriminator.value, id.value)
  }

  /** @override */
  setTableItemUsingIdKey(
    table: WritableContainer,
    index: Index,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.setItemIntoTable(table, item, id.value)
  }

  /** @override */
  setTableItemUsingPartitionAndIdKeys(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.setItemIntoTable(table, item, partition.value, id.value)
  }

  /** @override */
  setTableItemUsingCompleteKey(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.setItemIntoTable(table, item, partition.value, discriminator.value, id.value)
  }

  /** @override */
  getStreamItemUsingPartitionAndIdKeys(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getStreamItemFromStorage(
      stream,
      partition.value.toString(),
      id.value.toString()
    )
  }

  /** @override */
  getStreamItemsUsingPartitionKey(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    return this.getStreamItemsFromStorage(stream, partition.value.toString())
  }

  /** @override */
  setStreamItemUsingPartitionAndIdKeys(
    stream: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.appendItemToStream(
      stream,
      item,
      partition.value.toString(),
      id.value.toString()
    )
  }

  /**
   * Gets and returns a table item from the storage.
   *
   * @param table - The table to query.
   * @param id - The id value to use.
   *
   * @returns The item if found; otherwise, undefined.
   */
  protected abstract getTableItemFromStorage(
    table: ReadableContainer,
    ...id: KeyFieldDataType[]
  ): Promise<Item | undefined>

  /**
   * Gets and returns the items using a given prefix.
   *
   * @param table - Table to query.
   * @param prefix - The key prefix to use.
   *
   * @returns A list with the items.
   */
  protected abstract getTableItemsFromStorage(
    table: ReadableContainer,
    ...prefix: KeyFieldDataType[]
  ): Promise<Item[]>

  /**
   * Removes an item from the storage.
   *
   * @param table - The table to query.
   * @param id - The id to use.
   */
  protected async removeItemFromStorage(
    table: DeletableContainer,
    ...id: KeyFieldDataType[]
  ): Promise<void> {
    await this.redis.DEL(this.itemKey(table, this.idKey(...id)))
  }

  /**
   * Sets an item into the storage.
   *
   * @param table - The table to query.
   * @param item - The item to set.
   * @param id - The id to use.
   */
  protected abstract setItemIntoTable(
    table: WritableContainer,
    {value}: Item,
    ...id: KeyFieldDataType[]
  ): Promise<Item>

  /**
   * Sets the partition and id key from stream item key.
   */
  private setPartitionAndIdKeysOfStreamItemValue(
    value: ItemValue,
    index: Index,
    entryId: string
  ): ItemValue {
    const [partitionKey, idKey] = entryId.split("-")
    const [partitionKeyFieldName, idKeyFieldName] = index.keyFieldNames
    value = {...value, [partitionKeyFieldName]: partitionKey, [idKeyFieldName]: idKey}
    return value
  }

  /**
   * Gets and returns a stream item from the storage.
   *
   * @param stream - The stream to query.
   * @param ts - The partition key value, that is, the timestamp.
   * @param seq - The id key value, that is, the sequence number.
   *
   * @returns The item if found; otherwise, undefined.
   *
   * @remarks
   * If consumer group enabled and 'ts' set to '*', XREADGROUP used,
   * needing 'seq' to be '0' or '*';
   * otherwise, XRANGE used.
   */
  private async getStreamItemFromStorage(
    stream: ReadableContainer,
    ts: string,
    seq: string
  ): Promise<Item | undefined> {
    // (1) get item
    let item: Item | undefined
    let entry: {id: string; message: Record<string, string>} | undefined

    if (this.streamsConf && ts == "*") {
      const {group, consumer} = this.streamsConf
      const id = seq == "*" ? ">" : seq
      const resp = await this.redis.XREADGROUP(
        group,
        consumer,
        {key: stream.name, id},
        {COUNT: 1}
      )

      if (resp && resp.length > 0) {
        const {id, message} = resp[0].messages[0]
        entry = {id, message}
      }
    } else {
      const key = `${ts}-${seq}`
      const resp = await this.redis.XRANGE(stream.name, key, key)

      if (resp.length > 0) {
        entry = {id: key, message: resp[0].message}
      }
    }

    if (entry) {
      item = {value: JSON.parse(entry.message.value)}
      item.value = this.setPartitionAndIdKeysOfStreamItemValue(
        item.value,
        stream.indexes.primary,
        entry.id
      )
    }

    // // (2) return item
    return item
  }

  /**
   * Gets and returns several stream items from the storage.
   *
   * @param stream - The stream to query.
   * @param ts - The partition value to use, that is, the ts.
   *
   * @returns The items found; empty list if not found.
   *
   * @remarks
   * When consumer group strategy, if 'ts' is '*', COUNT will be set to
   * streamsConf.count; if this option unset, 1 will be used.
   *
   * When standalone consumer strategy, all the items into 'ts' will be returned.
   */
  private async getStreamItemsFromStorage(
    stream: ReadableContainer,
    ts: string
  ): Promise<Item[]> {
    // (1) get items
    const items: Item[] = []
    let entries: {id: string; message: Record<string, string>}[] = []

    if (this.streamsConf && ts == "*") {
      const {group, consumer, count} = this.streamsConf
      const resp = await this.redis.XREADGROUP(
        group,
        consumer,
        {key: stream.name, id: ">"},
        {COUNT: count ?? 1}
      )

      if (resp && resp.length > 0) {
        entries = resp[0].messages
      }
    } else {
      const key = ts
      const resp = await this.redis.XRANGE(stream.name, key, "(" + (parseInt(key) + 1))

      if (resp.length > 0) {
        entries = resp
      }
    }

    // (2) transform entries to our format
    for (const entry of entries) {
      const item = {value: JSON.parse(entry.message.value)}
      item.value = this.setPartitionAndIdKeysOfStreamItemValue(
        item.value,
        stream.indexes.primary,
        entry.id
      )

      items.push(item)
    }

    // (3) return items
    return items
  }

  /**
   * Appends an item to a stream.
   *
   * @param stream - The stream where to add.
   * @param item - The item to add.
   * @param ts - The timestamp to use.
   * @param seq - The sequence number to use.
   *
   * @remarks
   * When partition is *, the sequence is always *, independently of its value;
   * so, the item is appended to the stream with *.
   * When partition contains a value, the sequence can be * or an index.
   */
  private async appendItemToStream(
    stream: WritableContainer,
    {value}: Item,
    ts: string,
    seq: string
  ): Promise<Item> {
    // (1) pre: determine entry id
    let entryId: string

    value = {...value}

    if (ts == "*") {
      delete value.ts
      delete value.seq

      entryId = "*"
    } else {
      entryId = ts

      if (seq == "*") {
        delete value.seq
        entryId += "-*"
      } else {
        entryId += "-" + seq
      }
    }

    // (2) append
    const entry = JSON.stringify(value)
    entryId = await this.redis.XADD(stream.name, entryId, {value: entry})

    // (3) set partition and id key fields attending entryId received
    value = this.setPartitionAndIdKeysOfStreamItemValue(value, stream.indexes.primary, entryId)

    // (4) return item
    return {value}
  }
}
