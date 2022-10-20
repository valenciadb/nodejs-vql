import Datum from "../../Datum.js"
import KeyFieldDef from "./KeyFieldDef.js"
import ModelStmt from "./ModelStmt.js"
import Tde from "./tde/Tde.js"

/**
 * A statement for declaring a model container.
 */
export default abstract class ContainerStmt extends ModelStmt {
  /**
   * Creates a TABLE statement with the given arguments.
   *
   * @param connectorName - Connector name.
   * @param containerName - The container name.
   * @param schemaName - The schema name used by this table.
   * @param mode - The access mode.
   * @param keyFields - The fields to use as key.
   * @param tde - The transparent data encryption.
   * @param defaults - The default values for the given fields.
   */
  constructor(
    readonly connectorName: string | undefined,
    readonly containerName: string,
    readonly schemaName: string | undefined,
    readonly mode: "APPEND ONLY" | "READ ONLY" | "READ WRITE",
    readonly keyFields: KeyFieldDef[],
    readonly tde: Tde | undefined,
    readonly defaults: Record<
      string,
      {op: "=" | ":=" | "?="; value: Datum | string | number | boolean}
    >
  ) {
    super()
  }
}
