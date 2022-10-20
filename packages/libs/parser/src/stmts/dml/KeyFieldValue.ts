import ParamBind from "../ParamBind.js"

/**
 * A value of a key field with the comparison operation to perform.
 */
export default class KeyFieldValue {
  /**
   * Creates a key field value with the given arguments.
   *
   * @param fieldName - The key field name.
   * @param operation - The comparison operation to perform.
   * @param _value - The value set to the field.
   */
  constructor(
    readonly fieldName: string,
    public operation: "=",
    public _value: ParamBind | string
  ) {}

  /**
   * The value.
   */
  get value(): string {
    return this._value as string
  }
}
