import Tde from "./Tde"

/**
 * Table-level transparent data encryption.
 */
export default class TableLevelTde extends Tde {
  /**
   * Creates a table-level TDE with the given arguments.
   *
   * @param cryptoKeyName - Name of the cryptographic key to use.
   * @param cryptoIvName - Name of the cryptographic IV to use.
   */
  constructor(cryptoKeyName: string, cryptoIvName: string) {
    super(cryptoKeyName, cryptoIvName)
  }
}
