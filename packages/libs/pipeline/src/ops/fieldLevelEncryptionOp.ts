import {encrypt} from "@vql/crypto"
import PipelineOp from "../PipelineOp"
import PipelineValue from "../PipelineValue"

/**
 * Returns an operation for encrypting a field with the given cryptographic key and IV.
 *
 * @param fieldName - Field name to encrypt.
 * @param key - Cryptographic key to use.
 * @param iv - Cryptographic IV to use.
 *
 * @returns The function to perform the operation.
 */
export default function fieldLevelEncryptionOp(
  fieldName: string,
  key: CryptoKey,
  iv: string | Uint8Array
): PipelineOp {
  return async function (value: PipelineValue): Promise<PipelineValue> {
    // (1) encrypt if field exists
    if (value[fieldName] != undefined) {
      // encrypt
      const plaintext = value[fieldName]
      const ciphertext = await encrypt(plaintext, key, iv)

      // replace value
      value[fieldName] = ciphertext
    }

    // (2) return value
    return value
  }
}
