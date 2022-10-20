import {Index} from "@vql/model"
import QueryCondition from "./QueryCondition"
import QueryKeyValue from "./QueryKeyValue"

/**
 * Returns the key value indicated in a WHERE condition.
 *
 * @param condition - The condition to use.
 * @param index - The index to use.
 *
 * @returns The key value.
 *
 * @privateRemarks
 * If the index is simple, the condition contains the id.
 * Otherwise, if the index has more fields than the condition,
 * the condition contains the partition key;
 * otherwise, the partition key and the id.
 */
export default function getKeyValueOfQueryCondition(
  condition: QueryCondition,
  index: Index
): QueryKeyValue {
  return index.isSimple()
    ? getSimpleKeyValueOfQueryCondition(condition, index)
    : getCompositeKeyValueOfQueryCondition(condition, index)
}

/**
 * Returns the key value of a query condition when the used index is simple.
 *
 * @param condition - The query condition.
 * @param index - The simple key index.
 *
 * @returns The query key value.
 *
 * @privateRemarks
 * The condition can be composite, with the query left-most field being the
 * index key field name. We have to raise error in this case, due to
 * VQL doesn't allow a composite condition with a simple index.
 */
function getSimpleKeyValueOfQueryCondition(
  condition: QueryCondition,
  index: Index
): QueryKeyValue {
  // (1) pre: errors
  const {name: keyFieldName} = index.keyFields[0]
  const conditionFieldNames = Object.keys(condition)

  if (conditionFieldNames.length > 1) {
    throw new Error(
      `Query condition must contain only one key field: ${keyFieldName}. Got: ${conditionFieldNames}.`
    )
  }

  // (2) set query key value
  return {
    id: {
      field: keyFieldName,
      value: condition[keyFieldName]
    }
  }
}

/**
 * Returns the key value of a query condition when the used index is composite.
 *
 * @param condition - The query condition.
 * @param index - The composite key index.
 *
 * @returns The query key value.
 *
 * @remarks
 * The query key value can be:
 *
 * - partitionKey and id, when the index has two key fields.
 * - partitionKey and discriminator, when index w/ three key fields and
 *   the condition w/ two.
 * - partitionKey, discriminator and id, when index and condition w/ three key fields.
 */
function getCompositeKeyValueOfQueryCondition(
  condition: QueryCondition,
  index: Index
): QueryKeyValue {
  // (1) determine key value
  const {keyFieldNames} = index
  const conditionFieldNames = Object.keys(condition)
  let queryKeyValue: QueryKeyValue

  switch (conditionFieldNames.length) {
    case 1: {
      const partitionFieldName = keyFieldNames[0]

      queryKeyValue = {
        partition: {
          field: partitionFieldName,
          value: condition[partitionFieldName]
        }
      }

      break
    }

    case 2: {
      if (keyFieldNames.length == 2) {
        const [partitionFieldName, idFieldName] = index.keyFieldNames

        queryKeyValue = {
          partition: {
            field: partitionFieldName,
            value: condition[partitionFieldName]
          },
          id: {
            field: idFieldName,
            value: condition[idFieldName]
          }
        }
      } else {
        const [partitionKeyFieldName, discriminatorFieldName] = index.keyFieldNames

        queryKeyValue = {
          partition: {
            field: partitionKeyFieldName,
            value: condition[partitionKeyFieldName]
          },
          discriminator: {
            field: discriminatorFieldName,
            value: condition[discriminatorFieldName]
          }
        }
      }

      break
    }

    default: {
      const [partitionFieldName, discriminatorFieldName, idFieldName] = index.keyFieldNames

      queryKeyValue = {
        partition: {
          field: partitionFieldName,
          value: condition[partitionFieldName]
        },

        discriminator: {
          field: discriminatorFieldName,
          value: condition[discriminatorFieldName]
        },

        id: {
          field: idFieldName,
          value: condition[idFieldName]
        }
      }
    }
  }

  // (2) return key value
  return queryKeyValue
}
