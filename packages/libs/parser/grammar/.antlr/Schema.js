// Generated from /home/me/SiaCodeLabs/SiaQL/siaql/packages/libs/query-parser/grammar/Schema.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	import SchemaStmt from "../stmts/SchemaStmt.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#\u001f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "\r\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0017\n\u0003\f\u0003",
    "\u000e\u0003\u001a\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0002\u0002\u001d\u0002",
    "\b\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006",
    "\u001b\u0003\u0002\u0002\u0002\b\t\u0007\b\u0002\u0002\t\f\u0007\u000e",
    "\u0002\u0002\n\u000b\u0007\u0016\u0002\u0002\u000b\r\u0007\u000e\u0002",
    "\u0002\f\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u000e",
    "\u0003\u0002\u0002\u0002\u000e\u000f\u0007\u0013\u0002\u0002\u000f\u0010",
    "\u0007 \u0002\u0002\u0010\u0011\u0007\u0014\u0002\u0002\u0011\u0012",
    "\b\u0002\u0001\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013\u0018",
    "\u0007\u000e\u0002\u0002\u0014\u0015\u0007\u001f\u0002\u0002\u0015\u0017",
    "\u0007\u000e\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0017\u001a",
    "\u0003\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007!\u0002\u0002\u001c\u001d",
    "\u0007\u000e\u0002\u0002\u001d\u0007\u0003\u0002\u0002\u0002\u0004\f",
    "\u0018"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Schema extends antlr4.Parser {

    static grammarFileName = "Schema.g4";
    static literalNames = [ null, null, "'DELETE'", "'FROM'", "'INTO'", 
                            "'RETURNING'", "'SCHEMA'", "'SELECT'", "'SET'", 
                            "'TABLE'", "'WHERE'", null, null, null, null, 
                            null, null, "'('", "')'", "','", "':'", "';'", 
                            "'{'", "'}'", "'['", "']'", "'<'", "'>'", "'='", 
                            "'.'", "'*'", "'&'", "'|'", "'?'" ];
    static symbolicNames = [ null, "Whitespace", "Delete", "From", "Into", 
                             "Returning", "Schema", "Select", "Set", "Table", 
                             "Where", "SingleLineComment", "Name", "LiteralText", 
                             "LiteralNum", "LiteralBool", "Literal", "OpenParen", 
                             "CloseParen", "Comma", "Colon", "Semicolon", 
                             "OpenBrace", "CloseBrace", "OpenBracket", "CloseBracket", 
                             "OpenChevron", "CloseChevron", "Equal", "Dot", 
                             "Asterisk", "Ampersand", "VerticalBar", "QuestionMark" ];
    static ruleNames = [ "schemaStatement", "qualifiedName", "paramBind" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Schema.ruleNames;
        this.literalNames = Schema.literalNames;
        this.symbolicNames = Schema.symbolicNames;
    }

    get atn() {
        return atn;
    }



	schemaStatement() {
	    let localctx = new SchemaStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Schema.RULE_schemaStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        this.match(Schema.Schema);
	        this.state = 7;
	        localctx.schemaName = this.match(Schema.Name);
	        this.state = 10;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Schema.Colon) {
	            this.state = 8;
	            this.match(Schema.Colon);
	            this.state = 9;
	            localctx.baseSchemaName = this.match(Schema.Name);
	        }

	        this.state = 12;
	        this.match(Schema.OpenParen);
	        this.state = 13;
	        this.match(Schema.Asterisk);
	        this.state = 14;
	        this.match(Schema.CloseParen);

	        			return new SchemaStmt(
	        				(localctx.schemaName===null ? null : localctx.schemaName.text),
	        				(localctx.baseSchemaName===null ? null : localctx.baseSchemaName.text),
	        				["*"]
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
	    this.enterRule(localctx, 2, Schema.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.match(Schema.Name);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Schema.Dot) {
	            this.state = 18;
	            this.match(Schema.Dot);
	            this.state = 19;
	            this.match(Schema.Name);
	            this.state = 24;
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
	    this.enterRule(localctx, 4, Schema.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(Schema.Ampersand);
	        this.state = 26;
	        this.match(Schema.Name);
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

Schema.EOF = antlr4.Token.EOF;
Schema.Whitespace = 1;
Schema.Delete = 2;
Schema.From = 3;
Schema.Into = 4;
Schema.Returning = 5;
Schema.Schema = 6;
Schema.Select = 7;
Schema.Set = 8;
Schema.Table = 9;
Schema.Where = 10;
Schema.SingleLineComment = 11;
Schema.Name = 12;
Schema.LiteralText = 13;
Schema.LiteralNum = 14;
Schema.LiteralBool = 15;
Schema.Literal = 16;
Schema.OpenParen = 17;
Schema.CloseParen = 18;
Schema.Comma = 19;
Schema.Colon = 20;
Schema.Semicolon = 21;
Schema.OpenBrace = 22;
Schema.CloseBrace = 23;
Schema.OpenBracket = 24;
Schema.CloseBracket = 25;
Schema.OpenChevron = 26;
Schema.CloseChevron = 27;
Schema.Equal = 28;
Schema.Dot = 29;
Schema.Asterisk = 30;
Schema.Ampersand = 31;
Schema.VerticalBar = 32;
Schema.QuestionMark = 33;

Schema.RULE_schemaStatement = 0;
Schema.RULE_qualifiedName = 1;
Schema.RULE_paramBind = 2;

class SchemaStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Schema.RULE_schemaStatement;
        this.schemaName = null; // Token
        this.baseSchemaName = null; // Token
    }

	Schema() {
	    return this.getToken(Schema.Schema, 0);
	};

	OpenParen() {
	    return this.getToken(Schema.OpenParen, 0);
	};

	Asterisk() {
	    return this.getToken(Schema.Asterisk, 0);
	};

	CloseParen() {
	    return this.getToken(Schema.CloseParen, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Schema.Name);
	    } else {
	        return this.getToken(Schema.Name, i);
	    }
	};


	Colon() {
	    return this.getToken(Schema.Colon, 0);
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
        this.ruleIndex = Schema.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Schema.Name);
	    } else {
	        return this.getToken(Schema.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Schema.Dot);
	    } else {
	        return this.getToken(Schema.Dot, i);
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
        this.ruleIndex = Schema.RULE_paramBind;
    }

	Ampersand() {
	    return this.getToken(Schema.Ampersand, 0);
	};

	Name() {
	    return this.getToken(Schema.Name, 0);
	};


}




Schema.SchemaStatementContext = SchemaStatementContext; 
Schema.QualifiedNameContext = QualifiedNameContext; 
Schema.ParamBindContext = ParamBindContext; 
