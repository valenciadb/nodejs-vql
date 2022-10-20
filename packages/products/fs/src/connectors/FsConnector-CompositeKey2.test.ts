import path from "node:path"
import fs from "node:fs/promises"
import fsx from "fs-extra"
import os from "node:os"
import expected from "@akromio/expected"
import {monitor, interceptor, method} from "@akromio/doubles"
import {albums} from "@vql/test-fixture"

import FsConnector from "./FsConnector"
import FsConnectorOptions from "./FsConnectorOptions"

suite(import.meta.url, () => {
  const options: FsConnectorOptions = {
    baseDirPath: path.join(os.tmpdir(), "vql", "connector", "fs")
  }

  const {table} = albums
  const index = table.indexes.primary

  const values = Object.values(albums.data.editors)
  const items = values.map((value) => ({value}))

  const value = albums.data.editors.theBackRoom
  const item = {value}
  let encodedValue: string

  const partition = {field: "band", value: value.band}
  const id = {field: "album", value: value.album}

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(value)
  })

  suite("getTableItemUsingPartitionAndIdKeys()", () => {
    test("when file not found, null must be returned", async () => {
      // (1) arrange
      const fsp = interceptor(fs, {
        readFile: method.rejects(new Error("no such file or directory"))
      })

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) assessment
      expected(out).toBeNull()
    })

    test("when item found, this must be returned", async () => {
      // (1) arrange
      const fsp = monitor(interceptor(fs, {readFile: method.resolves(encodedValue)}), {
        method: "readFile"
      })

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) assessment
      expected(out).toHave({value})

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, id.value),
        "utf8"
      ])
    })
  })

  suite("getTableItemsUsingPartitionKey()", () => {
    test("when items not found, empty list must be returned", async () => {
      // (1) arrange
      const fsp = monitor(interceptor(fs, {readdir: method.resolves([])}), {method: "readdir"})
      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value),
        {withFileTypes: true}
      ])
    })

    test("when items found, non-empty list must be returned", async () => {
      // (1) arrange
      const readFileBehavior = []
      for (let i = 0; i < values.length; i += 1) {
        readFileBehavior.push({i: 0, resolves: JSON.stringify(values[i])})
      }

      const fsp = interceptor(fs, {
        readdir: method.resolves(
          items.map(({value}) => ({name: value.album, isFile: method.returns(true)}))
        ),
        readFile: method(readFileBehavior)
      })

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).toHaveLen(items.length)
      expected(out.map(({value}) => value))
        .items()
        .toHave({[partition.field]: partition.value})
    })

    test("when table dir not exists, empty list must be returned", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          readdir: method.rejects(new Error("no such file or directory"))
        }),
        {method: "readdir"}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value),
        {withFileTypes: true}
      ])
    })
  })

  suite("removeTableItemUsingPartitionAndIdKeys()", () => {
    test("when file not found, nothing to do", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          stat: method.rejects(new Error("no such file or directory"))
        }),
        {methods: ["stat", "unlink"]}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.removeTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, id.value)
      ])
    })

    test("when item found, file must be removed", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          stat: method.resolves({isFile: () => true}),
          unlink: method.resolves()
        }),
        {methods: ["stat", "unlink"]}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.removeTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(2)
      for (let i = 0; i < log.calls; i += 1) {
        expected(log.getCall(i).args).equalTo([
          path.join(options.baseDirPath, table.name, partition.value, id.value)
        ])
      }
    })
  })

  suite("setTableItemUsingPartitionAndIdKeys()", () => {
    test("when partition and id fields set, this must be inserted", async () => {
      // (1) arrange
      const fsp = monitor(interceptor(fs, {writeFile: method.resolves()}), {
        method: "writeFile"
      })

      const fsxp = monitor(interceptor(fsx, {ensureDir: method.resolves()}), {
        method: "ensureDir"
      })

      const connector = new FsConnector("default", options, fsp, fsxp)

      // (2) act
      const out = await connector.setTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id,
        item
      )

      // (3) expected
      expected(out).equalTo(item)

      let log = monitor.log(fsxp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([path.join(options.baseDirPath, table.name, value.band)])

      log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, value.band, value.album),
        encodedValue
      ])
    })
  })
})
