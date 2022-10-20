import expected from "@akromio/expected"
import peval from "@akromio/peval"
import dataTypeCastingOp from "./dataTypeCastingOp"

suite(import.meta.url, () => {
  test("when called, a function must be returned", () => {
    // (1) act
    const out = dataTypeCastingOp("band", "text")

    // (2) assessment
    expected(out).toBeFn()
  })

  suite("op function returned", () => {
    suite("data type to cast: text", () => {
      test("when field value is text, value must be returned", () => {
        // (1) arrange
        const value = {
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCastingOp("me", "text")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value).member("me").toBeText()
      })

      test("when field value is not text, value casted w/ String()", () => {
        // (1) arrange
        const inserted = new Date().valueOf()
        const value = {
          inserted,
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCastingOp("inserted", "text")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value).member("inserted").equalTo(inserted.toString())
      })
    })

    suite("data type to cast: ts or num", () => {
      test("when field value is numeric, value must be returned", () => {
        // (1) arrange
        const inserted = new Date().valueOf()
        const value = {
          inserted,
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCastingOp("inserted", "ts")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value).member("inserted").equalTo(inserted)
      })

      test("when field value is not numeric but castable, value must be casted", () => {
        // (1) arrange
        const inserted = new Date().valueOf().toString()
        const value = {inserted, username: "me"}
        const op = dataTypeCastingOp("inserted", "ts")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value).member("inserted").toBeNumber().equalTo(Number(inserted))
      })

      test("when field value is not numeric or castable, error must be raised", () => {
        // (1) arrange
        const value = {
          inserted: "ciao",
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCastingOp("inserted", "ts")

        // (2) act
        const out = peval(() => op(value))

        // (3) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(
            new TypeError(
              "Value of 'inserted' expected to be castable to number (num or ts). Got: ciao."
            )
          )
      })
    })
  })
})
