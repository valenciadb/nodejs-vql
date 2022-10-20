import expected from "@akromio/expected"
import hex from "./hex"

suite(import.meta.url, () => {
  test("when called, hexadecimal must be returned", () => {
    // (1) act
    const out = hex("cia mondo!")

    // (2) assessment
    expected(out).equalTo("636961206d6f6e646f21")
  })
})
