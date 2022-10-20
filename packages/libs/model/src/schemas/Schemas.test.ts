import expected from "@akromio/expected"
import Schema from "./Schema"
import Schemas from "./Schemas"

suite(import.meta.url, () => {
  suite("addSchema()", () => {
    test("when schema not found, this must be added", () => {
      // (1) arrange
      const schema = new Schema("Band", () => null)
      const schemas = new Schemas()

      // (2) act
      const out = schemas.addSchema(schema)

      // (3) assessment
      expected(out).sameAs(schemas)
      expected(out.getSchema(schema.name)).sameAs(schema)
    })
  })
})
