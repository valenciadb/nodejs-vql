import expected from "@akromio/expected"
import getSecondsOf from "../impl/getSecondsOf"

suite(import.meta.url, () => {
  test("when Xs, the numeric value be returned", () => {
    // (1) act
    const out = getSecondsOf("2s")

    // (2) assessment
    expected(out).equalTo(2)
  })

  test("when Xm, the numeric value be returned", () => {
    // (1) act
    const out = getSecondsOf("2m")

    // (2) assessment
    expected(out).equalTo(120)
  })

  test("when Xh, the numeric value be returned", () => {
    // (1) act
    const out = getSecondsOf("2h")

    // (2) assessment
    expected(out).equalTo(7200)
  })

  test("when Xd, the numeric value be returned", () => {
    // (1) act
    const out = getSecondsOf("2d")

    // (2) assessment
    expected(out).equalTo(172800)
  })

  test("when Xw, the numeric value be returned", () => {
    // (1) act
    const out = getSecondsOf("2w")

    // (2) assessment
    expected(out).equalTo(1209600)
  })
})
