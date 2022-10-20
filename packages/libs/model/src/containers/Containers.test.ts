import expected from "@akromio/expected"
import {simulator} from "@akromio/doubles"
import {JsonDecoder} from "@vql/encoder"
import {Index, Indexes, KeyField} from "../indexes"
import Containers from "./Containers"
import ContainerType from "./ContainerType"
import ReadOnlyContainer from "./impl/ReadOnlyContainer"

suite(import.meta.url, () => {
  const indexes = new Indexes().addIndex(new Index("primary", [new KeyField("band")]))
  const decoder = new JsonDecoder()
  const connector = simulator()
  const pipelines = {postRead: simulator()}
  const table = new ReadOnlyContainer(
    connector,
    ContainerType.table,
    "bands",
    undefined,
    indexes,
    pipelines,
    decoder
  )
  const stream = new ReadOnlyContainer(
    connector,
    ContainerType.stream,
    "bandsInserted",
    undefined,
    indexes,
    pipelines,
    decoder
  )

  suite("getContainersByType()", () => {
    test("when table, only tables are returned", () => {
      // (1) arrange
      const containers = new Containers().addContainer(table).addContainer(stream)

      // (2) act
      const out = containers.getContainersByType(ContainerType.table)

      // (3) assessment
      expected(out).equalTo([table])
    })
  })

  suite("addContainer()", () => {
    test("when container, this is added to the container map", () => {
      // (1) act
      const containers = new Containers()
      const out = containers.addContainer(table)

      // (2) assessment
      expected(out).sameAs(containers)
      expected(out.containers).toHave({bands: table})
    })
  })

  suite("getContainer()", () => {
    test("when container found, this must be returned", () => {
      // (1) act
      const containers = new Containers().addContainer(table)
      const out = containers.getContainer("bands")

      // (2) assessment
      expected(out).sameAs(table)
    })

    test("when container not found, undefined must be returned", () => {
      // (1) act
      const containers = new Containers()
      const out = containers.getContainer("bands")

      // (2) assessment
      expected(out).toBeNull()
    })
  })
})
