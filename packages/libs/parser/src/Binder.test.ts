import expected from "@akromio/expected"
import Binder from "./Binder"
import Params from "./Params"
import {
  CryptoIvStmt,
  CryptoKeyStmt,
  KeyFieldValue,
  KeyValue,
  ParamBind,
  SchemaStmt,
  SelectStmt,
  SetStmt
} from "./stmts"

suite(import.meta.url, () => {
  const binder = new Binder()

  suite("replaceParamsInItemQuery()", () => {
    test("when statement contains params, these must be replaced", () => {
      // (1) act
      const stmt = new SelectStmt(
        "bands",
        new KeyValue([new KeyFieldValue("name", "=", new ParamBind("name"))])
      )
      const out = binder.eval(stmt, new Params({name: "Editors"})) as SelectStmt

      // (2) assessment
      expected(out).sameAs(stmt).get("keyValue.values[0].value").equalTo("Editors")
    })
  })

  suite("replaceParamsInSetQuery()", () => {
    test("when statement contains params, these must be replaced", () => {
      // (1) act
      const stmt = new SetStmt("bands", new ParamBind("band"), undefined)
      const band = {name: "Editors", origin: "England"}
      const out = binder.eval(stmt, new Params({band}))

      // (2) assessment
      expected(out).sameAs(stmt).member("value").equalTo(band)
    })
  })

  suite("replaceParamsInCryptoKeyQuery()", () => {
    test("when statement contains params, these must be replaced", () => {
      // (1) act
      const stmt = new CryptoKeyStmt("master", new ParamBind("key"))
      const out = binder.eval(stmt, new Params({key: {}}))

      // (2) assessment
      expected(out).sameAs(stmt).member("key").equalTo({})
    })
  })

  suite("replaceParamsInCryptoIvQuery()", () => {
    test("when statement contains params, these must be replaced", () => {
      // (1) act
      const stmt = new CryptoIvStmt("iv", new ParamBind("iv"))
      const out = binder.eval(stmt, new Params({iv: "1234567890123456"}))

      // (2) assessment
      expected(out).sameAs(stmt).member("iv").equalTo("1234567890123456")
    })
  })

  suite("replaceParamsInSchemaQuery()", () => {
    test("when statement contains params, these must be replaced", () => {
      // (1) arrange
      const validator = () => null
      const stmt = new SchemaStmt("Band", new ParamBind("validator"))

      // (2) act
      const out = binder.eval(stmt, new Params({validator}))

      // (3) assessment
      expected(out).sameAs(stmt).member("_validator").sameAs(validator)
    })
  })
})
