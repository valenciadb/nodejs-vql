import path from "node:path"
import fs from "node:fs/promises"
import fsx from "fs-extra"
import {ConnectorBase, QueryKeyFieldValue} from "@vql/connector"
import {
  Index,
  Item,
  ReadableContainer,
  Container,
  WritableContainer,
  DeletableContainer,
  KeyFieldDataType
} from "@vql/model"

import FsConnectorOptions from "./FsConnectorOptions"

/**
 * A local filesystem connector.
 *
 * @remarks
 * With this connector, a local directory is considered a database.
 * Every item is dir/table/key or dir/table/partition/id.
 */
export default class FsConnector extends ConnectorBase {
  /**
   * The base dir path where the database starts.
   */
  readonly baseDirPath: string

  /**
   * The filesystem object to use.
   */
  readonly fs: typeof fs

  /**
   * The filesystem-extra object to use.
   */
  readonly fsx: typeof fsx

  /**
   * Creates a filesystem connector with the given arguments.
   *
   * @param name - Connector name.
   * @param options - Options to use.
   * @param fsp - fs object to use, similar to fs/promises.
   * @param fsxp - fsx object to use, similar to fs-extra.
   */
  constructor(name: string, options: FsConnectorOptions, fsp?: typeof fs, fsxp?: typeof fsx) {
    super(name, "/")

    this.baseDirPath = options.baseDirPath
    this.fs = fsp ?? fs
    this.fsx = fsxp ?? fsx
  }

  /** @override */
  canWrite(): boolean {
    return true
  }

  /** @override */
  itemKey(container: Container, idKey: string): string {
    return path.join(this.baseDirPath, super.itemKey(container, idKey))
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
    const {fs} = this
    let item: Item | undefined

    try {
      const filePath = this.itemKey(table, this.idKey(...id))
      const data = await fs.readFile(filePath, "utf8")

      if (data) {
        item = {value: await table.decoder.decode(data)}
      }
    } catch (e) {
      /* c8 ignore next 3 */
      if (!(e instanceof Error && e.message.includes("no such file or directory"))) {
        throw e
      }
    }

    // (2) return the item
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
   * Gets and returns the items using the partition key and a composite key with
   * two fields (partition and id).
   *
   * @param table - The table to query.
   * @param index - The composite index with two fields.
   * @param partition - The partition key to use.
   *
   * @returns The items found. If no item found, an empty list is returned.
   */
  private async getItemsUsingPartitionKey2(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    // (1) get items
    const {fs} = this
    const items: Item[] = []
    const dirPath = this.itemKey(table, this.idKey(partition.value))

    try {
      for (const entry of await fs.readdir(dirPath, {withFileTypes: true})) {
        if (entry.isFile()) {
          const id = {field: index.keyFields[1].name, value: entry.name}
          const item = await this.getTableItemUsingPartitionAndIdKeys(
            table,
            index,
            partition,
            id
          )

          items.push(item!)
        }
      }
    } catch (e) {
      /* c8 ignore next 3 */
      if (!(e instanceof Error && e.message.includes("no such file or directory"))) {
        throw e
      }
    }

    // (2) return items
    return items
  }

  /**
   * Gets and returns the items using only the partition key,
   * when table contains a composite key with three fields
   * (partition, discriminator and id).
   *
   * @param table - The table to query.
   * @param index - The composite index with two fields.
   * @param partition - The partition key to use.
   *
   * @returns The items found. If no item found, an empty list is returned.
   */
  private async getItemsUsingPartitionKey3(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    // (1) get items
    const {fs} = this
    const items: Item[] = []

    try {
      const dirPath = this.itemKey(table, this.idKey(partition.value))

      for (const entry of await fs.readdir(dirPath, {withFileTypes: true})) {
        if (entry.isDirectory()) {
          const itemsToAdd = await this.getTableItemsUsingPartitionAndDiscriminatorKeys(
            table,
            index,
            partition,
            {field: index.keyFields[1].name, value: entry.name}
          )

          items.push(...itemsToAdd)
        }
      }
    } catch (e) {
      /* c8 ignore next 3 */
      if (!(e instanceof Error && e.message.includes("no such file or directory"))) {
        throw e
      }
    }

    // (2) return items
    return items
  }

  /** @override */
  getTableItemsUsingPartitionKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    if (index.length == 2) {
      return this.getItemsUsingPartitionKey2(table, index, partition)
    } else {
      return this.getItemsUsingPartitionKey3(table, index, partition)
    }
  }

  /** @override */
  async getTableItemsUsingPartitionAndDiscriminatorKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]> {
    // (1) get items
    const {fs} = this
    const items: Item[] = []

    try {
      const dirPath = this.itemKey(table, this.idKey(partition.value, discriminator.value))

      for (const entry of await fs.readdir(dirPath, {withFileTypes: true})) {
        if (entry.isFile()) {
          const item = await this.getTableItemUsingCompleteKey(
            table,
            index,
            partition,
            discriminator,
            {field: index.keyFields[2].name, value: entry.name}
          )

          if (item) {
            items.push(item)
          }
        }
      }
    } catch (e) {
      /* c8 ignore next 3 */
      if (!(e instanceof Error && e.message.includes("no such file or directory"))) {
        throw e
      }
    }

    // (2) return items
    return items
  }

  /**
   * Removes an item from the storage.
   *
   * @param table - The table to query.
   * @param index - The index to use.
   * @param id - The id key value to use.
   */
  private async removeItemFromStorage(
    table: DeletableContainer,
    index: Index,
    ...id: KeyFieldDataType[]
  ): Promise<void> {
    try {
      const {fs} = this
      const filePath = this.itemKey(table, this.idKey(...id))
      const stats = await fs.stat(filePath)

      if (stats.isFile()) {
        return fs.unlink(filePath)
      }
    } catch (e) {
      /* c8 ignore next 3 */
      if (!(e instanceof Error && e.message.includes("no such file or directory"))) {
        throw e
      }
    }
  }

  /** @override */
  removeTableItemUsingIdKey(
    table: DeletableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(table, index, id.value)
  }

  /** @override */
  removeTableItemUsingPartitionAndIdKeys(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(table, index, partition.value, id.value)
  }

  /** @override */
  removeTableItemUsingCompleteKey(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    return this.removeItemFromStorage(
      table,
      index,
      partition.value,
      discriminator.value,
      id.value
    )
  }

  /**
   * Sets an item into the storage.
   *
   * @param table - The table to query.
   * @param item - The item to set.
   * @param id - The id key to use.
   */
  private async setItemIntoStorage(
    table: WritableContainer,
    {value}: Item,
    ...id: KeyFieldDataType[]
  ): Promise<Item> {
    // (1) save
    const {fs, fsx} = this
    const content = value
    const filePath = this.itemKey(table, this.idKey(...id))

    await fsx.ensureDir(path.dirname(filePath))
    await fs.writeFile(filePath, await table.encoder.encode(content))

    // (2) return item
    return {value}
  }

  /** @override */
  setTableItemUsingIdKey(
    table: WritableContainer,
    index: Index,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.setItemIntoStorage(table, item, id.value)
  }

  /** @override */
  setTableItemUsingPartitionAndIdKeys(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    return this.setItemIntoStorage(table, item, partition.value, id.value)
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
    return this.setItemIntoStorage(table, item, partition.value, discriminator.value, id.value)
  }
}
