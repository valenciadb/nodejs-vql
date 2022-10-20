import expected from "@akromio/expected"
import {KeyGenerator} from "@vql/crypto"
import {bands} from "@vql/test-fixture"

import EncryptedJsonEncoder from "./EncryptedJsonEncoder"
import Encoder from "../../Encoder"

suite(import.meta.url, () => {
  let encoder: Encoder

  suiteSetup(async () => {
    const generator = new KeyGenerator()
    const key = await generator.generateKeyFromSeed("my seed", "my salt", 256)
    const iv = "1234567890123456"

    encoder = new EncryptedJsonEncoder(key, iv)
  })

  suite("encode()", () => {
    const {editors} = bands.data

    test("when key passed, encrypted serialization must be performed", async () => {
      // (1) act
      const out = await encoder.encode(editors)

      // (2) assessment
      const encoded =
        "6c76f87830d9b6dc50a90e1634ac42bd1c7b741001f6a0303c87d1e705e5204898ae30fbf0850719a02a61945e4b2f7d9410896f688c6587c47dfa2b86e47ddb"

      expected(out).equalTo(encoded)
    })
  })
})
