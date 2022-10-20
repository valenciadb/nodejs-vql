/**
 * Group configuration if Redis Streams used for consuming.
 */
type RedisStreamsConf = {
  /**
   * Group name.
   */
  group: string

  /**
   * Consumer name.
   */
  consumer: string

  /**
   * Number of messages to read.
   * If unset, 1.
   */
  count?: number
}

export default RedisStreamsConf
