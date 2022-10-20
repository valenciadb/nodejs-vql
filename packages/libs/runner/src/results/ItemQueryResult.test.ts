import expected from "@akromio/expected"
import {bands} from "@vql/test-fixture"

import ItemQueryResult from "./ItemQueryResult"

suite(import.meta.url, () => {
  const item = {value: bands.data.simpleMinds}

  suite("value", () => {
    test("when called w/ item available, the item value must be returned", () => {
      // (1) act
      const out = new ItemQueryResult(item).value

      // (2) assessment
      expected(out).equalTo(item.value)
    })

    test("when called w/o item available, undefined must be returned", () => {
      // (1) act
      const out = new ItemQueryResult(undefined).value

      // (2) assessment
      expected(out).toBeNull()
    })
  })
})
