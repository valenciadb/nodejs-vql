import KeyValue from "./KeyValue.js"
import IndexedQueryStmt from "./IndexedQueryStmt.js"

/**
 * A SELECT statement.
 */
export default class SelectStmt extends IndexedQueryStmt {
  /**
   * Creates a SELECT statement with the given arguments.
   *
   * @param containerName - The container name to query.
   * @param keyValue - The WHERE clause.
   */
  constructor(containerName: string, keyValue: KeyValue) {
    super(containerName, keyValue)
  }
}
