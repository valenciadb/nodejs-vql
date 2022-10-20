import {SelectStmt} from "@vql/parser"
import {Model, ModelError} from "@vql/model"
import {ItemQueryResult, QueryResult} from "../../results"
import Runner from "../../Runner"

/**
 * A runner for performing the queries on system tables.
 */
export default class SysRunner extends Runner {
  /**
   * Creates a system runner with the given arguments.
   *
   * @param model - The model to use with this runner.
   */
  constructor(model: Model) {
    super(model)
  }

  /**
   * Runs a SELECT query on a system table.
   *
   * @param q - The SELECT query to run.
   * @returns The query result.
   */
  async runSelectQuery(q: SelectStmt): Promise<QueryResult> {
    // (1) get data
    let value: any | undefined

    if (q.containerName == "sys.cryptoKeys") {
      const key = this.model.cryptoKeys.getKey(this.getFieldValue(q, "name"))

      if (key) {
        value = {name: key.name, algorithm: key.key.algorithm, usages: key.key.usages}
      }
    } else if (q.containerName == "sys.cryptoIvs") {
      const iv = this.model.cryptoIvs.getIv(this.getFieldValue(q, "name"))

      if (iv) {
        value = {name: iv.name}
      }
    } else if (q.containerName == "sys.containers") {
      const container = this.model.containers.getContainer(this.getFieldValue(q, "name"))

      if (container) {
        value = {
          name: container.name,
          kind: container.kind
        }
      }
    } else if (q.containerName == "sys.schemas") {
      const schema = this.model.schemas.getSchema(this.getFieldValue(q, "name"))

      if (schema) {
        value = {name: schema.name}
      }
    }

    // (2) return result
    return new ItemQueryResult(value ? {value} : undefined)
  }

  /**
   * Returns the value of a given field.
   *
   * @param q - The query to use.
   * @param fieldName - The field name to find.
   *
   * @returns The value.
   */
  private getFieldValue(q: SelectStmt, fieldName: string): string {
    const value = q.keyValue.getFieldValue(fieldName)

    if (!value) {
      throw new ModelError(`Key field name expected: ${fieldName}.`)
    }

    return value.value as string
  }
}
