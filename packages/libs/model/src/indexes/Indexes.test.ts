import expected from "@akromio/expected"

import Index from "./Indx"
import Indexes from "./Indexes"
import KeyField from "./KeyField"

suite(import.meta.url, () => {
  const primary = new Index("primary", [new KeyField("band")])

  suite("primary", () => {
    test("when called, the first index must be returned", () => {
      // (1) act
      const out = new Indexes().addIndex(primary).primary

      // (2) assessment
      expected(out).sameAs(primary)
    })
  })

  suite("length", () => {
    test("when called, the number of indexes must be returned", () => {
      // (1) act
      const out = new Indexes().addIndex(primary).length

      // (2) assessment
      expected(out).equalTo(1)
    })
  })

  suite("getIndexUsableWith()", () => {
    const indexes = new Indexes().addIndex(primary)

    test("when index found, this must be returned", () => {
      // (1) act
      const out = indexes.getIndexUsableWith(["band"])

      // (2) assessment
      expected(out).sameAs(primary)
    })

    test("when index not found, undefined must be returned", () => {
      // (1) act
      const out = indexes.getIndexUsableWith(["xyz"])

      // (2) assessment
      expected(out).toBeNull()
    })
  })
})
