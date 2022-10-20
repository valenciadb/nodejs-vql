import expected from "@akromio/expected"
import * as pkg from "."

suite(import.meta.url, () => {
  test("when imported, API must be exported", () => {
    expected(pkg).toHave(["DbError", "Db", "VqlClient", "QueryResult"])
  })
})
