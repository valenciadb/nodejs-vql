/**
 * A data serializer.
 */
export default interface Encoder {
  /**
   * Serializes a value of a table.
   *
   * @param value - The value to serialize.
   * @returns The value serialized.
   */
  encode(value: Record<string, any>): Promise<string>
}
