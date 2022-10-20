/**
 * Calculates the number of milliseconds for a given expiry time.
 * Format: a number follows by s, m, h, d or w.
 *
 * @param expiry - Expiry time to parse.
 * @returns The milliseconds.
 */
export default function getSecondsOf(expiry: string): number {
  // (1) calculate
  const num = parseInt(expiry.slice(0, -1))
  let s = 0

  switch (expiry.slice(-1)) {
    case "s":
      s = num
      break

    case "m":
      s = num * 60
      break

    case "h":
      s = num * 60 * 60
      break

    case "d":
      s = num * 60 * 60 * 24
      break

    case "w":
      s = num * 60 * 60 * 24 * 7
      break
  }

  // (2) return ms
  return s
}
