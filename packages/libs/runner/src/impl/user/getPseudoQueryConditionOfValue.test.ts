import expected from "@akromio/expected"
import peval from "@akromio/peval"
import {bands} from "@vql/test-fixture"
import getPseudoQueryConditionOfValue from "./getPseudoQueryConditionOfValue"

suite(import.meta.url, () => {
  const {table} = bands
  const value = bands.data.simpleMinds

  test("when value contains the key fields, condition must be returned", () => {
    // (1) act
    const out = getPseudoQueryConditionOfValue(value, table)

    // (2) assessment
    expected(out).equalTo({name: value.name})
  })

  test("when value doesn't contain the key fields, error must be raised", () => {
    // (1) act
    const out = peval(() => getPseudoQueryConditionOfValue({}, table))

    // (2) assessment
    expected(out).it(0).equalTo(false).it(1).equalTo(new Error("Key field expected: name."))
  })
})
