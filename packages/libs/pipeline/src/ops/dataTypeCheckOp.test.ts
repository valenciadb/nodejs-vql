import expected from "@akromio/expected"
import peval from "@akromio/peval"
import dataTypeCheckOp from "./dataTypeCheckOp"

suite(import.meta.url, () => {
  test("when called, a function must be returned", () => {
    // (1) act
    const out = dataTypeCheckOp("band", "text")

    // (2) assessment
    expected(out).toBeFn()
  })

  suite("op function returned", () => {
    suite("data type to check: text", () => {
      test("when field value is text, value must be returned", async () => {
        // (1) arrange
        const value = {
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("username", "text")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value)
      })

      test("when field value is not text, error must be raised", async () => {
        // (1) arrange
        const value = {
          username: 123,
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("username", "text")

        // (2) act
        const out = peval(() => op(value))

        // (3) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(new Error("The field 'username' must be 'text'. Got: 123."))
      })
    })

    suite("data type to check: ts", () => {
      test("when field value is ts, value must be returned", async () => {
        // (1) arrange
        const value = {
          inserted: new Date().valueOf(),
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("inserted", "ts")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value)
      })

      test("when field value is not ts, error must be raised", async () => {
        // (1) arrange
        const value = {
          inserted: "ciao",
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("inserted", "ts")

        // (2) act
        const out = peval(() => op(value))

        // (3) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(new Error("The field 'inserted' must be 'ts'. Got: ciao."))
      })
    })

    suite("data type to check: num", () => {
      test("when field value is num, value must be returned", async () => {
        // (1) arrange
        const value = {
          inserted: 123,
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("inserted", "num")

        // (2) act
        const out = op(value)

        // (3) assessment
        expected(out).sameAs(value)
      })

      test("when field value is not num, error must be raised", async () => {
        // (1) arrange
        const value = {
          inserted: "123",
          username: "me",
          password: "pass",
          card: "f8566f4cd2414d10a4310413d9579405"
        }
        const op = dataTypeCheckOp("inserted", "num")

        // (2) act
        const out = peval(() => op(value))

        // (3) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(new Error("The field 'inserted' must be 'num'. Got: 123."))
      })
    })
  })
})
