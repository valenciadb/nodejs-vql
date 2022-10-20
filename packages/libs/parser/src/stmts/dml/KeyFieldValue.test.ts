import expected from "@akromio/expected"
import KeyFieldValue from "./KeyFieldValue"

suite(import.meta.url, () => {
  suite("value", () => {
    test("when value called, _value must be returned", () => {
      // (1) act
      const out = new KeyFieldValue("field", "=", "the value").value

      // (2) assessment
      expected(out).equalTo("the value")
    })
  })
})
