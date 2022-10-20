import expected from "@akromio/expected"
import ErrorResult from "./ErrorResult"

suite(import.meta.url, () => {
  suite("value", () => {
    test("when called, error must be returned", () => {
      // (1) act
      const error = new Error("Error message")
      const out = new ErrorResult(error).value

      // (2) assessment
      expected(out).sameAs(error)
    })
  })
})
