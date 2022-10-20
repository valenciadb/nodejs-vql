parser grammar Crypto;

options {
	tokenVocab = Lexer;
	language = JavaScript;
}

import ParserBase;

@parser::header {
  import {CryptoKeyStmt, CryptoIvStmt} from "../stmts/index.js";
}

/**
 * A statement to register a cryptographic simmetric key for its use in the model.
 * 
 * - CRYPTO KEY name(&cryptoKey)
 * 
 * - CRYPTO KEY name(seed: 'seed', salt: 'salt', len: 128|192|256)
 */
cryptoKeyStmt:
	Crypto Key name = Name OpenParen (
		key = paramBind
		| opts = inlineMap
	) CloseParen {
		return new CryptoKeyStmt($name.text, $key.ctx || $opts.ctx);
	};

/**
 * A statement to register a crytographic IV for its use in the model.
 * 
 * - CRYPTO IV name(&cryptoIv)
 * 
 * - CRYPTO IV name('crypto iv')
 */
cryptoIvStmt:
	Crypto Iv name = Name OpenParen (
		iv = paramBind
		| literalIv = LiteralText
	) CloseParen {
    return new CryptoIvStmt(
      $name.text,
      $iv.ctx || $literalIv.text.slice(1, -1)
    );
};