/**
 * Transforms a value to hexadecimal format.
 *
 * @param value - The value to format.
 * @returns The value in hexadecimal.
 */
export default function hex(value: any): string {
  return Buffer.from(value).toString("hex")
}
