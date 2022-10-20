import expected from "@akromio/expected"

import KeyGenerator from "../keys/KeyGenerator"
import encrypt from "./encrypt"

suite(import.meta.url, () => {
  let key: CryptoKey
  const iv = "1234567890123456"

  suiteSetup(async () => {
    const generator = new KeyGenerator()
    key = await generator.generateKeyFromSeed("my seed", "my salt", 256)
  })

  test("when called, ciphertext in hex must be returned", async () => {
    // (1) act
    const value = "cia mondo!"
    const ciphertext = "96ca76290714cddf447ecefe07ddafc7"
    const out = await encrypt(value, key, iv)

    // (2) assessment
    expected(out).equalTo(ciphertext)
  })
})
