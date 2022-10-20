import expected from "@akromio/expected"
import {method, monitor, simulator} from "@akromio/doubles"
import {newBands} from "@vql/test-fixture"
import RedisJsonConnector from "./RedisJsonConnector"

suite(import.meta.url, () => {
  const {stream} = newBands
  const index = stream.indexes.primary
  const value = newBands.data.editors

  suite("getStreamItemUsingPartitionAndIdKeys()", () => {
    suite("consumer group strategy", () => {
      test("when ts = '*' and seq = '*', XREADGROUP must be used with id being '>'", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "*"}
        const id = {field: "seq", value: "*"}
        const key = "1660976984797-0"
        const message = {value: JSON.stringify(value)}
        const entries = [{name: stream.name, messages: [{id: key, message}]}]
        const client = monitor(simulator({XREADGROUP: method.resolves(entries)}))
        const streamsConf = {group: "xyz", consumer: "zyx"}
        const connector = new RedisJsonConnector("default", {client, streams: streamsConf})

        // (2) act
        const out = await connector.getStreamItemUsingPartitionAndIdKeys(
          stream,
          index,
          partition,
          id
        )

        // (3) assessment
        expected(out!.value).toHave(value)

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          streamsConf.group,
          streamsConf.consumer,
          {key: stream.name, id: ">"},
          {COUNT: 1}
        ])
      })

      test("when ts = '*' and seq = '0', XREADGROUP must be used with id being '0'", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "*"}
        const id = {field: "seq", value: "0"}
        const key = "1660976984797-0"
        const message = {value: JSON.stringify(value)}
        const entries = [{name: stream.name, messages: [{id: key, message}]}]
        const client = monitor(simulator({XREADGROUP: method.resolves(entries)}))
        const streamsConf = {group: "xyz", consumer: "zyx"}
        const connector = new RedisJsonConnector("default", {client, streams: streamsConf})

        // (2) act
        const out = await connector.getStreamItemUsingPartitionAndIdKeys(
          stream,
          index,
          partition,
          id
        )

        // (3) assessment
        expected(out!.value).toHave(value)

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          streamsConf.group,
          streamsConf.consumer,
          {key: stream.name, id: "0"},
          {COUNT: 1}
        ])
      })
    })

    suite("standalone consumer strategy", () => {
      test("when item found, item must be returned", async () => {
        // (1) arrange
        const partition = {field: "ts", value: new Date().valueOf().toString()}
        const id = {field: "seq", value: "0"}
        const key = `${partition.value}-${id.value}`
        const message = {value: JSON.stringify(value)}
        const client = monitor(simulator({XRANGE: method.resolves([{key, message}])}))
        const connector = new RedisJsonConnector("default", {client})

        // (2) act
        const out = await connector.getStreamItemUsingPartitionAndIdKeys(
          stream,
          index,
          partition,
          id
        )

        // (3) assessment
        expected(out!.value).toHave(value)

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([stream.name, key, key])
      })

      test("when item not found, undefined must be returned", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "1660459256261"}
        const id = {field: "seq", value: "0"}
        const key = `${partition.value}-${id.value}`
        const client = monitor(simulator({XRANGE: method.resolves([])}))
        const connector = new RedisJsonConnector("default", {client})

        // (2) act
        const out = await connector.getStreamItemUsingPartitionAndIdKeys(
          stream,
          index,
          partition,
          id
        )

        // (3) assessment
        expected(out).toBeNil()

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([stream.name, key, key])
      })
    })
  })

  suite("getStreamItemsUsingPartitionKey()", () => {
    suite("consumer group strategy", () => {
      test("when ts = '*' and count option set, a batch of items must be read", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "*"}
        const keyPrefix = "1660976984797-"
        const entry1 = {
          id: keyPrefix + "0",
          message: {value: JSON.stringify(newBands.data.editors)}
        }
        const entry2 = {
          id: keyPrefix + "1",
          message: {value: JSON.stringify(newBands.data.simpleMinds)}
        }
        const entries = [{name: stream.name, messages: [entry1, entry2]}]
        const client = monitor(simulator({XREADGROUP: method.resolves(entries)}))
        const streamsConf = {group: "xyz", consumer: "zyx", count: 2}
        const connector = new RedisJsonConnector("default", {client, streams: streamsConf})

        // (2) act
        const out = await connector.getStreamItemsUsingPartitionKey(stream, index, partition)

        // (3) assessment
        expected(out.map((i) => i.value))
          .it(0)
          .toHave(newBands.data.editors)
          .it(1)
          .toHave(newBands.data.simpleMinds)

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          streamsConf.group,
          streamsConf.consumer,
          {key: stream.name, id: ">"},
          {COUNT: 2}
        ])
      })

      test("when ts = '*' and count option unset, a batch of one item must be read", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "*"}
        const keyPrefix = "1660976984797-"
        const entry = {
          id: keyPrefix + "0",
          message: {value: JSON.stringify(newBands.data.editors)}
        }
        const entries = [{name: stream.name, messages: [entry]}]
        const client = monitor(simulator({XREADGROUP: method.resolves(entries)}))
        const streamsConf = {group: "xyz", consumer: "zyx"}
        const connector = new RedisJsonConnector("default", {client, streams: streamsConf})

        // (2) act
        const out = await connector.getStreamItemsUsingPartitionKey(stream, index, partition)

        // (3) assessment
        expected(out[0].value).toHave(newBands.data.editors)

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          streamsConf.group,
          streamsConf.consumer,
          {key: stream.name, id: ">"},
          {COUNT: 1}
        ])
      })
    })

    suite("standalone consumer strategy", () => {
      test("when not found, empty list must be returned", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "1660459256261"}
        const client = monitor(simulator({XRANGE: method.resolves([])}))
        const connector = new RedisJsonConnector("default", {client})

        // (2) act
        const out = await connector.getStreamItemsUsingPartitionKey(stream, index, partition)

        // (2) assessment
        expected(out).toBeEmpty()

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          stream.name,
          partition.value,
          "(" + (parseInt(partition.value) + 1)
        ])
      })

      test("when not found, empty list must be returned", async () => {
        // (1) arrange
        const partition = {field: "ts", value: "1660459256261"}
        let i = 0
        const values = Object.values(newBands.data)
        const response = values.map((value) => ({
          id: `${partition.value}-${i++}`,
          message: {value: JSON.stringify(value)}
        }))
        const client = monitor(simulator({XRANGE: method.resolves(response)}))
        const connector = new RedisJsonConnector("default", {client})

        // (2) act
        const out = await connector.getStreamItemsUsingPartitionKey(stream, index, partition)

        // (3) assessment
        expected(out).toHaveLen(values.length)
        for (let i = 0; i < out.length; i += 1) {
          const item = out[i]
          expected(item.value).toHave(values[i]).members("ts", "seq").notToBeEmpty()
        }

        const log = monitor.log(client, {clear: true})
        expected(log.calls).equalTo(1)
        expected(log.call.args).equalTo([
          stream.name,
          partition.value,
          "(" + (parseInt(partition.value) + 1)
        ])
      })
    })
  })

  suite("setStreamItemUsingPartitionAndIdKeys()", () => {
    test("when item w/ *-*, value must be appended w/ * and returned", async () => {
      // (1) arrange
      const partition = {field: "ts", value: new Date().valueOf().toString()}
      const id = {field: "seq", value: "0"}
      const itemToSet = {value: {...value, [partition.field]: "*", [id.field]: "*"}}
      const itemToReturn = {
        value: {...value, [partition.field]: partition.value, [id.field]: id.value}
      }
      const key = `${partition.value}-${id.value}`
      const client = monitor(simulator({XADD: method.resolves(key)}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setStreamItemUsingPartitionAndIdKeys(
        stream,
        index,
        {...partition, value: "*"},
        {...id, value: "*"},
        itemToSet
      )

      // (3) assessment
      expected(out).equalTo(itemToReturn)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([stream.name, "*", {value: JSON.stringify(value)}])
    })

    test("when item w/ ts-*, value must be appended w/ ts-0 and returned", async () => {
      // (1) arrange
      const partition = {field: "ts", value: new Date().valueOf().toString()}
      const id = {field: "seq", value: "0"}
      const itemToSet = {
        value: {...value, [partition.field]: partition.value, [id.field]: "*"}
      }
      const itemToReturn = {
        value: {...value, [partition.field]: partition.value, [id.field]: id.value}
      }
      const key = `${partition.value}-${id.value}`
      const client = monitor(simulator({XADD: method.resolves(key)}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setStreamItemUsingPartitionAndIdKeys(
        stream,
        index,
        partition,
        {...id, value: "*"},
        itemToSet
      )

      // (3) assessment
      expected(out).equalTo(itemToReturn)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        stream.name,
        `${partition.value}-*`,
        {value: JSON.stringify({...value, [partition.field]: partition.value})}
      ])
    })

    test("when item w/ ts-seq, value must be appended w/ts-seq and returned", async () => {
      // (1) arrange
      const partition = {field: "ts", value: new Date().valueOf().toString()}
      const id = {field: "seq", value: "1"}
      const itemToSet = {
        value: {...value, [partition.field]: partition.value, [id.field]: id.value}
      }
      const itemToReturn = {
        value: {...value, [partition.field]: partition.value, [id.field]: id.value}
      }
      const key = `${partition.value}-${id.value}`
      const client = monitor(simulator({XADD: method.resolves(key)}))
      const connector = new RedisJsonConnector("default", {client})

      // (2) act
      const out = await connector.setStreamItemUsingPartitionAndIdKeys(
        stream,
        index,
        partition,
        id,
        itemToSet
      )

      // (3) assessment
      expected(out).equalTo(itemToReturn)

      const log = monitor.log(client, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        stream.name,
        key,
        {value: JSON.stringify(itemToReturn.value)}
      ])
    })
  })
})
