import KeyValue from "./KeyValue.js"
import DmlStmt from "./DmlStmt.js"

/**
 * A statement for querying an item from a table.
 */
export default abstract class IndexedQueryStmt extends DmlStmt {
  /**
   * Creates an item query statement with the given arguments.
   *
   * @param containerName - The container name to query.
   * @param keyValue - The key value to use.
   */
  protected constructor(containerName: string, readonly keyValue: KeyValue) {
    super(containerName)
  }
}
