import expected from "@akromio/expected"
import schemaValidationOp from "./schemaValidationOp"

suite(import.meta.url, () => {
  function validation(value: Record<string, any>): void {
    // nop
  }

  test("when called, a function must be returned", () => {
    // (1) act
    const out = schemaValidationOp(validation)

    // (2) assessment
    expected(out).toBeFn()
  })

  suite("op function returned", () => {
    test("when called, validation must be performed and value returned if ok", () => {
      // (1) arrange
      const value = {
        username: "me",
        password: "pass",
        card: "f8566f4cd2414d10a4310413d9579405"
      }
      const op = schemaValidationOp(validation)

      // (2) act
      const out = op(value)

      // (3) assessment
      expected(out).sameAs(value)
    })
  })
})
