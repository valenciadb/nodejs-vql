import path from "node:path"
import fs from "node:fs/promises"
import fsx from "fs-extra"
import os from "node:os"
import expected from "@akromio/expected"
import {monitor, interceptor, method} from "@akromio/doubles"
import {bands} from "@vql/test-fixture"

import FsConnector from "./FsConnector"
import FsConnectorOptions from "./FsConnectorOptions"

suite(import.meta.url, () => {
  const options: FsConnectorOptions = {
    baseDirPath: path.join(os.tmpdir(), "vql", "connector", "fs")
  }

  const {table} = bands
  const index = table.indexes.primary
  const value = bands.data.simpleMinds
  const item = {value}
  let encodedValue: string

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(value)
  })

  suite("canWrite()", () => {
    test("when called, false must be returned", () => {
      // (1) act
      const connector = new FsConnector("default", options)
      const out = connector.canWrite()

      // (2) assessment
      expected(out).equalTo(true)
    })
  })

  suite("getTableItemUsingIdKey()", () => {
    test("when file not found, null must be returned", async () => {
      // (1) arrange
      const fsp = interceptor(fs, {
        readFile: method.rejects(new Error("no such file or directory"))
      })

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const id = {field: "name", value: value.name}
      const out = await connector.getTableItemUsingIdKey(table, index, id)

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
      const id = {field: "name", value: value.name}
      const out = await connector.getTableItemUsingIdKey(table, index, id)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, id.value),
        "utf8"
      ])
    })
  })

  suite("removeTableItemUsingIdKey()", () => {
    test("when item not found, nothing to do", async () => {
      // (1) arrange
      const fsp = monitor(
        interceptor(fs, {
          stat: method.rejects(new Error("no such file or directory"))
        }),
        {methods: ["stat", "unlink"]}
      )

      const connector = new FsConnector("default", options, fsp)

      // (2) act
      const id = {field: "name", value: value.name}
      const out = await connector.removeTableItemUsingIdKey(table, index, id)

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([path.join(options.baseDirPath, table.name, id.value)])
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
      const id = {field: "name", value: value.name}
      const out = await connector.removeTableItemUsingIdKey(table, index, id)

      // (3) expected
      expected(out).toBeNull()

      const log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(2)
      for (let i = 0; i < log.calls; i += 1) {
        expected(log.getCall(i).args).equalTo([
          path.join(options.baseDirPath, table.name, id.value)
        ])
      }
    })
  })

  suite("setTableItemUsingIdKey()", () => {
    test("when id key set, item must be inserted", async () => {
      // (1) arrange
      const fsp = monitor(interceptor(fs, {writeFile: method.resolves()}), {
        method: "writeFile"
      })

      const fsxp = monitor(interceptor(fsx, {ensureDir: method.resolves()}), {
        method: "ensureDir"
      })

      const connector = new FsConnector("default", options, fsp, fsxp)

      // (2) act
      const id = {field: "name", value: value.name}
      const out = await connector.setTableItemUsingIdKey(table, index, id, item)

      // (3) expected
      expected(out).equalTo(item)

      let log = monitor.log(fsxp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([path.join(options.baseDirPath, table.name)])

      log = monitor.log(fsp, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        path.join(options.baseDirPath, table.name, value.name),
        encodedValue
      ])
    })
  })
})
