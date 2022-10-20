import {Connectors, Model, Schema, CryptoIv, defaultSchemaValidator} from "@vql/model"
import {ModelRunner, SysRunner, UserRunner, QueryResult, ErrorResult} from "@vql/runner"

import {
  Parser,
  SelectStmt,
  SetStmt,
  DeleteStmt,
  TableStmt,
  SchemaStmt,
  CryptoKeyStmt,
  CryptoIvStmt,
  Binder,
  Stmt,
  Params,
  StreamStmt
} from "@vql/parser"

import {InternalError} from "../errors"

/**
 * A VQL database.
 */
export default class Db {
  /**
   * The model to use.
   */
  readonly model = new Model()

  /**
   * The model runner to use with this database.
   */
  protected readonly modelRunner: ModelRunner

  /**
   * The system runner to use with this database.
   */
  protected readonly sysRunner: SysRunner

  /**
   * The user runner to use with this database.
   */
  protected readonly userRunner: UserRunner

  /**
   * The query parser to use.
   */
  protected readonly parser = new Parser()

  /**
   * The parameter binder to use.
   */
  protected readonly binder = new Binder()

  /**
   * Creates a database with the given arguments.
   *
   * @param connectors - Connectors to use.
   * @param runners - The runners to use. When unset, implicit runner used.
   */
  constructor(
    connectors: Connectors,
    runners?: {model?: ModelRunner; sys?: SysRunner; user?: UserRunner}
  ) {
    this.model.schemas.addSchema(new Schema("map", defaultSchemaValidator))
    this.model.cryptoIvs.addIv(new CryptoIv("iv", "1234567890123456"))

    this.modelRunner = runners?.model ?? new ModelRunner(this.model, connectors)
    this.sysRunner = runners?.sys ?? new SysRunner(this.model)
    this.userRunner = runners?.user ?? new UserRunner(this.model)
  }

  /**
   * Parses and runs one or several statements.
   *
   * @param query - The query code to run.
   * @param params - The parameters to use.
   *
   * @returns The query result.
   *
   * @throws {@link DbError} If error related with the database client.
   * @throws {@link ModelError} If error related with the model used.
   * @throws {@link InternalError} If an internal implementation error happened.
   *
   * @remarks
   * If only one statement passed, a QueryResult returned;
   * otherwise, a list of QueryResults.
   */
  async q(query: string, params?: Record<string, any>): Promise<QueryResult | QueryResult[]> {
    // (1) parse the query
    const stmts = this.parser.parse(query)

    if (params) {
      this.bindParams(stmts, new Params(params))
    }

    // (2) run the query
    const results = []

    for (const stmt of stmts) {
      let result: QueryResult | undefined

      try {
        if (stmt instanceof SelectStmt) {
          result = stmt.containerName.startsWith("sys.")
            ? await this.sysRunner.runSelectQuery(stmt)
            : await this.userRunner.runSelectQuery(stmt)
        } else if (stmt instanceof SetStmt) {
          result = await this.userRunner.runSetQuery(stmt)
        } else if (stmt instanceof DeleteStmt) {
          result = await this.userRunner.runDeleteQuery(stmt)
        } else if (stmt instanceof SchemaStmt) {
          result = this.modelRunner.runSchemaQuery(stmt)
        } else if (stmt instanceof TableStmt) {
          result = this.modelRunner.runTableQuery(stmt)
        } else if (stmt instanceof StreamStmt) {
          result = this.modelRunner.runStreamQuery(stmt)
        } else if (stmt instanceof CryptoKeyStmt) {
          result = await this.modelRunner.runCryptoKeyQuery(stmt)
        } else if (stmt instanceof CryptoIvStmt) {
          result = this.modelRunner.runCryptoIvQuery(stmt)
        }
      } catch (e) {
        result = new ErrorResult(e as Error)
      }

      /* c8 ignore next 3 */
      if (!result) {
        throw new InternalError(`Unknown statement: ${query}.`)
      }

      results.push(result)
    }

    // (3) return result
    return results.length == 1 ? results[0] : results
  }

  /**
   * Resolves the parameter binds.
   *
   * @param stmts - The statements to parse.
   * @param params - The parameters to use.
   */
  protected async bindParams(stmts: Stmt[], params: Params): Promise<void> {
    for (const stmt of stmts) {
      this.binder.eval(stmt, params)
    }
  }
}
