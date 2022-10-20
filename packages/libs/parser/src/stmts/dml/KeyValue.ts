import KeyFieldValue from "./KeyFieldValue.js"

/**
 * A key value.
 *
 * @remarks
 * Right now, the keys are simple.
 * But the class is implemented considering possible composite keys
 * in the future.
 */
export default class KeyValue {
  /**
   * Creates a key value with the given arguments.
   *
   * @param values - The key values.
   */
  constructor(readonly values: KeyFieldValue[]) {}

  /**
   * The key field names.
   */
  get fieldNames(): string[] {
    return this.values.map((fld) => fld.fieldName)
  }

  /**
   * Returns the value of a given field name.
   *
   * @param name - The key field name to get.
   * @returns The value or undefined if not found.
   */
  getFieldValue(name: string): KeyFieldValue | undefined {
    // (1) find field
    let keyFieldValue: KeyFieldValue | undefined

    for (const value of this.values) {
      if (value.fieldName == name) {
        keyFieldValue = value
        break
      }
    }

    // (2) return value
    return keyFieldValue
  }
}
