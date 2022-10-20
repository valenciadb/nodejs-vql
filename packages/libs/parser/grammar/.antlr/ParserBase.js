// Generated from /home/me/SiaCodelabs/ValenciaQL/vql/packages/libs/parser/grammar/ParserBase.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034@\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0012\n\u0002\f\u0002\u000e",
    "\u0002\u0015\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004#\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005)\n\u0005\f\u0005\u000e\u0005,\u000b",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u00079\n\u0007\f\u0007\u000e\u0007<\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002",
    "?\u0002\u000e\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002",
    "\u0002\u0006\"\u0003\u0002\u0002\u0002\b$\u0003\u0002\u0002\u0002\n",
    "0\u0003\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000e\u0013\u0007",
    "\u001f\u0002\u0002\u000f\u0010\u0007/\u0002\u0002\u0010\u0012\u0007",
    "\u001f\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0012\u0015\u0003",
    "\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003",
    "\u0002\u0002\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0013\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u00071\u0002\u0002\u0017\u0018\u0007",
    "\u001f\u0002\u0002\u0018\u0019\b\u0003\u0001\u0002\u0019\u0005\u0003",
    "\u0002\u0002\u0002\u001a\u001b\u0007\u001b\u0002\u0002\u001b#\b\u0004",
    "\u0001\u0002\u001c\u001d\u0007\u001c\u0002\u0002\u001d#\b\u0004\u0001",
    "\u0002\u001e\u001f\u0007\u001e\u0002\u0002\u001f#\b\u0004\u0001\u0002",
    " !\u0007\u001d\u0002\u0002!#\b\u0004\u0001\u0002\"\u001a\u0003\u0002",
    "\u0002\u0002\"\u001c\u0003\u0002\u0002\u0002\"\u001e\u0003\u0002\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002#\u0007\u0003\u0002\u0002\u0002$%\u0007",
    ")\u0002\u0002%*\u0005\n\u0006\u0002&\'\u0007#\u0002\u0002\')\u0005\n",
    "\u0006\u0002(&\u0003\u0002\u0002\u0002),\u0003\u0002\u0002\u0002*(\u0003",
    "\u0002\u0002\u0002*+\u0003\u0002\u0002\u0002+-\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002-.\u0007*\u0002\u0002./\b\u0005\u0001\u0002",
    "/\t\u0003\u0002\u0002\u000201\u0007\u001f\u0002\u000212\u0007%\u0002",
    "\u000223\u0005\u0006\u0004\u000234\b\u0006\u0001\u00024\u000b\u0003",
    "\u0002\u0002\u00025:\u0005\n\u0006\u000267\u0007#\u0002\u000279\u0005",
    "\n\u0006\u000286\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:",
    "8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002",
    "\u0002<:\u0003\u0002\u0002\u0002=>\b\u0007\u0001\u0002>\r\u0003\u0002",
    "\u0002\u0002\u0006\u0013\"*:"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ParserBase extends antlr4.Parser {

    static grammarFileName = "ParserBase.g4";
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
    static ruleNames = [ "qualifiedName", "paramBind", "literalValue", "literalMap", 
                         "mapField", "inlineMap" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ParserBase.ruleNames;
        this.literalNames = ParserBase.literalNames;
        this.symbolicNames = ParserBase.symbolicNames;
    }

    get atn() {
        return atn;
    }



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ParserBase.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(ParserBase.Name);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ParserBase.Dot) {
	            this.state = 13;
	            this.match(ParserBase.Dot);
	            this.state = 14;
	            this.match(ParserBase.Name);
	            this.state = 19;
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
	    this.enterRule(localctx, 2, ParserBase.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(ParserBase.Ampersand);
	        this.state = 21;
	        localctx.name = this.match(ParserBase.Name);

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
	    this.enterRule(localctx, 4, ParserBase.RULE_literalValue);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ParserBase.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            localctx.txt = this.match(ParserBase.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case ParserBase.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            localctx.num = this.match(ParserBase.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case ParserBase.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            localctx.bool = this.match(ParserBase.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case ParserBase.LiteralDuration:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            localctx.duration = this.match(ParserBase.LiteralDuration);
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
	    this.enterRule(localctx, 6, ParserBase.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(ParserBase.OpenBrace);
	        this.state = 35;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ParserBase.Comma) {
	            this.state = 36;
	            this.match(ParserBase.Comma);
	            this.state = 37;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this.match(ParserBase.CloseBrace);

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
	    this.enterRule(localctx, 8, ParserBase.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        localctx.name = this.match(ParserBase.Name);
	        this.state = 47;
	        this.match(ParserBase.Colon);
	        this.state = 48;
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
	    this.enterRule(localctx, 10, ParserBase.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ParserBase.Comma) {
	            this.state = 52;
	            this.match(ParserBase.Comma);
	            this.state = 53;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 58;
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

ParserBase.EOF = antlr4.Token.EOF;
ParserBase.Whitespace = 1;
ParserBase.And = 2;
ParserBase.Append = 3;
ParserBase.Crypto = 4;
ParserBase.Default = 5;
ParserBase.Delete = 6;
ParserBase.Encrypt = 7;
ParserBase.Encrypted = 8;
ParserBase.From = 9;
ParserBase.Into = 10;
ParserBase.Iv = 11;
ParserBase.Key = 12;
ParserBase.Only = 13;
ParserBase.Read = 14;
ParserBase.Returning = 15;
ParserBase.Schema = 16;
ParserBase.Select = 17;
ParserBase.Set = 18;
ParserBase.Stream = 19;
ParserBase.Table = 20;
ParserBase.Ttl = 21;
ParserBase.Where = 22;
ParserBase.With = 23;
ParserBase.SingleLineComment = 24;
ParserBase.LiteralText = 25;
ParserBase.LiteralNum = 26;
ParserBase.LiteralDuration = 27;
ParserBase.LiteralBool = 28;
ParserBase.Name = 29;
ParserBase.At = 30;
ParserBase.OpenParen = 31;
ParserBase.CloseParen = 32;
ParserBase.Comma = 33;
ParserBase.Semicolon = 34;
ParserBase.Colon = 35;
ParserBase.ColonEqual = 36;
ParserBase.Equal = 37;
ParserBase.DoubleEqual = 38;
ParserBase.OpenBrace = 39;
ParserBase.CloseBrace = 40;
ParserBase.OpenBracket = 41;
ParserBase.CloseBracket = 42;
ParserBase.OpenChevron = 43;
ParserBase.CloseChevron = 44;
ParserBase.Dot = 45;
ParserBase.Asterisk = 46;
ParserBase.Ampersand = 47;
ParserBase.VerticalBar = 48;
ParserBase.QuestionMark = 49;
ParserBase.QuestionMarkEqual = 50;

ParserBase.RULE_qualifiedName = 0;
ParserBase.RULE_paramBind = 1;
ParserBase.RULE_literalValue = 2;
ParserBase.RULE_literalMap = 3;
ParserBase.RULE_mapField = 4;
ParserBase.RULE_inlineMap = 5;

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
        this.ruleIndex = ParserBase.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ParserBase.Name);
	    } else {
	        return this.getToken(ParserBase.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ParserBase.Dot);
	    } else {
	        return this.getToken(ParserBase.Dot, i);
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
        this.ruleIndex = ParserBase.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(ParserBase.Ampersand, 0);
	};

	Name() {
	    return this.getToken(ParserBase.Name, 0);
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
        this.ruleIndex = ParserBase.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
        this.duration = null; // Token
    }

	LiteralText() {
	    return this.getToken(ParserBase.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(ParserBase.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(ParserBase.LiteralBool, 0);
	};

	LiteralDuration() {
	    return this.getToken(ParserBase.LiteralDuration, 0);
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
        this.ruleIndex = ParserBase.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(ParserBase.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(ParserBase.CloseBrace, 0);
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
	        return this.getTokens(ParserBase.Comma);
	    } else {
	        return this.getToken(ParserBase.Comma, i);
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
        this.ruleIndex = ParserBase.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(ParserBase.Colon, 0);
	};

	Name() {
	    return this.getToken(ParserBase.Name, 0);
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
        this.ruleIndex = ParserBase.RULE_inlineMap;
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
	        return this.getTokens(ParserBase.Comma);
	    } else {
	        return this.getToken(ParserBase.Comma, i);
	    }
	};



}




ParserBase.QualifiedNameContext = QualifiedNameContext; 
ParserBase.ParamBindContext = ParamBindContext; 
ParserBase.LiteralValueContext = LiteralValueContext; 
ParserBase.LiteralMapContext = LiteralMapContext; 
ParserBase.MapFieldContext = MapFieldContext; 
ParserBase.InlineMapContext = InlineMapContext; 
