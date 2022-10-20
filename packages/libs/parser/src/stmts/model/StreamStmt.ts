import Datum from "../../Datum.js"
import ContainerStmt from "./ContainerStmt.js"
import KeyFieldDef from "./KeyFieldDef.js"
import Tde from "./tde/Tde.js"

/**
 * A statement for declaring a model table.
 */
export default class StreamStmt extends ContainerStmt {
  /**
   * Creates a STREAM statement with the given arguments.
   *
   * @param connectorName - Connector name.
   * @param streamName - The stream name.
   * @param schemaName - The schema name used by this table.
   * @param mode - The table kind.
   * @param keyFields - The field to use as key.
   * @param tde - The transparent data encryption.
   * @param defaults - The default values for the given fields.
   * @param ttl - The default TTL for the items when unset.
   */
  constructor(
    connectorName: string | undefined,
    streamName: string,
    schemaName: string | undefined,
    mode: "APPEND ONLY" | "READ ONLY" | "READ WRITE",
    keyFields: KeyFieldDef[],
    tde: Tde | undefined,
    defaults: Record<string, {op: "=" | ":=" | "?="; value: Datum | string | number | boolean}>
  ) {
    super(connectorName, streamName, schemaName, mode, keyFields, tde, defaults)
  }

  /**
   * Stream name.
   */
  get streamName(): string {
    return this.containerName
  }
}
