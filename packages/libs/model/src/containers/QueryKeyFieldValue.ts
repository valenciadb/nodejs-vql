import KeyFieldDataType from "./KeyFieldDataType"

/**
 * A value of a key field set in a query.
 */
type QueryKeyFieldValue = {
  /**
   * Field name.
   */
  field: string

  /**
   * Field value.
   */
  value: KeyFieldDataType
}

export default QueryKeyFieldValue
