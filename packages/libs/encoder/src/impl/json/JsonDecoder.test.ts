import expected from "@akromio/expected"
import {bands} from "@vql/test-fixture"

import JsonDecoder from "./JsonDecoder"

suite(import.meta.url, () => {
  const decoder = new JsonDecoder()

  suite("encode()", () => {
    const {editors} = bands.data

    test("when serialized value passed, deserialized value must be returned", async () => {
      // (1) act
      const out = await decoder.decode(JSON.stringify(editors))

      // (2) assessment
      expected(out).equalTo(editors)
    })
  })
})
