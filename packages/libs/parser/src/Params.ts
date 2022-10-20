/**
 * A collection of query parameters.
 */
export default class Params {
  /**
   * Creates a query parameters with the given arguments.
   *
   * @param params - The parameters.
   */
  constructor(readonly params: Record<string, any>) {}

  /**
   * Returns the value of a parameter.
   *
   * @param name - The parameter name.
   * @returns The parameter value or undefined if this not found.
   */
  getParameterValue(name: string): any {
    return this.params[name]
  }
}
