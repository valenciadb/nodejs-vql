import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"
import {JsonDecoder, JsonEncoder} from "@vql/encoder"
import ReadWriteContainer from "../impl/ReadWriteContainer"
import {Index, Indexes, KeyField} from "../../indexes"
import ContainerType from "../ContainerType"

suite(import.meta.url, () => {
  const indexes = new Indexes().addIndex(new Index("primary", [new KeyField("band")]))
  const pipelines = {preWrite: simulator(), postRead: simulator()}
  const encoder = new JsonEncoder()
  const decoder = new JsonDecoder()
  const connector = simulator()

  suite("constructor", () => {
    test("when ttl set, its numeric value in seconds must be used", () => {
      // (1) act
      const out = new ReadWriteContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines,
        encoder,
        decoder,
        "2m"
      )

      // (2) assessment
      expected(out.defaultTtl).equalTo(120)
    })
  })

  suite("isReadable()", () => {
    test("when called, true must be returned", () => {
      // (1) act
      const out = new ReadWriteContainer(
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
    test("when called, true must be returned", () => {
      // (1) act
      const out = new ReadWriteContainer(
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

  suite("isDeletable()", () => {
    test("when called, true must be returned", () => {
      // (1) act
      const out = new ReadWriteContainer(
        connector,
        ContainerType.table,
        "bands",
        undefined,
        indexes,
        pipelines
      ).isDeletable()

      // (2) assessment
      expected(out).equalTo(true)
    })
  })
})
