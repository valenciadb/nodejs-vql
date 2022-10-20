import {Connector} from "../connectors"
import {Indexes} from "../indexes"
import {Schema} from "../schemas"
import ContainerType from "./ContainerType"

/**
 * A container of items.
 */
export default interface Container {
  /**
   * Connector to use for accessing this container.
   */
  readonly connector: Connector

  /**
   * The kind of container.
   */
  readonly kind: ContainerType

  /**
   * The container name.
   */
  readonly name: string

  /**
   * The schema to comply this container.
   */
  readonly schema: Schema | undefined

  /**
   * The indexes of this table.
   */
  readonly indexes: Indexes

  /**
   * Checks and returns whether the container is readable.
   */
  isReadable(): boolean

  /**
   * Checks and returns whether the container is writable.
   */
  isWritable(): boolean

  /**
   * Checks and returns whether the container is deletable.
   */
  isDeletable(): boolean
}
