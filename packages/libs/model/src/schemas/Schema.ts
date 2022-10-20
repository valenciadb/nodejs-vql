import SchemaValidator from "./SchemaValidator"

/**
 * A data schema.
 */
export default class Schema {
  /**
   * Creates a schema with the given arguments.
   *
   * @param name - The schema name.
   * @param validator - The schema validator function.
   */
  constructor(readonly name: string, readonly validator: SchemaValidator) {}
}
