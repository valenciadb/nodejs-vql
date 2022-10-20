// Generated from /home/me/SiaCodeLabs/SiaQL/siaql/packages/libs/query-parser/grammar/Parser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	import KeyValue from "../stmts/KeyValue.js";
  import KeyFieldValue from "../stmts/KeyFieldValue.js";

  import SelectStmt from "../stmts/SelectStmt.js";
  import DeleteStmt from "../stmts/DeleteStmt.js";
  import SetStmt from "../stmts/SetStmt.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#L\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004#",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "5\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\tD\n\t\f\t",
    "\u000e\tG\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0002\u0002E\u0002",
    "\u0014\u0003\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006",
    "\"\u0003\u0002\u0002\u0002\b$\u0003\u0002\u0002\u0002\n&\u0003\u0002",
    "\u0002\u0002\f-\u0003\u0002\u0002\u0002\u000e8\u0003\u0002\u0002\u0002",
    "\u0010@\u0003\u0002\u0002\u0002\u0012H\u0003\u0002\u0002\u0002\u0014",
    "\u0015\u0005\u0004\u0003\u0002\u0015\u0016\b\u0002\u0001\u0002\u0016",
    "\u0003\u0003\u0002\u0002\u0002\u0017\u0018\u0005\u0006\u0004\u0002\u0018",
    "\u0019\b\u0003\u0001\u0002\u0019\u0005\u0003\u0002\u0002\u0002\u001a",
    "\u001b\u0005\u0012\n\u0002\u001b\u001c\b\u0004\u0001\u0002\u001c#\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007\u000e\u0002\u0002\u001e\u001f\u0007",
    "\u001e\u0002\u0002\u001f \u0005\u0012\n\u0002 !\b\u0004\u0001\u0002",
    "!#\u0003\u0002\u0002\u0002\"\u001a\u0003\u0002\u0002\u0002\"\u001d\u0003",
    "\u0002\u0002\u0002#\u0007\u0003\u0002\u0002\u0002$%\u0007 \u0002\u0002",
    "%\t\u0003\u0002\u0002\u0002&\'\u0007\t\u0002\u0002\'(\u0007\u0005\u0002",
    "\u0002()\u0005\u0010\t\u0002)*\u0007\f\u0002\u0002*+\u0005\u0002\u0002",
    "\u0002+,\b\u0006\u0001\u0002,\u000b\u0003\u0002\u0002\u0002-.\u0007",
    "\u0004\u0002\u0002./\u0007\u0005\u0002\u0002/0\u0005\u0010\t\u00020",
    "1\u0007\f\u0002\u000214\u0005\u0002\u0002\u000223\u0007\u0007\u0002",
    "\u000235\u0005\b\u0005\u000242\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000256\u0003\u0002\u0002\u000267\b\u0007\u0001\u00027\r\u0003",
    "\u0002\u0002\u000289\u0007\n\u0002\u00029:\u0007\u0006\u0002\u0002:",
    ";\u0005\u0010\t\u0002;<\u0007\u0013\u0002\u0002<=\u0005\u0012\n\u0002",
    "=>\u0007\u0014\u0002\u0002>?\b\b\u0001\u0002?\u000f\u0003\u0002\u0002",
    "\u0002@E\u0007\u000e\u0002\u0002AB\u0007\u001f\u0002\u0002BD\u0007\u000e",
    "\u0002\u0002CA\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003",
    "\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0011\u0003\u0002\u0002",
    "\u0002GE\u0003\u0002\u0002\u0002HI\u0007!\u0002\u0002IJ\u0007\u000e",
    "\u0002\u0002J\u0013\u0003\u0002\u0002\u0002\u0005\"4E"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Parser extends antlr4.Parser {

    static grammarFileName = "Parser.g4";
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
    static ruleNames = [ "whereClause", "keyValue", "keyFieldValue", "returningClause", 
                         "selectStatement", "deleteStatement", "setStatement", 
                         "qualifiedName", "paramBind" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Parser.ruleNames;
        this.literalNames = Parser.literalNames;
        this.symbolicNames = Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Parser.RULE_whereClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        localctx.value = this.keyValue();

	            return new KeyValue(localctx.value);
	          
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



	keyValue() {
	    let localctx = new KeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Parser.RULE_keyValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        localctx.value = this.keyFieldValue();

	            return [localctx.value];
	          
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



	keyFieldValue() {
	    let localctx = new KeyFieldValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Parser.RULE_keyFieldValue);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Parser.Ampersand:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1),
	                  (localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1)
	                );
	              
	            break;
	        case Parser.Name:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            localctx.name = this.match(Parser.Name);
	            this.state = 28;
	            this.match(Parser.Equal);
	            this.state = 29;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  (localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1)
	                );
	              
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



	returningClause() {
	    let localctx = new ReturningClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Parser.RULE_returningClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(Parser.Asterisk);
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



	selectStatement() {
	    let localctx = new SelectStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Parser.RULE_selectStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(Parser.Select);
	        this.state = 37;
	        this.match(Parser.From);
	        this.state = 38;
	        localctx.tableName = this.qualifiedName();
	        this.state = 39;
	        this.match(Parser.Where);
	        this.state = 40;
	        localctx.where = this.whereClause();

	            return new SelectStmt(
	              localctx.tableName.getText(),
	              localctx.where
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



	deleteStatement() {
	    let localctx = new DeleteStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Parser.RULE_deleteStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(Parser.Delete);
	        this.state = 44;
	        this.match(Parser.From);
	        this.state = 45;
	        localctx.tableName = this.qualifiedName();
	        this.state = 46;
	        this.match(Parser.Where);
	        this.state = 47;
	        localctx.where = this.whereClause();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Parser.Returning) {
	            this.state = 48;
	            this.match(Parser.Returning);
	            this.state = 49;
	            localctx.returning = this.returningClause();
	        }


	            return new DeleteStmt(
	              localctx.tableName.getText(),
	              localctx.where,
	              localctx.returning?.getText()
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



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Parser.RULE_setStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(Parser.Set);
	        this.state = 55;
	        this.match(Parser.Into);
	        this.state = 56;
	        localctx.tableName = this.qualifiedName();
	        this.state = 57;
	        this.match(Parser.OpenParen);
	        this.state = 58;
	        localctx.value = this.paramBind();
	        this.state = 59;
	        this.match(Parser.CloseParen);

	            return new SetStmt(
	              localctx.tableName.getText(),
	              localctx.value.getText().slice(1)
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
	    this.enterRule(localctx, 14, Parser.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(Parser.Name);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Parser.Dot) {
	            this.state = 63;
	            this.match(Parser.Dot);
	            this.state = 64;
	            this.match(Parser.Name);
	            this.state = 69;
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
	    this.enterRule(localctx, 16, Parser.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(Parser.Ampersand);
	        this.state = 71;
	        this.match(Parser.Name);
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

Parser.EOF = antlr4.Token.EOF;
Parser.Whitespace = 1;
Parser.Delete = 2;
Parser.From = 3;
Parser.Into = 4;
Parser.Returning = 5;
Parser.Schema = 6;
Parser.Select = 7;
Parser.Set = 8;
Parser.Table = 9;
Parser.Where = 10;
Parser.SingleLineComment = 11;
Parser.Name = 12;
Parser.LiteralText = 13;
Parser.LiteralNum = 14;
Parser.LiteralBool = 15;
Parser.Literal = 16;
Parser.OpenParen = 17;
Parser.CloseParen = 18;
Parser.Comma = 19;
Parser.Colon = 20;
Parser.Semicolon = 21;
Parser.OpenBrace = 22;
Parser.CloseBrace = 23;
Parser.OpenBracket = 24;
Parser.CloseBracket = 25;
Parser.OpenChevron = 26;
Parser.CloseChevron = 27;
Parser.Equal = 28;
Parser.Dot = 29;
Parser.Asterisk = 30;
Parser.Ampersand = 31;
Parser.VerticalBar = 32;
Parser.QuestionMark = 33;

Parser.RULE_whereClause = 0;
Parser.RULE_keyValue = 1;
Parser.RULE_keyFieldValue = 2;
Parser.RULE_returningClause = 3;
Parser.RULE_selectStatement = 4;
Parser.RULE_deleteStatement = 5;
Parser.RULE_setStatement = 6;
Parser.RULE_qualifiedName = 7;
Parser.RULE_paramBind = 8;

class WhereClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_whereClause;
        this.value = null; // KeyValueContext
    }

	keyValue() {
	    return this.getTypedRuleContext(KeyValueContext,0);
	};


}



class KeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_keyValue;
        this.value = null; // KeyFieldValueContext
    }

	keyFieldValue() {
	    return this.getTypedRuleContext(KeyFieldValueContext,0);
	};


}



class KeyFieldValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_keyFieldValue;
        this.param = null; // ParamBindContext
        this.name = null; // Token
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	Equal() {
	    return this.getToken(Parser.Equal, 0);
	};

	Name() {
	    return this.getToken(Parser.Name, 0);
	};


}



class ReturningClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_returningClause;
    }

	Asterisk() {
	    return this.getToken(Parser.Asterisk, 0);
	};


}



class SelectStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_selectStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Select() {
	    return this.getToken(Parser.Select, 0);
	};

	From() {
	    return this.getToken(Parser.From, 0);
	};

	Where() {
	    return this.getToken(Parser.Where, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};


}



class DeleteStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_deleteStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
        this.returning = null; // ReturningClauseContext
    }

	Delete() {
	    return this.getToken(Parser.Delete, 0);
	};

	From() {
	    return this.getToken(Parser.From, 0);
	};

	Where() {
	    return this.getToken(Parser.Where, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	Returning() {
	    return this.getToken(Parser.Returning, 0);
	};

	returningClause() {
	    return this.getTypedRuleContext(ReturningClauseContext,0);
	};


}



class SetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Parser.RULE_setStatement;
        this.tableName = null; // QualifiedNameContext
        this.value = null; // ParamBindContext
    }

	Set() {
	    return this.getToken(Parser.Set, 0);
	};

	Into() {
	    return this.getToken(Parser.Into, 0);
	};

	OpenParen() {
	    return this.getToken(Parser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Parser.CloseParen, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
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
        this.ruleIndex = Parser.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.Name);
	    } else {
	        return this.getToken(Parser.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Parser.Dot);
	    } else {
	        return this.getToken(Parser.Dot, i);
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
        this.ruleIndex = Parser.RULE_paramBind;
    }

	Ampersand() {
	    return this.getToken(Parser.Ampersand, 0);
	};

	Name() {
	    return this.getToken(Parser.Name, 0);
	};


}




Parser.WhereClauseContext = WhereClauseContext; 
Parser.KeyValueContext = KeyValueContext; 
Parser.KeyFieldValueContext = KeyFieldValueContext; 
Parser.ReturningClauseContext = ReturningClauseContext; 
Parser.SelectStatementContext = SelectStatementContext; 
Parser.DeleteStatementContext = DeleteStatementContext; 
Parser.SetStatementContext = SetStatementContext; 
Parser.QualifiedNameContext = QualifiedNameContext; 
Parser.ParamBindContext = ParamBindContext; 
