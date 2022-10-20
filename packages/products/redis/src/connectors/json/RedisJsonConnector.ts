import {Item} from "@vql/core"
import {ReadableContainer, WritableContainer} from "@vql/model"
import RedisConnectorOptions from "../RedisConnectorOptions"
import RedisConnector from "../RedisConnector"

/**
 * A Redis JSON connector for VQL.
 */
export default class RedisJsonConnector extends RedisConnector {
  /**
   * Creates a connector with the given arguments.
   *
   * @param name - Connector name.
   * @param options - Options to use.
   */
  constructor(name: string, options: RedisConnectorOptions) {
    super(name, options)
  }

  /** @override */
  protected async getTableItemFromStorage(
    table: ReadableContainer,
    ...id: string[]
  ): Promise<Item | undefined> {
    // (1) get item
    const key = this.itemKey(table, this.idKey(...id))
    const resp = await this.redis.json.GET(key)
    let item: Item | undefined

    if (resp) {
      item = {value: resp as Record<string, any>}
    }

    // // (2) return item
    return item
  }

  /** @override */
  protected async getTableItemsFromStorage(
    table: ReadableContainer,
    ...prefix: string[]
  ): Promise<Item[]> {
    // (1) perform query
    const items: Item[] = []
    const script = `
    local keys = redis.call("KEYS", ARGV[1] .. "*")
    local values = {}

    for _, key in pairs(keys) do
      local value = redis.call("JSON.GET", key, "$")
      table.insert(values, value)
    end

    return values
    `
    const options = {arguments: [this.itemKey(table, this.idKey(...prefix))]}
    const resp = await this.redis.EVAL(script, options)

    for (let value of resp as any[]) {
      value = JSON.parse(value)
      items.push({value: value[0]})
    }

    // (2) return items
    return items
  }

  /** @override */
  protected async setItemIntoTable(
    table: WritableContainer,
    {value}: Item,
    ...id: string[]
  ): Promise<Item> {
    // (1) determine key to use
    const key = this.itemKey(table, this.idKey(...id))

    // (2) save item
    if (table.defaultTtl) {
      const options = {
        keys: [key],
        arguments: [table.defaultTtl.toString(), await table.encoder.encode(value)]
      }

      const script = `
      local key = KEYS[1]
      local ttl, value = unpack(ARGV)

      redis.call("JSON.SET", key, "$", value)
      redis.call("EXPIRE", key, ttl)
      `

      await this.redis.EVAL(script, options)
    } else {
      await this.redis.json.SET(key, "$", value)
    }

    // (3) return item
    return {value}
  }
}
