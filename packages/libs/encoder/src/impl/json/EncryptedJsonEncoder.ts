import {encrypt} from "@vql/crypto"

import JsonEncoder from "./JsonEncoder"
import Iv from "../../Iv"

/**
 * A data serializer returning its serialization encrypted.
 *
 * This encrypts when needed.
 */
export default class EncryptedJsonEncoder extends JsonEncoder {
  /**
   * Creates an encrypted JSON encoder with the given arguments.
   *
   * @param key - The cryptographic key to use.
   * @param iv - The IV to use.
   */
  constructor(readonly key: CryptoKey, readonly iv: Iv) {
    super()
  }

  /** @override */
  async encode(value: Record<string, any>): Promise<string> {
    return encrypt(await super.encode(value), this.key, this.iv)
  }
}
