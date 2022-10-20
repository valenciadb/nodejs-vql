import expected from "@akromio/expected"
import {method, monitor, interceptor, simulator, field} from "@akromio/doubles"
import {bands} from "@vql/test-fixture"
import RedisJsonConnector from "./RedisJsonConnector"

suite(import.meta.url, () => {
  const {table} = bands
  const index = table.indexes.primary
  const value = bands.data.editors
  const item = {value}
  const id = {field: "name", value: value.name}

  suite("canWrite()", () => {
    test("when called, true must be returned", () => {
      // (1) arrange
      const client = simulator()
      const connector = new RedisJsonConnector("default", {client, separator: "/"})

      // (2) act
      const out = connector.canWrite()

      // (3) assessment
      expected(out).equalTo(true)
    })
  })

  suite("setTableItemUsingIdKey()", () => {
    test("when item passed, value must be set", async () => {
      // (1) arrange
      const json = monitor(simulator({SET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setTableItemUsingIdKey(table, index, id, item)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${item.value.name}`, "$", item.value])
    })

    test("when default TTL available, Lua must be used", async () => {
      // (1) arrange
      const tbl = interceptor(table, {defaultTtl: field.returns(1)})
      const client = monitor(simulator({EVAL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setTableItemUsingIdKey(tbl, index, id, item)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local key")
        .it(1)
        .toHave({
          keys: [`${tbl.name}/${item.value.name}`],
          arguments: ["1", JSON.stringify(item.value)]
        })
    })
  })

  suite("getTableItemUsingIdKey()", () => {
    test("when found, item must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves(value)}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingIdKey(table, index, id)

      // (3) assessment
      expected(out!.value).toHave({[id.field]: id.value})

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${id.value}`])
    })

    test("when not found, undefined must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingIdKey(table, index, id)

      // (3) assessment
      expected(out).toBeNil()

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${id.value}`])
    })
  })

  suite("removeTableItemUsingIdKey()", () => {
    test("when item exists, item must be removed", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingIdKey(table, index, id)

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${id.value}`])
    })

    test("when item not exists, nothing to do", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingIdKey(table, index, id)

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${id.value}`])
    })
  })
})
