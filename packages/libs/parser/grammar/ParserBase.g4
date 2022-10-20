parser grammar ParserBase;

options {
	tokenVocab = Lexer;
	language = JavaScript;
}

@parser::header {
  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";
}

/**
 * A qualified name.
 */
qualifiedName: Name (Dot Name)*;

/**
 * A parameter bind.
 */
paramBind:
	Ampersand name = Name {
    return new ParamBind($name.text);
  };

/**
 * A literal value.
 */
literalValue:
	txt = LiteralText { return $txt.text.slice(1, -1); }
	| num = LiteralNum { return parseNum($num.text); }
	| bool = LiteralBool { return parseBool($bool.text); }
	| duration = LiteralDuration { return $duration.text; };

/**
 * A literal map: {...}.
 */
literalMap:
	OpenBrace fields += mapField (Comma fields += mapField)* CloseBrace {
    const map = {};

    for (const field of $fields) {
      map[field.name] = field.value;
    }

    return map;
  };

mapField:
	name = Name Colon value = literalValue {
    return {name: $name.text, value: $value.ctx};
  };

/**
 * An inline map, that is, a literal map without braces.
 */
inlineMap:
	fields += mapField (Comma fields += mapField)* {
    const map = {};

    for (const field of $fields) {
      map[field.name] = field.value;
    }

    return map;
  };
