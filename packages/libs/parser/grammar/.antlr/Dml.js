// Generated from /home/me/SiaCodelabs/ValenciaQL/vql/packages/libs/parser/grammar/Dml.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

  import {KeyValue, KeyFieldValue, SelectStmt, DeleteStmt, SetStmt} from "../stmts/index.js";


  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034\u00a1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002)\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004:\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005H\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\ta\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nn\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000bs\n\u000b\f\u000b\u000e\u000bv\u000b\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u0084\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0007\u000e\u008a\n\u000e\f\u000e\u000e\u000e\u008d\u000b",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0007",
    "\u0010\u009a\n\u0010\f\u0010\u000e\u0010\u009d\u000b\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0002\u0002\u0011\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0002\u0003\u0003\u0002",
    "\'(\u0002\u009e\u0002(\u0003\u0002\u0002\u0002\u0004*\u0003\u0002\u0002",
    "\u0002\u00069\u0003\u0002\u0002\u0002\bG\u0003\u0002\u0002\u0002\nI",
    "\u0003\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eS\u0003\u0002",
    "\u0002\u0002\u0010Y\u0003\u0002\u0002\u0002\u0012m\u0003\u0002\u0002",
    "\u0002\u0014o\u0003\u0002\u0002\u0002\u0016w\u0003\u0002\u0002\u0002",
    "\u0018\u0083\u0003\u0002\u0002\u0002\u001a\u0085\u0003\u0002\u0002\u0002",
    "\u001c\u0091\u0003\u0002\u0002\u0002\u001e\u0096\u0003\u0002\u0002\u0002",
    " !\u0007\u0018\u0002\u0002!\"\u0005\u0004\u0003\u0002\"#\b\u0002\u0001",
    "\u0002#)\u0003\u0002\u0002\u0002$%\u0007\u0018\u0002\u0002%&\u0005\u0006",
    "\u0004\u0002&\'\b\u0002\u0001\u0002\')\u0003\u0002\u0002\u0002( \u0003",
    "\u0002\u0002\u0002($\u0003\u0002\u0002\u0002)\u0003\u0003\u0002\u0002",
    "\u0002*+\u0005\b\u0005\u0002+,\b\u0003\u0001\u0002,\u0005\u0003\u0002",
    "\u0002\u0002-.\u0005\b\u0005\u0002./\u0007\u0004\u0002\u0002/0\u0005",
    "\b\u0005\u000201\b\u0004\u0001\u00021:\u0003\u0002\u0002\u000223\u0005",
    "\b\u0005\u000234\u0007\u0004\u0002\u000245\u0005\b\u0005\u000256\u0007",
    "\u0004\u0002\u000267\u0005\b\u0005\u000278\b\u0004\u0001\u00028:\u0003",
    "\u0002\u0002\u00029-\u0003\u0002\u0002\u000292\u0003\u0002\u0002\u0002",
    ":\u0007\u0003\u0002\u0002\u0002;<\u0005\u0016\f\u0002<=\b\u0005\u0001",
    "\u0002=H\u0003\u0002\u0002\u0002>?\u0007\u001f\u0002\u0002?@\t\u0002",
    "\u0002\u0002@A\u0005\u0016\f\u0002AB\b\u0005\u0001\u0002BH\u0003\u0002",
    "\u0002\u0002CD\u0007\u001f\u0002\u0002DE\t\u0002\u0002\u0002EF\u0007",
    "\u001b\u0002\u0002FH\b\u0005\u0001\u0002G;\u0003\u0002\u0002\u0002G",
    ">\u0003\u0002\u0002\u0002GC\u0003\u0002\u0002\u0002H\t\u0003\u0002\u0002",
    "\u0002IJ\u0007\u0011\u0002\u0002JK\u00070\u0002\u0002KL\b\u0006\u0001",
    "\u0002L\u000b\u0003\u0002\u0002\u0002MN\u0007\u0013\u0002\u0002NO\u0007",
    "\u000b\u0002\u0002OP\u0005\u0014\u000b\u0002PQ\u0005\u0002\u0002\u0002",
    "QR\b\u0007\u0001\u0002R\r\u0003\u0002\u0002\u0002ST\u0007\b\u0002\u0002",
    "TU\u0007\u000b\u0002\u0002UV\u0005\u0014\u000b\u0002VW\u0005\u0002\u0002",
    "\u0002WX\b\b\u0001\u0002X\u000f\u0003\u0002\u0002\u0002YZ\u0007\u0014",
    "\u0002\u0002Z[\u0007\f\u0002\u0002[\\\u0005\u0014\u000b\u0002\\]\u0007",
    "!\u0002\u0002]^\u0005\u0012\n\u0002^`\u0007\"\u0002\u0002_a\u0005\n",
    "\u0006\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\u0003",
    "\u0002\u0002\u0002bc\b\t\u0001\u0002c\u0011\u0003\u0002\u0002\u0002",
    "de\u0005\u0016\f\u0002ef\b\n\u0001\u0002fn\u0003\u0002\u0002\u0002g",
    "h\u0005\u001a\u000e\u0002hi\b\n\u0001\u0002in\u0003\u0002\u0002\u0002",
    "jk\u0005\u001e\u0010\u0002kl\b\n\u0001\u0002ln\u0003\u0002\u0002\u0002",
    "md\u0003\u0002\u0002\u0002mg\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002",
    "\u0002n\u0013\u0003\u0002\u0002\u0002ot\u0007\u001f\u0002\u0002pq\u0007",
    "/\u0002\u0002qs\u0007\u001f\u0002\u0002rp\u0003\u0002\u0002\u0002sv",
    "\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002u\u0015\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007",
    "1\u0002\u0002xy\u0007\u001f\u0002\u0002yz\b\f\u0001\u0002z\u0017\u0003",
    "\u0002\u0002\u0002{|\u0007\u001b\u0002\u0002|\u0084\b\r\u0001\u0002",
    "}~\u0007\u001c\u0002\u0002~\u0084\b\r\u0001\u0002\u007f\u0080\u0007",
    "\u001e\u0002\u0002\u0080\u0084\b\r\u0001\u0002\u0081\u0082\u0007\u001d",
    "\u0002\u0002\u0082\u0084\b\r\u0001\u0002\u0083{\u0003\u0002\u0002\u0002",
    "\u0083}\u0003\u0002\u0002\u0002\u0083\u007f\u0003\u0002\u0002\u0002",
    "\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0019\u0003\u0002\u0002\u0002",
    "\u0085\u0086\u0007)\u0002\u0002\u0086\u008b\u0005\u001c\u000f\u0002",
    "\u0087\u0088\u0007#\u0002\u0002\u0088\u008a\u0005\u001c\u000f\u0002",
    "\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c\u008e\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0007*\u0002\u0002\u008f\u0090\b\u000e\u0001\u0002\u0090",
    "\u001b\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u001f\u0002\u0002\u0092",
    "\u0093\u0007%\u0002\u0002\u0093\u0094\u0005\u0018\r\u0002\u0094\u0095",
    "\b\u000f\u0001\u0002\u0095\u001d\u0003\u0002\u0002\u0002\u0096\u009b",
    "\u0005\u001c\u000f\u0002\u0097\u0098\u0007#\u0002\u0002\u0098\u009a",
    "\u0005\u001c\u000f\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009d",
    "\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0003\u0002\u0002\u0002\u009c\u009e\u0003\u0002\u0002\u0002\u009d\u009b",
    "\u0003\u0002\u0002\u0002\u009e\u009f\b\u0010\u0001\u0002\u009f\u001f",
    "\u0003\u0002\u0002\u0002\u000b(9G`mt\u0083\u008b\u009b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Dml extends antlr4.Parser {

    static grammarFileName = "Dml.g4";
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
    static ruleNames = [ "whereClause", "simpleKeyValue", "compositeKeyValue", 
                         "equalityOp", "returningClause", "selectStatement", 
                         "deleteStatement", "setStatement", "itemValue", 
                         "qualifiedName", "paramBind", "literalValue", "literalMap", 
                         "mapField", "inlineMap" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Dml.ruleNames;
        this.literalNames = Dml.literalNames;
        this.symbolicNames = Dml.symbolicNames;
    }

    get atn() {
        return atn;
    }



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Dml.RULE_whereClause);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.match(Dml.Where);
	            this.state = 31;
	            localctx.value = this.simpleKeyValue();

	                return new KeyValue([localctx.value]);
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.match(Dml.Where);
	            this.state = 35;
	            localctx.values = this.compositeKeyValue();

	                return new KeyValue(localctx.values)
	              
	            break;

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



	simpleKeyValue() {
	    let localctx = new SimpleKeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Dml.RULE_simpleKeyValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        localctx.op = this.equalityOp();
	         return localctx.op; 
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



	compositeKeyValue() {
	    let localctx = new CompositeKeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Dml.RULE_compositeKeyValue);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            localctx.partition = this.equalityOp();
	            this.state = 44;
	            this.match(Dml.And);
	            this.state = 45;
	            localctx.id = this.equalityOp();

	                return [localctx.partition, localctx.id];
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            localctx.partition = this.equalityOp();
	            this.state = 49;
	            this.match(Dml.And);
	            this.state = 50;
	            localctx.discriminator = this.equalityOp();
	            this.state = 51;
	            this.match(Dml.And);
	            this.state = 52;
	            localctx.id = this.equalityOp();

	                return [localctx.partition, localctx.discriminator, localctx.id];
	              
	            break;

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



	equalityOp() {
	    let localctx = new EqualityOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Dml.RULE_equalityOp);
	    var _la = 0; // Token type
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 57;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  localctx.param.name,
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            localctx.name = this.match(Dml.Name);
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!(_la===Dml.Equal || _la===Dml.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 65;
	            localctx.name = this.match(Dml.Name);
	            this.state = 66;
	            _la = this._input.LA(1);
	            if(!(_la===Dml.Equal || _la===Dml.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 67;
	            localctx.value = this.match(Dml.LiteralText);

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  '=',
	                  (localctx.value===null ? null : localctx.value.text).slice(1, -1)
	                );
	              
	            break;

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
	    this.enterRule(localctx, 8, Dml.RULE_returningClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(Dml.Returning);
	        this.state = 72;
	        this.match(Dml.Asterisk);
	         return "*"; 
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
	    this.enterRule(localctx, 10, Dml.RULE_selectStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(Dml.Select);
	        this.state = 76;
	        this.match(Dml.From);
	        this.state = 77;
	        localctx.tableName = this.qualifiedName();
	        this.state = 78;
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
	    this.enterRule(localctx, 12, Dml.RULE_deleteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(Dml.Delete);
	        this.state = 82;
	        this.match(Dml.From);
	        this.state = 83;
	        localctx.tableName = this.qualifiedName();
	        this.state = 84;
	        localctx.where = this.whereClause();

	            return new DeleteStmt(
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



	setStatement() {
	    let localctx = new SetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Dml.RULE_setStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(Dml.Set);
	        this.state = 88;
	        this.match(Dml.Into);
	        this.state = 89;
	        localctx.tableName = this.qualifiedName();
	        this.state = 90;
	        this.match(Dml.OpenParen);
	        this.state = 91;
	        localctx.value = this.itemValue();
	        this.state = 92;
	        this.match(Dml.CloseParen);
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Dml.Returning) {
	            this.state = 93;
	            localctx.returning = this.returningClause();
	        }


	            let value;

	            if (localctx.value instanceof ParamBindContext) {
	              value = new ParamBind(localctx.value.getText().slice(1))
	            } else {
	              value = localctx.value;
	            }

	            return new SetStmt(
	              localctx.tableName.getText(),
	              value,
	              localctx.returning
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



	itemValue() {
	    let localctx = new ItemValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Dml.RULE_itemValue);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Dml.Ampersand:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            localctx.bind = this.paramBind();
	             return localctx.bind; 
	            break;
	        case Dml.OpenBrace:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            localctx.litMap = this.literalMap();
	             return localctx.litMap; 
	            break;
	        case Dml.Name:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            localctx.ilMap = this.inlineMap();
	             return localctx.ilMap; 
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



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Dml.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(Dml.Name);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Dml.Dot) {
	            this.state = 110;
	            this.match(Dml.Dot);
	            this.state = 111;
	            this.match(Dml.Name);
	            this.state = 116;
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
	    this.enterRule(localctx, 20, Dml.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(Dml.Ampersand);
	        this.state = 118;
	        localctx.name = this.match(Dml.Name);

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
	    this.enterRule(localctx, 22, Dml.RULE_literalValue);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Dml.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            localctx.txt = this.match(Dml.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case Dml.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            localctx.num = this.match(Dml.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case Dml.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 125;
	            localctx.bool = this.match(Dml.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case Dml.LiteralDuration:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 127;
	            localctx.duration = this.match(Dml.LiteralDuration);
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
	    this.enterRule(localctx, 24, Dml.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(Dml.OpenBrace);
	        this.state = 132;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Dml.Comma) {
	            this.state = 133;
	            this.match(Dml.Comma);
	            this.state = 134;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
	        this.match(Dml.CloseBrace);

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
	    this.enterRule(localctx, 26, Dml.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        localctx.name = this.match(Dml.Name);
	        this.state = 144;
	        this.match(Dml.Colon);
	        this.state = 145;
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
	    this.enterRule(localctx, 28, Dml.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Dml.Comma) {
	            this.state = 149;
	            this.match(Dml.Comma);
	            this.state = 150;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 155;
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

Dml.EOF = antlr4.Token.EOF;
Dml.Whitespace = 1;
Dml.And = 2;
Dml.Append = 3;
Dml.Crypto = 4;
Dml.Default = 5;
Dml.Delete = 6;
Dml.Encrypt = 7;
Dml.Encrypted = 8;
Dml.From = 9;
Dml.Into = 10;
Dml.Iv = 11;
Dml.Key = 12;
Dml.Only = 13;
Dml.Read = 14;
Dml.Returning = 15;
Dml.Schema = 16;
Dml.Select = 17;
Dml.Set = 18;
Dml.Stream = 19;
Dml.Table = 20;
Dml.Ttl = 21;
Dml.Where = 22;
Dml.With = 23;
Dml.SingleLineComment = 24;
Dml.LiteralText = 25;
Dml.LiteralNum = 26;
Dml.LiteralDuration = 27;
Dml.LiteralBool = 28;
Dml.Name = 29;
Dml.At = 30;
Dml.OpenParen = 31;
Dml.CloseParen = 32;
Dml.Comma = 33;
Dml.Semicolon = 34;
Dml.Colon = 35;
Dml.ColonEqual = 36;
Dml.Equal = 37;
Dml.DoubleEqual = 38;
Dml.OpenBrace = 39;
Dml.CloseBrace = 40;
Dml.OpenBracket = 41;
Dml.CloseBracket = 42;
Dml.OpenChevron = 43;
Dml.CloseChevron = 44;
Dml.Dot = 45;
Dml.Asterisk = 46;
Dml.Ampersand = 47;
Dml.VerticalBar = 48;
Dml.QuestionMark = 49;
Dml.QuestionMarkEqual = 50;

Dml.RULE_whereClause = 0;
Dml.RULE_simpleKeyValue = 1;
Dml.RULE_compositeKeyValue = 2;
Dml.RULE_equalityOp = 3;
Dml.RULE_returningClause = 4;
Dml.RULE_selectStatement = 5;
Dml.RULE_deleteStatement = 6;
Dml.RULE_setStatement = 7;
Dml.RULE_itemValue = 8;
Dml.RULE_qualifiedName = 9;
Dml.RULE_paramBind = 10;
Dml.RULE_literalValue = 11;
Dml.RULE_literalMap = 12;
Dml.RULE_mapField = 13;
Dml.RULE_inlineMap = 14;

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
        this.ruleIndex = Dml.RULE_whereClause;
        this.value = null; // SimpleKeyValueContext
        this.values = null; // CompositeKeyValueContext
    }

	Where() {
	    return this.getToken(Dml.Where, 0);
	};

	simpleKeyValue() {
	    return this.getTypedRuleContext(SimpleKeyValueContext,0);
	};

	compositeKeyValue() {
	    return this.getTypedRuleContext(CompositeKeyValueContext,0);
	};


}



class SimpleKeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Dml.RULE_simpleKeyValue;
        this.op = null; // EqualityOpContext
    }

	equalityOp() {
	    return this.getTypedRuleContext(EqualityOpContext,0);
	};


}



class CompositeKeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Dml.RULE_compositeKeyValue;
        this.partition = null; // EqualityOpContext
        this.id = null; // EqualityOpContext
        this.discriminator = null; // EqualityOpContext
    }

	And = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Dml.And);
	    } else {
	        return this.getToken(Dml.And, i);
	    }
	};


	equalityOp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityOpContext);
	    } else {
	        return this.getTypedRuleContext(EqualityOpContext,i);
	    }
	};


}



class EqualityOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Dml.RULE_equalityOp;
        this.param = null; // ParamBindContext
        this.name = null; // Token
        this.value = null; // Token
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	Name() {
	    return this.getToken(Dml.Name, 0);
	};

	Equal() {
	    return this.getToken(Dml.Equal, 0);
	};

	DoubleEqual() {
	    return this.getToken(Dml.DoubleEqual, 0);
	};

	LiteralText() {
	    return this.getToken(Dml.LiteralText, 0);
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
        this.ruleIndex = Dml.RULE_returningClause;
    }

	Returning() {
	    return this.getToken(Dml.Returning, 0);
	};

	Asterisk() {
	    return this.getToken(Dml.Asterisk, 0);
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
        this.ruleIndex = Dml.RULE_selectStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Select() {
	    return this.getToken(Dml.Select, 0);
	};

	From() {
	    return this.getToken(Dml.From, 0);
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
        this.ruleIndex = Dml.RULE_deleteStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Delete() {
	    return this.getToken(Dml.Delete, 0);
	};

	From() {
	    return this.getToken(Dml.From, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
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
        this.ruleIndex = Dml.RULE_setStatement;
        this.tableName = null; // QualifiedNameContext
        this.value = null; // ItemValueContext
        this.returning = null; // ReturningClauseContext
    }

	Set() {
	    return this.getToken(Dml.Set, 0);
	};

	Into() {
	    return this.getToken(Dml.Into, 0);
	};

	OpenParen() {
	    return this.getToken(Dml.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Dml.CloseParen, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	itemValue() {
	    return this.getTypedRuleContext(ItemValueContext,0);
	};

	returningClause() {
	    return this.getTypedRuleContext(ReturningClauseContext,0);
	};


}



class ItemValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Dml.RULE_itemValue;
        this.bind = null; // ParamBindContext
        this.litMap = null; // LiteralMapContext
        this.ilMap = null; // InlineMapContext
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	literalMap() {
	    return this.getTypedRuleContext(LiteralMapContext,0);
	};

	inlineMap() {
	    return this.getTypedRuleContext(InlineMapContext,0);
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
        this.ruleIndex = Dml.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Dml.Name);
	    } else {
	        return this.getToken(Dml.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Dml.Dot);
	    } else {
	        return this.getToken(Dml.Dot, i);
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
        this.ruleIndex = Dml.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(Dml.Ampersand, 0);
	};

	Name() {
	    return this.getToken(Dml.Name, 0);
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
        this.ruleIndex = Dml.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
        this.duration = null; // Token
    }

	LiteralText() {
	    return this.getToken(Dml.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(Dml.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(Dml.LiteralBool, 0);
	};

	LiteralDuration() {
	    return this.getToken(Dml.LiteralDuration, 0);
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
        this.ruleIndex = Dml.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(Dml.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(Dml.CloseBrace, 0);
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
	        return this.getTokens(Dml.Comma);
	    } else {
	        return this.getToken(Dml.Comma, i);
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
        this.ruleIndex = Dml.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(Dml.Colon, 0);
	};

	Name() {
	    return this.getToken(Dml.Name, 0);
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
        this.ruleIndex = Dml.RULE_inlineMap;
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
	        return this.getTokens(Dml.Comma);
	    } else {
	        return this.getToken(Dml.Comma, i);
	    }
	};



}




Dml.WhereClauseContext = WhereClauseContext; 
Dml.SimpleKeyValueContext = SimpleKeyValueContext; 
Dml.CompositeKeyValueContext = CompositeKeyValueContext; 
Dml.EqualityOpContext = EqualityOpContext; 
Dml.ReturningClauseContext = ReturningClauseContext; 
Dml.SelectStatementContext = SelectStatementContext; 
Dml.DeleteStatementContext = DeleteStatementContext; 
Dml.SetStatementContext = SetStatementContext; 
Dml.ItemValueContext = ItemValueContext; 
Dml.QualifiedNameContext = QualifiedNameContext; 
Dml.ParamBindContext = ParamBindContext; 
Dml.LiteralValueContext = LiteralValueContext; 
Dml.LiteralMapContext = LiteralMapContext; 
Dml.MapFieldContext = MapFieldContext; 
Dml.InlineMapContext = InlineMapContext; 
