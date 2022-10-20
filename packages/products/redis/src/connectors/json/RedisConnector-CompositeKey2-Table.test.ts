import expected from "@akromio/expected"
import {method, monitor, simulator} from "@akromio/doubles"
import {albums} from "@vql/test-fixture"
import RedisJsonConnector from "./RedisJsonConnector"

suite(import.meta.url, () => {
  const {table} = albums
  const index = table.indexes.primary
  const value = albums.data.editors.theBackRoom
  const item = {value}
  const partition = {field: "band", value: value.band}
  const id = {field: "album", value: value.album}

  suite("setTableItemUsingPartitionAndIdKeys()", () => {
    test("when item passed, value must be set and returned", async () => {
      // (1) arrange
      const json = monitor(simulator({SET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id,
        item
      )

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${id.value}`,
        "$",
        value
      ])
    })
  })

  suite("getTableItemUsingPartitionAndIdKeys()", () => {
    test("when item found, item must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves(value)}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) assessment
      expected(out!.value).toHave(value)

      const log = monitor.log(json)
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${partition.value}/${id.value}`])
    })

    test("when item not found, undefined must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) assessment
      expected(out).toBeNil()

      const log = monitor.log(json)
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${partition.value}/${id.value}`])
    })
  })

  suite("getTableItemsUsingPartitionKey()", () => {
    test("when not found, empty list must be returned", async () => {
      // (1) arrange
      const client = monitor(simulator({EVAL: method.resolves([])}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (2) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local keys")
        .it(1)
        .equalTo({arguments: [`${table.name}/${partition.value}`]})
    })

    test("when found, non-empty list must be returned", async () => {
      // (1) arrange
      const values = Object.values(albums.data.editors)
      const items = values.map((value) => ({value}))
      const encodedValues = values.map((value) => JSON.stringify([value]))

      const client = monitor(simulator({EVAL: method.resolves(encodedValues)}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).equalTo(items)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local keys")
        .it(1)
        .equalTo({arguments: [`${table.name}/${partition.value}`]})
    })
  })

  suite("removeTableItemUsingPartitionAndIdKeys()", () => {
    test("when item exists, item must be removed", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingPartitionAndIdKeys(table, index, partition, id)

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${partition.value}/${id.value}`])
    })

    test("when item not exists, nothing to do", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingPartitionAndIdKeys(table, index, partition, id)

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${table.name}/${partition.value}/${id.value}`])
    })
  })
})
