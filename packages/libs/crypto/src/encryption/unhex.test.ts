import expected from "@akromio/expected"
import unhex from "./unhex"

suite(import.meta.url, () => {
  test("when called, hexadecimal must be returned", () => {
    // (1) act
    const out = unhex("636961206d6f6e646f21")

    // (2) assessment
    expected(out).equalTo(Buffer.from("cia mondo!"))
  })
})
