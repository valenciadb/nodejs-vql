/**
 * A cryptographic key for encrypting and/or decrypting.
 */
export default class CryptoKey {
  /**
   * Creates a cryptographic key with the given arguments.
   *
   * @param name - The key name.
   * @param key - The cryptographic key.
   */
  constructor(readonly name: string, readonly key: any) {}
}
