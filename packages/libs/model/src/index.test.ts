import expected from "@akromio/expected"
import * as pkg from "./index"

suite(import.meta.url, () => {
  test("when imported, API must be exported", () => {
    expected(pkg).toHave([
      "ModelError",
      "AppendOnlyContainer",
      "ReadOnlyContainer",
      "ReadWriteContainer",
      "Containers",
      "Schema",
      "Schemas",
      "Model",
      "Index"
    ])
  })
})
