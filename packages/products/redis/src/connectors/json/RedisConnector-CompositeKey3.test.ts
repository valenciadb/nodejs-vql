import expected from "@akromio/expected"
import {method, monitor, simulator} from "@akromio/doubles"
import {songsByYear} from "@vql/test-fixture"
import RedisJsonConnector from "./RedisJsonConnector"

suite(import.meta.url, () => {
  const {table} = songsByYear
  const index = table.indexes.primary
  const value = songsByYear.data.editors["2005"].Blood
  const item = {value}
  const partition = {field: "band", value: value.band}
  const discriminator = {field: "year", value: value.year}
  const id = {field: "song", value: value.song}

  suite("setTableItemUsingCompleteKey()", () => {
    test("when item passed, value must be set", async () => {
      // (1) arrange
      const json = monitor(simulator({SET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.setTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id,
        item
      )

      // (3) assessment
      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${discriminator.value}/${id.value}`,
        "$",
        item.value
      ])
    })
  })

  suite("getTableItemUsingCompleteKey()", () => {
    test("when item found, item must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves(item.value)}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      expected(out!.value).toHave(item.value)

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${discriminator.value}/${id.value}`
      ])
    })

    test("when item not found, undefined must be returned", async () => {
      // (1) arrange
      const json = monitor(simulator({GET: method.resolves()}))
      const client = simulator({json})
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      expected(out).toBeNil()

      const log = monitor.log(json, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${discriminator.value}/${id.value}`
      ])
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

      const log = monitor.log(client)
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local keys")
        .it(1)
        .equalTo({arguments: [`${table.name}/${partition.value}`]})
    })

    test("when found, non-empty list must be returned", async () => {
      // (1) arrange
      const values = Object.values(songsByYear.data.editors)
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

  suite("getTableItemsUsingPartitionAndDiscriminatorKeys()", () => {
    test("when found, non-empty list must be returned", async () => {
      // (1) arrange
      const values = Object.values(songsByYear.data.editors["2005"])
      const encodedValues = values.map((value) => JSON.stringify([value]))
      const items = values.map((value) => ({value}))
      const client = monitor(simulator({EVAL: method.resolves(encodedValues)}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
        table,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).equalTo(items)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local keys")
        .it(1)
        .equalTo({arguments: [`${table.name}/${partition.value}/${discriminator.value}`]})
    })

    test("when not found, empty list must be returned", async () => {
      // (1) arrange
      const client = monitor(simulator({EVAL: method.resolves([])}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.getTableItemsUsingPartitionAndDiscriminatorKeys(
        table,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).toBeEmpty()

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args)
        .it(0)
        .like("local keys")
        .it(1)
        .equalTo({arguments: [`${table.name}/${partition.value}/${discriminator.value}`]})
    })
  })

  suite("removeTableItemUsingCompleteKey()", () => {
    test("when item exists, item must be removed", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${discriminator.value}/${id.value}`
      ])
    })

    test("when item not exists, nothing to do", async () => {
      // (1) arrange
      const client = monitor(simulator({DEL: method.resolves()}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      await connector.removeTableItemUsingCompleteKey(
        table,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${table.name}/${partition.value}/${discriminator.value}/${id.value}`
      ])
    })
  })
})
