/**
 * A datum readable in a query such as, for example,
 * the current timestamp or a UUID.
 */
export default class Datum {
  /**
   * Creates a datum with the given arguments.
   *
   * @param name - The datum name.
   */
  constructor(readonly name: string) {}
}
