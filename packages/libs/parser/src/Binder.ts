import Params from "./Params.js"
import {
  CryptoIvStmt,
  CryptoKeyStmt,
  IndexedQueryStmt,
  ParamBind,
  SchemaStmt,
  SelectStmt,
  SetStmt,
  Stmt
} from "./stmts/index.js"

/**
 * A parameter binder, that is, a component
 * to replace the parameter binds with the real values.
 */
export default class Binder {
  /**
   * Replaces the parameter binds by its values.
   *
   * @param stmt - The statement to parse.
   * @param params - The parameters to use.
   *
   * @return The statement replaced.
   */
  eval(stmt: Stmt, params: Params): Stmt {
    return this.replaceParams(stmt, params)
  }

  /**
   * Replaces the parameters into a given query with theirs values.
   *
   * @param stmt - Statement to replace.
   * @param params - The parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParams(stmt: Stmt, params: Params): Stmt {
    if (stmt instanceof IndexedQueryStmt) {
      this.replaceParamsInIndexedQuery(stmt, params)
    } else if (stmt instanceof SetStmt) {
      this.replaceParamsInSetQuery(stmt, params)
    } else if (stmt instanceof CryptoKeyStmt) {
      this.replaceParamsInCryptoKeyQuery(stmt, params)
    } else if (stmt instanceof CryptoIvStmt) {
      this.replaceParamsInCryptoIvQuery(stmt, params)
    } else if (stmt instanceof SchemaStmt) {
      this.replaceParamsInSchemaQuery(stmt, params)
    }

    return stmt
  }

  /**
   * Replaces the parameters into a given SELECT statement using the given
   * parameter values.
   *
   * @param stmt - The SELECT statement to replace.
   * @param params - The query parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParamsInIndexedQuery(stmt: IndexedQueryStmt, params: Params): SelectStmt {
    for (const value of stmt.keyValue.values) {
      if (value._value instanceof ParamBind) {
        const paramName = value._value.name
        value._value = params.getParameterValue(paramName)
      }
    }

    return stmt
  }

  /**
   * Replaces the parameters into a given SET statement using the given
   * parameter values.
   *
   * @param stmt - The SET statement to replace.
   * @param params - The query parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParamsInSetQuery(stmt: SetStmt, params: Params): SetStmt {
    if (stmt.value instanceof ParamBind) {
      const paramName = stmt.value.name
      stmt.value = params.getParameterValue(paramName)
    }

    return stmt
  }

  /**
   * Replaces the parameters into a given CRYPTO KEY statement using the given
   * parameter values.
   *
   * @param stmt - The CRYPTO KEY statement to replace.
   * @param params - The query parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParamsInCryptoKeyQuery(stmt: CryptoKeyStmt, params: Params): CryptoKeyStmt {
    if (stmt._key instanceof ParamBind) {
      const paramName = stmt._key.name
      stmt._key = params.getParameterValue(paramName) as CryptoKey
    }

    return stmt
  }

  /**
   * Replaces the parameters into a given CRYPTO IV statement using the given
   * parameter values.
   *
   * @param stmt - The CRYPTO IV statement to replace.
   * @param params - The query parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParamsInCryptoIvQuery(stmt: CryptoIvStmt, params: Params): CryptoIvStmt {
    if (stmt._iv instanceof ParamBind) {
      const paramName = stmt._iv.name
      stmt._iv = params.getParameterValue(paramName)
    }

    return stmt
  }

  /**
   * Replaces the parameters into a given SCHEMA statement using the given
   * parameter values.
   *
   * @param stmt - The SCHEMA statement to replace.
   * @param params - The query parameters to use.
   *
   * @returns The statement replaced for chaining if needed.
   */
  protected replaceParamsInSchemaQuery(stmt: SchemaStmt, params: Params): SchemaStmt {
    if (stmt._validator instanceof ParamBind) {
      const paramName = stmt._validator.name
      stmt._validator = params.getParameterValue(paramName)
    }

    return stmt
  }
}
