import expected from "@akromio/expected"
import {simulator, method, interceptor, monitor} from "@akromio/doubles"
import {DeleteStmt, KeyFieldValue, KeyValue, SelectStmt, SetStmt} from "@vql/parser"
import {albums} from "@vql/test-fixture"
import UserRunner from "./UserRunner"
import {ItemQueryResult, ItemsQueryResult} from "../../results"

suite(import.meta.url, () => {
  suite("runSelectQuery()", () => {
    suite("getItem()", () => {
      const {table} = albums
      const index = table.indexes.primary
      const value = albums.data.editors.theBackRoom
      const item = {value}

      test("when called and item exists, an ItemQueryResult must be returned", async () => {
        // (1) arrange
        const connector = monitor(
          simulator({getTableItemUsingPartitionAndIdKeys: method.resolves(item)})
        )
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          table.name,
          new KeyValue([
            new KeyFieldValue("band", "=", value.band),
            new KeyFieldValue("album", "=", value.album)
          ])
        )

        // (2) act
        const out = await runner.runSelectQuery(stmt)

        // (3) assessment
        expected(out).toBe(ItemQueryResult).toHave({ok: true, item})

        const log = monitor.log(connector, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          tbl,
          index,
          {field: "band", value: value.band},
          {field: "album", value: value.album}
        ])
      })
    })

    suite("getItems()", () => {
      const {table} = albums
      const index = table.indexes.primary
      const items = Object.values(albums.data.editors).map((value) => ({value}))

      test("when called, an ItemsQueryResult must be returned", async () => {
        // (1) arrange
        const connector = monitor(
          simulator({getTableItemsUsingPartitionKey: method.resolves(items)})
        )
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          table.name,
          new KeyValue([new KeyFieldValue("band", "=", "Editors")])
        )

        // (2) act
        const out = await runner.runSelectQuery(stmt)

        // (3) assessment
        expected(out).toBe(ItemsQueryResult).toHave({ok: true, items})

        const log = monitor.log(connector, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([tbl, index, {field: "band", value: "Editors"}])
      })
    })
  })

  suite("runDeleteQuery()", () => {
    const {table} = albums
    const index = table.indexes.primary
    const value = albums.data.editors.theBackRoom

    test("when called, an ItemQueryResult must be returned", async () => {
      // (1) arrange
      const connector = monitor(
        simulator({removeTableItemUsingPartitionAndIdKeys: method.resolves()})
      )
      const tbl = interceptor(table, {connector})
      const containers = simulator({getContainer: method.returns(tbl)})
      const model = simulator({containers})
      const runner = new UserRunner(model)
      const stmt = new DeleteStmt(
        table.name,
        new KeyValue([
          new KeyFieldValue("band", "=", value.band),
          new KeyFieldValue("album", "=", value.album)
        ])
      )

      // (2) act
      const out = await runner.runDeleteQuery(stmt)

      // (3) assessment
      expected(out).toBe(ItemQueryResult).toHave({ok: true, item: undefined})

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        tbl,
        index,
        {field: "band", value: value.band},
        {field: "album", value: value.album}
      ])
    })
  })

  suite("runSetQuery()", () => {
    const {table} = albums
    const index = table.indexes.primary
    const value = albums.data.editors.theBackRoom
    const item = {value}

    test("when RETURNING unset, an ItemQueryResult w/o item must be returned", async () => {
      // (1) arrange
      const connector = monitor(
        simulator({setTableItemUsingPartitionAndIdKeys: method.resolves(item)})
      )
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
      expected(log.call.args).equalTo([
        tbl,
        index,
        {field: "band", value: "Editors"},
        {field: "album", value: "The Back Room"},
        item
      ])
    })
  })
})
