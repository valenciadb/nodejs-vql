import expected from "@akromio/expected"
import defaultSchemaValidator from "./defaultSchemaValidator"

suite(import.meta.url, () => {
  test("when called, nothing to do", () => {
    // (1) act
    const value = {band: "The Mission", origin: "England"}
    const pre = {...value}
    const out = defaultSchemaValidator(pre)

    // (2) assessment
    expected(out).toBeNil()
    expected(value).equalTo(pre)
  })
})
