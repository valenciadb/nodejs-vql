import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"
import CryptoKey from "./CryptoKey"
import CryptoKeys from "./CryptoKeys"

suite(import.meta.url, () => {
  suite("addKey()", () => {
    test("when key not found, this must be added", () => {
      // (1) arrange
      const key = new CryptoKey("master", simulator())
      const keys = new CryptoKeys()

      // (2) act
      const out = keys.addKey(key)

      // (3) assessment
      expected(out).sameAs(keys)
      expected(out.getKey(key.name)).sameAs(key)
    })
  })
})
