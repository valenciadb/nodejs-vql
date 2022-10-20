import expected from "@akromio/expected"
import {bands} from "@vql/test-fixture"
import ConnectorBase from "./ConnectorBase"

class Connector extends ConnectorBase {
  constructor() {
    super("default", "/")
  }
}

suite(import.meta.url, () => {
  const connector = new Connector()

  suite("itemKey()", () => {
    test("when arguments passed, key must be returned", () => {
      // (1) act
      const {table} = bands
      const value = bands.data.editors
      const out = connector.itemKey(table, connector.idKey(value.name))

      // (2) assessment
      expected(out).equalTo(`${table.name}/${value.name}`)
    })
  })
})
