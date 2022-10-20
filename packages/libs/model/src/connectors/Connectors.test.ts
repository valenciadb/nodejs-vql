import expected from "@akromio/expected"
import {field, simulator} from "@akromio/doubles"
import Connectors from "./Connectors"

suite(import.meta.url, () => {
  suite("addConnector()", () => {
    test("when connector not found, this must be added", () => {
      // (1) arrange
      const connector = simulator({name: field.returns("default")})
      const connectors = new Connectors()

      // (2) act
      const out = connectors.addConnector(connector)

      // (3) assessment
      expected(out).sameAs(connectors)
      expected(out.getConnector("default")).sameAs(connector)
    })
  })
})
