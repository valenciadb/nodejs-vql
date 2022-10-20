import antlr4 from "antlr4"
import error from "antlr4/error/index.js"

import Lexer from "./antlr/Lexer.js"
import AntlrQueryParser from "./antlr/VqlParser.js"

import {SyntaxError} from "./errors/index.js"
import {Stmt} from "./stmts/index.js"

const {CommonTokenStream, InputStream} = antlr4
const {ErrorListener} = error

/**
 * The default error listener.
 */
class ParserErrorListener extends ErrorListener {
  /** @override */
  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: any
  ): void {
    throw new SyntaxError(`line ${line}:${column} ${msg}`)
  }
}

/**
 * A parser for parsing VQL queries.
 */
export default class Parser {
  /**
   * Parses a data query or a several model statements.
   *
   * @param query - The query code.
   * @returns A list of statements got from the query code.
   * @throws {@link SyntaxError} If parsing error found.
   */
  parse(query: string): Stmt[] {
    // (1) initialize the parser
    const input = new InputStream(query)
    const lexer = new Lexer(input)
    const tokens = new CommonTokenStream(lexer)

    const parser = new AntlrQueryParser(tokens)
    parser.buildParseTrees = true
    parser.removeErrorListeners()
    parser.addErrorListener(new ParserErrorListener())

    // (2) parse
    return parser.start() as any as Stmt[]
  }
}
