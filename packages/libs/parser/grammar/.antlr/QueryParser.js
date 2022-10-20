// Generated from /home/me/SiaCodeLabs/SiaQL/siaql/packages/libs/grammar/grammar/Query.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	


  import {ParamBind, CryptoKeyStmt, CryptoIvStmt} from "../stmts/index.js";


	import {SchemaStmt, TableStmt} from "../stmts/model/index.js";


  import {ParamBind, KeyValue, KeyFieldValue, SelectStmt, DeleteStmt, SetStmt} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003(\u00e9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u00024\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00039\n\u0003",
    "\f\u0003\u000e\u0003<\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "L\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005T\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006_\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007g\n\u0007\f\u0007\u000e\u0007j\u000b",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u007f\n\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n\u0089\n\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0090\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005",
    "\r\u00a3\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00c4\n\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00ca\n\u0012\f\u0012\u000e",
    "\u0012\u00cd\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00dd\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00e2\n\u0015",
    "\f\u0015\u000e\u0015\u00e5\u000b\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0002\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(\u0002\u0003\u0003\u0002\"#\u0002",
    "\u00e8\u00023\u0003\u0002\u0002\u0002\u00045\u0003\u0002\u0002\u0002",
    "\u0006K\u0003\u0002\u0002\u0002\bM\u0003\u0002\u0002\u0002\nX\u0003",
    "\u0002\u0002\u0002\fc\u0003\u0002\u0002\u0002\u000ek\u0003\u0002\u0002",
    "\u0002\u0010n\u0003\u0002\u0002\u0002\u0012u\u0003\u0002\u0002\u0002",
    "\u0014\u008c\u0003\u0002\u0002\u0002\u0016\u0093\u0003\u0002\u0002\u0002",
    "\u0018\u00a2\u0003\u0002\u0002\u0002\u001a\u00a4\u0003\u0002\u0002\u0002",
    "\u001c\u00ab\u0003\u0002\u0002\u0002\u001e\u00b2\u0003\u0002\u0002\u0002",
    " \u00c3\u0003\u0002\u0002\u0002\"\u00c5\u0003\u0002\u0002\u0002$\u00d1",
    "\u0003\u0002\u0002\u0002&\u00dc\u0003\u0002\u0002\u0002(\u00de\u0003",
    "\u0002\u0002\u0002*+\u0005\u001a\u000e\u0002+,\b\u0002\u0001\u0002,",
    "4\u0003\u0002\u0002\u0002-.\u0005\u001c\u000f\u0002./\b\u0002\u0001",
    "\u0002/4\u0003\u0002\u0002\u000201\u0005\u001e\u0010\u000212\b\u0002",
    "\u0001\u000224\u0003\u0002\u0002\u00023*\u0003\u0002\u0002\u00023-\u0003",
    "\u0002\u0002\u000230\u0003\u0002\u0002\u00024\u0003\u0003\u0002\u0002",
    "\u00025:\u0005\u0006\u0004\u000267\u0007\u001b\u0002\u000279\u0005\u0006",
    "\u0004\u000286\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002",
    "<:\u0003\u0002\u0002\u0002=>\b\u0003\u0001\u0002>\u0005\u0003\u0002",
    "\u0002\u0002?@\u0005\b\u0005\u0002@A\b\u0004\u0001\u0002AL\u0003\u0002",
    "\u0002\u0002BC\u0005\n\u0006\u0002CD\b\u0004\u0001\u0002DL\u0003\u0002",
    "\u0002\u0002EF\u0005\u0010\t\u0002FG\b\u0004\u0001\u0002GL\u0003\u0002",
    "\u0002\u0002HI\u0005\u0012\n\u0002IJ\b\u0004\u0001\u0002JL\u0003\u0002",
    "\u0002\u0002K?\u0003\u0002\u0002\u0002KB\u0003\u0002\u0002\u0002KE\u0003",
    "\u0002\u0002\u0002KH\u0003\u0002\u0002\u0002L\u0007\u0003\u0002\u0002",
    "\u0002MN\u0007\u0005\u0002\u0002NO\u0007\u000b\u0002\u0002OP\u0007\u0016",
    "\u0002\u0002PS\u0007\u0017\u0002\u0002QT\u0005\u000e\b\u0002RT\u0007",
    "\u0013\u0002\u0002SQ\u0003\u0002\u0002\u0002SR\u0003\u0002\u0002\u0002",
    "TU\u0003\u0002\u0002\u0002UV\u0007\u0018\u0002\u0002VW\b\u0005\u0001",
    "\u0002W\t\u0003\u0002\u0002\u0002XY\u0007\u0005\u0002\u0002YZ\u0007",
    "\n\u0002\u0002Z[\u0007\u0016\u0002\u0002[^\u0007\u0017\u0002\u0002\\",
    "_\u0005\u000e\b\u0002]_\u0007\u0013\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`a\u0007\u0018",
    "\u0002\u0002ab\b\u0006\u0001\u0002b\u000b\u0003\u0002\u0002\u0002ch",
    "\u0007\u0016\u0002\u0002de\u0007$\u0002\u0002eg\u0007\u0016\u0002\u0002",
    "fd\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002",
    "\u0002hi\u0003\u0002\u0002\u0002i\r\u0003\u0002\u0002\u0002jh\u0003",
    "\u0002\u0002\u0002kl\u0007&\u0002\u0002lm\u0007\u0016\u0002\u0002m\u000f",
    "\u0003\u0002\u0002\u0002no\u0007\f\u0002\u0002op\u0007\u0016\u0002\u0002",
    "pq\u0007\u0017\u0002\u0002qr\u0007%\u0002\u0002rs\u0007\u0018\u0002",
    "\u0002st\b\t\u0001\u0002t\u0011\u0003\u0002\u0002\u0002uv\u0007\u000f",
    "\u0002\u0002vw\u0005\f\u0007\u0002wx\u0007\u001a\u0002\u0002xy\u0007",
    "\u0016\u0002\u0002yz\u0007\u000b\u0002\u0002z{\u0007\u0017\u0002\u0002",
    "{~\u0007\u0016\u0002\u0002|}\u0007\u0019\u0002\u0002}\u007f\u0007\u0016",
    "\u0002\u0002~|\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002",
    "\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0088\u0007\u0018\u0002\u0002",
    "\u0081\u0082\u0007\u0007\u0002\u0002\u0082\u0083\u0007\u0011\u0002\u0002",
    "\u0083\u0084\u0007\u0017\u0002\u0002\u0084\u0085\u0007\u0016\u0002\u0002",
    "\u0085\u0086\u0007\u0019\u0002\u0002\u0086\u0087\u0007\u0016\u0002\u0002",
    "\u0087\u0089\u0007\u0018\u0002\u0002\u0088\u0081\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u008b\b\n\u0001\u0002\u008b\u0013\u0003\u0002\u0002\u0002\u008c",
    "\u008f\u0005\u0016\f\u0002\u008d\u008e\u0007\u0004\u0002\u0002\u008e",
    "\u0090\u0005\u0016\f\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f",
    "\u0090\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091",
    "\u0092\b\u000b\u0001\u0002\u0092\u0015\u0003\u0002\u0002\u0002\u0093",
    "\u0094\u0005\u0018\r\u0002\u0094\u0095\b\f\u0001\u0002\u0095\u0017\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0005\u000e\b\u0002\u0097\u0098\b\r\u0001",
    "\u0002\u0098\u00a3\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0016\u0002",
    "\u0002\u009a\u009b\t\u0002\u0002\u0002\u009b\u009c\u0005\u000e\b\u0002",
    "\u009c\u009d\b\r\u0001\u0002\u009d\u00a3\u0003\u0002\u0002\u0002\u009e",
    "\u009f\u0007\u0016\u0002\u0002\u009f\u00a0\t\u0002\u0002\u0002\u00a0",
    "\u00a1\u0007\u0013\u0002\u0002\u00a1\u00a3\b\r\u0001\u0002\u00a2\u0096",
    "\u0003\u0002\u0002\u0002\u00a2\u0099\u0003\u0002\u0002\u0002\u00a2\u009e",
    "\u0003\u0002\u0002\u0002\u00a3\u0019\u0003\u0002\u0002\u0002\u00a4\u00a5",
    "\u0007\r\u0002\u0002\u00a5\u00a6\u0007\b\u0002\u0002\u00a6\u00a7\u0005",
    "\f\u0007\u0002\u00a7\u00a8\u0007\u0010\u0002\u0002\u00a8\u00a9\u0005",
    "\u0014\u000b\u0002\u00a9\u00aa\b\u000e\u0001\u0002\u00aa\u001b\u0003",
    "\u0002\u0002\u0002\u00ab\u00ac\u0007\u0006\u0002\u0002\u00ac\u00ad\u0007",
    "\b\u0002\u0002\u00ad\u00ae\u0005\f\u0007\u0002\u00ae\u00af\u0007\u0010",
    "\u0002\u0002\u00af\u00b0\u0005\u0014\u000b\u0002\u00b0\u00b1\b\u000f",
    "\u0001\u0002\u00b1\u001d\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u000e",
    "\u0002\u0002\u00b3\u00b4\u0007\t\u0002\u0002\u00b4\u00b5\u0005\f\u0007",
    "\u0002\u00b5\u00b6\u0007\u0017\u0002\u0002\u00b6\u00b7\u0005 \u0011",
    "\u0002\u00b7\u00b8\u0007\u0018\u0002\u0002\u00b8\u00b9\b\u0010\u0001",
    "\u0002\u00b9\u001f\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\u000e\b",
    "\u0002\u00bb\u00bc\b\u0011\u0001\u0002\u00bc\u00c4\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0005\"\u0012\u0002\u00be\u00bf\b\u0011\u0001\u0002",
    "\u00bf\u00c4\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005(\u0015\u0002",
    "\u00c1\u00c2\b\u0011\u0001\u0002\u00c2\u00c4\u0003\u0002\u0002\u0002",
    "\u00c3\u00ba\u0003\u0002\u0002\u0002\u00c3\u00bd\u0003\u0002\u0002\u0002",
    "\u00c3\u00c0\u0003\u0002\u0002\u0002\u00c4!\u0003\u0002\u0002\u0002",
    "\u00c5\u00c6\u0007\u001c\u0002\u0002\u00c6\u00cb\u0005$\u0013\u0002",
    "\u00c7\u00c8\u0007\u0019\u0002\u0002\u00c8\u00ca\u0005$\u0013\u0002",
    "\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002",
    "\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002",
    "\u00cc\u00ce\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002",
    "\u00ce\u00cf\u0007\u001d\u0002\u0002\u00cf\u00d0\b\u0012\u0001\u0002",
    "\u00d0#\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007\u0016\u0002\u0002",
    "\u00d2\u00d3\u0007\u001a\u0002\u0002\u00d3\u00d4\u0005&\u0014\u0002",
    "\u00d4\u00d5\b\u0013\u0001\u0002\u00d5%\u0003\u0002\u0002\u0002\u00d6",
    "\u00d7\u0007\u0013\u0002\u0002\u00d7\u00dd\b\u0014\u0001\u0002\u00d8",
    "\u00d9\u0007\u0014\u0002\u0002\u00d9\u00dd\b\u0014\u0001\u0002\u00da",
    "\u00db\u0007\u0015\u0002\u0002\u00db\u00dd\b\u0014\u0001\u0002\u00dc",
    "\u00d6\u0003\u0002\u0002\u0002\u00dc\u00d8\u0003\u0002\u0002\u0002\u00dc",
    "\u00da\u0003\u0002\u0002\u0002\u00dd\'\u0003\u0002\u0002\u0002\u00de",
    "\u00e3\u0005$\u0013\u0002\u00df\u00e0\u0007\u0019\u0002\u0002\u00e0",
    "\u00e2\u0005$\u0013\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2",
    "\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5",
    "\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e7\b\u0015\u0001\u0002\u00e7",
    ")\u0003\u0002\u0002\u0002\u00103:KS^h~\u0088\u008f\u00a2\u00c3\u00cb",
    "\u00dc\u00e3"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class QueryParser extends antlr4.Parser {

    static grammarFileName = "Query.g4";
    static literalNames = [ null, null, "'AND'", "'CRYPTO'", "'DELETE'", 
                            "'ENCRYPTED'", "'FROM'", "'INTO'", "'IV'", "'KEY'", 
                            "'SCHEMA'", "'SELECT'", "'SET'", "'TABLE'", 
                            "'WHERE'", "'WITH'", null, null, null, null, 
                            null, "'('", "')'", "','", "':'", "';'", "'{'", 
                            "'}'", "'['", "']'", "'<'", "'>'", "'='", "'=='", 
                            "'.'", "'*'", "'&'", "'|'", "'?'" ];
    static symbolicNames = [ null, "Whitespace", "And", "Crypto", "Delete", 
                             "Encrypted", "From", "Into", "Iv", "Key", "Schema", 
                             "Select", "Set", "Table", "Where", "With", 
                             "SingleLineComment", "LiteralText", "LiteralNum", 
                             "LiteralBool", "Name", "OpenParen", "CloseParen", 
                             "Comma", "Colon", "Semicolon", "OpenBrace", 
                             "CloseBrace", "OpenBracket", "CloseBracket", 
                             "OpenChevron", "CloseChevron", "Equal", "DoubleEqual", 
                             "Dot", "Asterisk", "Ampersand", "VerticalBar", 
                             "QuestionMark" ];
    static ruleNames = [ "query", "model", "modelStatement", "cryptoKeyStmt", 
                         "cryptoIvStmt", "qualifiedName", "paramBind", "schemaStatement", 
                         "tableStatement", "whereClause", "keyValue", "keyFieldValue", 
                         "selectStatement", "deleteStatement", "setStatement", 
                         "itemValue", "literalMap", "mapField", "literalValue", 
                         "inlineMap" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = QueryParser.ruleNames;
        this.literalNames = QueryParser.literalNames;
        this.symbolicNames = QueryParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, QueryParser.RULE_query);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QueryParser.Select:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            localctx.select = this.selectStatement();
	             return localctx.select; 
	            break;
	        case QueryParser.Delete:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            localctx.del = this.deleteStatement();
	             return localctx.del; 
	            break;
	        case QueryParser.Set:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            localctx.set = this.setStatement();
	             return localctx.set; 
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



	model() {
	    let localctx = new ModelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, QueryParser.RULE_model);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        localctx._modelStatement = this.modelStatement();
	        localctx.statements.push(localctx._modelStatement);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QueryParser.Semicolon) {
	            this.state = 52;
	            this.match(QueryParser.Semicolon);
	            this.state = 53;
	            localctx._modelStatement = this.modelStatement();
	            localctx.statements.push(localctx._modelStatement);
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }

	        		return localctx.statements;

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



	modelStatement() {
	    let localctx = new ModelStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, QueryParser.RULE_modelStatement);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            localctx.cryptoKey = this.cryptoKeyStmt();
	             return localctx.cryptoKey; 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 64;
	            localctx.cryptoIv = this.cryptoIvStmt();
	             return localctx.cryptoIv; 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 67;
	            localctx.schema = this.schemaStatement();
	             return localctx.schema; 
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 70;
	            localctx.table = this.tableStatement();
	             return localctx.table; 
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



	cryptoKeyStmt() {
	    let localctx = new CryptoKeyStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, QueryParser.RULE_cryptoKeyStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(QueryParser.Crypto);
	        this.state = 76;
	        this.match(QueryParser.Key);
	        this.state = 77;
	        localctx.name = this.match(QueryParser.Name);
	        this.state = 78;
	        this.match(QueryParser.OpenParen);
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QueryParser.Ampersand:
	            this.state = 79;
	            localctx.key = this.paramBind();
	            break;
	        case QueryParser.LiteralText:
	            this.state = 80;
	            localctx.jwk = this.match(QueryParser.LiteralText);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 83;
	        this.match(QueryParser.CloseParen);

	            const key = localctx.key && new ParamBind(localctx.key.getText().slice(1));
	            const jwk = localctx.jwk && (localctx.jwk===null ? null : localctx.jwk.text).slice(1, -1);

	            return new CryptoKeyStmt(
	              (localctx.name===null ? null : localctx.name.text),
	              key || jwk
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



	cryptoIvStmt() {
	    let localctx = new CryptoIvStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, QueryParser.RULE_cryptoIvStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(QueryParser.Crypto);
	        this.state = 87;
	        this.match(QueryParser.Iv);
	        this.state = 88;
	        localctx.name = this.match(QueryParser.Name);
	        this.state = 89;
	        this.match(QueryParser.OpenParen);
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QueryParser.Ampersand:
	            this.state = 90;
	            localctx.iv = this.paramBind();
	            break;
	        case QueryParser.LiteralText:
	            this.state = 91;
	            localctx.literalIv = this.match(QueryParser.LiteralText);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 94;
	        this.match(QueryParser.CloseParen);

	            const iv = localctx.iv && new ParamBind(localctx.iv.getText().slice(1));
	            const literalIv = localctx.literalIv && (localctx.literalIv===null ? null : localctx.literalIv.text).slice(1, -1);

	            return new CryptoIvStmt(
	              (localctx.name===null ? null : localctx.name.text),
	              iv || literalIv
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
	    this.enterRule(localctx, 10, QueryParser.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(QueryParser.Name);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QueryParser.Dot) {
	            this.state = 98;
	            this.match(QueryParser.Dot);
	            this.state = 99;
	            this.match(QueryParser.Name);
	            this.state = 104;
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
	    this.enterRule(localctx, 12, QueryParser.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(QueryParser.Ampersand);
	        this.state = 106;
	        this.match(QueryParser.Name);
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



	schemaStatement() {
	    let localctx = new SchemaStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, QueryParser.RULE_schemaStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(QueryParser.Schema);
	        this.state = 109;
	        localctx.schemaName = this.match(QueryParser.Name);
	        this.state = 110;
	        this.match(QueryParser.OpenParen);
	        this.state = 111;
	        this.match(QueryParser.Asterisk);
	        this.state = 112;
	        this.match(QueryParser.CloseParen);

	        			return new SchemaStmt(
	        				(localctx.schemaName===null ? null : localctx.schemaName.text),
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



	tableStatement() {
	    let localctx = new TableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, QueryParser.RULE_tableStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(QueryParser.Table);
	        this.state = 116;
	        localctx.tableName = this.qualifiedName();
	        this.state = 117;
	        this.match(QueryParser.Colon);
	        this.state = 118;
	        localctx.schemaName = this.match(QueryParser.Name);
	        this.state = 119;
	        this.match(QueryParser.Key);
	        this.state = 120;
	        this.match(QueryParser.OpenParen);
	        this.state = 121;
	        localctx._Name = this.match(QueryParser.Name);
	        localctx.keyFieldNames.push(localctx._Name);
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QueryParser.Comma) {
	            this.state = 122;
	            this.match(QueryParser.Comma);
	            this.state = 123;
	            localctx._Name = this.match(QueryParser.Name);
	            localctx.keyFieldNames.push(localctx._Name);
	        }

	        this.state = 126;
	        this.match(QueryParser.CloseParen);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QueryParser.Encrypted) {
	            this.state = 127;
	            this.match(QueryParser.Encrypted);
	            this.state = 128;
	            this.match(QueryParser.With);
	            this.state = 129;
	            this.match(QueryParser.OpenParen);
	            this.state = 130;
	            localctx.cryptoKey = this.match(QueryParser.Name);
	            this.state = 131;
	            this.match(QueryParser.Comma);
	            this.state = 132;
	            localctx.cryptoIv = this.match(QueryParser.Name);
	            this.state = 133;
	            this.match(QueryParser.CloseParen);
	        }


	        			return new TableStmt(
	        				localctx.tableName.getText(),
	        				(localctx.schemaName===null ? null : localctx.schemaName.text),
	        				localctx.keyFieldNames.map((field) => field.text),
	        				localctx.cryptoKey && (localctx.cryptoKey===null ? null : localctx.cryptoKey.text),
	        				localctx.cryptoIv && (localctx.cryptoIv===null ? null : localctx.cryptoIv.text)
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



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, QueryParser.RULE_whereClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        localctx._keyValue = this.keyValue();
	        localctx.value.push(localctx._keyValue);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===QueryParser.And) {
	            this.state = 139;
	            this.match(QueryParser.And);
	            this.state = 140;
	            localctx._keyValue = this.keyValue();
	            localctx.value.push(localctx._keyValue);
	        }


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
	    this.enterRule(localctx, 20, QueryParser.RULE_keyValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        localctx.value = this.keyFieldValue();

	            return localctx.value;
	          
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
	    this.enterRule(localctx, 22, QueryParser.RULE_keyFieldValue);
	    var _la = 0; // Token type
	    try {
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1),
	                  new ParamBind((localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1))
	                );
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            localctx.name = this.match(QueryParser.Name);
	            this.state = 152;
	            _la = this._input.LA(1);
	            if(!(_la===QueryParser.Equal || _la===QueryParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 153;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  new ParamBind((localctx.param===null ? null : this._input.getText(new antlr4.Interval(localctx.param.start,localctx.param.stop))).slice(1))
	                );
	              
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 156;
	            localctx.name = this.match(QueryParser.Name);
	            this.state = 157;
	            _la = this._input.LA(1);
	            if(!(_la===QueryParser.Equal || _la===QueryParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 158;
	            localctx.value = this.match(QueryParser.LiteralText);

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  (localctx.value===null ? null : localctx.value.text).slice(1, -1)
	                )
	              
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



	selectStatement() {
	    let localctx = new SelectStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, QueryParser.RULE_selectStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(QueryParser.Select);
	        this.state = 163;
	        this.match(QueryParser.From);
	        this.state = 164;
	        localctx.tableName = this.qualifiedName();
	        this.state = 165;
	        this.match(QueryParser.Where);
	        this.state = 166;
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
	    this.enterRule(localctx, 26, QueryParser.RULE_deleteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(QueryParser.Delete);
	        this.state = 170;
	        this.match(QueryParser.From);
	        this.state = 171;
	        localctx.tableName = this.qualifiedName();
	        this.state = 172;
	        this.match(QueryParser.Where);
	        this.state = 173;
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
	    this.enterRule(localctx, 28, QueryParser.RULE_setStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(QueryParser.Set);
	        this.state = 177;
	        this.match(QueryParser.Into);
	        this.state = 178;
	        localctx.tableName = this.qualifiedName();
	        this.state = 179;
	        this.match(QueryParser.OpenParen);
	        this.state = 180;
	        localctx.value = this.itemValue();
	        this.state = 181;
	        this.match(QueryParser.CloseParen);

	            let value;

	            if (localctx.value instanceof ParamBindContext) {
	              value = new ParamBind(localctx.value.getText().slice(1))
	            } else {
	              value = localctx.value;
	            }

	            return new SetStmt(
	              localctx.tableName.getText(),
	              value
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
	    this.enterRule(localctx, 30, QueryParser.RULE_itemValue);
	    try {
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QueryParser.Ampersand:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            localctx.bind = this.paramBind();
	             return localctx.bind; 
	            break;
	        case QueryParser.OpenBrace:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            localctx.litMap = this.literalMap();
	             return localctx.litMap; 
	            break;
	        case QueryParser.Name:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
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



	literalMap() {
	    let localctx = new LiteralMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, QueryParser.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(QueryParser.OpenBrace);
	        this.state = 196;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QueryParser.Comma) {
	            this.state = 197;
	            this.match(QueryParser.Comma);
	            this.state = 198;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 204;
	        this.match(QueryParser.CloseBrace);

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
	    this.enterRule(localctx, 34, QueryParser.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        localctx.name = this.match(QueryParser.Name);
	        this.state = 208;
	        this.match(QueryParser.Colon);
	        this.state = 209;
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



	literalValue() {
	    let localctx = new LiteralValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, QueryParser.RULE_literalValue);
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case QueryParser.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            localctx.txt = this.match(QueryParser.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case QueryParser.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            localctx.num = this.match(QueryParser.LiteralNum);
	             return Number((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case QueryParser.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 216;
	            localctx.bool = this.match(QueryParser.LiteralBool);
	             return (localctx.bool===null ? null : localctx.bool.text) == 'true'; 
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



	inlineMap() {
	    let localctx = new InlineMapContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, QueryParser.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===QueryParser.Comma) {
	            this.state = 221;
	            this.match(QueryParser.Comma);
	            this.state = 222;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 227;
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

QueryParser.EOF = antlr4.Token.EOF;
QueryParser.Whitespace = 1;
QueryParser.And = 2;
QueryParser.Crypto = 3;
QueryParser.Delete = 4;
QueryParser.Encrypted = 5;
QueryParser.From = 6;
QueryParser.Into = 7;
QueryParser.Iv = 8;
QueryParser.Key = 9;
QueryParser.Schema = 10;
QueryParser.Select = 11;
QueryParser.Set = 12;
QueryParser.Table = 13;
QueryParser.Where = 14;
QueryParser.With = 15;
QueryParser.SingleLineComment = 16;
QueryParser.LiteralText = 17;
QueryParser.LiteralNum = 18;
QueryParser.LiteralBool = 19;
QueryParser.Name = 20;
QueryParser.OpenParen = 21;
QueryParser.CloseParen = 22;
QueryParser.Comma = 23;
QueryParser.Colon = 24;
QueryParser.Semicolon = 25;
QueryParser.OpenBrace = 26;
QueryParser.CloseBrace = 27;
QueryParser.OpenBracket = 28;
QueryParser.CloseBracket = 29;
QueryParser.OpenChevron = 30;
QueryParser.CloseChevron = 31;
QueryParser.Equal = 32;
QueryParser.DoubleEqual = 33;
QueryParser.Dot = 34;
QueryParser.Asterisk = 35;
QueryParser.Ampersand = 36;
QueryParser.VerticalBar = 37;
QueryParser.QuestionMark = 38;

QueryParser.RULE_query = 0;
QueryParser.RULE_model = 1;
QueryParser.RULE_modelStatement = 2;
QueryParser.RULE_cryptoKeyStmt = 3;
QueryParser.RULE_cryptoIvStmt = 4;
QueryParser.RULE_qualifiedName = 5;
QueryParser.RULE_paramBind = 6;
QueryParser.RULE_schemaStatement = 7;
QueryParser.RULE_tableStatement = 8;
QueryParser.RULE_whereClause = 9;
QueryParser.RULE_keyValue = 10;
QueryParser.RULE_keyFieldValue = 11;
QueryParser.RULE_selectStatement = 12;
QueryParser.RULE_deleteStatement = 13;
QueryParser.RULE_setStatement = 14;
QueryParser.RULE_itemValue = 15;
QueryParser.RULE_literalMap = 16;
QueryParser.RULE_mapField = 17;
QueryParser.RULE_literalValue = 18;
QueryParser.RULE_inlineMap = 19;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QueryParser.RULE_query;
        this.select = null; // SelectStatementContext
        this.del = null; // DeleteStatementContext
        this.set = null; // SetStatementContext
    }

	selectStatement() {
	    return this.getTypedRuleContext(SelectStatementContext,0);
	};

	deleteStatement() {
	    return this.getTypedRuleContext(DeleteStatementContext,0);
	};

	setStatement() {
	    return this.getTypedRuleContext(SetStatementContext,0);
	};


}



class ModelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QueryParser.RULE_model;
        this._modelStatement = null; // ModelStatementContext
        this.statements = []; // of ModelStatementContexts
    }

	modelStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ModelStatementContext);
	    } else {
	        return this.getTypedRuleContext(ModelStatementContext,i);
	    }
	};

	Semicolon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.Semicolon);
	    } else {
	        return this.getToken(QueryParser.Semicolon, i);
	    }
	};



}



class ModelStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QueryParser.RULE_modelStatement;
        this.cryptoKey = null; // CryptoKeyStmtContext
        this.cryptoIv = null; // CryptoIvStmtContext
        this.schema = null; // SchemaStatementContext
        this.table = null; // TableStatementContext
    }

	cryptoKeyStmt() {
	    return this.getTypedRuleContext(CryptoKeyStmtContext,0);
	};

	cryptoIvStmt() {
	    return this.getTypedRuleContext(CryptoIvStmtContext,0);
	};

	schemaStatement() {
	    return this.getTypedRuleContext(SchemaStatementContext,0);
	};

	tableStatement() {
	    return this.getTypedRuleContext(TableStatementContext,0);
	};


}



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
        this.ruleIndex = QueryParser.RULE_cryptoKeyStmt;
        this.name = null; // Token
        this.key = null; // ParamBindContext
        this.jwk = null; // Token
    }

	Crypto() {
	    return this.getToken(QueryParser.Crypto, 0);
	};

	Key() {
	    return this.getToken(QueryParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(QueryParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(QueryParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	LiteralText() {
	    return this.getToken(QueryParser.LiteralText, 0);
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
        this.ruleIndex = QueryParser.RULE_cryptoIvStmt;
        this.name = null; // Token
        this.iv = null; // ParamBindContext
        this.literalIv = null; // Token
    }

	Crypto() {
	    return this.getToken(QueryParser.Crypto, 0);
	};

	Iv() {
	    return this.getToken(QueryParser.Iv, 0);
	};

	OpenParen() {
	    return this.getToken(QueryParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(QueryParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	LiteralText() {
	    return this.getToken(QueryParser.LiteralText, 0);
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
        this.ruleIndex = QueryParser.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.Name);
	    } else {
	        return this.getToken(QueryParser.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.Dot);
	    } else {
	        return this.getToken(QueryParser.Dot, i);
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
        this.ruleIndex = QueryParser.RULE_paramBind;
    }

	Ampersand() {
	    return this.getToken(QueryParser.Ampersand, 0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};


}



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
        this.ruleIndex = QueryParser.RULE_schemaStatement;
        this.schemaName = null; // Token
    }

	Schema() {
	    return this.getToken(QueryParser.Schema, 0);
	};

	OpenParen() {
	    return this.getToken(QueryParser.OpenParen, 0);
	};

	Asterisk() {
	    return this.getToken(QueryParser.Asterisk, 0);
	};

	CloseParen() {
	    return this.getToken(QueryParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};


}



class TableStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = QueryParser.RULE_tableStatement;
        this.tableName = null; // QualifiedNameContext
        this.schemaName = null; // Token
        this._Name = null; // Token
        this.keyFieldNames = []; // of Tokens
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Table() {
	    return this.getToken(QueryParser.Table, 0);
	};

	Colon() {
	    return this.getToken(QueryParser.Colon, 0);
	};

	Key() {
	    return this.getToken(QueryParser.Key, 0);
	};

	OpenParen = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.OpenParen);
	    } else {
	        return this.getToken(QueryParser.OpenParen, i);
	    }
	};


	CloseParen = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.CloseParen);
	    } else {
	        return this.getToken(QueryParser.CloseParen, i);
	    }
	};


	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.Name);
	    } else {
	        return this.getToken(QueryParser.Name, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(QueryParser.Comma);
	    } else {
	        return this.getToken(QueryParser.Comma, i);
	    }
	};


	Encrypted() {
	    return this.getToken(QueryParser.Encrypted, 0);
	};

	With() {
	    return this.getToken(QueryParser.With, 0);
	};


}



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
        this.ruleIndex = QueryParser.RULE_whereClause;
        this._keyValue = null; // KeyValueContext
        this.value = []; // of KeyValueContexts
    }

	keyValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValueContext);
	    } else {
	        return this.getTypedRuleContext(KeyValueContext,i);
	    }
	};

	And() {
	    return this.getToken(QueryParser.And, 0);
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
        this.ruleIndex = QueryParser.RULE_keyValue;
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
        this.ruleIndex = QueryParser.RULE_keyFieldValue;
        this.param = null; // ParamBindContext
        this.name = null; // Token
        this.value = null; // Token
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};

	Equal() {
	    return this.getToken(QueryParser.Equal, 0);
	};

	DoubleEqual() {
	    return this.getToken(QueryParser.DoubleEqual, 0);
	};

	LiteralText() {
	    return this.getToken(QueryParser.LiteralText, 0);
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
        this.ruleIndex = QueryParser.RULE_selectStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Select() {
	    return this.getToken(QueryParser.Select, 0);
	};

	From() {
	    return this.getToken(QueryParser.From, 0);
	};

	Where() {
	    return this.getToken(QueryParser.Where, 0);
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
        this.ruleIndex = QueryParser.RULE_deleteStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Delete() {
	    return this.getToken(QueryParser.Delete, 0);
	};

	From() {
	    return this.getToken(QueryParser.From, 0);
	};

	Where() {
	    return this.getToken(QueryParser.Where, 0);
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
        this.ruleIndex = QueryParser.RULE_setStatement;
        this.tableName = null; // QualifiedNameContext
        this.value = null; // ItemValueContext
    }

	Set() {
	    return this.getToken(QueryParser.Set, 0);
	};

	Into() {
	    return this.getToken(QueryParser.Into, 0);
	};

	OpenParen() {
	    return this.getToken(QueryParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(QueryParser.CloseParen, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	itemValue() {
	    return this.getTypedRuleContext(ItemValueContext,0);
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
        this.ruleIndex = QueryParser.RULE_itemValue;
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
        this.ruleIndex = QueryParser.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(QueryParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(QueryParser.CloseBrace, 0);
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
	        return this.getTokens(QueryParser.Comma);
	    } else {
	        return this.getToken(QueryParser.Comma, i);
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
        this.ruleIndex = QueryParser.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(QueryParser.Colon, 0);
	};

	Name() {
	    return this.getToken(QueryParser.Name, 0);
	};

	literalValue() {
	    return this.getTypedRuleContext(LiteralValueContext,0);
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
        this.ruleIndex = QueryParser.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
    }

	LiteralText() {
	    return this.getToken(QueryParser.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(QueryParser.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(QueryParser.LiteralBool, 0);
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
        this.ruleIndex = QueryParser.RULE_inlineMap;
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
	        return this.getTokens(QueryParser.Comma);
	    } else {
	        return this.getToken(QueryParser.Comma, i);
	    }
	};



}




QueryParser.QueryContext = QueryContext; 
QueryParser.ModelContext = ModelContext; 
QueryParser.ModelStatementContext = ModelStatementContext; 
QueryParser.CryptoKeyStmtContext = CryptoKeyStmtContext; 
QueryParser.CryptoIvStmtContext = CryptoIvStmtContext; 
QueryParser.QualifiedNameContext = QualifiedNameContext; 
QueryParser.ParamBindContext = ParamBindContext; 
QueryParser.SchemaStatementContext = SchemaStatementContext; 
QueryParser.TableStatementContext = TableStatementContext; 
QueryParser.WhereClauseContext = WhereClauseContext; 
QueryParser.KeyValueContext = KeyValueContext; 
QueryParser.KeyFieldValueContext = KeyFieldValueContext; 
QueryParser.SelectStatementContext = SelectStatementContext; 
QueryParser.DeleteStatementContext = DeleteStatementContext; 
QueryParser.SetStatementContext = SetStatementContext; 
QueryParser.ItemValueContext = ItemValueContext; 
QueryParser.LiteralMapContext = LiteralMapContext; 
QueryParser.MapFieldContext = MapFieldContext; 
QueryParser.LiteralValueContext = LiteralValueContext; 
QueryParser.InlineMapContext = InlineMapContext; 
