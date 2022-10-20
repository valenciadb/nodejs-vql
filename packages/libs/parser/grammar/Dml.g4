parser grammar Dml;

options {
	tokenVocab = Lexer;
	language = JavaScript;
}

import ParserBase;

@parser::header {
  import {KeyValue, KeyFieldValue, SelectStmt, DeleteStmt, SetStmt} from "../stmts/index.js";
}

/**
 * A clause to filter attending to a key value.
 * 
 * Predicates:
 * 
 * - &name
 * 
 * - name = &name
 * 
 * - name = literalText
 * 
 * Simple key value:
 * 
 * - eq
 * 
 * Composite key value:
 * 
 * - eq AND eq
 * 
 * - eq AND eq AND eq
 */
whereClause:
	Where value = simpleKeyValue {
    return new KeyValue([$value.ctx]);
  }
	| Where values = compositeKeyValue {
    return new KeyValue($values.ctx)
  };

simpleKeyValue: op = equalityOp { return $op.ctx; };

compositeKeyValue:
	partition = equalityOp And id = equalityOp {
    return [$partition.ctx, $id.ctx];
  }
	| partition = equalityOp And discriminator = equalityOp And id = equalityOp {
    return [$partition.ctx, $discriminator.ctx, $id.ctx];
  };

equalityOp:
	param = paramBind {
    return new KeyFieldValue(
      $param.ctx.name,
      '=',
      $param.ctx
    );
  }
	| name = Name (Equal | DoubleEqual) param = paramBind {
    return new KeyFieldValue(
      $name.text,
      '=',
      $param.ctx
    );
  }
	| name = Name (Equal | DoubleEqual) value = LiteralText {
    return new KeyFieldValue(
      $name.text,
      '=',
      $value.text.slice(1, -1)
    );
  };

/**
 * A clause for setting the fields to return.
 * 
 * - RETURNING *
 */
returningClause: Returning Asterisk { return "*"; };

/**
 * A statement for returning items.
 * 
 * - SELECT FROM Table WHERE key
 */
selectStatement:
	Select From tableName = qualifiedName where = whereClause {
    return new SelectStmt(
      $tableName.ctx.getText(),
      $where.ctx
    );
  };

/**
 * A statement for deleting items.
 * 
 * - DELETE FROM Table WHERE keyValue
 */
deleteStatement:
	Delete From tableName = qualifiedName where = whereClause {
    return new DeleteStmt(
      $tableName.ctx.getText(),
      $where.ctx
    );
  };

/**
 * A statement for setting items.
 * 
 * - SET INTO Table(&value | literalMap)
 * 
 * - SET INTO Table(...) RETURNING *
 */
setStatement:
	Set Into tableName = qualifiedName OpenParen value = itemValue CloseParen returning =
		returningClause? {
    let value;

    if ($value.ctx instanceof ParamBindContext) {
      value = new ParamBind($value.ctx.getText().slice(1))
    } else {
      value = $value.ctx;
    }

    return new SetStmt(
      $tableName.ctx.getText(),
      value,
      $returning.ctx
    );
};

itemValue:
	bind = paramBind { return $bind.ctx; }
	| litMap = literalMap { return $litMap.ctx; }
	| ilMap = inlineMap { return $ilMap.ctx; };
