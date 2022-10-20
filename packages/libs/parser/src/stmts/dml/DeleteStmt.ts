import KeyValue from "./KeyValue.js"
import IndexedQueryStmt from "./IndexedQueryStmt.js"

/**
 * A DELETE statement.
 */
export default class DeleteStmt extends IndexedQueryStmt {
  /**
   * Creates a DELETE statement with the given arguments.
   *
   * @param containerName - The container name to query.
   * @param keyValue - The WHERE clause.
   */
  constructor(containerName: string, keyValue: KeyValue) {
    super(containerName, keyValue)
  }
}
