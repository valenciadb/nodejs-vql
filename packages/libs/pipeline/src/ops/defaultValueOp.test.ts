import expected from "@akromio/expected"
import peval from "@akromio/peval"
import defaultValueOp from "./defaultValueOp"

suite(import.meta.url, () => {
  suite("error handling", () => {
    test("when unknown global property, error must be raised", () => {
      // (1) act
      const out = peval(() => defaultValueOp("z", {name: "UUID"}, "=")({x: 123, y: 321}))

      // (2) expected
      expected(out)
        .it(0)
        .equalTo(false)
        .it(1)
        .toBe(Error)
        .like("Unknown global property name: UUID.")
    })
  })

  suite("= (when field is null or not exists, set default)", () => {
    test("when field already value, nothing to do", () => {
      // (1) act
      const id = "this is the id"
      const out = defaultValueOp("id", {name: "uuid"}, "=")({id})

      // (2) assessment
      expected(out).equalTo({id})
    })

    test("when default value is datum name, function for doing the op must be returned", () => {
      // (1) act
      const out = defaultValueOp("z", {name: "uuid"}, "=")({x: 123, y: 321})

      // (2) expected
      expected(out).toHave({x: 123, y: 321}).member("z").toBeUuid()
    })

    test("when default value is string, function for doing the op must be returned", () => {
      // (1) act
      const out = defaultValueOp("z", "uuid", "=")({x: 123, y: 321})

      // (2) expected
      expected(out).toHave({x: 123, y: 321, z: "uuid"})
    })

    test("when default value is number, function for doing the op must be returned", () => {
      // (1) act
      const out = defaultValueOp("z", 135, "=")({x: 123, y: 321})

      // (2) expected
      expected(out).toHave({x: 123, y: 321, z: 135})
    })

    test("when default value is bool, function for doing the op must be returned", () => {
      // (1) act
      const out = defaultValueOp("z", false, "=")({x: 123, y: 321})

      // (2) expected
      expected(out).toHave({x: 123, y: 321, z: false})
    })
  })

  suite("?= (when field not exists, set default)", () => {
    test("when field not exists, default value must be set", () => {
      // (1) arrange
      const src = {x: 123, y: 321}
      const op = defaultValueOp("z", "135", "?=")

      // (2) act
      const out = op(src)

      // (3) assessment
      expected(out).equalTo({x: 123, y: 321, z: 135})
    })

    test("when field exists, nothing to do", () => {
      // (1) arrange
      const src = {x: 123, y: 321}
      const op = defaultValueOp("y", "135", "?=")

      // (2) act
      const out = op(src)

      // (3) assessment
      expected(out).toHave({x: 123, y: 321})
    })
  })

  suite(":= (always set)", () => {
    test("when field is null, value must be set", () => {
      // (1) arrange
      const src = {x: 123, y: 321}
      const op = defaultValueOp("z", 135, ":=")

      // (2) act
      const out = op(src)

      // (3) assessment
      expected(out).equalTo({x: 123, y: 321, z: 135})
    })

    test("when field is not null, value must be set", () => {
      // (1) arrange
      const src = {x: 123, y: 321}
      const op = defaultValueOp("y", 135, ":=")

      // (2) act
      const out = op(src)

      // (3) assessment
      expected(out).equalTo({x: 123, y: 135})
    })
  })
})
