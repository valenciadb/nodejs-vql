import expected from "@akromio/expected"
import CryptoIv from "./CryptoIv"
import CryptoIvs from "./CryptoIvs"

suite(import.meta.url, () => {
  suite("addIv()", () => {
    test("when IV not found, this must be added", () => {
      // (1) arrange
      const iv = new CryptoIv("iv", "1234567890123456")
      const ivs = new CryptoIvs()

      // (2) act
      const out = ivs.addIv(iv)

      // (3) assessment
      expected(out).sameAs(ivs)
      expected(out.getIv(iv.name)).sameAs(iv)
    })
  })
})
