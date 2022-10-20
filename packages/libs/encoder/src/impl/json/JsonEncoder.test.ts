import expected from "@akromio/expected"
import {bands} from "@vql/test-fixture"

import JsonEncoder from "./JsonEncoder"

suite(import.meta.url, () => {
  const encoder = new JsonEncoder()

  suite("encode()", () => {
    const {editors} = bands.data

    test("when value passed, serialization must be performed", async () => {
      // (1) act
      const out = await encoder.encode(editors)

      // (2) assessment
      expected(out).equalTo(JSON.stringify(editors))
    })
  })
})
