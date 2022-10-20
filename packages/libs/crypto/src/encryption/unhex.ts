/**
 * Transforms a hexadecimal value to Buffer.
 *
 * @param hex - The hexadecimal value.
 * @returns The value in a Buffer.
 */
export default function unhex(hex: string): Buffer {
  return Buffer.from(hex, "hex")
}
