import expected from "@akromio/expected"
import {simulator, method, interceptor, monitor} from "@akromio/doubles"
import {DeleteStmt, KeyFieldValue, KeyValue, SelectStmt, SetStmt} from "@vql/parser"
import {ModelError} from "@vql/model"
import {bands} from "@vql/test-fixture"
import UserRunner from "./UserRunner"
import {ItemQueryResult} from "../../results"

suite(import.meta.url, () => {
  suite("runSelectQuery()", () => {
    suite("error handling", () => {
      const {table} = bands
      const item = {value: bands.data.simpleMinds}

      test("when index not found, error must be raised", async () => {
        // (1) arrange
        const containers = simulator({getContainer: method.returns(table)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          "bands",
          new KeyValue([new KeyFieldValue("NAME", "=", item.value.name)])
        )

        // (2) act
        let out: any

        try {
          await runner.runSelectQuery(stmt)
        } catch (e) {
          out = e
        }

        // (3) assessment
        expected(out).equalTo(new ModelError("Index not found on 'bands' for 'NAME'."))
      })

      test("when table not found in model, error must be raised", async () => {
        // (1) arrange
        const containers = simulator({getContainer: method.returns()})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          "BANDS",
          new KeyValue([new KeyFieldValue("name", "=", item.value.name)])
        )

        // (2) act
        let out: any

        try {
          await runner.runSelectQuery(stmt)
        } catch (e) {
          out = e
        }

        // (3) assessment
        expected(out).equalTo(new ModelError("Container not found in the model: BANDS."))
      })

      test("when table isn't readable, error must be raised", async () => {
        // (1) arrange
        const tbl = interceptor(table, {isReadable: method.returns(false)})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          "bands",
          new KeyValue([new KeyFieldValue("name", "=", item.value.name)])
        )

        // (2) act
        let out: any

        try {
          await runner.runSelectQuery(stmt)
        } catch (e) {
          out = e
        }

        // (3) assessment
        expected(out).equalTo(new ModelError("Container 'bands' isn't readable."))
      })
    })

    suite("getItem()", () => {
      const {table} = bands
      const index = table.indexes.primary
      const value = bands.data.simpleMinds
      const item = {value}

      test("when called and item exists, an ItemQueryResult must be returned", async () => {
        // (1) arrange
        const connector = monitor(simulator({getTableItemUsingIdKey: method.resolves(item)}))
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          table.name,
          new KeyValue([new KeyFieldValue("name", "=", value.name)])
        )

        // (2) act
        const out = await runner.runSelectQuery(stmt)

        // (3) assessment
        expected(out).toBe(ItemQueryResult).toHave({ok: true, item})

        const log = monitor.log(connector, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([tbl, index, {field: "name", value: value.name}])
      })
    })
  })

  suite("runDeleteQuery()", () => {
    const {table} = bands
    const index = table.indexes.primary
    const value = bands.data.simpleMinds

    suite("error handling", () => {
      test("when table is not deletable, error must be raised", async () => {
        // (1) arrange
        const tbl = interceptor(table, {isDeletable: method.returns(false)})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new DeleteStmt(
          table.name,
          new KeyValue([new KeyFieldValue("name", "=", value.name)])
        )

        // (2) act
        let out: any

        try {
          await runner.runDeleteQuery(stmt)
        } catch (e) {
          out = e
        }

        // (3) assessment
        expected(out).equalTo(new ModelError(`Container '${table.name}' isn't deletable.`))
      })
    })

    test("when called, an ItemQueryResult must be returned", async () => {
      // (1) arrange
      const connector = monitor(simulator({removeTableItemUsingIdKey: method.resolves()}))
      const tbl = interceptor(table, {connector})
      const containers = simulator({getContainer: method.returns(tbl)})
      const model = simulator({containers})
      const runner = new UserRunner(model)
      const stmt = new DeleteStmt(
        table.name,
        new KeyValue([new KeyFieldValue("name", "=", value.name)])
      )

      // (2) act
      const out = await runner.runDeleteQuery(stmt)

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true, item: undefined})

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([tbl, index, {field: "name", value: value.name}])
    })
  })

  suite("runSetQuery()", () => {
    const {table} = bands
    const index = table.indexes.primary
    const value = bands.data.simpleMinds
    const item = {value}

    suite("error handling", () => {
      test("when read only table, error must be raised", async () => {
        // (1) arrange
        const tbl = interceptor(table, {isWritable: method.returns(false)})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SetStmt(table.name, value, undefined)

        // (2) act
        let out: any

        try {
          await runner.runSetQuery(stmt)
        } catch (e) {
          out = e
        }

        // (3) assessment
        expected(out).equalTo(new ModelError(`Container '${table.name}' isn't writable.`))
      })
    })

    test("when RETURNING unset, an ItemQueryResult w/o item must be returned", async () => {
      // (1) arrange
      const connector = monitor(simulator({setTableItemUsingIdKey: method.resolves(item)}))
      const tbl = interceptor(table, {connector})
      const containers = simulator({getContainer: method.returns(tbl)})
      const model = simulator({containers})
      const runner = new UserRunner(model)
      const stmt = new SetStmt(table.name, value, undefined)

      // (2) act
      const out = await runner.runSetQuery(stmt)

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true, item: undefined})

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([tbl, index, {field: "name", value: value.name}, item])
    })

    test("when RETURNING *, ItemQueryResult w/ item must be returned", async () => {
      // (1) arrange
      const connector = monitor(simulator({setTableItemUsingIdKey: method.resolves(item)}))
      const tbl = interceptor(table, {connector})
      const containers = simulator({getContainer: method.returns(tbl)})
      const model = simulator({containers})
      const runner = new UserRunner(model)
      const stmt = new SetStmt(table.name, item.value, "*")

      // (2) act
      const out = await runner.runSetQuery(stmt)

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true, item})

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([tbl, index, {field: "name", value: value.name}, item])
    })
  })

  // suite("getTableAndIndexOfQuery()", () => {
  //   suite("error handling", () => {
  //     test("when index not found, ModelError must be raised", async () => {
  //       // (1) arrange
  //       const containers = simulator({getContainer: method.returns(table)})
  //       const model = simulator({containers})
  //       const connector = simulator()
  //       const runner = new UserRunner(model, connector)
  //       const stmt = new SelectStmt(
  //         table.name,
  //         new KeyValue([new KeyFieldValue("NAME", "=", item.value.name)])
  //       )

  //       // (2) act
  //       let out: any

  //       try {
  //         await runner.runSelectQuery(stmt)
  //       } catch (e) {
  //         out = e
  //       }

  //       // (3) assessment
  //       expected(out).equalTo(new ModelError(`Index not found on '${table.name}' for 'NAME'.`))
  //     })
  //   })
  // })
})
