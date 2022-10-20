/**
 * Parses a text and returns its boolean value.
 *
 * @param value - The text to parse.
 * @returns The value as boolean.
 */
export default function parseBool(value: string): boolean {
  return value == "true" ? true : false
}
