import {
  Connector,
  Container,
  DeletableContainer,
  Index,
  Item,
  KeyFieldDataType,
  QueryKeyFieldValue,
  ReadableContainer,
  WritableContainer
} from "@vql/model"
import UnsupportedMethodError from "./UnsupportedMethodError"

/**
 * A base for connectors.
 */
export default abstract class ConnectorBase implements Connector {
  /**
   * Creates a connector with the given arguments.
   *
   * @param name - Connector name.
   * @param separator - Separator to use in the keys.
   */
  protected constructor(readonly name: string, readonly separator: string) {}

  /* c8 ignore start */
  canWrite(): boolean {
    return false
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getTableItemUsingIdKey(
    table: ReadableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    throw new UnsupportedMethodError("getItemFromTableUsingIdKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getTableItemUsingPartitionAndIdKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    throw new UnsupportedMethodError("getTableItemUsingPartitionAndIdKeys() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getStreamItemUsingPartitionAndIdKeys(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    throw new UnsupportedMethodError("getStreamItemUsingPartitionAndIdKeys() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getTableItemUsingCompleteKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<Item | undefined> {
    throw new UnsupportedMethodError("getTableItemUsingCompleteKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getTableItemsUsingPartitionAndDiscriminatorKeys(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue
  ): Promise<Item[]> {
    throw new UnsupportedMethodError(
      "getTableItemsUsingPartitionAndDiscriminatorKeys() not supported."
    )
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getTableItemsUsingPartitionKey(
    table: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    throw new UnsupportedMethodError("getTableItemsUsingPartitionKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  getStreamItemsUsingPartitionKey(
    stream: ReadableContainer,
    index: Index,
    partition: QueryKeyFieldValue
  ): Promise<Item[]> {
    throw new UnsupportedMethodError("getStreamItemsUsingPartitionKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  removeTableItemUsingIdKey(
    table: DeletableContainer,
    index: Index,
    id: QueryKeyFieldValue
  ): Promise<void> {
    throw new UnsupportedMethodError("removeItemUsingIdKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  removeTableItemUsingPartitionAndIdKeys(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    throw new UnsupportedMethodError("removeItemUsingPartitionAndIdKeys() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  removeTableItemUsingCompleteKey(
    table: DeletableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue
  ): Promise<void> {
    throw new UnsupportedMethodError("removeItemUsingCompleteKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  setTableItemUsingIdKey(
    table: WritableContainer,
    index: Index,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    throw new UnsupportedMethodError("setItemUsingIdKey() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  setTableItemUsingPartitionAndIdKeys(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    throw new UnsupportedMethodError("setTableItemUsingPartitionAndIdKeys() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  setStreamItemUsingPartitionAndIdKeys(
    stream: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    throw new UnsupportedMethodError("setStreamItemUsingPartitionAndIdKeys() not supported.")
  }
  /* c8 ignore stop */

  /* c8 ignore start */
  setTableItemUsingCompleteKey(
    table: WritableContainer,
    index: Index,
    partition: QueryKeyFieldValue,
    discriminator: QueryKeyFieldValue,
    id: QueryKeyFieldValue,
    item: Item
  ): Promise<Item> {
    throw new UnsupportedMethodError("setTableItemUsingCompleteKey() not supported.")
  }
  /* c8 ignore stop */

  /**
   * Creates an identifier key using a given key value.
   *
   * @param keyValue - The key value to use.
   *
   * @returns The identifier.
   */
  idKey(...keyValue: KeyFieldDataType[]): string {
    return keyValue.join(this.separator)
  }

  /**
   * Generates the key of an item from its container name and its key value.
   *
   * @param container - The container to query.
   * @param idKey - The id key.
   *
   * @returns The item key.
   */
  itemKey(container: Container, idKey: string): string {
    return `${container.name}${this.separator}${idKey}`
  }
}
