import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"
import peval from "@akromio/peval"
import {JsonDecoder} from "@vql/encoder"
import {Pipeline} from "@vql/pipeline"
import ReadOnlyContainer from "./ReadOnlyContainer"
import {Index, Indexes, KeyField} from "../../indexes"
import {ModelError} from "../../errors"
import ContainerType from "../ContainerType"

suite(import.meta.url, () => {
  const indexes = new Indexes().addIndex(new Index("primary", [new KeyField("band")]))
  const pipelines = {postRead: new Pipeline()}
  const decoder = new JsonDecoder()
  const connector = simulator()

  suite("constructor (inherited from Table)", () => {
    suite("error handling", () => {
      test("when empty indexes, error must be raised", () => {
        // (1) act
        const out = peval(
          () =>
            new ReadOnlyContainer(
              connector,
              ContainerType.table,
              "bands",
              undefined,
              new Indexes(),
              pipelines,
              decoder
            )
        )

        // (2) assessment
        expected(out)
          .it(0)
          .equalTo(false)
          .it(1)
          .equalTo(new ModelError("Data container must contain at least the primary index."))
      })
    })
  })

  suite("isReadable()", () => {
    test("when called, true must be returned", () => {
      // (1) act
      const out = new ReadOnlyContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines
      ).isReadable()

      // (2) assessment
      expected(out).equalTo(true)
    })
  })

  suite("isWritable()", () => {
    test("when called, false must be returned", () => {
      // (1) act
      const out = new ReadOnlyContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines
      ).isWritable()

      // (2) assessment
      expected(out).equalTo(false)
    })
  })
})
