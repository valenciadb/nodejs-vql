import {createClient, RedisClientType} from "redis"
import {RedisJsonConnector} from "@vql/redis"
import Shell from "./Shell"

/**
 * A shell command with a Redis connector.
 */
export default class RedisShell extends Shell {
  /**
   * The command description.
   */
  readonly desc = "Run a shell for running queries one by one on Redis."

  /**
   * The command options.
   */
  readonly options: any = {
    vqlFilePath: {
      alias: ["q"],
      type: "string",
      desc: "VQL script file to load."
    },

    paramFilePath: {
      alias: ["p"],
      type: "string",
      desc: "Parameters file to use with the script."
    },

    host: {
      type: "string",
      desc: "Redis host.",
      default: "localhost"
    },

    port: {
      type: "number",
      desc: "Redis port.",
      default: 6379
    }
  }

  /** @override */
  protected async createConnector({host, port}: any): Promise<RedisJsonConnector> {
    const client: RedisClientType = createClient({socket: {host, port}})
    await client.connect()
    return new RedisJsonConnector("default", {client})
  }
}
