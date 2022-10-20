import expected from "@akromio/expected"
import {bands} from "@vql/test-fixture"

import ItemsQueryResult from "./ItemsQueryResult"

suite(import.meta.url, () => {
  const items = Object.values(bands.data).map((value) => ({value}))

  suite("value", () => {
    test("when called w/ items available, the item values must be returned", () => {
      // (1) act
      const out = new ItemsQueryResult(items).value

      // (2) assessment
      expected(out).equalTo(items.map((i) => i.value))
    })

    test("when called w/o items, empty list must be returned", () => {
      // (1) act
      const out = new ItemsQueryResult([]).value

      // (2) assessment
      expected(out).toBeEmpty()
    })
  })
})
