import expected from "@akromio/expected"
import KeyGenerator from "../keys/KeyGenerator"
import decrypt from "./decrypt"

suite(import.meta.url, () => {
  const iv = "1234567890123456"
  let key: CryptoKey

  suiteSetup(async () => {
    const generator = new KeyGenerator()
    key = await generator.generateKeyFromSeed("my seed", "my salt", 256)
  })

  test("when called, plaintext must be returned", async () => {
    // (1) act
    const ciphertext = "96ca76290714cddf447ecefe07ddafc7"
    const plaintext = "cia mondo!"
    const out = await decrypt(ciphertext, key, iv)

    // (2) assessment
    expected(out).equalTo(plaintext)
  })
})
