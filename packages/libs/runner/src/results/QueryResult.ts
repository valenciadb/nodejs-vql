import {ItemValue} from "@vql/model"

/**
 * A query result.
 */
export default abstract class QueryResult {
  /**
   * Creates a result with the given arguments.
   *
   * @param ok - Sets if the query finished ok.
   */
  constructor(readonly ok: boolean) {}

  /**
   * Returns the value returned by the query.
   */
  abstract get value(): ItemValue | undefined
}
