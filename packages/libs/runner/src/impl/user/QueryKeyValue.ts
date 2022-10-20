import {QueryKeyFieldValue} from "@vql/model"

/**
 * A query condition splitted in its components:
 * partition, discriminator and id.
 */
type QueryKeyValue = {
  /**
   * The partition key.
   */
  partition?: QueryKeyFieldValue

  /**
   * The discriminator key.
   */
  discriminator?: QueryKeyFieldValue

  /**
   * The id key.
   */
  id?: QueryKeyFieldValue
}

export default QueryKeyValue
