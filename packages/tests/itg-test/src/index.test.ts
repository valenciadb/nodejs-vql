import expected from "@akromio/expected"
import {
  Connector,
  Connectors,
  VqlClient,
  ItemQueryResult,
  ItemsQueryResult,
  QueryResult
} from "@vql/core"
import {bands, albums, songsByYear} from "@vql/test-fixture"

/**
 * Creates the integration tests on tables using the given connectors.
 * When connector can write, the tests are more complete than
 * when read-only used.
 *
 * @param connector - Connector to use.
 *
 * @privateRemarks
 * If called with a read-only connector, the data must be saved in
 * its storage.
 */
export function createTableTests(connector: Connector): void {
  const connectors = new Connectors().addConnector(connector)

  suite("Integration tests - Table", () => {
    const client = new VqlClient(connectors)
    const {db} = client

    suite("simple key", () => {
      const model = `
        SCHEMA Band(&bandValidator)
        TABLE bands: Band KEY(name) DEFAULT(inserted := ts)
      `

      const modelParams = {
        bandValidator: (value: Record<string, any>) => {
          if (!value.name || !value.origin) {
            throw new Error("Bands must contain name and origin.")
          }
        }
      }

      const value = bands.data.simpleMinds

      if (connector.canWrite()) {
        test("set item, get that item and remove the item", async () => {
          // (1) arrange
          await db.q(model, modelParams)

          // (2) set item
          let out = await db.q("SET INTO bands(&value)", {value})
          expected(out).toBe(ItemQueryResult).toHave({ok: true})

          // (3) get item
          out = await db.q("SELECT FROM bands WHERE &name", value)

          expected(out)
            .toBe(ItemQueryResult)
            .toHave({ok: true})
            .member("value")
            .toHave(value)
            .toHave("inserted")

          // (4) remove item
          out = await db.q("DELETE FROM bands WHERE &name", value)
          expected(out).toBe(ItemQueryResult).toHave({ok: true})
        })
      } else {
        test("get item and found, item must be returned", async () => {
          // (1) arrange
          await db.q(model, modelParams)

          // (2) get item
          const out = await db.q("SELECT FROM bands WHERE &name", value)
          expected(out).toBe(ItemQueryResult).toHave({ok: true}).member("value").toHave(value)
        })

        test("get item and not found, undefined must be returned", async () => {
          // (1) arrange
          await db.q(model)

          // (2) get item
          const out = await db.q("SELECT FROM bands WHERE name = 'unknown'")
          expected(out).toBe(ItemQueryResult).toHave({ok: true}).member("value").toBeNil()
        })
      }
    })

    suite("composite key (2: partition and id keys)", () => {
      const model = "TABLE albums KEY(band, album)"
      const value = albums.data.editors.theBackRoom
      const values = Object.values(albums.data.editors)

      if (connector.canWrite()) {
        test("set several items and get them using partition key", async () => {
          // (1) arrange
          await db.q(model)

          // (2) set items
          for (const album of values) {
            const out = await db.q("SET INTO albums(&album)", {album})
            expected(out).toBe(ItemQueryResult).toHave({ok: true})
          }

          // (3) get items
          const out = (await db.q("SELECT FROM albums WHERE &band", value)) as QueryResult
          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value)
            .member("length")
            .greaterThan(1)
            .items()
            .toHave({band: value.band})
        })

        test("set items, get one of them and next remove it", async () => {
          // (1) arrange
          await db.q(model)

          // (2) set items
          for (const album of values) {
            const out = await db.q("SET INTO albums(&album)", {album})
            expected(out).toBe(ItemQueryResult).toHave({ok: true})
          }

          // (3) get item
          let out = await db.q("SELECT FROM albums WHERE &band AND &album", value)
          expected(out).toBe(ItemQueryResult).toHave({ok: true}).member("value").toHave(value)

          // (4) remove item
          out = await db.q("DELETE FROM albums WHERE &band AND &album", value)
          expected(out).toBe(ItemQueryResult).toHave({ok: true})

          out = await db.q("SELECT FROM albums WHERE &band AND &album", value)
          expected(out).toBe(ItemQueryResult).toHave({ok: true, value: undefined})
        })
      } else {
        test("get items and found, non-empty list with the items must be returned", async () => {
          // (1) arrange
          await db.q(model)

          // (2) get item
          const out = (await db.q("SELECT FROM albums WHERE &band", value)) as QueryResult
          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value)
            .member("length")
            .greaterThan(1)
            .items()
            .toHave({band: value.band})
        })

        test("get items and not found, empty list must be returned", async () => {
          // (1) arrange
          await db.q(model)

          // (2) get item
          const out = (await db.q("SELECT FROM albums WHERE band = 'unknown'")) as QueryResult
          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value).toBeEmpty()
        })
      }
    })

    suite("composite key (3: partition, discriminator and id keys)", () => {
      const model = "TABLE songsByYear KEY(band, year, song)"
      const values = Object.values(songsByYear.data.editors["2005"]).concat(
        Object.values(songsByYear.data.editors["2007"])
      )

      if (connector.canWrite()) {
        test("set items and get items by partition key", async () => {
          // (1) arrange
          await db.q(model)

          // (2) set item
          for (const value of values) {
            const out = await db.q("SET INTO songsByYear(&value)", {value})
            expected(out).toBe(ItemQueryResult).toHave({ok: true})
          }

          // (3) get items
          const condition = {band: "Editors"}
          const out = (await db.q(
            "SELECT FROM songsByYear WHERE &band",
            condition
          )) as ItemsQueryResult

          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value).toHaveLen(values.length)

          let year2005 = false
          let year2007 = false

          for (const value of out.value) {
            expected(value).toHave(condition)

            if (value.year == "2005") {
              year2005 = true
            } else if (value.year == "2007") {
              year2007 = true
            }
          }

          expected(year2005).equalTo(true)
          expected(year2007).equalTo(true)
        })

        test("set items and get items by partition and discriminator keys", async () => {
          // (1) arrange
          await db.q(model)

          // (2) set item
          for (const value of values) {
            const out = await db.q("SET INTO songsByYear(&value)", {value})
            expected(out).toBe(ItemQueryResult).toHave({ok: true})
          }

          // (3) get items
          const condition = {band: "Editors", year: "2005"}
          const out = (await db.q(
            "SELECT FROM songsByYear WHERE &band AND &year",
            condition
          )) as ItemsQueryResult

          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value).member("length").greaterThan(1).items().toHave(condition)
        })
      } else {
        test("get items by partition key", async () => {
          // (1) arrange
          await db.q(model)

          // (2) get items
          const condition = {band: "Editors"}
          const out = (await db.q(
            "SELECT FROM songsByYear WHERE &band",
            condition
          )) as ItemsQueryResult

          // (3) assessment
          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value.length).greaterThan(1)

          let year2005 = false
          let year2007 = false

          for (const value of out.value) {
            expected(value).toHave(condition)

            if (value.year == "2005") {
              year2005 = true
            } else if (value.year == "2007") {
              year2007 = true
            }
          }

          expected(year2005).equalTo(true)
          expected(year2007).equalTo(true)
        })

        test("get items by partition and discriminator keys", async () => {
          // (1) arrange
          await db.q(model)

          // (2) get items
          const condition = {band: "Editors", year: "2005"}
          const out = (await db.q(
            "SELECT FROM songsByYear WHERE &band AND &year",
            condition
          )) as ItemsQueryResult

          // (3) assessment
          expected(out).toBe(ItemsQueryResult).toHave({ok: true})
          expected(out.value).member("length").greaterThan(1).items().toHave(condition)
        })
      }
    })
  })
}

/**
 * Creates the integration tests for testing TTL, using a given connector.
 *
 * @param connector - The connector to use.
 */
export function createTtlTests(connector: Connector): void {
  const connectors = new Connectors().addConnector(connector)

  suite("Integration tests - TTL", () => {
    const client = new VqlClient(connectors)
    const {db} = client
    const value = bands.data.simpleMinds

    test("set item w/ TTL, get item and next expect item to expire", async () => {
      // (1) arrange
      await db.q("TABLE bands KEY(name) TTL 1s")

      // (2) set item
      await db.q("SET INTO bands(&value)", {value})

      // (3) get item
      let out = (await db.q("SELECT FROM bands WHERE &name", value)) as QueryResult
      expected(out.value).toHave(value)

      // (4) check item not exists when expired
      await new Promise((resolve) => setTimeout(resolve, 1500))

      out = (await db.q("SELECT FROM bands WHERE &name", value)) as QueryResult
      expected(out.value).toBeNil()
    })
  })
}
