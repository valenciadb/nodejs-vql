lexer grammar Lexer;

options {
	language = JavaScript;
}

fragment Letter: [a-zA-Z];
fragment Digit: [0-9];
fragment Underscore: '_';

/**
 * A whitespace.
 */
Whitespace: [ \u000B\t\r\n] -> channel(HIDDEN);

/**
 * The keywords.
 */
And: 'AND';
Append: 'APPEND';
Crypto: 'CRYPTO';
Default: 'DEFAULT';
Delete: 'DELETE';
Encrypt: 'ENCRYPT';
Encrypted: 'ENCRYPTED';
From: 'FROM';
Into: 'INTO';
Iv: 'IV';
Key: 'KEY';
Only: 'ONLY';
Read: 'READ';
Returning: 'RETURNING';
Schema: 'SCHEMA';
Select: 'SELECT';
Set: 'SET';
Stream: 'STREAM';
Table: 'TABLE';
Ttl: 'TTL';
Where: 'WHERE';
With: 'WITH';

/**
 * The comments.
 */
SingleLineComment: '#' ~[\r\n]* '\r'? '\n' -> channel(HIDDEN);

/**
 * A literal text.
 */
LiteralText: '\'' .*? '\'';

/**
 * A literal number.
 */
LiteralNum: Digit+ ('.' Digit+)?;

/**
 * A literal expiry time.
 */
LiteralDuration: Digit+ ('s' | 'm' | 'h' | 'd' | 'w');

/**
 * A literal bool.
 */
LiteralBool: 'true' | 'false';

/**
 * A name to identify something such as, for example, a field.
 */
Name: Letter (Letter | Digit | Underscore)*;

/**
 * Symbols.
 */
At: '@';
OpenParen: '(';
CloseParen: ')';
Comma: ',';
Semicolon: ';';
Colon: ':';
ColonEqual: ':=';
Equal: '=';
DoubleEqual: '==';
OpenBrace: '{';
CloseBrace: '}';
OpenBracket: '[';
CloseBracket: ']';
OpenChevron: '<';
CloseChevron: '>';
Dot: '.';
Asterisk: '*';
Ampersand: '&';
VerticalBar: '|';
QuestionMark: '?';
QuestionMarkEqual: '?=';