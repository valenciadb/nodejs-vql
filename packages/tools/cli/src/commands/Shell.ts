import {Context} from "node:vm"
import repl from "node:repl"
import fs from "node:fs/promises"
import {VqlClient, Connector, Db, Connectors, QueryResult} from "@vql/core"

/**
 * A shell command.
 */
export default abstract class Shell {
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
    }
  }

  /**
   * The handler method.
   */
  readonly handler: (argv: any) => Promise<void>

  /**
   * The database object to use.
   */
  protected db: Db | undefined

  constructor() {
    this.handler = this.handle.bind(this)
  }

  /**
   * Handles the Yargs input.
   *
   * @param argv - The arguments passed by Yargs.
   */
  protected async handle(argv: any): Promise<void> {
    // (1) create client
    const {vqlFilePath, paramFilePath} = argv
    const connector = await this.createConnector(argv)
    const connectors = new Connectors().addConnector(connector)
    this.db = new VqlClient(connectors).db

    // (2) read script file if needed
    if (vqlFilePath) {
      const script = await fs.readFile(vqlFilePath, "utf8")
      const params = JSON.parse(
        paramFilePath ? await fs.readFile(paramFilePath, "utf8") : "{}"
      )

      await this.db.q(script, params)
    }

    // (3) REPL
    const r = repl.start({prompt: "vql> ", eval: this.handleInput.bind(this)})
    r.prompt()
  }

  /**
   * Creates the connector to use.
   *
   * @param argv - The arguments passed by Yargs.
   * @returns The connector to use.
   */
  protected abstract createConnector(argv: any): Promise<Connector>

  /**
   * Handles an line of input written by the user.
   *
   * @param query - The user query.
   * @param context - The context to use.
   * @param filename - The file name.
   * @param done - The callback.
   */
  protected async handleInput(
    query: string,
    context: Context,
    filename: string,
    done: (err: any | null, result?: any) => void
  ): Promise<void> {
    try {
      const result = await this.db!.q(query)

      if (result instanceof QueryResult) {
        if (result.ok) {
          done(null, result.value)
        } else {
          done(result.value)
        }
      } else {
        done(null, result)
      }
    } catch (e) {
      done(e as Error)
    }
  }
}
