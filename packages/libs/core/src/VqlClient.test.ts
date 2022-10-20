import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"

import VqlClient from "./VqlClient"

suite(import.meta.url, () => {
  suite("constructor", () => {
    test("when called, an instance with db set must be returned", () => {
      // (1) act
      const connector = simulator()
      const out = new VqlClient(connector)

      // (2) assessment
      expected(out.db).notToBeNull()
    })
  })
})
