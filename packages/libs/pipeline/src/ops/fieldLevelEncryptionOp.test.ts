import expected from "@akromio/expected"
import {KeyGenerator} from "@vql/crypto"

import fieldLevelEncryptionOp from "./fieldLevelEncryptionOp"

suite(import.meta.url, () => {
  let key: CryptoKey
  const iv = "1234567890123456"

  suiteSetup(async () => {
    const generator = new KeyGenerator()
    key = await generator.generateKeyFromSeed("my seed", "my salt", 256)
  })

  test("when called, a function must be returned", () => {
    // (1) act
    const out = fieldLevelEncryptionOp("card", key, iv)

    // (2) assessment
    expected(out).toBeFn()
  })

  test("when op function returned is called, value must be replaced by its ciphertext", async () => {
    // (1) arrange
    const value = {username: "me", password: "pass", card: "123456789"}
    const op = fieldLevelEncryptionOp("card", key, iv)

    // (2) act
    const out = await op(value)

    // (3) assessment
    expected(out).equalTo({...value, card: "f8566f4cd2414d10a4310413d9579405"})
  })
})
