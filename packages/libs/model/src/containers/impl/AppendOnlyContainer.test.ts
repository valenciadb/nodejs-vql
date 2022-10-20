import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"
import {JsonEncoder} from "@vql/encoder"
import {Pipeline} from "@vql/pipeline"
import AppendOnlyContainer from "./AppendOnlyContainer"
import {Index, Indexes, KeyField} from "../../indexes"
import ContainerType from "../ContainerType"

suite(import.meta.url, () => {
  const indexes = new Indexes().addIndex(new Index("primary", [new KeyField("band")]))
  const encoder = new JsonEncoder()
  const pipelines = {preWrite: new Pipeline()}
  const connector = simulator()

  suite("constructor", () => {
    test("when ttl set, its numeric value in seconds must be used", () => {
      // (1) act
      const out = new AppendOnlyContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines,
        encoder,
        "2m"
      )

      // (2) assessment
      expected(out.defaultTtl).equalTo(120)
    })
  })

  suite("isWritable()", () => {
    test("when called, true must be returned", () => {
      // (1) act
      const out = new AppendOnlyContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines
      ).isWritable()

      // (2) assessment
      expected(out).equalTo(true)
    })
  })
})
