import expected from "@akromio/expected"
import * as pkg from "."

suite(import.meta.url, () => {
  test("when imported, api must be exported", () => {
    expected(pkg).toHave(["VqlClient", "SiaFileConnector"])
  })
})
