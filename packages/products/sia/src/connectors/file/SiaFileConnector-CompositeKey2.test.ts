import expected from "@akromio/expected"
import {monitor, simulator, method} from "@akromio/doubles"
import {SkynetClient} from "@skynetlabs/skynet-nodejs"
import {albums} from "@vql/test-fixture"

import SiaFileConnector from "./SiaFileConnector"
import SiaFileConnectorOptions from "./SiaFileConnectorOptions"

suite(import.meta.url, () => {
  const portal = "https://web3portal.com"
  const baseSkylink = "00074tvo4m36s28cutu5jk6rjhfoh6vijlb6kn2j163v5a1qn4k13io"
  const options: SiaFileConnectorOptions = {portal, baseSkylink}

  const {table} = albums
  const index = table.indexes.primary
  const value = albums.data.editors.theBackRoom
  let encodedValue: string

  const partition = {field: "band", value: value.band}
  const id = {field: "album", value: value.album}

  suiteSetup(async () => {
    encodedValue = await table.encoder.encode(value)
  })

  suite("getTableItemUsingPartitionAndIdKeys()", () => {
    suite("error handling", () => {
      test("when item not found, null must be returned", async () => {
        // (1) arrange
        const skynet = simulator(SkynetClient, {
          downloadData: method.rejects(new Error("status code 404"))
        })
        const connector = new SiaFileConnector("default", options, skynet)

        // (2) act
        const out = await connector.getTableItemUsingPartitionAndIdKeys(
          table,
          index,
          partition,
          id
        )

        // (3) assessment
        expected(out).toBeNull()
      })
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
      const out = await connector.getTableItemUsingPartitionAndIdKeys(
        table,
        index,
        partition,
        id
      )

      // (3) assessment
      expected(out).toHave({value})

      const log = monitor.log(skynet)
      expected(log.calls).equalTo(1)
      expected(log.call.args).equalTo([
        `${options.baseSkylink}/${table.name}/${partition.value}/${id.value}`
      ])
    })
  })

  suite("getTableItemsUsingPartitionKey()", () => {
    const items = Object.values(albums.data.editors).map((value) => ({value}))

    const subfiles: Record<string, any> = {}
    for (const item of items) {
      const filePath = `${table.name}/Editors/${item.value.album}`
      subfiles[filePath] = {
        fileName: filePath,
        contentType: "application/octet-stream",
        __item: item // test phantom field
      }
    }

    test("when partition key and items found, non-empty list must be returned", async () => {
      // (1) arrange
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
        .toHave({[partition.field]: partition.value})
    })
  })
})
