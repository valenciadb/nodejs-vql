import {Item, ItemValue} from "@vql/model"
import QueryResult from "./QueryResult"

/**
 * A query result for returning only one item at most.
 */
export default class ItemQueryResult extends QueryResult {
  /**
   * Creates a result with the given arguments.
   *
   * @param item - The item.
   * @param aux - The additional data provided by the connector.
   */
  constructor(readonly item: Item | undefined, readonly aux?: any) {
    super(true)
  }

  /** @override */
  get value(): ItemValue | undefined {
    return this.item?.value
  }
}
