import CryptoKey from "./CryptoKey"

/**
 * A collection of cryptographic keys.
 */
export default class CryptoKeys {
  /**
   * The cryptographic keys.
   */
  protected readonly keys: Record<string, CryptoKey> = {}

  /**
   * Adds a cryptographic key to this collection.
   *
   * @param key - The cryptographic key to add.
   * @returns The collection for chaining if needed.
   */
  addKey(key: CryptoKey): this {
    this.keys[key.name] = key
    return this
  }

  /**
   * Returns the cryptographic key by its name.
   *
   * @param name - The name to find.
   * @returns The key or undefined if not exists.
   */
  getKey(name: string): CryptoKey | undefined {
    return this.keys[name]
  }
}
