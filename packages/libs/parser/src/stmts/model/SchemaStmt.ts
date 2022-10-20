import ParamBind from "../ParamBind.js"
import ModelStmt from "./ModelStmt.js"

/**
 * The schema validator function.
 */
type SchemaValidator = (value: Record<string, any>) => void

/**
 * A statement for declaring a data schema.
 */
export default class SchemaStmt extends ModelStmt {
  /**
   * Creates a schema statement with the given arguments.
   *
   * @param schemaName - The schema name.
   * @param _validator - The schema validator.
   */
  constructor(
    readonly schemaName: string,
    public _validator: "*" | ParamBind | SchemaValidator
  ) {
    super()
  }

  /**
   * The validator to use.
   */
  get validator(): SchemaValidator {
    return this._validator as SchemaValidator
  }
}
