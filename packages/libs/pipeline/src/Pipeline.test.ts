import expected from "@akromio/expected"

import Pipeline from "./Pipeline"
import {defaultValueOp} from "./ops"

suite(import.meta.url, () => {
  suite("addOperation()", () => {
    test("when op passed, this must be added to the pipeline", () => {
      // (1) act
      const out = new Pipeline()
        .addOperation(defaultValueOp("id", "uuid", "="))
        .addOperation(defaultValueOp("inserted", "ts", "="))

      // (2) assessment
      expected(out.length).equalTo(2)
    })
  })

  suite("run()", () => {
    test("when value passed, result value must be returned", async () => {
      // (1) arrange
      const pipeline = new Pipeline()
        .addOperation(defaultValueOp("id", {name: "uuid"}, "="))
        .addOperation(defaultValueOp("inserted", {name: "ts"}, "="))

      // (2) act
      const out = await pipeline.run({x: 123, y: 321})

      // (3) assessment
      expected(out)
        .toHave({x: 123, y: 321})
        .member("id")
        .toBeUuid()
        .member("inserted")
        .toBeText()
        .like("^[0-9]+$")
    })
  })
})
