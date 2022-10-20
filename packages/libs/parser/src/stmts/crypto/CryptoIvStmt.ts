import ParamBind from "../ParamBind.js"
import CryptoStmt from "./CryptoStmt.js"

/**
 * A statement to register a cryptographic IV.
 */
export default class CryptoIvStmt extends CryptoStmt {
  /**
   * Creates a crypto IV statement with the given arguments.
   *
   * @param name - The key name.
   * @param _iv - The cryptographic IV to use.
   */
  constructor(readonly name: string, public _iv: Uint8Array | string | ParamBind) {
    super()
  }

  /**
   * The cryptographic IV to use.
   */
  get iv(): any {
    return this._iv
  }
}
