grammar Vql;

options {
	tokenVocab = Lexer;
	language = JavaScript;
}

import Crypto, Model, Dml;

@parser::header {
	
}

/**
 * The entry point.
 */
start:
	statements += statement (Semicolon? statements += statement)* EOF {
		return $statements;
	};

/**
 * A VQL-supported statement.
 */
statement:
	select = selectStatement { return $select.ctx; }
	| del = deleteStatement { return $del.ctx; }
	| set = setStatement { return $set.ctx; }
	| cryptoKey = cryptoKeyStmt { return $cryptoKey.ctx; }
	| cryptoIv = cryptoIvStmt { return $cryptoIv.ctx; }
	| schema = schemaStatement { return $schema.ctx; }
	| table = tableStatement { return $table.ctx; }
	| stream = streamStatement { return $stream.ctx; };