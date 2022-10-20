parser grammar Model;

options {
	tokenVocab = Lexer;
	language = JavaScript;
}

import ParserBase;

@parser::header {
	import {SyntaxError} from "../errors/index.js";
	import {SchemaStmt, StreamStmt, TableStmt, TableLevelTde, FieldLevelTde} from "../stmts/model/index.js";
	import Datum from "../Datum.js";
}

/**
 * A declaration of data model.
 * 
 * - SCHEMA name(*)
 * 
 * - SCHEMA name(&validatorFn)
 */
schemaStatement:
	Schema schemaName = Name OpenParen (
		Asterisk
		| validator = paramBind
	) CloseParen {
			return new SchemaStmt(
				$schemaName.text,
				$validator.ctx || "*"
			);
	};

/**
 * A key field definition: id or id:dataType. When dataType unset, text used.
 */
keyFieldDef:
	fieldName = Name (Colon dataType = Name)? {
		return {
			name: $fieldName.text,
			dataType: $dataType ? $dataType.text : "text"
		};
  };

/**
 * A simple key: id.
 */
simpleKeyField:
	field = keyFieldDef {
		return [$field.ctx];
	};

/**
 * A composite key with two fields: partition, id.
 */
twoKeyFields:
	fields += keyFieldDef Comma fields += keyFieldDef {
		return $fields;
	};

/**
 * A composite key with three fields: partition, type, id.
 */
threeKeyFields:
	fields += keyFieldDef Comma fields += keyFieldDef Comma fields += keyFieldDef {
		return $fields;
	};

/**
 * The container type: APPEND ONLY | READ ONLY
 */
accessMode:
	aMode = (Read | Append) Only { return $aMode.text + " ONLY"; };

/**
 * Clause for setting the connector to use with the container.
 * 
 * @Name
 */
connectorClause: At connector = Name { return $connector.text; };

/**
 * A declaration of stream.
 * 
 * - (APPEND|READ ONLY)? STREAM streamName: schemaName Clauses
 */
streamStatement:
	aMode = accessMode? Stream streamName = qualifiedName connector = connectorClause? key =
		streamKeyClause (
		(encryptedWith = encryptedWithClause)
		| (encryptWith = encryptWithClause)
	)? defaults = defaultClause? {
		const streamName = $streamName.ctx.getText();

		return new StreamStmt(
			$connector.ctx,
			streamName,
			undefined,	// schema name
			$aMode.ctx || "READ WRITE",
			$key.ctx,
			$encryptedWith.ctx || $encryptWith.ctx,
			$defaults.ctx
		);
	};

streamKeyClause:
	Key OpenParen fields = twoKeyFields CloseParen {
		return $fields.ctx;
	};

/**
 * A declaration of table.
 * 
 * - READ|APPEND ONLY TABLE tableName: schemaName Clauses
 * 
 * - TABLE tableName: schemaName Clauses
 */
tableStatement:
	aMode = accessMode? Table tableName = qualifiedName connector = connectorClause? (
		Colon schemaName = Name
	)? key = tableKeyClause (
		(encryptedWith = encryptedWithClause)
		| (encryptWith = encryptWithClause)
	)? defaults = defaultClause? ttl = ttlClause? {
		const tableName = $tableName.ctx.getText();

		if (tableName.startsWith("sys.")) {
			throw new SyntaxError("System tables can't defined by the user: " + tableName + ".");
		}

		return new TableStmt(
			$connector.ctx,
			tableName,
			$schemaName && $schemaName.text,
			$aMode.ctx || "READ WRITE",
			$key.ctx,
			$encryptedWith.ctx || $encryptWith.ctx,
			$defaults.ctx,
			$ttl.ctx
		);
	};

tableKeyClause:
	Key OpenParen (
		simple = simpleKeyField
		| composite2 = twoKeyFields
		| composite3 = threeKeyFields
	) CloseParen {
		return $simple.ctx || $composite2.ctx || $composite3.ctx;
	};

/**
 * Clause for table-level TDE.
 * 
 * - ENCRYPTED WITH key, iv
 */
encryptedWithClause:
	Encrypted With cryptoKey = Name Comma cryptoIv = Name {
		return new TableLevelTde($cryptoKey.text, $cryptoIv.text);
	};

/**
 * Clause for field-level TDE.
 * 
 * - ENCRYPT fieldName WITH key, iv
 */
encryptWithClause:
	Encrypt fieldName = Name With cryptoKey = Name Comma cryptoIv = Name {
		return new FieldLevelTde($cryptoKey.text, $cryptoIv.text, $fieldName.text);
	};

/**
 * Clause for setting field default values.
 * 
 * - DEFAULT(fieldName Op value, fieldName Op value...)
 * 
 * - Op: = | ?= | :=
 */
defaultClause:
	Default OpenParen values += defaultValue (
		Comma values += defaultValue
	)* CloseParen {
		const values = {};

		for (const field of $values) {
			values[field.name] = {op: field.op, value: field.value};
		}

		return values;
};

defaultValue:
	name = Name op = (Equal | ColonEqual | QuestionMarkEqual) (
		prop = Name
		| lValue = literalValue
	) {
		return {
			name: $name.text,
			op: $op.text,
			value: $prop ? new Datum($prop.text) : $lValue.ctx
		};
};

/**
 * Clause for setting the default TTL of the table items.
 * 
 * - TTL LiteralDuration
 */
ttlClause:
	Ttl value = LiteralDuration {
		return $value.text
	};
