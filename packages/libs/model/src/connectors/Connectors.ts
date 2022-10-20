import Connector from "./Connector"

/**
 * A collection of connectors.
 */
export default class Connectors {
  /**
   * Connectors of this collection.
   */
  protected readonly connectors: Record<string, Connector> = {}

  /**
   * Returns a connector by its name.
   *
   * @param name - Connector name to find.
   * @returns The connector or undefined if not found.
   */
  getConnector(name: string): Connector | undefined {
    return this.connectors[name]
  }

  /**
   * Adds a connector to this collection.
   *
   * @param connector - Connector to add.
   * @returns The collection for chaining needed.
   */
  addConnector(connector: Connector): this {
    this.connectors[connector.name] = connector
    return this
  }
}
