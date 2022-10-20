import expected from "@akromio/expected"
import {monitor, simulator, field, method} from "@akromio/doubles"
import {CryptoIvStmt, CryptoKeyStmt, SchemaStmt, StreamStmt, TableStmt} from "@vql/parser"
import {ContainerType, CryptoIv, CryptoKey, defaultSchemaValidator, Schema} from "@vql/model"

import {ItemQueryResult} from "../../results"
import ModelRunner from "./ModelRunner"

suite(import.meta.url, () => {
  suite("runSchemaQuery()", () => {
    test("when validator is *, defaultSchemaValidator must be used", () => {
      // (1) arrange
      const schemas = monitor(simulator({addSchema: method.returns()}))
      const model = simulator({schemas: field.returns(schemas)})
      const runner = new ModelRunner(model, simulator())

      // (2) act
      const out = runner.runSchemaQuery(new SchemaStmt("Band", "*"))

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      const log = monitor.log(schemas, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).toHaveLen(1).it(0).toBe(Schema).toHave({
        name: "Band",
        validator: defaultSchemaValidator
      })
    })

    test("when validator is function, defaultSchemaValidator must not be used", () => {
      // (1) arrange
      const schemas = monitor(simulator({addSchema: method.returns()}))
      const model = simulator({schemas: field.returns(schemas)})
      const runner = new ModelRunner(model, simulator())
      const validator = () => null

      // (2) act
      const out = runner.runSchemaQuery(new SchemaStmt("Band", validator))

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      const log = monitor.log(schemas, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).toHaveLen(1).it(0).toBe(Schema).toHave({
        name: "Band",
        validator
      })
    })
  })

  suite("runTableQuery()", () => {
    test("when called w/o connector, default must be used", () => {
      // (1) arrange
      const containers = monitor(simulator({addContainer: method.returns()}))
      const model = simulator({containers})
      const connector = simulator()
      const connectors = monitor(simulator({getConnector: method.returns(connector)}))
      const runner = new ModelRunner(model, connectors)

      // (2) act
      const out = runner.runTableQuery(
        new TableStmt(
          undefined,
          "bands",
          undefined,
          "READ WRITE",
          [{name: "band", dataType: "text"}],
          undefined,
          {},
          undefined
        )
      )

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      let log = monitor.log(connectors, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo(["default"])

      log = monitor.log(containers, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).toHaveLen(1).it(0).toBe("ReadWriteContainer").toHave({
        kind: ContainerType.table
      })
    })
  })

  suite("runStreamQuery()", () => {
    test("when called w/ connector, this must be used", () => {
      // (1) arrange
      const containers = monitor(simulator({addContainer: method.returns()}))
      const model = simulator({containers})
      const connector = simulator()
      const connectors = monitor(simulator({getConnector: method.returns(connector)}))
      const runner = new ModelRunner(model, connectors)

      // (2) act
      const out = runner.runStreamQuery(
        new StreamStmt(
          "streaming",
          "newBands",
          undefined,
          "READ WRITE",
          [
            {name: "ts", dataType: "text"},
            {name: "seq", dataType: "text"}
          ],
          undefined,
          {}
        )
      )

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      let log = monitor.log(connectors, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo(["streaming"])

      log = monitor.log(containers, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).toHaveLen(1).it(0).toBe("ReadWriteContainer").toHave({
        kind: ContainerType.stream
      })
    })
  })

  suite("runCryptoIvQuery()", () => {
    test("when called, model.cryptoIvs.addIv() must be called", () => {
      // (1) arrange
      const cryptoIvs = monitor(simulator({addIv: method.returns()}))
      const model = monitor(simulator({cryptoIvs}))
      const runner = new ModelRunner(model, simulator())

      // (2) act
      const out = runner.runCryptoIvQuery(new CryptoIvStmt("iv", "1234567890123456"))

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      const log = monitor.log(cryptoIvs, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).toHaveLen(1).it(0).toBe(CryptoIv).toHave({
        name: "iv",
        iv: "1234567890123456"
      })
    })
  })

  suite("runCryptoKeyQuery()", () => {
    test("when seed passed, the key must be generated and cryptoKeys.addKey() must be called", async () => {
      // (1) arrange
      const cryptoKeys = monitor(simulator({addKey: method.returns()}))
      const model = monitor(simulator({cryptoKeys}))
      const runner = new ModelRunner(model, simulator())

      // (2) act
      const out = await runner.runCryptoKeyQuery(
        new CryptoKeyStmt("master", {seed: "my seed", salt: "my salt", len: 256})
      )

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true})

      const log = monitor.log(cryptoKeys, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .toHaveLen(1)
        .it(0)
        .toBe(CryptoKey)
        .toHave({name: "master"})
        .get("[0].key")
        .toBe("CryptoKey")
    })
  })
})
