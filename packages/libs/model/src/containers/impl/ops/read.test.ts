import expected from "@akromio/expected"
import {monitor, simulator, field, method} from "@akromio/doubles"
import {
  getItemsUsingPartitionAndDiscriminatorKeys,
  getItemsUsingPartitionKey,
  getItemUsingCompleteKey,
  getItemUsingIdKey,
  getItemUsingPartitionAndIdKeys
} from "./read"
import ContainerType from "../../ContainerType"

suite(import.meta.url, () => {
  suite("getItemUsingIdKey()", () => {
    test("when called, connector.getTableItemUsingIdKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", origin: "US"}
      const item = {value}
      const connector = monitor(simulator({getTableItemUsingIdKey: method.resolves(item)}))
      const container = simulator({connector})
      const index = simulator()
      const id = {field: "band", value: value.band}

      // (2) act
      const out = await getItemUsingIdKey(container, index, id)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, id])
    })
  })

  suite("getItemUsingPartitionAndIdKeys()", () => {
    test("when container is table, connector.getTableItemUsingPartitionAndIdKeys() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "Boxer"}
      const item = {value}
      const connector = monitor(
        simulator({getTableItemUsingPartitionAndIdKeys: method.resolves(item)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.table)})
      const index = simulator()
      const partition = {field: "band", value: value.band}
      const id = {field: "album", value: value.album}

      // (2) act
      const out = await getItemUsingPartitionAndIdKeys(container, index, partition, id)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, id])
    })

    test("when container is stream, connector.getStreamItemUsingPartitionAndIdKeys() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "Boxer"}
      const item = {value}
      const connector = monitor(
        simulator({getStreamItemUsingPartitionAndIdKeys: method.resolves(item)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.stream)})
      const index = simulator()
      const partition = {field: "ts", value: new Date().valueOf().toString()}
      const id = {field: "seq", value: "0"}

      // (2) act
      const out = await getItemUsingPartitionAndIdKeys(container, index, partition, id)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, id])
    })
  })

  suite("getItemUsingCompleteKey()", () => {
    test("when called, connector.getTableItemUsingCompleteKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", year: "2007", song: "Fake Empire"}
      const item = {value}
      const connector = monitor(
        simulator({getTableItemUsingCompleteKey: method.resolves(item)})
      )
      const container = simulator({connector})
      const index = simulator()
      const partition = {field: "band", value: value.band}
      const discriminator = {field: "year", value: value.year}
      const id = {field: "song", value: value.song}

      // (2) act
      const out = await getItemUsingCompleteKey(container, index, partition, discriminator, id)

      // (3) assessment
      expected(out).equalTo(item)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, discriminator, id])
    })
  })

  suite("getItemsUsingPartitionAndDiscriminatorKeys()", () => {
    test("when called, connector.getTableItemsUsingPartitionAndDiscriminatorKeys() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", year: "2007", song: "Apartment Story"}
      const item = {value}
      const items = [item]
      const connector = monitor(
        simulator({getTableItemsUsingPartitionAndDiscriminatorKeys: method.resolves(items)})
      )
      const container = simulator({connector})
      const index = simulator()
      const partition = {field: "band", value: value.band}
      const discriminator = {field: "year", value: value.year}

      // (2) act
      const out = await getItemsUsingPartitionAndDiscriminatorKeys(
        container,
        index,
        partition,
        discriminator
      )

      // (3) assessment
      expected(out).equalTo(items)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, discriminator])
    })
  })

  suite("getItemsUsingPartitionKey()", () => {
    test("when container is table, connector.getTableItemsUsingPartitionKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "Boxer"}
      const item = {value}
      const items = [item]
      const connector = monitor(
        simulator({getTableItemsUsingPartitionKey: method.resolves(items)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.table)})
      const index = simulator()
      const partition = {field: "band", value: value.band}

      // (2) act
      const out = await getItemsUsingPartitionKey(container, index, partition)

      // (3) assessment
      expected(out).equalTo(items)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition])
    })

    test("when container is stream, connector.getStreamItemsUsingPartitionKey() must be called", async () => {
      // (1) arrange
      const value = {band: "The National", album: "Boxer"}
      const item = {value}
      const items = [item]
      const connector = monitor(
        simulator({getStreamItemsUsingPartitionKey: method.resolves(items)})
      )
      const container = simulator({connector, kind: field.returns(ContainerType.stream)})
      const index = simulator()
      const partition = {field: "ts", value: new Date().valueOf().toString()}

      // (2) act
      const out = await getItemsUsingPartitionKey(container, index, partition)

      // (3) assessment
      expected(out).equalTo(items)

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition])
    })
  })
})
