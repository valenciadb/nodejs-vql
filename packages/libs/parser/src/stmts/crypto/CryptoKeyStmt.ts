import ParamBind from "../ParamBind.js"
import CryptoStmt from "./CryptoStmt.js"

/**
 * A statement to register a cryptographic key.
 */
export default class CryptoKeyStmt extends CryptoStmt {
  /**
   * Creates a crypto key statement with the given arguments.
   *
   * @param name - The key name.
   * @param _key - The cryptographic key to use.
   */
  constructor(
    readonly name: string,
    public _key: CryptoKey | ParamBind | Record<string, any>
  ) {
    super()
  }

  /**
   * Does it contain a cryptographic key?
   */
  hasCryptoKey(): boolean {
    return "usages" in this._key
  }

  /**
   * The cryptographic key to use.
   */
  get key(): CryptoKey {
    return this._key as CryptoKey
  }

  /**
   * The cryptographic key options.
   */
  get options(): Record<string, any> {
    return this._key
  }
}
