import KeyField from "./KeyField"
import {ModelError} from "../errors"

/**
 * A primary or secondary index.
 */
export default class Index {
  /**
   * Creates an index with the given arguments.
   *
   * @param name - The index name.
   * @param keyFields - The key fields.
   */
  constructor(readonly name: string, readonly keyFields: KeyField[]) {
    if (keyFields.length == 0 || keyFields.length > 3) {
      throw new ModelError("The indexes only can have one, two or three key fields.")
    }
  }

  /**
   * The key field names.
   */
  get keyFieldNames(): string[] {
    return this.keyFields.map((field) => field.name)
  }

  /**
   * Checks and returns whether the index is simple.
   */
  isSimple(): boolean {
    return this.keyFields.length == 1
  }

  /**
   * The number of fields that this index has.
   */
  get length(): number {
    return this.keyFields.length
  }

  /**
   * Checks and returns whether the index is usable with
   * the given field names.
   *
   * An index is usable when all the fields are indicated
   * and these are in the same order.
   *
   * @param fieldNames - The field names to check.
   * @return true if ok; otherwise, false.
   */
  isUsableWith(fieldNames: string[]): boolean {
    // (1) check
    const {keyFieldNames} = this
    let usable = keyFieldNames.length >= fieldNames.length

    for (let i = 0; usable && i < fieldNames.length; i += 1) {
      usable = keyFieldNames[i] == fieldNames[i]
    }

    // (2) return result
    return usable
  }
}
