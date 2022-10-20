import Schema from "./Schema"

/**
 * A collection of schemas.
 */
export default class Schemas {
  /**
   * The schemas.
   */
  readonly schemas: Record<string, Schema> = {}

  /**
   * Returns a schema by its name.
   *
   * @param name - The schema name to find.
   * @returns The schema or null.
   */
  getSchema(name: string) {
    return this.schemas[name]
  }

  /**
   * Adds a given schema to the collection.
   *
   * @param schema - The schema to add.
   * @returns The collection for chaining if needed.
   */
  addSchema(schema: Schema): this {
    this.schemas[schema.name] = schema
    return this
  }
}
