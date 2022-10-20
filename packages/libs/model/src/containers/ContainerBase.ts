import {Connector} from "../connectors"
import {ModelError} from "../errors"
import {Indexes} from "../indexes"
import {Schema} from "../schemas"
import Container from "./Container"
import ContainerType from "./ContainerType"

/**
 * A container of items.
 */
export default abstract class ContainerBase implements Container {
  /**
   * Creates a container with the given arguments.
   *
   * @param connector - Connector for performing its storage operations.
   * @param kind - The container type.
   * @param name - The container name.
   * @param schema - The schema to comply.
   * @param indexes - The indexes associated to this container.
   */
  protected constructor(
    readonly connector: Connector,
    readonly kind: ContainerType,
    readonly name: string,
    readonly schema: Schema | undefined,
    readonly indexes: Indexes
  ) {
    if (this.indexes.length == 0) {
      throw new ModelError("Data container must contain at least the primary index.")
    }
  }

  /** @override */
  /* c8 ignore start */
  isReadable(): boolean {
    return false
  }
  /* c8 ignore stop */

  /** @override */
  /* c8 ignore start */
  isWritable(): boolean {
    return false
  }
  /* c8 ignore stop */

  /** @override */
  /* c8 ignore start */
  isDeletable(): boolean {
    return false
  }
  /* c8 ignore stop */
}
