import expected from "@akromio/expected"
import {monitor, simulator, method} from "@akromio/doubles"
import {ItemQueryResult} from "@vql/runner"
import {Connectors} from "@vql/model"
import {bands} from "@vql/test-fixture"

import Db from "./Db"

suite(import.meta.url, () => {
  const value = bands.data.editors

  teardown(() => {
    monitor.clearAll()
  })

  suite("constructor", () => {
    test("when runners unset, implicit runners set", () => {
      // (1) act
      const out = new Db(simulator())

      // (2) assessment
      expected(out).toBe(Db)
    })
  })

  suite("q()", () => {
    suite("error handling", () => {
      test("when a statement failed, error result must be returned in its position", async () => {
        // (1) arrange
        const connectors = new Connectors()
        const db = new Db(connectors)

        // (2) act
        const out = await db.q(`
        SCHEMA Band(*)
        TABLE bands: Bandit KEY(band)
        `)

        // (3) assessment
        expected(out).it(0).toHave({ok: true}).it(1).toHave({ok: false})
      })
    })

    suite("Model Runner", () => {
      suite("SCHEMA", () => {
        test("when called, modelRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const modelRunner = monitor(simulator({runSchemaQuery: method.returns({ok: true})}))
          const db = new Db(connector, {model: modelRunner})

          // (2) act
          const out = await db.q("SCHEMA Band(*)")

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(modelRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("SchemaStmt")
        })
      })

      suite("TABLE", () => {
        test("when called, modelRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const modelRunner = monitor(simulator({runTableQuery: method.returns({ok: true})}))
          const db = new Db(connector, {model: modelRunner})

          // (2) act
          const out = await db.q("TABLE bands KEY(band)")

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(modelRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("TableStmt")
        })
      })

      suite("STREAM", () => {
        test("when called, modelRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const modelRunner = monitor(simulator({runStreamQuery: method.returns({ok: true})}))
          const db = new Db(connector, {model: modelRunner})

          // (2) act
          const out = await db.q("STREAM newBands KEY(ts, seq)")

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(modelRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("StreamStmt")
        })
      })

      suite("CRYPTO KEY", () => {
        test("when called, modelRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const modelRunner = monitor(
            simulator({runCryptoKeyQuery: method.resolves({ok: true})})
          )
          const db = new Db(connector, {model: modelRunner})

          // (2) act
          const out = await db.q(
            "CRYPTO KEY master(seed: 'my seed', salt: 'my salt', len: 256)"
          )

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(modelRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("CryptoKeyStmt")
        })
      })

      suite("CRYPTO IV", () => {
        test("when called, modelRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const modelRunner = monitor(
            simulator({runCryptoIvQuery: method.returns({ok: true})})
          )
          const db = new Db(connector, {model: modelRunner})

          // (2) act
          const out = await db.q("CRYPTO IV iv('1234567890123456')")

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(modelRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("CryptoIvStmt")
        })
      })
    })

    suite("User Runner", () => {
      suite("SET", () => {
        test("when called, userRunner must be called", async () => {
          // (1) arrange
          const connector = simulator()
          const userRunner = monitor(simulator({runSetQuery: method.resolves({ok: true})}))
          const db = new Db(connector, {user: userRunner})

          await db.q("SCHEMA Band(*); TABLE bands: Band KEY(name)")

          // (2) act
          const out = await db.q("SET INTO bands(&band)", {band: value})

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(userRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("SetStmt")
        })
      })

      suite("SELECT", () => {
        test("when user table, userRunner must be called w/ SelectStmt", async () => {
          // (1) arrange
          const connector = simulator()
          const userRunner = monitor(
            simulator({runSelectQuery: method.resolves(new ItemQueryResult({value}))})
          )
          const db = new Db(connector, {user: userRunner})

          await db.q("TABLE bands KEY(name)")

          // (2) act
          const out = await db.q("SELECT FROM bands WHERE &name", value)

          // (3) assessment
          expected(out).toBe(ItemQueryResult).toHave({
            ok: true,
            item: {value}
          })

          const log = monitor.log(userRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("SelectStmt")
        })

        test("when sys table, sysRunner must be called w/ SelectStmt", async () => {
          // (1) arrange
          const connector = simulator()
          const item = {value: {name: bands}}
          const sysRunner = monitor(
            simulator({
              runSelectQuery: method.resolves(new ItemQueryResult(item))
            })
          )
          const db = new Db(connector, {sys: sysRunner})

          // (2) act
          const out = await db.q("SELECT FROM sys.tables WHERE name = 'bands'")

          // (3) assessment
          expected(out).toBe(ItemQueryResult).toHave({ok: true, item})

          const log = monitor.log(sysRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("SelectStmt")
        })
      })

      suite("DELETE", () => {
        test("when called, userRunner set must be called w/ a DeleteStmt", async () => {
          // (1) arrange
          const connector = simulator()
          const userRunner = monitor(simulator({runDeleteQuery: method.resolves({ok: true})}))
          const db = new Db(connector, {user: userRunner})

          await db.q("SCHEMA Band(*); TABLE bands: Band KEY(name)")

          // (2) act
          const out = await db.q("DELETE FROM bands WHERE &name", value)

          // (3) assessment
          expected(out).toHave({ok: true})

          const log = monitor.log(userRunner)
          expected(log.calls).equalTo(1)
          expected(log.call.args).it(0).toBe("DeleteStmt")
        })
      })
    })
  })
})
