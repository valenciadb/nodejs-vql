import expected from "@akromio/expected"
import peval from "@akromio/peval"

import Parser from "./Parser.js"
import {SetStmt, TableStmt} from "./stmts/index.js"

suite(import.meta.url, () => {
  const parser = new Parser()

  suite("error handling", () => {
    test("when unknown statement, error must be raised", () => {
      // (1) act
      const out = peval(() => parser.parse("PUT something"))

      // (2) assessment
      expected(out)
        .it(0)
        .equalTo(false)
        .it(1)
        .toBe("SyntaxError")
        .like("line 1:0 mismatched input 'PUT' expecting")
    })
  })

  test("when query w/ multiple statements, list w/ statements must be returned", () => {
    // (1) act
    const out = parser.parse(`
      TABLE bands KEY(band)
      SET INTO bands(&band1)
      SET INTO bands(&band2)
    `)

    // (2) assessment
    expected(out).toHaveLen(3).it(0).toBe(TableStmt).items(1, 2).toBe(SetStmt)
  })
})
