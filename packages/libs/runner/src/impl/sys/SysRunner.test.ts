import expected from "@akromio/expected"
import {field, interceptor, method, simulator} from "@akromio/doubles"
import {KeyFieldValue, KeyValue, SelectStmt} from "@vql/parser"
import {
  ContainerType,
  CryptoIv,
  defaultSchemaValidator,
  Model,
  ModelError,
  Schema
} from "@vql/model"

import SysRunner from "./SysRunner"
import {ItemQueryResult} from "../../results"

suite(import.meta.url, () => {
  const model = new Model()
  const runner = new SysRunner(model)

  model.schemas.addSchema(new Schema("map", defaultSchemaValidator))
  model.cryptoIvs.addIv(new CryptoIv("iv", "1234567890123456"))
  model.cryptoKeys.addKey(
    simulator({
      name: field.returns("master"),
      key: field.returns({algorithm: "AES-CBC", usages: ["encrypt", "decrypt"]})
    })
  )

  suite("runSelectQuery()", () => {
    suite("error handling", () => {
      test("when field name expected not found, error must be raised", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.schemas",
          new KeyValue([new KeyFieldValue("NAME", "=", "unknown")])
        )
        let out: any

        try {
          await runner.runSelectQuery(q)
        } catch (e) {
          out = e
        }

        // (2) assessment
        expected(out).equalTo(new ModelError("Key field name expected: name."))
      })
    })

    suite("sys.schemas", () => {
      test("when schema not found, {ok: true, item: undefined} must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.schemas",
          new KeyValue([new KeyFieldValue("name", "=", "unknown")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out).toBe(ItemQueryResult).toHave({
          ok: true,
          value: undefined
        })
      })

      test("when schema found, item must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.schemas",
          new KeyValue([new KeyFieldValue("name", "=", "map")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out)
          .toBe(ItemQueryResult)
          .toHave({
            ok: true,
            value: {name: "map"}
          })
      })
    })

    suite("sys.containers", () => {
      test("when table not found, {ok: true, item: undefined} must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.containers",
          new KeyValue([new KeyFieldValue("name", "=", "BANDS")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out).toBe(ItemQueryResult).toHave({
          ok: true,
          value: undefined
        })
      })

      test("when table found, item must be returned", async () => {
        // (1) arrange
        const container = {name: "bands", kind: ContainerType.table}
        const containers = simulator({getContainer: method.returns(container)})
        const model = interceptor(new Model(), {containers})
        const runner = new SysRunner(model)

        // (2) act
        const q = new SelectStmt(
          "sys.containers",
          new KeyValue([new KeyFieldValue("name", "=", "bands")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out)
          .toBe(ItemQueryResult)
          .toHave({
            ok: true,
            value: {name: "bands", kind: 0}
          })
      })
    })

    suite("sys.cryptoIvs", () => {
      test("when IV not found, {ok: true, item: undefined} must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.cryptoIvs",
          new KeyValue([new KeyFieldValue("name", "=", "IV")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out).toBe(ItemQueryResult).toHave({
          ok: true,
          value: undefined
        })
      })

      test("when IV found, item must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.cryptoIvs",
          new KeyValue([new KeyFieldValue("name", "=", "iv")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out)
          .toBe(ItemQueryResult)
          .toHave({
            ok: true,
            value: {name: "iv"}
          })
      })
    })

    suite("sys.cryptoKeys", () => {
      test("when key not found, {ok: true, item: undefined} must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.cryptoKeys",
          new KeyValue([new KeyFieldValue("name", "=", "MASTER")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out).toBe(ItemQueryResult).toHave({
          ok: true,
          value: undefined
        })
      })

      test("when key found, item must be returned", async () => {
        // (1) act
        const q = new SelectStmt(
          "sys.cryptoKeys",
          new KeyValue([new KeyFieldValue("name", "=", "master")])
        )
        const out = await runner.runSelectQuery(q)

        // (2) assessment
        expected(out)
          .toBe(ItemQueryResult)
          .toHave({
            ok: true,
            value: {name: "master", algorithm: "AES-CBC", usages: ["encrypt", "decrypt"]}
          })
      })
    })
  })
})
