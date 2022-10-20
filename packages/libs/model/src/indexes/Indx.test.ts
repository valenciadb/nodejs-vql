import expected from "@akromio/expected"
import peval from "@akromio/peval"

import Index from "./Indx"
import KeyField from "./KeyField"
import {ModelError} from "../errors"

suite(import.meta.url, () => {
  suite("constructor", () => {
    suite("error handling", () => {
      test("when empty fields, error must be raised", () => {
        // (1) act
        const out = peval(() => new Index("primary", []))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(new ModelError("The indexes only can have one, two or three key fields."))
      })
    })
  })

  suite("isSimple()", () => {
    test("when index is simple, true must be returned", () => {
      // (1) act
      const index = new Index("pk", [new KeyField("x")])
      const out = index.isSimple()

      // (2) assessment
      expected(out).equalTo(true)
    })

    test("when index is composite, false must be returned", () => {
      // (1) act
      const index = new Index("pk", [new KeyField("x"), new KeyField("y")])
      const out = index.isSimple()

      // (2) assessment
      expected(out).equalTo(false)
    })
  })

  suite("length", () => {
    test("when called, the number of key fields must be returned", () => {
      // (1) act
      const index = new Index("pk", [new KeyField("x"), new KeyField("y")])
      const out = index.length

      // (2) assessment
      expected(out).equalTo(2)
    })
  })

  suite("isUsableWith()", () => {
    const index = new Index("pk", [new KeyField("x"), new KeyField("y")])

    test("when the same fields and in the same order, true must be returned", () => {
      // (1) act
      const out = index.isUsableWith(["x", "y"])

      // (2) assessment
      expected(out).equalTo(true)
    })

    test("when the same fields but in different order, false must be returned", () => {
      // (1) act
      const out = index.isUsableWith(["y", "x"])

      // (2) assessment
      expected(out).equalTo(false)
    })

    test("when fewer fields but usable, true must be returned", () => {
      // (1) act
      const out = index.isUsableWith(["x"])

      // (2) assessment
      expected(out).equalTo(true)
    })
  })
})
