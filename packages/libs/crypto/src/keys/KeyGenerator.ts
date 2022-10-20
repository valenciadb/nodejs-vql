import crypto from "node:crypto"

const {subtle} = crypto.webcrypto

/**
 * A key generator.
 */
export default class KeyGenerator {
  /**
   * The encoder to use.
   */
  protected readonly encoder = new TextEncoder()

  /**
   * Generates an AES-CBC key from a given seed.
   *
   * @param seed - Seed to use.
   * @param salt - Salt to use.
   * @param length - Key length.
   *
   * @returns Cryptographic key generated.
   */
  generateKeyFromSeed(
    seed: string,
    salt: string,
    length: 128 | 192 | 256
  ): Promise<CryptoKey> {
    return this.deriveKey({name: "AES-CBC", length}, seed, salt, ["encrypt", "decrypt"])
  }

  /**
   * Derives a key from a given seed.
   *
   * @param algorithm - The key-derived options.
   * @param seed - The seed to use for deriving the key.
   * @param salt - The salt to use for deriving the key.
   * @param usages - The key usages.
   *
   * @returns The key derived.
   */
  protected async deriveKey(
    algorithm: any,
    seed: string,
    salt: string,
    usages: KeyUsage[]
  ): Promise<CryptoKey> {
    // (1) generate base key from the seed
    const baseKey = await subtle.importKey(
      "raw",
      this.encoder.encode(seed),
      {name: "PBKDF2"},
      false, // extractable
      ["deriveKey"]
    )

    // (2) derive key from the base key and salt
    return (await subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: Buffer.from(salt),
        iterations: 10000,
        hash: "SHA-512"
      },
      baseKey,
      algorithm,
      false, // extractable
      usages
    )) as any as CryptoKey
  }
}
