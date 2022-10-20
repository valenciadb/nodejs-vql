/**
 * A transparent data encryption.
 */
export default abstract class Tde {
  /**
   * Creates a transparent encryption with the given arguments.
   *
   * @param cryptoKeyName - The name of the cryptographic key to use.
   * @param cryptoIvName - The name of the initialization vector to use.
   */
  protected constructor(readonly cryptoKeyName: string, readonly cryptoIvName: string) {}
}
