import Tde from "./Tde"

/**
 * Field-level transparent encryption.
 */
export default class FieldLevelTde extends Tde {
  /**
   * Creates a field-level TDE with the given arguments.
   *
   * @param cryptoKeyName - Name of the cryptographic key to use.
   * @param cryptoIvName - Name of the cryptographic IV to use.
   * @param fieldName - The field name to encrypt/decrypt with the key and IV.
   */
  constructor(cryptoKeyName: string, cryptoIvName: string, readonly fieldName: string) {
    super(cryptoKeyName, cryptoIvName)
  }
}
