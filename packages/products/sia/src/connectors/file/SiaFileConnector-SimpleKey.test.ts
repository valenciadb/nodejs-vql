import expected from "@akromio/expected"
import {monitor, simulator, method} from "@akromio/doubles"
import {SkynetClient} from "@skynetlabs/skynet-nodejs"
import {bands} from "@vql/test-fixture"

import SiaFileConnector from "./SiaFileConnector"
import SiaFileConnectorOptions from "./SiaFileConnectorOptions"

suite(import.meta.url, () => {
  const portal = "https://web3portal.com"
  const options: SiaFileConnectorOptions = {
    portal,
    baseSkylink: "AAB-Z5RcNJn454tmaw-VI9l7-bs9d6obXOzJuVgeM5ZnEQ",
    apiKey: "99FU0HQQ8NE54OCS6C8I0C3NQJG5JITEIG1QJESJUCBKUV44FR1G"
  }

  const {table} = bands
  const index = table.indexes.primary
  const value = bands.data.simpleMinds
  let encodedValue: string

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(value)
  })

  suite("canWrite()", () => {
    test("when called, false must be returned", () => {
      // (1) act
      const connector = new SiaFileConnector("default", options)
      const out = connector.canWrite()

      // (2) assessment
      expected(out).equalTo(false)
    })
  })

  suite("getItem()", () => {
    test("when item not found, null must be returned", async () => {
      // (1) arrange
      const skynet = simulator(SkynetClient, {
        downloadData: method.rejects(new Error("status code 404"))
      })

      const connector = new SiaFileConnector("default", options, skynet)

      // (2) act
      const id = {field: "name", value: value.name}
      const out = await connector.getTableItemUsingIdKey(table, index, id)

      // (3) assessment
      expected(out).toBeNull()
    })

    test("when item found, this must be returned", async () => {
      // (1) arrange
      const skynet = monitor(
        simulator(SkynetClient, {downloadData: method.resolves(Buffer.from(encodedValue))}),
        {method: "downloadData"}
      )

      const connector = new SiaFileConnector("default", options, skynet)

      // (2) act
      const id = {field: "name", value: value.name}
      const out = await connector.getTableItemUsingIdKey(table, index, id)

      // (3) assessment
      expected(out).toHave({value})

      const log = monitor.log(skynet)
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([`${options.baseSkylink}/${table.name}/${id.value}`])
    })
  })
})
