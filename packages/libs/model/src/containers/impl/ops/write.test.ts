import expected from "@akromio/expected"
import {monitor, simulator, field, method} from "@akromio/doubles"
import {
  setItemUsingCompleteKey,
  setItemUsingIdKey,
  setItemUsingPartitionAndIdKeys
} from "./write"
import ContainerType from "../../ContainerType"

suite(import.meta.url, () => {
  suite("setItemUsingIdKey()", () => {
    test("when called, connector.setTableItemUsingIdKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", origin: "US"}
      const item = {value}
      const connector = monitor(simulator({setTableItemUsingIdKey: method.resolves(item)}))
      const container = simulator({connector})
      const index = simulator()
      const id = {field: "band", value: value.band}

      // (2) act
      const out = await setItemUsingIdKey(container, index, id, item)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, id, item])
    })
  })

  suite("setItemUsingPartitionAndIdKeys()", () => {
    test("when container is table, connector.setTableItemUsingPartitionAndIdKeys() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "High Violet", year: 2010}
      const item = {value}
      const connector = monitor(
        simulator({setTableItemUsingPartitionAndIdKeys: method.resolves(item)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.table)})
      const index = simulator()
      const partition = {field: "band", value: value.band}
      const id = {field: "album", value: value.album}

      // (2) act
      const out = await setItemUsingPartitionAndIdKeys(container, index, partition, id, item)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, id, item])
    })

    test("when container is stream, connector.setStreamItemUsingPartitionAndIdKeys() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "High Violet", year: 2010, ts: "*", seq: "*"}
      const item = {value}
      const connector = monitor(
        simulator({setStreamItemUsingPartitionAndIdKeys: method.resolves(item)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.stream)})
      const index = simulator()
      const partition = {field: "ts", value: "*"}
      const id = {field: "seq", value: "*"}

      // (2) act
      const out = await setItemUsingPartitionAndIdKeys(container, index, partition, id, item)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, id, item])
    })
  })

  suite("setItemUsingCompleteKey()", () => {
    test("when called, connector.setTableItemUsingCompleteKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", year: "2010", song: "Terrible Love"}
      const item = {value}
      const connector = monitor(
        simulator({setTableItemUsingCompleteKey: method.resolves(item)})
      )
      const container = simulator({connector})
      const index = simulator()
      const partition = {field: "band", value: value.band}
      const discriminator = {field: "year", value: value.year}
      const id = {field: "song", value: value.song}

      // (2) act
      const out = await setItemUsingCompleteKey(
        container,
        index,
        partition,
        discriminator,
        id,
        item
      )

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, discriminator, id, item])
    })
  })
})
