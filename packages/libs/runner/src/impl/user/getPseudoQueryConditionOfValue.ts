import {Container, ItemValue} from "@vql/model"
import QueryCondition from "./QueryCondition"

/**
 * Returns a query condition for a value to set.
 *
 * @param value - The item value to parse.
 * @param container - The container where to insert.
 *
 * @returns The pseudo query condition.
 */
export default function getPseudoQueryConditionOfValue(
  value: ItemValue,
  container: Container
): QueryCondition {
  // (1) build condition querying the value
  const condition: QueryCondition = {}

  for (const keyFieldName of container.indexes.primary.keyFieldNames) {
    if (!(keyFieldName in value)) {
      throw new Error(`Key field expected: ${keyFieldName}.`)
    }

    condition[keyFieldName] = value[keyFieldName]
  }

  // (2) return condition
  return condition
}
