import expected from "@akromio/expected"
import {createClient, RedisClientType} from "redis"
import {QueryResult, RedisJsonConnector, VqlClient} from "@vql/redis"
import {createTableTests, createTtlTests} from "@vql/itg-test"
import {Connectors} from "@vql/model"
import {bands} from "@vql/test-fixture"

suite(import.meta.url, () => {
  const client: RedisClientType = createClient()
  const dbConnector = new RedisJsonConnector("default", {client: client})

  suiteSetup(async () => {
    await client.connect()
  })

  suiteTeardown(async () => {
    await client.disconnect()
  })

  createTableTests(dbConnector)
  createTtlTests(dbConnector)

  suite("Streams", () => {
    suite("standalone consumer strategy", () => {
      const connectors = new Connectors().addConnector(dbConnector)

      test("append item to stream, read item from stream", async () => {
        // (1) arrange
        const band = bands.data.simpleMinds

        const model = `
        STREAM newBands KEY(ts, seq)
        DEFAULT(ts := '*', seq := '*')
        `
        const {db} = new VqlClient(connectors)
        await db.q(model)

        // (2) add item
        let out = (await db.q("SET INTO newBands(&band) RETURNING *", {band})) as QueryResult

        expected(out.value)
          .toHave({name: band.name, origin: band.origin, seq: "0"})
          .member("ts")
          .like("^[0-9]+$")

        // (3) get item appended
        const condition = {ts: out.value!.ts, seq: out.value!.seq}
        out = (await db.q("SELECT FROM newBands WHERE &ts AND &seq", condition)) as QueryResult

        expected(out.value)
          .toHave(band)
          .member("ts")
          .equalTo(condition.ts)
          .member("seq")
          .equalTo(condition.seq)
      })
    })

    suite("consumer group strategy", () => {
      setup(async () => {
        await client.DEL("newBands")
        await client.XGROUP_CREATE("newBands", "xyz", "0", {MKSTREAM: true})
      })

      test("append items to stream, read one-to-one items from stream", async () => {
        // (1) arrange
        const connector = new RedisJsonConnector("default", {
          client,
          streams: {group: "xyz", consumer: "zyx"}
        })
        const connectors = new Connectors().addConnector(connector)
        const {simpleMinds, editors} = bands.data

        const model = `
        STREAM newBands KEY(ts, seq)
        DEFAULT(ts := '*', seq := '*')
        `
        const {db} = new VqlClient(connectors)
        await db.q(model)

        // (2) add item
        const outs = (await db.q(
          "SET INTO newBands(&simpleMinds) RETURNING *; SET INTO newBands(&editors) RETURNING *",
          {simpleMinds, editors}
        )) as QueryResult[]

        expected(outs.map((o) => o.value))
          .it(0)
          .toHave(simpleMinds)
          .it(1)
          .toHave(editors)

        // (3) get item appended
        let out: QueryResult

        out = (await db.q("SELECT FROM newBands WHERE ts = '*' AND seq = '*'")) as QueryResult
        expected(out.value).toHave(simpleMinds)

        out = (await db.q("SELECT FROM newBands WHERE ts = '*' AND seq = '*'")) as QueryResult
        expected(out.value).toHave(editors)
      })

      test("append items to stream, read batch from stream", async () => {
        // (1) arrange
        const connector = new RedisJsonConnector("default", {
          client,
          streams: {group: "xyz", consumer: "zyx", count: 2}
        })
        const connectors = new Connectors().addConnector(connector)
        const {simpleMinds, editors} = bands.data

        const model = `
        STREAM newBands KEY(ts, seq)
        DEFAULT(ts := '*', seq := '*')
        `
        const {db} = new VqlClient(connectors)
        await db.q(model)

        // (2) add item
        const outs = (await db.q(
          "SET INTO newBands(&simpleMinds) RETURNING *; SET INTO newBands(&editors) RETURNING *",
          {simpleMinds, editors}
        )) as QueryResult[]

        expected(outs.map((o) => o.value))
          .it(0)
          .toHave(simpleMinds)
          .it(1)
          .toHave(editors)

        // (3) get item appended
        const out = (await db.q("SELECT FROM newBands WHERE ts = '*'")) as QueryResult
        expected(out.value).toHaveLen(2).it(0).toHave(simpleMinds).it(1).toHave(editors)
      })
    })
  })
})
