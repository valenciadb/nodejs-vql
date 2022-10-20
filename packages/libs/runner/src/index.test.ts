import expected from "@akromio/expected"
import * as pkg from "."

suite(import.meta.url, () => {
  test("when imported, its api must be exported", () => {
    expected(pkg).toHave(["SysRunner", "QueryResult", "ErrorResult"])
  })
})
