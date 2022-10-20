import DmlStmt from "./DmlStmt.js"

/**
 * A SET statement.
 */
export default class SetStmt extends DmlStmt {
  /**
   * Creates a SET statement with the given arguments.
   *
   * @param containerName - The container name where to set the item.
   * @param value - The item value to set.
   * @param returning - The fields to return.
   */
  constructor(containerName: string, public value: any, readonly returning: "*" | undefined) {
    super(containerName)
  }
}
