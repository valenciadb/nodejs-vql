import crypto from "node:crypto"
import hex from "./hex"

const {subtle} = crypto.webcrypto

/**
 * The encoder to use for encrypting.
 */
const encoder = new TextEncoder()

/**
 * Encrypts a value using AES-CBC.
 *
 * @param plaintext - Value to encrypt.
 * @param key - Cryptography key to use.
 * @param iv - IV to use.
 *
 * @returns The ciphertext encoded in hex.
 */
export default async function encrypt(
  plaintext: string,
  key: CryptoKey,
  iv: string | Uint8Array
): Promise<string> {
  // (1) pre: IV must be array buffer
  if (typeof iv == "string") {
    iv = encoder.encode(iv)
  }

  // (2) encrypt
  const ciphertext = await subtle.encrypt(
    {name: "AES-CBC", iv},
    key,
    encoder.encode(plaintext)
  )

  // (3) return serialized
  return hex(ciphertext)
}
