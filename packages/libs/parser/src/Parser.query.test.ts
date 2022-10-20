import expected from "@akromio/expected"
import peval from "@akromio/peval"

import Parser from "./Parser.js"
import {
  KeyFieldValue,
  KeyValue,
  SelectStmt,
  DeleteStmt,
  SetStmt,
  ParamBind
} from "./stmts/index.js"

suite(import.meta.url, () => {
  const parser = new Parser()

  suite("SELECT", () => {
    suite("error handling", () => {
      test("when invalid SELECT, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("SELECT FROM WHERE &key"))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .toBe("SyntaxError")
          .like("line 1:12 missing Name at 'WHERE'")
      })
    })

    suite("simple key value", () => {
      test("when &param, a SelectStmt w/ ParamBind must be returned", () => {
        // (1) act
        const out = parser.parse("SELECT FROM bands WHERE &name")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(SelectStmt)
          .toHave({containerName: "bands"})
          .get("[0].keyValue")
          .toBe(KeyValue)
          .toHave({values: [new KeyFieldValue("name", "=", new ParamBind("name"))]})
      })

      test("when name = &param, a SelectStmt w/ ParamBind must be returned", () => {
        // (1) act
        const out = parser.parse("SELECT FROM bands WHERE name = &band")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(SelectStmt)
          .toHave({containerName: "bands"})
          .get("[0].keyValue")
          .toBe(KeyValue)
          .toHave({values: [new KeyFieldValue("name", "=", new ParamBind("band"))]})
      })

      for (const op of ["=", "=="]) {
        test(`when name ${op} 'text', a SelectStmt w/ text value must be returned`, () => {
          // (1) act
          const out = parser.parse(`SELECT FROM bands WHERE name ${op} 'Editors'`)

          // (2) assessment
          expected(out)
            .toHaveLen(1)
            .it(0)
            .toBe(SelectStmt)
            .toHave({containerName: "bands"})
            .get("[0].keyValue")
            .toBe(KeyValue)
            .toHave({values: [new KeyFieldValue("name", "=", "Editors")]})
        })
      }
    })

    suite("composite key value", () => {
      test("when partition AND id, a SelectStmt w/ two key values must be returned", () => {
        // (1) act
        const out = parser.parse("SELECT FROM bands WHERE &name AND &origin")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(SelectStmt)
          .toHave({containerName: "bands"})
          .get("[0].keyValue")
          .toBe(KeyValue)
          .toHave({
            values: [
              new KeyFieldValue("name", "=", new ParamBind("name")),
              new KeyFieldValue("origin", "=", new ParamBind("origin"))
            ]
          })
      })

      test("when partition AND discriminator AND id, a SelectStmt w/ three key values must be returned", () => {
        // (1) act
        const out = parser.parse("SELECT FROM bands WHERE &p AND &d AND &i")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(SelectStmt)
          .toHave({containerName: "bands"})
          .get("[0].keyValue")
          .toBe(KeyValue)
          .toHave({
            values: [
              new KeyFieldValue("p", "=", new ParamBind("p")),
              new KeyFieldValue("d", "=", new ParamBind("d")),
              new KeyFieldValue("i", "=", new ParamBind("i"))
            ]
          })
      })
    })
  })

  suite("DELETE", () => {
    suite("error handling", () => {
      test("when invalid DELETE, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("DELETE FROM WHERE &key"))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .toBe("SyntaxError")
          .like("missing Name at 'WHERE'")
      })
    })

    test("when valid DELETE with WHERE &param, a DeleteStmt must be returned", () => {
      // (1) act
      const out = parser.parse("DELETE FROM bands WHERE &name")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(DeleteStmt)
        .toHave({containerName: "bands"})
        .get("[0].keyValue")
        .toBe(KeyValue)
        .toHave({values: [new KeyFieldValue("name", "=", new ParamBind("name"))]})
    })
  })

  suite("SET", () => {
    suite("error handling", () => {
      test("when invalid SET, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("SET INTO bands()"))

        // (2) assessment
        expected(out).it(0).equalTo(false).it(1).toBe("SyntaxError").like("mismatched input")
      })
    })

    test("when value is param, SetStmt w/ ParamBind must be returned", () => {
      // (1) act
      const out = parser.parse("SET INTO bands(&band)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(SetStmt)
        .toHave({containerName: "bands", value: new ParamBind("band")})
    })

    const band = {name: "Editors", origin: "England", year: 2002, platinum: true}

    test("when value as literal map, SetStmt w/ map must be returned", () => {
      // (1) act
      const out = parser.parse(
        "SET INTO bands({name: 'Editors', origin: 'England', year: 2002, platinum: true})"
      )

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(SetStmt)
        .toHave({containerName: "bands", value: band})
    })

    test("when value as inline map, SetStmt w/ map must be returned", () => {
      // (1) act
      const out = parser.parse(
        "SET INTO bands(name: 'Editors', origin: 'England', year: 2002, platinum: true)"
      )

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(SetStmt)
        .toHave({containerName: "bands", value: band, returning: undefined})
    })

    test("when RETURNING *, SetStmt w/ returning must be returned", () => {
      // (1) act
      const out = parser.parse("SET INTO bands(name: 'Editors') RETURNING *")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(SetStmt)
        .toHave({containerName: "bands", value: {name: "Editors"}, returning: "*"})
    })
  })
})
