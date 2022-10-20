/**
 * A value deserializer.
 */
export default interface Decoder {
  /**
   * Deserializes a value of a table.
   *
   * @param value - The value serialized.
   * @returns The value deserialized.
   */
  decode(value: string): Promise<any>
}
