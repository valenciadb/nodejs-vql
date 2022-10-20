/**
 * A cryptographic IV for encrypting and/or decrypting.
 */
export default class CryptoIv {
  /**
   * Creates a cryptographic IV with the given arguments.
   *
   * @param name - The key name.
   * @param iv - The cryptographic IV.
   */
  constructor(readonly name: string, readonly iv: Uint8Array | string) {}
}
