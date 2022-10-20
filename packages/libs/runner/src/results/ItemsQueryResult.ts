import {Item, ItemValue} from "@vql/model"
import QueryResult from "./QueryResult"

/**
 * A query result for returning zero, one or several items.
 */
export default class ItemsQueryResult extends QueryResult {
  /**
   * Creates a result with the given arguments.
   *
   * @param items - The items.
   * @param aux - The additional data provided by the connector.
   */
  constructor(readonly items: Item[], readonly aux?: any) {
    super(true)
  }

  /** @override */
  get value(): ItemValue[] {
    return this.items.map((i) => i.value)
  }
}
