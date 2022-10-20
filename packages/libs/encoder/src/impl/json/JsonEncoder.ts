import Encoder from "../../Encoder"

/**
 * A data serializer.
 */
export default class JsonEncoder implements Encoder {
  /**
   * Serializes a value of a table.
   *
   * @param value - The value to serialize.
   * @returns The value serialized.
   */
  async encode(value: Record<string, any>): Promise<string> {
    return JSON.stringify(value)
  }
}
