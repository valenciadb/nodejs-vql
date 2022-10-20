import {RedisClientType} from "redis"
import {ConnectorOptions} from "@vql/connector"
import RedisStreamsConf from "./RedisStreamsConf"

/**
 * The options for creating a Redis connector.
 */
type RedisConnectorOptions = ConnectorOptions & {
  /**
   * The Azure Cosmos DB database to use.
   */
  client: RedisClientType

  /**
   * The separator to use.
   */
  separator?: string

  /**
   * Redis Streams configuration if used for consuming.
   */
  streams?: RedisStreamsConf
}

export default RedisConnectorOptions
