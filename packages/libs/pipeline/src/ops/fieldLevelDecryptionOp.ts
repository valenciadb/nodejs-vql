import {decrypt} from "@vql/crypto"
import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"

/**
 * Returns an operation for decrypting a field with the given cryptographic key and IV.
 *
 * @param fieldName - Field name to decrypt.
 * @param key - Cryptographic key to use.
 * @param iv - Cryptographic IV to use.
 *
 * @returns Op function.
 */
export default function fieldLevelDecryptionOp(
  fieldName: string,
  key: CryptoKey,
  iv: string | Uint8Array
): PipelineOp {
  return async function (value: PipelineValue): Promise<PipelineValue> {
    // (1) decrypt if field exists
    if (value[fieldName] != undefined) {
      const ciphertext = value[fieldName]
      const plaintext = await decrypt(ciphertext, key, iv)
      value[fieldName] = plaintext
    }

    // (2) return value
    return value
  }
}
