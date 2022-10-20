import expected from "@akromio/expected"
import {monitor, simulator, method} from "@akromio/doubles"
import {
  removeItemUsingCompleteKey,
  removeItemUsingIdKey,
  removeItemUsingPartitionAndIdKeys
} from "./remove"

suite(import.meta.url, () => {
  suite("removeItemUsingIdKey()", () => {
    test("when called, connector.removeTableItemUsingIdKey() must be called", async () => {
      // (1) arrange
      const connector = monitor(simulator({removeTableItemUsingIdKey: method.resolves()}))
      const container = simulator({connector})
      const index = simulator()
      const id = {field: "band", value: "The National"}

      // (2) act
      const out = await removeItemUsingIdKey(container, index, id)

      // (3) assessment
      expected(out).toBeNull()

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, id])
    })
  })

  suite("removeItemUsingPartitionAndIdKeys()", () => {
    test("when called, connector.removeTableItemUsingPartitionAndIdKeys() must be called", async () => {
      // (1) arrange
      const connector = monitor(
        simulator({removeTableItemUsingPartitionAndIdKeys: method.resolves()})
      )
      const container = simulator({connector})
      const index = simulator()
      const partition = {field: "band", value: "The National"}
      const id = {field: "album", value: "High Violet"}

      // (2) act
      const out = await removeItemUsingPartitionAndIdKeys(container, index, partition, id)

      // (3) assessment
      expected(out).toBeNull()

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, id])
    })
  })

  suite("removeItemUsingCompleteKey()", () => {
    test("when called, connector.removeTableItemUsingCompleteKey() must be called", async () => {
      // (1) arrange
      const connector = monitor(
        simulator({removeTableItemUsingCompleteKey: method.resolves()})
      )
      const container = simulator({connector})
      const index = simulator()
      const partition = {field: "band", value: "The National"}
      const discriminator = {field: "year", value: "2010"}
      const id = {field: "song", value: "Terrible Love"}

      // (2) act
      const out = await removeItemUsingCompleteKey(
        container,
        index,
        partition,
        discriminator,
        id
      )

      // (3) assessment
      expected(out).toBeNull()

      const log = monitor.log(connector, {clear: true})
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([container, index, partition, discriminator, id])
    })
  })
})
