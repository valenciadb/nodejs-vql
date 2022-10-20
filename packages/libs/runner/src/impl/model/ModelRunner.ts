import {CryptoIvStmt, CryptoKeyStmt, SchemaStmt, StreamStmt, TableStmt} from "@vql/parser"
import {KeyGenerator} from "@vql/crypto"
import {
  Model,
  CryptoKey,
  CryptoIv,
  defaultSchemaValidator,
  Schema,
  ContainerType,
  ContainerBuilder,
  Connectors
} from "@vql/model"
import {ItemQueryResult, QueryResult} from "../../results"
import Runner from "../../Runner"

/**
 * A runner for performing the model queries.
 */
export default class ModelRunner extends Runner {
  /**
   * Builder to use for creating the containers.
   */
  protected readonly containerBuilder

  /**
   * Creates the model runner with the given arguments.
   *
   * @param model - Model to update.
   * @param connectors - Connectors to use with the container statements.
   */
  constructor(model: Model, connectors: Connectors) {
    super(model)
    this.containerBuilder = new ContainerBuilder(connectors, model)
  }

  /**
   * Runs a CRYPTO KEY query, updating the model.
   *
   * @param q - The CRYPTO KEY query to run.
   * @returns The query result.
   */
  async runCryptoKeyQuery(q: CryptoKeyStmt): Promise<QueryResult> {
    // (1) import key
    const {name: keyName} = q
    let key: any

    /* c8 ignore next 2 */
    if (q.hasCryptoKey()) {
      key = q.key
    } else {
      const keyGen = new KeyGenerator()
      const {seed, salt, len: length} = q.options
      key = await keyGen.generateKeyFromSeed(seed, salt, length)
    }

    // (2) add key to model
    this.model.cryptoKeys.addKey(new CryptoKey(keyName, key))
    return new ItemQueryResult(undefined)
  }

  /**
   * Runs a CRYPTO IV query.
   *
   * @param q - The CRYPTO IV query to run.
   * @returns The query result.
   */
  runCryptoIvQuery(q: CryptoIvStmt): QueryResult {
    this.model.cryptoIvs.addIv(new CryptoIv(q.name, q.iv))
    return new ItemQueryResult(undefined)
  }

  /**
   * Runs a SCHEMA query.
   *
   * @param q - The SCHEMA query to run.
   * @returns The query result.
   */
  runSchemaQuery(q: SchemaStmt): QueryResult {
    // (1) create and add schema
    if (q._validator == "*") {
      q._validator = defaultSchemaValidator
    }

    this.model.schemas.addSchema(new Schema(q.schemaName, q.validator))

    // (2) return result
    return new ItemQueryResult(undefined)
  }

  /**
   * Runs a TABLE query.
   *
   * @param q - The TABLE query to run.
   * @returns The query result.
   */
  runTableQuery(q: TableStmt): QueryResult {
    this.model.containers.addContainer(
      this.containerBuilder.createContainer(
        q.connectorName,
        ContainerType.table,
        q.tableName,
        q.schemaName,
        q.keyFields,
        q.mode,
        q.tde,
        q.defaults,
        q.ttl
      )
    )

    return new ItemQueryResult(undefined)
  }

  /**
   * Runs a STREAM query.
   *
   * @param q - The STREAM query to run.
   * @returns The query result.
   */
  runStreamQuery(q: StreamStmt): QueryResult {
    this.model.containers.addContainer(
      this.containerBuilder.createContainer(
        q.connectorName,
        ContainerType.stream,
        q.streamName,
        q.schemaName,
        q.keyFields,
        q.mode,
        q.tde,
        q.defaults,
        undefined
      )
    )

    return new ItemQueryResult(undefined)
  }
}
