import expected from "@akromio/expected"
import Params from "./Params"

suite(import.meta.url, () => {
  suite("getParameterValue()", () => {
    test("when not found, undefined must be returned", () => {
      // (1) act
      const params = new Params({})
      const out = params.getParameterValue("xyz")

      // (2) assessment
      expected(out).toBeNull()
    })

    test("when found, value must be returned", () => {
      // (1) act
      const params = new Params({x: 123, y: 321})
      const out = params.getParameterValue("x")

      // (2) assessment
      expected(out).equalTo(123)
    })
  })
})
