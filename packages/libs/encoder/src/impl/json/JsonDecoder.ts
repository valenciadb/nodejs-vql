import Decoder from "../../Decoder"

/**
 * A JSON deserializer.
 */
export default class JsonDecoder implements Decoder {
  /**
   * Deserializes a value of a table.
   *
   * @param value - The value serialized.
   * @returns The value deserialized.
   */
  async decode(value: string): Promise<Record<string, any>> {
    return JSON.parse(value)
  }
}
