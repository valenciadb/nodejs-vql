import {Connectors} from "@vql/model"
import {Db} from "./db"

/**
 * A VQL client.
 */
export default class VqlClient {
  /**
   * The database associated to this client.
   */
  readonly db: Db

  /**
   * Creates a new VQL client with the given arguments.
   *
   * @param connectors - Connectors to use for R/W.
   */
  constructor(connectors: Connectors) {
    this.db = new Db(connectors)
  }
}
