import expected from "@akromio/expected"
import peval from "@akromio/peval"
import getKeyValueOfQueryCondition from "./getKeyValueOfQueryCondition"
import {bands, albums, songsByYear} from "@vql/test-fixture"

suite(import.meta.url, () => {
  suite("getSimpleKeyValueOfQueryCondition()", () => {
    const {table} = bands
    const index = table.indexes.primary
    const value = bands.data.simpleMinds

    suite("error handling", () => {
      test("when condition w/ more than one key field, error must be raised", () => {
        // (1) act
        const condition = {name: value.name, extra: "1234"}
        const out = peval(() => getKeyValueOfQueryCondition(condition, index))

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(
            new Error(
              "Query condition must contain only one key field: name. Got: name,extra."
            )
          )
      })
    })

    test("when condition w/ the index key field, {id} must be returned", () => {
      // (1) act
      const condition = {name: value.name}
      const out = getKeyValueOfQueryCondition(condition, index)

      // (2) assessment
      expected(out).equalTo({
        id: {
          field: "name",
          value: condition.name
        }
      })
    })
  })

  suite("getCompositeKeyValueOfQueryCondition()", () => {
    suite("index w/ two key fields", () => {
      const {table} = albums
      const index = table.indexes.primary
      const value = albums.data.editors.theBackRoom

      test("when condition w/ one key field, {partition} must be returned", () => {
        // (1) act
        const condition = {band: value.band}
        const out = getKeyValueOfQueryCondition(condition, index)

        // (2) assessment
        expected(out).equalTo({
          partition: {
            field: "band",
            value: condition.band
          }
        })
      })

      test("when condition w/ the two key fields, {partition, id} must be returned", () => {
        // (1) act
        const condition = {band: value.band, album: value.album}
        const out = getKeyValueOfQueryCondition(condition, index)

        // (2) assessment
        expected(out).equalTo({
          partition: {
            field: "band",
            value: condition.band
          },
          id: {
            field: "album",
            value: condition.album
          }
        })
      })
    })

    suite("index w/ three key fields", () => {
      const {table} = songsByYear
      const index = table.indexes.primary
      const value = songsByYear.data.editors[2005].Blood

      test("when condition w/ one key field, {partition} must be returned", () => {
        // (1) act
        const condition = {band: value.band}
        const out = getKeyValueOfQueryCondition(condition, index)

        // (2) assessment
        expected(out).equalTo({
          partition: {
            field: "band",
            value: condition.band
          }
        })
      })

      test("when condition w/ two key fields, {partition, discriminator} must be returned", () => {
        // (1) act
        const condition = {band: value.band, year: value.year}
        const out = getKeyValueOfQueryCondition(condition, index)

        // (2) assessment
        expected(out).equalTo({
          partition: {
            field: "band",
            value: condition.band
          },
          discriminator: {
            field: "year",
            value: condition.year
          }
        })
      })

      test("when condition w/ the three key fields, {partition, discriminator, id} must be returned", () => {
        // (1) act
        const condition = {band: value.band, year: value.year, song: value.song}
        const out = getKeyValueOfQueryCondition(condition, index)

        // (2) assessment
        expected(out).equalTo({
          partition: {
            field: "band",
            value: condition.band
          },
          discriminator: {
            field: "year",
            value: condition.year
          },
          id: {
            field: "song",
            value: condition.song
          }
        })
      })
    })
  })
})
