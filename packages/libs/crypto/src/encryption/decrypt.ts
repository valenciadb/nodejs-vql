import crypto from "node:crypto"
import unhex from "./unhex"

const {subtle} = crypto.webcrypto

/**
 * The encoder to use.
 */
const encoder = new TextEncoder()

/**
 * The decoder to use for decrypting.
 */
const decoder = new TextDecoder()

/**
 * Decrypts a hex-encoded ciphertext, using AES-CBC.
 *
 * @param ciphertext - Ciphertext in hex to decrypt.
 * @param key - Cryptographic key to use.
 * @param iv - IV to use.
 *
 * @returns The value decrypted.
 */
export default async function decrypt(
  ciphertext: string,
  key: CryptoKey,
  iv: string | Uint8Array
): Promise<string> {
  // (1) pre: IV must be array buffer
  if (typeof iv == "string") {
    iv = encoder.encode(iv)
  }

  // (2) decrypt
  return decoder.decode(await subtle.decrypt({name: "AES-CBC", iv}, key, unhex(ciphertext)))
}
