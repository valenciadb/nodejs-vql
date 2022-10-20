import path from "node:path"
import fs from "node:fs/promises"
import fsx from "fs-extra"
import os from "node:os"
import expected from "@akromio/expected"
import {monitor, interceptor, method} from "@akromio/doubles"
import {songsByYear} from "@vql/test-fixture"

import FsConnector from "./FsConnector"
import FsConnectorOptions from "./FsConnectorOptions"

suite(import.meta.url, () => {
  const options: FsConnectorOptions = {
    baseDirPath: path.join(os.tmpdir(), "vql", "connector", "fs")
  }

  const {table} = songsByYear
  const index = table.indexes.primary

  const value = songsByYear.data.editors[2005].Blood
  const item = {value}
  let encodedValue: string

  const partition = {field: "band", value: value.band}
  const discriminator = {field: "year", value: value.year}
  const id = {field: "song", value: value.song}

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(item.value)
  })

  suite("getTableItemUsingCompleteKey()", () => {
    test("when file not found, null must be returned", async () => {
      // (1) arrange
      const fsp = interceptor(fs, {
        readFile: method.rejects(new Error("no such file or directory"))
      })

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
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
      const out = await connector.getTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      expected(out).toHave({value})

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(
          options.baseDirPath,
          table.name,
          partition.value,
          discriminator.value,
          id.value
        ),
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
      const years = [
        {name: "2005", isDirectory: method.returns(true)},
        {name: "2007", isDirectory: method.returns(true)}
      ]

      const year2005 = Object.values(songsByYear.data.editors["2005"]).map(({song}) => ({
        name: song,
        isFile: method.returns(true)
      }))

      const year2007 = Object.values(songsByYear.data.editors["2007"]).map(({song}) => ({
        name: song,
        isFile: method.returns(true)
      }))

      const readDirBehavior = [
        {i: 0, resolves: years},
        {i: 1, resolves: year2005},
        {i: 2, resolves: year2007}
      ]

      const values = Object.values(songsByYear.data.editors["2005"])
      values.push(...Object.values(songsByYear.data.editors["2007"]))
      const readFileBehavior = []
      for (let i = 0; i < values.length; i += 1) {
        readFileBehavior.push({i: 0, resolves: JSON.stringify(values[i])})
      }

      const fsp = monitor(
        interceptor(fs, {
          readdir: method(readDirBehavior),
          readFile: method(readFileBehavior)
        }),
        {methods: ["readdir"]}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).toHaveLen(values.length)
      expected(out.map(({value}) => value))
        .items()
        .toHave({[partition.field]: partition.value})

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(3)
      expected(log.getCall(0).args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value),
        {withFileTypes: true}
      ])
      expected(log.getCall(1).args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, "2005"),
        {withFileTypes: true}
      ])
      expected(log.getCall(2).args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, "2007"),
        {withFileTypes: true}
      ])
    })

    test("when dir not found, empty list must be returned", async () => {
      // (1) arrange
      const error = new Error("no such file or directory")
      const fsp = monitor(interceptor(fs, {readdir: method.rejects(error)}))
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

  suite("getTableItemsUsingPartitionAndDiscriminatorKeys()", () => {
    const values = Object.values(songsByYear.data.editors[2005])
    const items = values.map((value) => ({value}))

    test("when items found, non-empty list must be returned", async () => {
      // (1) arrange
      const readFileBehavior = []
      for (let i = 0; i < values.length; i += 1) {
        readFileBehavior.push({i: 0, resolves: JSON.stringify(values[i])})
      }

      const fsp = monitor(
        interceptor(fs, {
          readdir: method.resolves(
            items.map(({value}) => ({name: value.song, isFile: method.returns(true)}))
          ),
          readFile: method(readFileBehavior)
        }),
        {method: "readFile"}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
        table,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).toHaveLen(items.length)
      expected(out.map(({value}) => value))
        .items()
        .toHave({
          [partition.field]: partition.value,
          [discriminator.field]: discriminator.value
        })

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(values.length)
      for (let i = 0; i < values.length; i += 1) {
        const {band, year, song} = values[i]
        expected(log.getCall(i).args).equalTo([
          `${options.baseDirPath}/${table.name}/${band}/${year}/${song}`,
          "utf8"
        ])
      }
    })

    test("when table dir not found, empty list must be returned", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          readdir: method.rejects(new Error("no such file or directory"))
        }),
        {method: "readdir"}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
        table,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, discriminator.value),
        {withFileTypes: true}
      ])
    })

    test("when partition/discriminator dir not found, empty list must be returned", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          readdir: method.rejects(new Error("no such file or directory"))
        }),
        {method: "readdir"}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
        table,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, discriminator.value),
        {withFileTypes: true}
      ])
    })
  })

  suite("removeTableItemUsingCompleteKey()", () => {
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
      const out = await connector.removeTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(
          options.baseDirPath,
          table.name,
          partition.value,
          discriminator.value,
          id.value
        )
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
      const out = await connector.removeTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(2)
      for (let i = 0; i < log.calls; i += 1) {
        expected(log.getCall(i).args).equalTo([
          path.join(
            options.baseDirPath,
            table.name,
            partition.value,
            discriminator.value,
            id.value
          )
        ])
      }
    })
  })

  suite("setTableItemUsingCompleteKey()", () => {
    const item = {value}

    test("when key fields set, this must be inserted", async () => {
      // (1) arrange
      const fsp = monitor(interceptor(fs, {writeFile: method.resolves()}), {
        method: "writeFile"
      })

      const fsxp = monitor(interceptor(fsx, {ensureDir: method.resolves()}), {
        method: "ensureDir"
      })

      const connector = new FsConnector("default", options, fsp, fsxp)

      // (2) act
      const out = await connector.setTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id,
        item
      )

      // (3) expected
      expected(out).equalTo(item)

      let log = monitor.log(fsxp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, partition.value, discriminator.value)
      ])

      log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(
          options.baseDirPath,
          table.name,
          partition.value,
          discriminator.value,
          id.value
        ),
        encodedValue
      ])
    })
  })
})
