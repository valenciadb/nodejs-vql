// Generated from /home/me/SiaCodelabs/ValenciaQL/vql/packages/libs/parser/grammar/Crypto.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

  import {CryptoKeyStmt, CryptoIvStmt} from "../stmts/index.js";


  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034Z\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u0019\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003$\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004,\n\u0004\f\u0004\u000e",
    "\u0004/\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006=\n\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007C\n\u0007\f\u0007\u000e\u0007F\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tS\n\t\f\t\u000e\tV\u000b\t",
    "\u0003\t\u0003\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0002\u0002\u0002Y\u0002\u0012\u0003\u0002\u0002\u0002\u0004",
    "\u001d\u0003\u0002\u0002\u0002\u0006(\u0003\u0002\u0002\u0002\b0\u0003",
    "\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\f>\u0003\u0002\u0002\u0002",
    "\u000eJ\u0003\u0002\u0002\u0002\u0010O\u0003\u0002\u0002\u0002\u0012",
    "\u0013\u0007\u0006\u0002\u0002\u0013\u0014\u0007\u000e\u0002\u0002\u0014",
    "\u0015\u0007\u001f\u0002\u0002\u0015\u0018\u0007!\u0002\u0002\u0016",
    "\u0019\u0005\b\u0005\u0002\u0017\u0019\u0005\u0010\t\u0002\u0018\u0016",
    "\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001a",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0007\"\u0002\u0002\u001b\u001c",
    "\b\u0002\u0001\u0002\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u0007\u0006\u0002\u0002\u001e\u001f\u0007\r\u0002\u0002\u001f \u0007",
    "\u001f\u0002\u0002 #\u0007!\u0002\u0002!$\u0005\b\u0005\u0002\"$\u0007",
    "\u001b\u0002\u0002#!\u0003\u0002\u0002\u0002#\"\u0003\u0002\u0002\u0002",
    "$%\u0003\u0002\u0002\u0002%&\u0007\"\u0002\u0002&\'\b\u0003\u0001\u0002",
    "\'\u0005\u0003\u0002\u0002\u0002(-\u0007\u001f\u0002\u0002)*\u0007/",
    "\u0002\u0002*,\u0007\u001f\u0002\u0002+)\u0003\u0002\u0002\u0002,/\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002",
    ".\u0007\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000201\u00071\u0002",
    "\u000212\u0007\u001f\u0002\u000223\b\u0005\u0001\u00023\t\u0003\u0002",
    "\u0002\u000245\u0007\u001b\u0002\u00025=\b\u0006\u0001\u000267\u0007",
    "\u001c\u0002\u00027=\b\u0006\u0001\u000289\u0007\u001e\u0002\u00029",
    "=\b\u0006\u0001\u0002:;\u0007\u001d\u0002\u0002;=\b\u0006\u0001\u0002",
    "<4\u0003\u0002\u0002\u0002<6\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002=\u000b\u0003\u0002\u0002\u0002>?\u0007",
    ")\u0002\u0002?D\u0005\u000e\b\u0002@A\u0007#\u0002\u0002AC\u0005\u000e",
    "\b\u0002B@\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002GH\u0007*\u0002\u0002HI\b\u0007\u0001\u0002",
    "I\r\u0003\u0002\u0002\u0002JK\u0007\u001f\u0002\u0002KL\u0007%\u0002",
    "\u0002LM\u0005\n\u0006\u0002MN\b\b\u0001\u0002N\u000f\u0003\u0002\u0002",
    "\u0002OT\u0005\u000e\b\u0002PQ\u0007#\u0002\u0002QS\u0005\u000e\b\u0002",
    "RP\u0003\u0002\u0002\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002TU\u0003\u0002\u0002\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002",
    "\u0002\u0002WX\b\t\u0001\u0002X\u0011\u0003\u0002\u0002\u0002\b\u0018",
    "#-<DT"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Crypto extends antlr4.Parser {

    static grammarFileName = "Crypto.g4";
    static literalNames = [ null, null, "'AND'", "'APPEND'", "'CRYPTO'", 
                            "'DEFAULT'", "'DELETE'", "'ENCRYPT'", "'ENCRYPTED'", 
                            "'FROM'", "'INTO'", "'IV'", "'KEY'", "'ONLY'", 
                            "'READ'", "'RETURNING'", "'SCHEMA'", "'SELECT'", 
                            "'SET'", "'STREAM'", "'TABLE'", "'TTL'", "'WHERE'", 
                            "'WITH'", null, null, null, null, null, null, 
                            "'@'", "'('", "')'", "','", "';'", "':'", "':='", 
                            "'='", "'=='", "'{'", "'}'", "'['", "']'", "'<'", 
                            "'>'", "'.'", "'*'", "'&'", "'|'", "'?'", "'?='" ];
    static symbolicNames = [ null, "Whitespace", "And", "Append", "Crypto", 
                             "Default", "Delete", "Encrypt", "Encrypted", 
                             "From", "Into", "Iv", "Key", "Only", "Read", 
                             "Returning", "Schema", "Select", "Set", "Stream", 
                             "Table", "Ttl", "Where", "With", "SingleLineComment", 
                             "LiteralText", "LiteralNum", "LiteralDuration", 
                             "LiteralBool", "Name", "At", "OpenParen", "CloseParen", 
                             "Comma", "Semicolon", "Colon", "ColonEqual", 
                             "Equal", "DoubleEqual", "OpenBrace", "CloseBrace", 
                             "OpenBracket", "CloseBracket", "OpenChevron", 
                             "CloseChevron", "Dot", "Asterisk", "Ampersand", 
                             "VerticalBar", "QuestionMark", "QuestionMarkEqual" ];
    static ruleNames = [ "cryptoKeyStmt", "cryptoIvStmt", "qualifiedName", 
                         "paramBind", "literalValue", "literalMap", "mapField", 
                         "inlineMap" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Crypto.ruleNames;
        this.literalNames = Crypto.literalNames;
        this.symbolicNames = Crypto.symbolicNames;
    }

    get atn() {
        return atn;
    }



	cryptoKeyStmt() {
	    let localctx = new CryptoKeyStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Crypto.RULE_cryptoKeyStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(Crypto.Crypto);
	        this.state = 17;
	        this.match(Crypto.Key);
	        this.state = 18;
	        localctx.name = this.match(Crypto.Name);
	        this.state = 19;
	        this.match(Crypto.OpenParen);
	        this.state = 22;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Crypto.Ampersand:
	            this.state = 20;
	            localctx.key = this.paramBind();
	            break;
	        case Crypto.Name:
	            this.state = 21;
	            localctx.opts = this.inlineMap();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 24;
	        this.match(Crypto.CloseParen);

	        		return new CryptoKeyStmt((localctx.name===null ? null : localctx.name.text), localctx.key || localctx.opts);
	        	
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cryptoIvStmt() {
	    let localctx = new CryptoIvStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Crypto.RULE_cryptoIvStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(Crypto.Crypto);
	        this.state = 28;
	        this.match(Crypto.Iv);
	        this.state = 29;
	        localctx.name = this.match(Crypto.Name);
	        this.state = 30;
	        this.match(Crypto.OpenParen);
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Crypto.Ampersand:
	            this.state = 31;
	            localctx.iv = this.paramBind();
	            break;
	        case Crypto.LiteralText:
	            this.state = 32;
	            localctx.literalIv = this.match(Crypto.LiteralText);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 35;
	        this.match(Crypto.CloseParen);

	            return new CryptoIvStmt(
	              (localctx.name===null ? null : localctx.name.text),
	              localctx.iv || (localctx.literalIv===null ? null : localctx.literalIv.text).slice(1, -1)
	            );

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Crypto.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(Crypto.Name);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Crypto.Dot) {
	            this.state = 39;
	            this.match(Crypto.Dot);
	            this.state = 40;
	            this.match(Crypto.Name);
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramBind() {
	    let localctx = new ParamBindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Crypto.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(Crypto.Ampersand);
	        this.state = 47;
	        localctx.name = this.match(Crypto.Name);

	            return new ParamBind((localctx.name===null ? null : localctx.name.text));
	          
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literalValue() {
	    let localctx = new LiteralValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Crypto.RULE_literalValue);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Crypto.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            localctx.txt = this.match(Crypto.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case Crypto.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            localctx.num = this.match(Crypto.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case Crypto.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            localctx.bool = this.match(Crypto.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case Crypto.LiteralDuration:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            localctx.duration = this.match(Crypto.LiteralDuration);
	             return (localctx.duration===null ? null : localctx.duration.text); 
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literalMap() {
	    let localctx = new LiteralMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Crypto.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(Crypto.OpenBrace);
	        this.state = 61;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Crypto.Comma) {
	            this.state = 62;
	            this.match(Crypto.Comma);
	            this.state = 63;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
	        this.match(Crypto.CloseBrace);

	            const map = {};

	            for (const field of localctx.fields) {
	              map[field.name] = field.value;
	            }

	            return map;
	          
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapField() {
	    let localctx = new MapFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Crypto.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        localctx.name = this.match(Crypto.Name);
	        this.state = 73;
	        this.match(Crypto.Colon);
	        this.state = 74;
	        localctx.value = this.literalValue();

	            return {name: (localctx.name===null ? null : localctx.name.text), value: localctx.value};
	          
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inlineMap() {
	    let localctx = new InlineMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Crypto.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Crypto.Comma) {
	            this.state = 78;
	            this.match(Crypto.Comma);
	            this.state = 79;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	            const map = {};

	            for (const field of localctx.fields) {
	              map[field.name] = field.value;
	            }

	            return map;
	          
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Crypto.EOF = antlr4.Token.EOF;
Crypto.Whitespace = 1;
Crypto.And = 2;
Crypto.Append = 3;
Crypto.Crypto = 4;
Crypto.Default = 5;
Crypto.Delete = 6;
Crypto.Encrypt = 7;
Crypto.Encrypted = 8;
Crypto.From = 9;
Crypto.Into = 10;
Crypto.Iv = 11;
Crypto.Key = 12;
Crypto.Only = 13;
Crypto.Read = 14;
Crypto.Returning = 15;
Crypto.Schema = 16;
Crypto.Select = 17;
Crypto.Set = 18;
Crypto.Stream = 19;
Crypto.Table = 20;
Crypto.Ttl = 21;
Crypto.Where = 22;
Crypto.With = 23;
Crypto.SingleLineComment = 24;
Crypto.LiteralText = 25;
Crypto.LiteralNum = 26;
Crypto.LiteralDuration = 27;
Crypto.LiteralBool = 28;
Crypto.Name = 29;
Crypto.At = 30;
Crypto.OpenParen = 31;
Crypto.CloseParen = 32;
Crypto.Comma = 33;
Crypto.Semicolon = 34;
Crypto.Colon = 35;
Crypto.ColonEqual = 36;
Crypto.Equal = 37;
Crypto.DoubleEqual = 38;
Crypto.OpenBrace = 39;
Crypto.CloseBrace = 40;
Crypto.OpenBracket = 41;
Crypto.CloseBracket = 42;
Crypto.OpenChevron = 43;
Crypto.CloseChevron = 44;
Crypto.Dot = 45;
Crypto.Asterisk = 46;
Crypto.Ampersand = 47;
Crypto.VerticalBar = 48;
Crypto.QuestionMark = 49;
Crypto.QuestionMarkEqual = 50;

Crypto.RULE_cryptoKeyStmt = 0;
Crypto.RULE_cryptoIvStmt = 1;
Crypto.RULE_qualifiedName = 2;
Crypto.RULE_paramBind = 3;
Crypto.RULE_literalValue = 4;
Crypto.RULE_literalMap = 5;
Crypto.RULE_mapField = 6;
Crypto.RULE_inlineMap = 7;

class CryptoKeyStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_cryptoKeyStmt;
        this.name = null; // Token
        this.key = null; // ParamBindContext
        this.opts = null; // InlineMapContext
    }

	Crypto() {
	    return this.getToken(Crypto.Crypto, 0);
	};

	Key() {
	    return this.getToken(Crypto.Key, 0);
	};

	OpenParen() {
	    return this.getToken(Crypto.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Crypto.CloseParen, 0);
	};

	Name() {
	    return this.getToken(Crypto.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	inlineMap() {
	    return this.getTypedRuleContext(InlineMapContext,0);
	};


}



class CryptoIvStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_cryptoIvStmt;
        this.name = null; // Token
        this.iv = null; // ParamBindContext
        this.literalIv = null; // Token
    }

	Crypto() {
	    return this.getToken(Crypto.Crypto, 0);
	};

	Iv() {
	    return this.getToken(Crypto.Iv, 0);
	};

	OpenParen() {
	    return this.getToken(Crypto.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Crypto.CloseParen, 0);
	};

	Name() {
	    return this.getToken(Crypto.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	LiteralText() {
	    return this.getToken(Crypto.LiteralText, 0);
	};


}



class QualifiedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Crypto.Name);
	    } else {
	        return this.getToken(Crypto.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Crypto.Dot);
	    } else {
	        return this.getToken(Crypto.Dot, i);
	    }
	};



}



class ParamBindContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(Crypto.Ampersand, 0);
	};

	Name() {
	    return this.getToken(Crypto.Name, 0);
	};


}



class LiteralValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
        this.duration = null; // Token
    }

	LiteralText() {
	    return this.getToken(Crypto.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(Crypto.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(Crypto.LiteralBool, 0);
	};

	LiteralDuration() {
	    return this.getToken(Crypto.LiteralDuration, 0);
	};


}



class LiteralMapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(Crypto.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(Crypto.CloseBrace, 0);
	};

	mapField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapFieldContext);
	    } else {
	        return this.getTypedRuleContext(MapFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Crypto.Comma);
	    } else {
	        return this.getToken(Crypto.Comma, i);
	    }
	};



}



class MapFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(Crypto.Colon, 0);
	};

	Name() {
	    return this.getToken(Crypto.Name, 0);
	};

	literalValue() {
	    return this.getTypedRuleContext(LiteralValueContext,0);
	};


}



class InlineMapContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Crypto.RULE_inlineMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	mapField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapFieldContext);
	    } else {
	        return this.getTypedRuleContext(MapFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Crypto.Comma);
	    } else {
	        return this.getToken(Crypto.Comma, i);
	    }
	};



}




Crypto.CryptoKeyStmtContext = CryptoKeyStmtContext; 
Crypto.CryptoIvStmtContext = CryptoIvStmtContext; 
Crypto.QualifiedNameContext = QualifiedNameContext; 
Crypto.ParamBindContext = ParamBindContext; 
Crypto.LiteralValueContext = LiteralValueContext; 
Crypto.LiteralMapContext = LiteralMapContext; 
Crypto.MapFieldContext = MapFieldContext; 
Crypto.InlineMapContext = InlineMapContext; 
