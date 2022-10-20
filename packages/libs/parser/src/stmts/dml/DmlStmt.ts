import Stmt from "../Stmt.js"

/**
 * A DML query statement for running something
 * to be able to return data.
 */
export default abstract class DmlStmt extends Stmt {
  /**
   * Creates a query statement.
   *
   * @param containerName - The container name to query.
   */
  protected constructor(readonly containerName: string) {
    super()
  }
}
