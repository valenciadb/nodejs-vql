import CryptoIv from "./CryptoIv"

/**
 * A collection of cryptographic IVs.
 */
export default class CryptoIvs {
  /**
   * The cryptographic IVs.
   */
  readonly ivs: Record<string, CryptoIv> = {}

  /**
   * Adds a cryptographic IV to this collection.
   *
   * @param iv - The cryptographic IV to add.
   * @returns The collection for chaining if needed.
   */
  addIv(iv: CryptoIv): this {
    this.ivs[iv.name] = iv
    return this
  }

  /**
   * Returns the cryptographic IV by its name.
   *
   * @param name - The name to find.
   * @returns The IV or undefined if not exists.
   */
  getIv(name: string): CryptoIv | undefined {
    return this.ivs[name]
  }
}
