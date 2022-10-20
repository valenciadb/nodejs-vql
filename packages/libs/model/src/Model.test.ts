import expected from "@akromio/expected"
import Model from "./Model"

suite(import.meta.url, () => {
  suite("constructor", () => {
    test("when created, its properties must be created", () => {
      // (1) act
      const out = new Model()

      // (2) assessment
      expected(out).members("schemas", "containers", "cryptoKeys", "cryptoIvs").notToBeNull()
    })
  })
})
