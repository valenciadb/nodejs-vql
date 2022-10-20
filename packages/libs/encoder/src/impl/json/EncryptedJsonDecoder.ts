import {decrypt} from "@vql/crypto"

import JsonDecoder from "./JsonDecoder"
import Iv from "../../Iv"

/**
 * A JSON deserializer for encrypted serialized data.
 */
export default class EncryptedJsonDecoder extends JsonDecoder {
  /**
   * Creates a decoder with the given arguments.
   *
   * @param key - The cryptographic key to use.
   * @param iv - The IV to use.
   */
  constructor(readonly key: CryptoKey, readonly iv: Iv) {
    super()
  }

  /** @override */
  async decode(value: string): Promise<Record<string, any>> {
    return super.decode(await decrypt(value, this.key, this.iv))
  }
}
