import expected from "@akromio/expected"
import parseBool from "./parseBool"

suite(import.meta.url, () => {
  test("when 'true', true must be returned", () => {
    // (1) act
    const out = parseBool("true")

    // (2) assessment
    expected(out).equalTo(true)
  })

  test("when 'false', false must be returned", () => {
    // (1) act
    const out = parseBool("false")

    // (2) assessment
    expected(out).equalTo(false)
  })
})
