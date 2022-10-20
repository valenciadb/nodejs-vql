import expected from "@akromio/expected"
import {simulator, method, interceptor, monitor} from "@akromio/doubles"
import {DeleteStmt, KeyFieldValue, KeyValue, SelectStmt, SetStmt} from "@vql/parser"
import UserRunner from "./UserRunner"
import {ItemQueryResult, ItemsQueryResult} from "../../results"
import {songsByYear} from "@vql/test-fixture"

suite(import.meta.url, () => {
  const {table} = songsByYear
  const index = table.indexes.primary

  suite("runSelectQuery()", () => {
    suite("getItem()", () => {
      const value = songsByYear.data.editors["2005"].Blood
      const item = {value}

      test("when called and item exists, an ItemQueryResult must be returned", async () => {
        // (1) arrange
        const connector = monitor(
          simulator({getTableItemUsingCompleteKey: method.resolves(item)})
        )
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          table.name,
          new KeyValue([
            new KeyFieldValue("band", "=", value.band),
            new KeyFieldValue("year", "=", value.year),
            new KeyFieldValue("song", "=", value.song)
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
          {field: "year", value: value.year},
          {field: "song", value: value.song}
        ])
      })
    })

    suite("getItems()", () => {
      test("when called w/ partition and discriminator, an ItemsQueryResult must be returned", async () => {
        // (1) arrange
        const items = Object.values(songsByYear.data.editors["2005"]).map((value) => ({value}))
        const connector = monitor(
          simulator({getTableItemsUsingPartitionAndDiscriminatorKeys: method.resolves(items)})
        )
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new SelectStmt(
          table.name,
          new KeyValue([
            new KeyFieldValue("band", "=", "Editors"),
            new KeyFieldValue("year", "=", "2005")
          ])
        )

        // (2) act
        const out = await runner.runSelectQuery(stmt)

        // (3) assessment
        expected(out).toBe(ItemsQueryResult).toHave({ok: true, items})

        const log = monitor.log(connector, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          tbl,
          index,
          {field: "band", value: "Editors"},
          {field: "year", value: "2005"}
        ])
      })
    })
  })

  suite("runDeleteQuery()", () => {
    suite("removeItem()", () => {
      const value = songsByYear.data.editors["2005"].Blood

      test("when called, an ItemQueryResult must be returned", async () => {
        // (1) arrange
        const connector = monitor(
          simulator({removeTableItemUsingCompleteKey: method.resolves()})
        )
        const tbl = interceptor(table, {connector})
        const containers = simulator({getContainer: method.returns(tbl)})
        const model = simulator({containers})
        const runner = new UserRunner(model)
        const stmt = new DeleteStmt(
          table.name,
          new KeyValue([
            new KeyFieldValue("band", "=", value.band),
            new KeyFieldValue("year", "=", value.year),
            new KeyFieldValue("song", "=", value.song)
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
          {field: "year", value: value.year},
          {field: "song", value: value.song}
        ])
      })
    })
  })

  suite("runSetQuery()", () => {
    const value = songsByYear.data.editors[2005].Bullets
    const item = {value}

    test("when called w/o RETURNING, an ItemQueryResult w/o item must be returned", async () => {
      // (1) arrange
      const connector = monitor(
        simulator({setTableItemUsingCompleteKey: method.resolves(item)})
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
        {field: "band", value: value.band},
        {field: "year", value: value.year},
        {field: "song", value: value.song},
        item
      ])
    })
  })
})
