import expected from "@akromio/expected"
import KeyFieldValue from "./KeyFieldValue"
import KeyValue from "./KeyValue"

suite(import.meta.url, () => {
  suite("fieldNames", () => {
    test("when called, the field names must be returned", () => {
      // (1) arrange
      const keyFieldValue1 = new KeyFieldValue("band", "=", "Editors")
      const keyFieldValue2 = new KeyFieldValue("album", "=", "The Back Room")
      const keyValue = new KeyValue([keyFieldValue1, keyFieldValue2])

      // (2) act
      const out = keyValue.fieldNames

      // (3) assessment
      expected(out).equalTo([keyFieldValue1.fieldName, keyFieldValue2.fieldName])
    })
  })

  suite("getFieldValue()", () => {
    test("when field found, its key field value must be returned", () => {
      // (1) act
      const keyFieldValue = new KeyFieldValue("name", "=", "Editors")
      const out = new KeyValue([keyFieldValue]).getFieldValue("name")

      // (2) assessment
      expected(out).sameAs(keyFieldValue)
    })

    test("when field not found, undefined must be returned", () => {
      // (1) act
      const out = new KeyValue([]).getFieldValue("xyz")

      // (2) assessment
      expected(out).toBeNull()
    })
  })
})
