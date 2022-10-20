import expected from "@akromio/expected"
import * as pkg from "./index.js"

suite(import.meta.url, () => {
  test("when imported, API must be exported", () => {
    expected(pkg).toHave([
      "Binder",
      "DmlStmt",
      "Parser",
      "SchemaStmt",
      "SelectStmt",
      "Stmt",
      "TableStmt"
    ])
  })
})
