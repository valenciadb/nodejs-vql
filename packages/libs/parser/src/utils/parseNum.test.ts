import expected from "@akromio/expected"
import parseNum from "./parseNum"

suite(import.meta.url, () => {
  test("when 'num', the number must be returned", () => {
    // (1) act
    const out = parseNum("123")

    // (2) assessment
    expected(out).equalTo(123)
  })
})
