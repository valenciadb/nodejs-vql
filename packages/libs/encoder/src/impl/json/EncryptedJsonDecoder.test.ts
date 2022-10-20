import expected from "@akromio/expected"
import {KeyGenerator} from "@vql/crypto"
import {bands} from "@vql/test-fixture"

import Decoder from "../../Decoder"
import EncryptedJsonDecoder from "./EncryptedJsonDecoder"

suite(import.meta.url, () => {
  let decoder: Decoder

  suiteSetup(async () => {
    const generator = new KeyGenerator()
    const key = await generator.generateKeyFromSeed("my seed", "my salt", 256)
    const iv = "1234567890123456"

    decoder = new EncryptedJsonDecoder(key, iv)
  })

  suite("encode()", () => {
    const {editors} = bands.data
    const encoded =
      "6c76f87830d9b6dc50a90e1634ac42bd1c7b741001f6a0303c87d1e705e5204898ae30fbf0850719a02a61945e4b2f7d9410896f688c6587c47dfa2b86e47ddb"

    test("when encrypted serialized value passed, decrypted deserialization must be performed", async () => {
      // (1) act
      const out = await decoder.decode(encoded)

      // (2) assessment
      expected(out).equalTo(editors)
    })
  })
})
