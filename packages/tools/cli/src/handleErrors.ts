import yargs from "yargs"

/**
 * Handles the errors notified by yargs.
 */
export default function handleErrors(
  msg: string,
  err: Error | undefined,
  y: typeof yargs
): void {
  if (err) {
    throw err
  }

  if (msg.includes("Missing required argument")) {
    console.log("Error:", msg)
  } else if (msg.includes("Not enough non-option arguments")) {
    // nop
  } else if (msg.startsWith("Invalid values:")) {
    console.log("Error:", msg)
    process.exit(1)
  } else {
    console.log("Error:", msg)
  }
}
