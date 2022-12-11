import {SkynetClient} from "@skynetlabs/skynet-nodejs"
import {Item, QueryKeyFieldValue} from "@vql/core"
import {Index, ReadableContainer, Container, KeyFieldDataType} from "@vql/model"
import SiaConnector from "../SiaConnector"
import SiaFileConnectorOptions from "./SiaFileConnectorOptions"

/**
 * A Sia files connector.
 *
 * @remarks
 * With this connector, a directory uploaded on the Sia network
 * is considered a database.
 * Every item is into one of these path patterns:
 *
 * - dir/table/id (table w/ simple key)
 * - dir/table/partition/id (table w/ composite key composed of partition+id)
 * - dir/table/partition/discriminator/id (table w/ complete composite key)
 *
 * Only read-only operations allowed.
 */
export default class SiaFileConnector extends SiaConnector {
  /**
   * The base skylink where the database starts.
   */
  readonly baseSkylink: string

  /**
   * Creates a Sia files connector with the given arguments.
   *
   * @param name - Connector name.
   * @param options - Options to use.
   * @param skynet - Skynet client to use.
   */
  constructor(name: string, options: SiaFileConnectorOptions, skynet?: SkynetClient) {
    super(name, options, skynet)

    this.baseSkylink = options.baseSkylink
  }

  /** @override */
  itemKey(container: Container, idKey: string): string {
    return this.baseSkylink + this.separator + super.itemKey(container, idKey)
  }

  /**
   * Gets and returns an item from the storage.
   *
   * @param table - The table to query.
   * @param id - The id key value to use.
   *
   * @returns The item if found; otherwise, undefined.
   */
  private async getItemFromStorage(
    table: ReadableContainer,
    ...id: KeyFieldDataType[]
  ): Promise<Item | undefined> {
    // (1) get item
    let item: Item | undefined

    try {
      const filePath = this.itemKey(table, this.idKey(...id))
      const data = await this.skynet.downloadData(filePath)

      if (data) {
        item = {value: await table.decoder.decode(data.toString())}
      }
    } catch (e) {
      /* c8 ignore next 8 */
      if (
        !(
          e instanceof Error &&
          (e.message.includes("status code 404") || e.message.includes("status code 401"))
        )
      ) {
        throw e
      }
    }

    // (2) return item
    return item
  }

  /** @override */
  getTableItemUsingIdKey(
    table: ReadableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getItemFromStorage(table, id.value)
  }

  /** @override */
  getTableItemUsingPartitionAndIdKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getItemFromStorage(table, partition.value, id.value)
  }

  /** @override */
  getTableItemUsingCompleteKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    return this.getItemFromStorage(table, partition.value, discriminator.value, id.value)
  }

  /**
   * Gets and returns several items from the storage.
   *
   * @param table - The table to query.
   * @param id - The id key value to use.
   *
   * @returns The items if found or empty list if no item found.
   *
   * @privateRemarks
   * metadata.subfiles is as follows:
   * {[filePath: string]: {filename: string, contentType: string, len: number}}[].
   */
  private async getItemsFromStorage(
    table: ReadableContainer,
    ...id: KeyFieldDataType[]
  ): Promise<Item[]> {
    // (1) get items
    const items: Item[] = []
    const prefix = new RegExp(`^${table.name}${this.separator}${this.idKey(...id)}`)

    const {metadata} = await this.skynet.getMetadata(this.baseSkylink)
    for (const filePath of Object.keys(metadata.subfiles)) {
      if (prefix.test(filePath)) {
        const segments = filePath.split("/")
        const kv = Array.from(id).concat(segments.slice(id.length + 1))
        const item = await this.getItemFromStorage(table, ...kv)
        if (item) {
          items.push(item)
        }
      }
    }

    // (2) return items
    return items
  }

  /** @override */
  getTableItemsUsingPartitionAndDiscriminatorKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]> {
    return this.getItemsFromStorage(table, partition.value, discriminator.value)
  }

  /** @override */
  getTableItemsUsingPartitionKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    return this.getItemsFromStorage(table, partition.value)
  }
}
