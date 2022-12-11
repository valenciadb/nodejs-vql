import expected from "@akromio/expected"
import {monitor, simulator, method} from "@akromio/doubles"
import {SkynetClient} from "@skynetlabs/skynet-nodejs"
import {songsByYear} from "@vql/test-fixture"

import SiaFileConnector from "./SiaFileConnector"
import SiaFileConnectorOptions from "./SiaFileConnectorOptions"

suite(import.meta.url, () => {
  const portal = "https://web3portal.com"
  const baseSkylink = "AAB-Z5RcNJn454tmaw-VI9l7-bs9d6obXOzJuVgeM5ZnEQ"
  const apiKey = "99FU0HQQ8NE54OCS6C8I0C3NQJG5JITEIG1QJESJUCBKUV44FR1G"
  const options: SiaFileConnectorOptions = {portal, baseSkylink, apiKey}

  const {table} = songsByYear
  const index = table.indexes.primary
  const value = songsByYear.data.editors["2005"].Munich
  let encodedValue: string

  const partition = {field: "band", value: value.band}
  const discriminator = {field: "year", value: value.year}
  const id = {field: "song", value: value.song}

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(value)
  })

  suite("getTableItemUsingCompleteKey()", () => {
    test("when item not found, null must be returned", async () => {
      // (1) arrange
      const skynet = simulator(SkynetClient, {
        downloadData: method.rejects(new Error("status code 404"))
      })

      const connector = new SiaFileConnector("default", options, skynet)

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
      const skynet = monitor(
        simulator(SkynetClient, {
          downloadData: method.resolves(Buffer.from(encodedValue))
        }),
        {method: "downloadData"}
      )

      const connector = new SiaFileConnector("default", options, skynet)

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

      const log = monitor.log(skynet)
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${options.baseSkylink}/${table.name}/${partition.value}/${discriminator.value}/${id.value}`
      ])
    })
  })

  suite("getTableItemsUsingPartitionKey()", () => {
    const values = Object.values(songsByYear.data.editors["2005"])
    const items = values.map((value) => ({value}))

    test("when partition and discriminator keys and items found, non-empty list must be returned", async () => {
      // (1) arrange
      const subfiles: Record<string, any> = {}
      for (const item of items) {
        const {band, year, song} = item.value
        const filePath = `${table.name}/${band}/${year}/${song}`
        subfiles[filePath] = {
          fileName: filePath,
          contentType: "application/octet-stream",
          __item: item // test phantom field
        }
      }

      const downloadDataBehavior = []
      for (let files = Object.values(subfiles), i = 0; i < files.length; i += 1) {
        downloadDataBehavior.push({
          i,
          resolves: Buffer.from(JSON.stringify(files[i].__item.value))
        })
      }

      const skynet = simulator(SkynetClient, {
        getMetadata: method.resolves({metadata: {subfiles}}),
        downloadData: method(downloadDataBehavior)
      })

      const connector = new SiaFileConnector("default", options, skynet)

      // (2) act
      const out = await connector.getTableItemsUsingPartitionKey(table, index, partition)

      // (3) assessment
      expected(out).toHaveLen(items.length)
      expected(out.map(({value}) => value))
        .items()
        .toHave({
          [partition.field]: partition.value,
          [discriminator.field]: discriminator.value
        })
    })
  })
})
