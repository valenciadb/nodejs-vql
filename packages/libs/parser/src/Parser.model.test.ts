import expected from "@akromio/expected"
import peval from "@akromio/peval"

import Datum from "./Datum.js"
import Parser from "./Parser.js"
import {
  CryptoIvStmt,
  CryptoKeyStmt,
  FieldLevelTde,
  ParamBind,
  SchemaStmt,
  StreamStmt,
  TableLevelTde,
  TableStmt
} from "./stmts/index.js"

suite(import.meta.url, () => {
  const parser = new Parser()

  suite("TABLE", () => {
    suite("error handling", () => {
      test("when invalid TABLE, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("TABLE bands: Band()"))

        // (2) assessment
        expected(out).it(0).equalTo(false).it(1).toBe("SyntaxError").like("missing 'KEY' at")
      })

      test("when table name starts with 'sys.', error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("TABLE sys.bands KEY(name)"))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .toBe("SyntaxError")
          .like("System tables can't defined by the user: sys.bands.")
      })
    })

    test("when schema unset, TableStmt w/ schema to undefined must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE bands KEY(band)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          connectorName: undefined,
          tableName: "bands",
          schemaName: undefined,
          mode: "READ WRITE",
          keyFields: [{name: "band", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined,
          ttl: undefined
        })
    })

    test("when connector set, TableStmt w/ connector name must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE bands@db KEY(band)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          connectorName: "db",
          tableName: "bands",
          schemaName: undefined,
          mode: "READ WRITE",
          keyFields: [{name: "band", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined,
          ttl: undefined
        })
    })

    test("when READ ONLY, TableStmt w/ READ ONLY kind must be returned", () => {
      // (1) act
      const out = parser.parse("READ ONLY TABLE bands KEY(band)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          connectorName: undefined,
          tableName: "bands",
          schemaName: undefined,
          mode: "READ ONLY",
          keyFields: [{name: "band", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined,
          ttl: undefined
        })
    })

    test("when APPEND ONLY, TableStmt w/ APPEND ONLY kind must be returned", () => {
      // (1) act
      const out = parser.parse("APPEND ONLY TABLE bands KEY(band)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          connectorName: undefined,
          tableName: "bands",
          schemaName: undefined,
          mode: "APPEND ONLY",
          keyFields: [{name: "band", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined,
          ttl: undefined
        })
    })

    suite("KEY", () => {
      test("when simple key used, TableStmt must be returned", () => {
        // (1) act
        const out = parser.parse("TABLE bands KEY(band)")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(TableStmt)
          .toHave({
            tableName: "bands",
            schemaName: undefined,
            mode: "READ WRITE",
            keyFields: [{name: "band", dataType: "text"}],
            cryptoKeyName: undefined,
            cryptoIvName: undefined,
            defaults: undefined,
            ttl: undefined
          })
      })

      test("when composite key (2) used, TableStmt must be returned", () => {
        // (1) act
        const out = parser.parse("TABLE bands KEY(origin, band)")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(TableStmt)
          .toHave({
            tableName: "bands",
            schemaName: undefined,
            mode: "READ WRITE",
            keyFields: [
              {name: "origin", dataType: "text"},
              {name: "band", dataType: "text"}
            ],
            cryptoKeyName: undefined,
            cryptoIvName: undefined,
            defaults: undefined
          })
      })

      test("when composite key (3) used, TableStmt must be returned", () => {
        // (1) act
        const out = parser.parse("TABLE t KEY(partition, type, id)")

        // (2) assessment
        expected(out)
          .toHaveLen(1)
          .it(0)
          .toBe(TableStmt)
          .toHave({
            tableName: "t",
            schemaName: undefined,
            mode: "READ WRITE",
            keyFields: [
              {name: "partition", dataType: "text"},
              {name: "type", dataType: "text"},
              {name: "id", dataType: "text"}
            ],
            cryptoKeyName: undefined,
            cryptoIvName: undefined,
            defaults: undefined
          })
      })
    })

    test("when ENCRYPTED WITH, TableStmt w/ TableLevelTde must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE bands KEY(band) ENCRYPTED WITH masterKey, masterIv")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          tableName: "bands",
          schemaName: undefined,
          mode: "READ WRITE",
          keyFields: [{name: "band", dataType: "text"}],
          tde: new TableLevelTde("masterKey", "masterIv"),
          defaults: undefined,
          ttl: undefined
        })
    })

    test("when ENCRYPT WITH, TableStmt w/ FieldLevelTde must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE cards KEY(user) ENCRYPT card WITH masterKey, masterIv")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          tableName: "cards",
          schemaName: undefined,
          mode: "READ WRITE",
          keyFields: [{name: "user", dataType: "text"}],
          tde: new FieldLevelTde("masterKey", "masterIv", "card"),
          defaults: undefined,
          ttl: undefined
        })
    })

    test("when DEFAULT, TableStmt must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE bands: map KEY(id) DEFAULT(id = uuid, inserted = now)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          tableName: "bands",
          schemaName: "map",
          mode: "READ WRITE",
          keyFields: [{name: "id", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: {
            id: {value: new Datum("uuid"), op: "="},
            inserted: {value: new Datum("now"), op: "="}
          },
          ttl: undefined
        })
    })

    test("when TTL, TableStmt w/ TTL must be returned", () => {
      // (1) act
      const out = parser.parse("TABLE bands KEY(band) TTL 10m")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(TableStmt)
        .toHave({
          connectorName: undefined,
          tableName: "bands",
          schemaName: undefined,
          mode: "READ WRITE",
          keyFields: [{name: "band", dataType: "text"}],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined,
          ttl: "10m"
        })
    })
  })

  suite("STREAM", () => {
    test("When connector unset, StreamStmt w/o connector name must be returned", () => {
      // (1) act
      const out = parser.parse("APPEND ONLY STREAM bands KEY(ts: ts, seq)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(StreamStmt)
        .toHave({
          connectorName: undefined,
          streamName: "bands",
          schemaName: undefined,
          mode: "APPEND ONLY",
          keyFields: [
            {name: "ts", dataType: "ts"},
            {name: "seq", dataType: "text"}
          ],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined
        })
    })

    test("When connector set, StreamStmt w/ connector name must be returned", () => {
      // (1) act
      const out = parser.parse("APPEND ONLY STREAM bands@streaming KEY(ts: ts, seq)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(StreamStmt)
        .toHave({
          connectorName: "streaming",
          streamName: "bands",
          schemaName: undefined,
          mode: "APPEND ONLY",
          keyFields: [
            {name: "ts", dataType: "ts"},
            {name: "seq", dataType: "text"}
          ],
          cryptoKeyName: undefined,
          cryptoIvName: undefined,
          defaults: undefined
        })
    })
  })

  suite("SCHEMA", () => {
    suite("error handling", () => {
      test("when invalid SCHEMA, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("SCHEMA Band()"))

        // (2) assessment
        expected(out).it(0).equalTo(false).it(1).toBe("SyntaxError").like("expecting")
      })
    })

    test("when valid SCHEMA name(fields), SchemaStmt must be returned", () => {
      // (1) act
      const out = parser.parse("SCHEMA Band(*)")

      // (2) assessment
      expected(out).toHaveLen(1).it(0).toBe(SchemaStmt).toHave({
        schemaName: "Band",
        baseSchemaName: undefined,
        validator: "*"
      })
    })
  })

  suite("CRYPTO KEY", () => {
    suite("error handling", () => {
      test("when invalid CRYPTO KEY, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("CRYPTO KEY myKey"))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .toBe("SyntaxError")
          .like("mismatched input '<EOF>' expecting")
      })
    })

    test("when param used, CryptoKeyStmt w/ ParamBind must be returned", () => {
      // (1) act
      const out = parser.parse("CRYPTO KEY master(&key)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(CryptoKeyStmt)
        .toHave({name: "master", key: new ParamBind("key")})
    })

    test("when inline map used, CryptoKeyStmt w/ map must be returned", () => {
      // (1) act
      const out = parser.parse("CRYPTO KEY master(seed: 'my seed', salt: 'my salt', len: 256)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(CryptoKeyStmt)
        .toHave({
          name: "master",
          options: {seed: "my seed", salt: "my salt", len: 256}
        })
    })
  })

  suite("CRYPTO IV", () => {
    suite("error handling", () => {
      test("when invalid CRYPTO IV, error must be raised", () => {
        // (1) act
        const out = peval(() => parser.parse("CRYPTO IV myIV"))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .toBe("SyntaxError")
          .like("mismatched input '<EOF>' expecting")
      })
    })

    test("when IV is param bind, CryptoIvStmt w/ ParamBind must be returned", () => {
      // (1) act
      const out = parser.parse("CRYPTO IV master(&iv)")

      // (2) assessment
      expected(out)
        .toHaveLen(1)
        .it(0)
        .toBe(CryptoIvStmt)
        .toHave({name: "master", iv: new ParamBind("iv")})
    })

    test("when IV is literal, CryptoIvStmt w/ literal must be returned", () => {
      // (1) act
      const iv = "1234567890123456"
      const out = parser.parse(`CRYPTO IV master('${iv}')`)

      // (2) assessment
      expected(out).toHaveLen(1).it(0).toBe(CryptoIvStmt).toHave({name: "master", iv})
    })
  })

  test("when several statements, several statements must be returned", () => {
    // (1) act
    const out = parser.parse("SCHEMA Band(*); TABLE bands: Band KEY(name)")

    // (2) assessment
    expected(out).toHaveLen(2).it(0).toBe(SchemaStmt).it(1).toBe(TableStmt)
  })
})
