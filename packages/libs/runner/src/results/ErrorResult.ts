import QueryResult from "./QueryResult"

/**
 * A result for representing a query failure.
 */
export default class ErrorResult extends QueryResult {
  /**
   * Creates the result with the given arguments.
   */
  constructor(readonly error: Error) {
    super(false)
  }

  /** @override */
  get value(): any {
    return this.error
  }
}
