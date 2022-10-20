import Datum from "../../Datum.js"
import ContainerStmt from "./ContainerStmt.js"
import KeyFieldDef from "./KeyFieldDef.js"
import Tde from "./tde/Tde.js"

/**
 * A statement for declaring a model table.
 */
export default class TableStmt extends ContainerStmt {
  /**
   * Creates a TABLE statement with the given arguments.
   *
   * @param connectorName - Connector name.
   * @param tableName - The table name.
   * @param schemaName - The schema name used by this table.
   * @param mode - The table mode.
   * @param keyFields - The fields to use as key.
   * @param tde - The transparent data encryption.
   * @param defaults - The default values for the given fields.
   * @param ttl - The default TTL for the items when unset.
   */
  constructor(
    connectorName: string | undefined,
    tableName: string,
    schemaName: string | undefined,
    mode: "APPEND ONLY" | "READ ONLY" | "READ WRITE",
    keyFields: KeyFieldDef[],
    tde: Tde | undefined,
    defaults: Record<
      string,
      {op: "=" | ":=" | "?="; value: Datum | string | number | boolean}
    >,
    readonly ttl: string | undefined
  ) {
    super(connectorName, tableName, schemaName, mode, keyFields, tde, defaults)
  }

  /**
   * Table name.
   */
  get tableName(): string {
    return this.containerName
  }
}
