// Generated from /home/me/SiaCodelabs/ValenciaQL/vql/packages/libs/parser/grammar/Model.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	import {SyntaxError} from "../errors/index.js";
	import {SchemaStmt, StreamStmt, TableStmt, TableLevelTde, FieldLevelTde} from "../stmts/model/index.js";
	import Datum from "../Datum.js";


  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034\u00eb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002",
    "4\n\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0005\tX\n\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t]\n\t\u0003\t\u0003\t\u0003\t\u0005\tb\n\t\u0003\t",
    "\u0005\te\n\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0005\u000bp\n\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000bu\n\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "y\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b~\n\u000b\u0003",
    "\u000b\u0005\u000b\u0081\n\u000b\u0003\u000b\u0005\u000b\u0084\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u008d\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00a6\n\u000f\f\u000f",
    "\u000e\u000f\u00a9\u000b\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00b2\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00bd\n\u0012\f\u0012",
    "\u000e\u0012\u00c0\u000b\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00ce\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u00d4\n\u0015\f\u0015",
    "\u000e\u0015\u00d7\u000b\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u00e4\n\u0017\f\u0017\u000e\u0017\u00e7",
    "\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0002\u0002\u0018\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,\u0002\u0004\u0004\u0002\u0005\u0005\u0010\u0010\u0004\u0002",
    "&\'44\u0002\u00ec\u0002.\u0003\u0002\u0002\u0002\u00048\u0003\u0002",
    "\u0002\u0002\u0006?\u0003\u0002\u0002\u0002\bB\u0003\u0002\u0002\u0002",
    "\nG\u0003\u0002\u0002\u0002\fN\u0003\u0002\u0002\u0002\u000eR\u0003",
    "\u0002\u0002\u0002\u0010W\u0003\u0002\u0002\u0002\u0012h\u0003\u0002",
    "\u0002\u0002\u0014o\u0003\u0002\u0002\u0002\u0016\u0087\u0003\u0002",
    "\u0002\u0002\u0018\u0091\u0003\u0002\u0002\u0002\u001a\u0098\u0003\u0002",
    "\u0002\u0002\u001c\u00a0\u0003\u0002\u0002\u0002\u001e\u00ad\u0003\u0002",
    "\u0002\u0002 \u00b5\u0003\u0002\u0002\u0002\"\u00b9\u0003\u0002\u0002",
    "\u0002$\u00c1\u0003\u0002\u0002\u0002&\u00cd\u0003\u0002\u0002\u0002",
    "(\u00cf\u0003\u0002\u0002\u0002*\u00db\u0003\u0002\u0002\u0002,\u00e0",
    "\u0003\u0002\u0002\u0002./\u0007\u0012\u0002\u0002/0\u0007\u001f\u0002",
    "\u000203\u0007!\u0002\u000214\u00070\u0002\u000224\u0005$\u0013\u0002",
    "31\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u000256\u0007\"\u0002\u000267\b\u0002\u0001\u00027\u0003\u0003\u0002",
    "\u0002\u00028;\u0007\u001f\u0002\u00029:\u0007%\u0002\u0002:<\u0007",
    "\u001f\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<=\u0003\u0002\u0002\u0002=>\b\u0003\u0001\u0002>\u0005\u0003\u0002",
    "\u0002\u0002?@\u0005\u0004\u0003\u0002@A\b\u0004\u0001\u0002A\u0007",
    "\u0003\u0002\u0002\u0002BC\u0005\u0004\u0003\u0002CD\u0007#\u0002\u0002",
    "DE\u0005\u0004\u0003\u0002EF\b\u0005\u0001\u0002F\t\u0003\u0002\u0002",
    "\u0002GH\u0005\u0004\u0003\u0002HI\u0007#\u0002\u0002IJ\u0005\u0004",
    "\u0003\u0002JK\u0007#\u0002\u0002KL\u0005\u0004\u0003\u0002LM\b\u0006",
    "\u0001\u0002M\u000b\u0003\u0002\u0002\u0002NO\t\u0002\u0002\u0002OP",
    "\u0007\u000f\u0002\u0002PQ\b\u0007\u0001\u0002Q\r\u0003\u0002\u0002",
    "\u0002RS\u0007 \u0002\u0002ST\u0007\u001f\u0002\u0002TU\b\b\u0001\u0002",
    "U\u000f\u0003\u0002\u0002\u0002VX\u0005\f\u0007\u0002WV\u0003\u0002",
    "\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002YZ\u0007",
    "\u0015\u0002\u0002Z\\\u0005\"\u0012\u0002[]\u0005\u000e\b\u0002\\[\u0003",
    "\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002",
    "^a\u0005\u0012\n\u0002_b\u0005\u0018\r\u0002`b\u0005\u001a\u000e\u0002",
    "a_\u0003\u0002\u0002\u0002a`\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002",
    "\u0002bd\u0003\u0002\u0002\u0002ce\u0005\u001c\u000f\u0002dc\u0003\u0002",
    "\u0002\u0002de\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\b",
    "\t\u0001\u0002g\u0011\u0003\u0002\u0002\u0002hi\u0007\u000e\u0002\u0002",
    "ij\u0007!\u0002\u0002jk\u0005\b\u0005\u0002kl\u0007\"\u0002\u0002lm",
    "\b\n\u0001\u0002m\u0013\u0003\u0002\u0002\u0002np\u0005\f\u0007\u0002",
    "on\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qr\u0007\u0016\u0002\u0002rt\u0005\"\u0012\u0002su\u0005\u000e",
    "\b\u0002ts\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vw\u0007%\u0002\u0002wy\u0007\u001f\u0002\u0002xv",
    "\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002",
    "\u0002z}\u0005\u0016\f\u0002{~\u0005\u0018\r\u0002|~\u0005\u001a\u000e",
    "\u0002}{\u0003\u0002\u0002\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002",
    "\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f\u0081\u0005\u001c",
    "\u000f\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0084\u0005 ",
    "\u0011\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002",
    "\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\b\u000b",
    "\u0001\u0002\u0086\u0015\u0003\u0002\u0002\u0002\u0087\u0088\u0007\u000e",
    "\u0002\u0002\u0088\u008c\u0007!\u0002\u0002\u0089\u008d\u0005\u0006",
    "\u0004\u0002\u008a\u008d\u0005\b\u0005\u0002\u008b\u008d\u0005\n\u0006",
    "\u0002\u008c\u0089\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002",
    "\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0007\"\u0002\u0002\u008f\u0090\b\f\u0001\u0002\u0090",
    "\u0017\u0003\u0002\u0002\u0002\u0091\u0092\u0007\n\u0002\u0002\u0092",
    "\u0093\u0007\u0019\u0002\u0002\u0093\u0094\u0007\u001f\u0002\u0002\u0094",
    "\u0095\u0007#\u0002\u0002\u0095\u0096\u0007\u001f\u0002\u0002\u0096",
    "\u0097\b\r\u0001\u0002\u0097\u0019\u0003\u0002\u0002\u0002\u0098\u0099",
    "\u0007\t\u0002\u0002\u0099\u009a\u0007\u001f\u0002\u0002\u009a\u009b",
    "\u0007\u0019\u0002\u0002\u009b\u009c\u0007\u001f\u0002\u0002\u009c\u009d",
    "\u0007#\u0002\u0002\u009d\u009e\u0007\u001f\u0002\u0002\u009e\u009f",
    "\b\u000e\u0001\u0002\u009f\u001b\u0003\u0002\u0002\u0002\u00a0\u00a1",
    "\u0007\u0007\u0002\u0002\u00a1\u00a2\u0007!\u0002\u0002\u00a2\u00a7",
    "\u0005\u001e\u0010\u0002\u00a3\u00a4\u0007#\u0002\u0002\u00a4\u00a6",
    "\u0005\u001e\u0010\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a9",
    "\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8",
    "\u0003\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u00a7",
    "\u0003\u0002\u0002\u0002\u00aa\u00ab\u0007\"\u0002\u0002\u00ab\u00ac",
    "\b\u000f\u0001\u0002\u00ac\u001d\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007\u001f\u0002\u0002\u00ae\u00b1\t\u0003\u0002\u0002\u00af\u00b2",
    "\u0007\u001f\u0002\u0002\u00b0\u00b2\u0005&\u0014\u0002\u00b1\u00af",
    "\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u00b4\b\u0010\u0001\u0002\u00b4\u001f",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u0017\u0002\u0002\u00b6\u00b7",
    "\u0007\u001d\u0002\u0002\u00b7\u00b8\b\u0011\u0001\u0002\u00b8!\u0003",
    "\u0002\u0002\u0002\u00b9\u00be\u0007\u001f\u0002\u0002\u00ba\u00bb\u0007",
    "/\u0002\u0002\u00bb\u00bd\u0007\u001f\u0002\u0002\u00bc\u00ba\u0003",
    "\u0002\u0002\u0002\u00bd\u00c0\u0003\u0002\u0002\u0002\u00be\u00bc\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf#\u0003",
    "\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007",
    "1\u0002\u0002\u00c2\u00c3\u0007\u001f\u0002\u0002\u00c3\u00c4\b\u0013",
    "\u0001\u0002\u00c4%\u0003\u0002\u0002\u0002\u00c5\u00c6\u0007\u001b",
    "\u0002\u0002\u00c6\u00ce\b\u0014\u0001\u0002\u00c7\u00c8\u0007\u001c",
    "\u0002\u0002\u00c8\u00ce\b\u0014\u0001\u0002\u00c9\u00ca\u0007\u001e",
    "\u0002\u0002\u00ca\u00ce\b\u0014\u0001\u0002\u00cb\u00cc\u0007\u001d",
    "\u0002\u0002\u00cc\u00ce\b\u0014\u0001\u0002\u00cd\u00c5\u0003\u0002",
    "\u0002\u0002\u00cd\u00c7\u0003\u0002\u0002\u0002\u00cd\u00c9\u0003\u0002",
    "\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\'\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\u0007)\u0002\u0002\u00d0\u00d5\u0005*\u0016",
    "\u0002\u00d1\u00d2\u0007#\u0002\u0002\u00d2\u00d4\u0005*\u0016\u0002",
    "\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002",
    "\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002",
    "\u00d6\u00d8\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u0007*\u0002\u0002\u00d9\u00da\b\u0015\u0001\u0002\u00da",
    ")\u0003\u0002\u0002\u0002\u00db\u00dc\u0007\u001f\u0002\u0002\u00dc",
    "\u00dd\u0007%\u0002\u0002\u00dd\u00de\u0005&\u0014\u0002\u00de\u00df",
    "\b\u0016\u0001\u0002\u00df+\u0003\u0002\u0002\u0002\u00e0\u00e5\u0005",
    "*\u0016\u0002\u00e1\u00e2\u0007#\u0002\u0002\u00e2\u00e4\u0005*\u0016",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002",
    "\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00e8\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\b\u0017\u0001\u0002\u00e9-\u0003\u0002\u0002\u0002",
    "\u00153;W\\adotx}\u0080\u0083\u008c\u00a7\u00b1\u00be\u00cd\u00d5\u00e5"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class Model extends antlr4.Parser {

    static grammarFileName = "Model.g4";
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
    static ruleNames = [ "schemaStatement", "keyFieldDef", "simpleKeyField", 
                         "twoKeyFields", "threeKeyFields", "accessMode", 
                         "connectorClause", "streamStatement", "streamKeyClause", 
                         "tableStatement", "tableKeyClause", "encryptedWithClause", 
                         "encryptWithClause", "defaultClause", "defaultValue", 
                         "ttlClause", "qualifiedName", "paramBind", "literalValue", 
                         "literalMap", "mapField", "inlineMap" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Model.ruleNames;
        this.literalNames = Model.literalNames;
        this.symbolicNames = Model.symbolicNames;
    }

    get atn() {
        return atn;
    }



	schemaStatement() {
	    let localctx = new SchemaStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Model.RULE_schemaStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(Model.Schema);
	        this.state = 45;
	        localctx.schemaName = this.match(Model.Name);
	        this.state = 46;
	        this.match(Model.OpenParen);
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Model.Asterisk:
	            this.state = 47;
	            this.match(Model.Asterisk);
	            break;
	        case Model.Ampersand:
	            this.state = 48;
	            localctx.validator = this.paramBind();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 51;
	        this.match(Model.CloseParen);

	        			return new SchemaStmt(
	        				(localctx.schemaName===null ? null : localctx.schemaName.text),
	        				localctx.validator || "*"
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



	keyFieldDef() {
	    let localctx = new KeyFieldDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Model.RULE_keyFieldDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        localctx.fieldName = this.match(Model.Name);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Colon) {
	            this.state = 55;
	            this.match(Model.Colon);
	            this.state = 56;
	            localctx.dataType = this.match(Model.Name);
	        }


	        		return {
	        			name: (localctx.fieldName===null ? null : localctx.fieldName.text),
	        			dataType: localctx.dataType ? (localctx.dataType===null ? null : localctx.dataType.text) : "text"
	        		};
	          
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



	simpleKeyField() {
	    let localctx = new SimpleKeyFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Model.RULE_simpleKeyField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        localctx.field = this.keyFieldDef();

	        		return [localctx.field];
	        	
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



	twoKeyFields() {
	    let localctx = new TwoKeyFieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Model.RULE_twoKeyFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 65;
	        this.match(Model.Comma);
	        this.state = 66;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);

	        		return localctx.fields;
	        	
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



	threeKeyFields() {
	    let localctx = new ThreeKeyFieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Model.RULE_threeKeyFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 70;
	        this.match(Model.Comma);
	        this.state = 71;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 72;
	        this.match(Model.Comma);
	        this.state = 73;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);

	        		return localctx.fields;
	        	
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



	accessMode() {
	    let localctx = new AccessModeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Model.RULE_accessMode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        localctx.aMode = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===Model.Append || _la===Model.Read)) {
	            localctx.aMode = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 77;
	        this.match(Model.Only);
	         return (localctx.aMode===null ? null : localctx.aMode.text) + " ONLY"; 
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



	connectorClause() {
	    let localctx = new ConnectorClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Model.RULE_connectorClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(Model.At);
	        this.state = 81;
	        localctx.connector = this.match(Model.Name);
	         return (localctx.connector===null ? null : localctx.connector.text); 
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



	streamStatement() {
	    let localctx = new StreamStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Model.RULE_streamStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Append || _la===Model.Read) {
	            this.state = 84;
	            localctx.aMode = this.accessMode();
	        }

	        this.state = 87;
	        this.match(Model.Stream);
	        this.state = 88;
	        localctx.streamName = this.qualifiedName();
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.At) {
	            this.state = 89;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 92;
	        localctx.key = this.streamKeyClause();
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case Model.Encrypted:
	        	this.state = 93;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case Model.Encrypt:
	        	this.state = 94;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case Model.EOF:
	        case Model.Default:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Default) {
	            this.state = 97;
	            localctx.defaults = this.defaultClause();
	        }


	        		const streamName = localctx.streamName.getText();

	        		return new StreamStmt(
	        			localctx.connector,
	        			streamName,
	        			undefined,	// schema name
	        			localctx.aMode || "READ WRITE",
	        			localctx.key,
	        			localctx.encryptedWith || localctx.encryptWith,
	        			localctx.defaults
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



	streamKeyClause() {
	    let localctx = new StreamKeyClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Model.RULE_streamKeyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(Model.Key);
	        this.state = 103;
	        this.match(Model.OpenParen);
	        this.state = 104;
	        localctx.fields = this.twoKeyFields();
	        this.state = 105;
	        this.match(Model.CloseParen);

	        		return localctx.fields;
	        	
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
	    this.enterRule(localctx, 18, Model.RULE_tableStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Append || _la===Model.Read) {
	            this.state = 108;
	            localctx.aMode = this.accessMode();
	        }

	        this.state = 111;
	        this.match(Model.Table);
	        this.state = 112;
	        localctx.tableName = this.qualifiedName();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.At) {
	            this.state = 113;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Colon) {
	            this.state = 116;
	            this.match(Model.Colon);
	            this.state = 117;
	            localctx.schemaName = this.match(Model.Name);
	        }

	        this.state = 120;
	        localctx.key = this.tableKeyClause();
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case Model.Encrypted:
	        	this.state = 121;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case Model.Encrypt:
	        	this.state = 122;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case Model.EOF:
	        case Model.Default:
	        case Model.Ttl:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Default) {
	            this.state = 125;
	            localctx.defaults = this.defaultClause();
	        }

	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===Model.Ttl) {
	            this.state = 128;
	            localctx.ttl = this.ttlClause();
	        }


	        		const tableName = localctx.tableName.getText();

	        		if (tableName.startsWith("sys.")) {
	        			throw new SyntaxError("System tables can't defined by the user: " + tableName + ".");
	        		}

	        		return new TableStmt(
	        			localctx.connector,
	        			tableName,
	        			localctx.schemaName && (localctx.schemaName===null ? null : localctx.schemaName.text),
	        			localctx.aMode || "READ WRITE",
	        			localctx.key,
	        			localctx.encryptedWith || localctx.encryptWith,
	        			localctx.defaults,
	        			localctx.ttl
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



	tableKeyClause() {
	    let localctx = new TableKeyClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Model.RULE_tableKeyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(Model.Key);
	        this.state = 134;
	        this.match(Model.OpenParen);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 135;
	            localctx.simple = this.simpleKeyField();
	            break;

	        case 2:
	            this.state = 136;
	            localctx.composite2 = this.twoKeyFields();
	            break;

	        case 3:
	            this.state = 137;
	            localctx.composite3 = this.threeKeyFields();
	            break;

	        }
	        this.state = 140;
	        this.match(Model.CloseParen);

	        		return localctx.simple || localctx.composite2 || localctx.composite3;
	        	
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



	encryptedWithClause() {
	    let localctx = new EncryptedWithClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Model.RULE_encryptedWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.match(Model.Encrypted);
	        this.state = 144;
	        this.match(Model.With);
	        this.state = 145;
	        localctx.cryptoKey = this.match(Model.Name);
	        this.state = 146;
	        this.match(Model.Comma);
	        this.state = 147;
	        localctx.cryptoIv = this.match(Model.Name);

	        		return new TableLevelTde((localctx.cryptoKey===null ? null : localctx.cryptoKey.text), (localctx.cryptoIv===null ? null : localctx.cryptoIv.text));
	        	
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



	encryptWithClause() {
	    let localctx = new EncryptWithClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Model.RULE_encryptWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(Model.Encrypt);
	        this.state = 151;
	        localctx.fieldName = this.match(Model.Name);
	        this.state = 152;
	        this.match(Model.With);
	        this.state = 153;
	        localctx.cryptoKey = this.match(Model.Name);
	        this.state = 154;
	        this.match(Model.Comma);
	        this.state = 155;
	        localctx.cryptoIv = this.match(Model.Name);

	        		return new FieldLevelTde((localctx.cryptoKey===null ? null : localctx.cryptoKey.text), (localctx.cryptoIv===null ? null : localctx.cryptoIv.text), (localctx.fieldName===null ? null : localctx.fieldName.text));
	        	
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



	defaultClause() {
	    let localctx = new DefaultClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Model.RULE_defaultClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(Model.Default);
	        this.state = 159;
	        this.match(Model.OpenParen);
	        this.state = 160;
	        localctx._defaultValue = this.defaultValue();
	        localctx.values.push(localctx._defaultValue);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Model.Comma) {
	            this.state = 161;
	            this.match(Model.Comma);
	            this.state = 162;
	            localctx._defaultValue = this.defaultValue();
	            localctx.values.push(localctx._defaultValue);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
	        this.match(Model.CloseParen);

	        		const values = {};

	        		for (const field of localctx.values) {
	        			values[field.name] = {op: field.op, value: field.value};
	        		}

	        		return values;

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



	defaultValue() {
	    let localctx = new DefaultValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Model.RULE_defaultValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        localctx.name = this.match(Model.Name);
	        this.state = 172;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (Model.ColonEqual - 36)) | (1 << (Model.Equal - 36)) | (1 << (Model.QuestionMarkEqual - 36)))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Model.Name:
	            this.state = 173;
	            localctx.prop = this.match(Model.Name);
	            break;
	        case Model.LiteralText:
	        case Model.LiteralNum:
	        case Model.LiteralDuration:
	        case Model.LiteralBool:
	            this.state = 174;
	            localctx.lValue = this.literalValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }

	        		return {
	        			name: (localctx.name===null ? null : localctx.name.text),
	        			op: (localctx.op===null ? null : localctx.op.text),
	        			value: localctx.prop ? new Datum((localctx.prop===null ? null : localctx.prop.text)) : localctx.lValue
	        		};

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



	ttlClause() {
	    let localctx = new TtlClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Model.RULE_ttlClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(Model.Ttl);
	        this.state = 180;
	        localctx.value = this.match(Model.LiteralDuration);

	        		return (localctx.value===null ? null : localctx.value.text)
	        	
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
	    this.enterRule(localctx, 32, Model.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(Model.Name);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Model.Dot) {
	            this.state = 184;
	            this.match(Model.Dot);
	            this.state = 185;
	            this.match(Model.Name);
	            this.state = 190;
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
	    this.enterRule(localctx, 34, Model.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(Model.Ampersand);
	        this.state = 192;
	        localctx.name = this.match(Model.Name);

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
	    this.enterRule(localctx, 36, Model.RULE_literalValue);
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case Model.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            localctx.txt = this.match(Model.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case Model.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            localctx.num = this.match(Model.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case Model.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 199;
	            localctx.bool = this.match(Model.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case Model.LiteralDuration:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 201;
	            localctx.duration = this.match(Model.LiteralDuration);
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
	    this.enterRule(localctx, 38, Model.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(Model.OpenBrace);
	        this.state = 206;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Model.Comma) {
	            this.state = 207;
	            this.match(Model.Comma);
	            this.state = 208;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 214;
	        this.match(Model.CloseBrace);

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
	    this.enterRule(localctx, 40, Model.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        localctx.name = this.match(Model.Name);
	        this.state = 218;
	        this.match(Model.Colon);
	        this.state = 219;
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
	    this.enterRule(localctx, 42, Model.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===Model.Comma) {
	            this.state = 223;
	            this.match(Model.Comma);
	            this.state = 224;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 229;
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

Model.EOF = antlr4.Token.EOF;
Model.Whitespace = 1;
Model.And = 2;
Model.Append = 3;
Model.Crypto = 4;
Model.Default = 5;
Model.Delete = 6;
Model.Encrypt = 7;
Model.Encrypted = 8;
Model.From = 9;
Model.Into = 10;
Model.Iv = 11;
Model.Key = 12;
Model.Only = 13;
Model.Read = 14;
Model.Returning = 15;
Model.Schema = 16;
Model.Select = 17;
Model.Set = 18;
Model.Stream = 19;
Model.Table = 20;
Model.Ttl = 21;
Model.Where = 22;
Model.With = 23;
Model.SingleLineComment = 24;
Model.LiteralText = 25;
Model.LiteralNum = 26;
Model.LiteralDuration = 27;
Model.LiteralBool = 28;
Model.Name = 29;
Model.At = 30;
Model.OpenParen = 31;
Model.CloseParen = 32;
Model.Comma = 33;
Model.Semicolon = 34;
Model.Colon = 35;
Model.ColonEqual = 36;
Model.Equal = 37;
Model.DoubleEqual = 38;
Model.OpenBrace = 39;
Model.CloseBrace = 40;
Model.OpenBracket = 41;
Model.CloseBracket = 42;
Model.OpenChevron = 43;
Model.CloseChevron = 44;
Model.Dot = 45;
Model.Asterisk = 46;
Model.Ampersand = 47;
Model.VerticalBar = 48;
Model.QuestionMark = 49;
Model.QuestionMarkEqual = 50;

Model.RULE_schemaStatement = 0;
Model.RULE_keyFieldDef = 1;
Model.RULE_simpleKeyField = 2;
Model.RULE_twoKeyFields = 3;
Model.RULE_threeKeyFields = 4;
Model.RULE_accessMode = 5;
Model.RULE_connectorClause = 6;
Model.RULE_streamStatement = 7;
Model.RULE_streamKeyClause = 8;
Model.RULE_tableStatement = 9;
Model.RULE_tableKeyClause = 10;
Model.RULE_encryptedWithClause = 11;
Model.RULE_encryptWithClause = 12;
Model.RULE_defaultClause = 13;
Model.RULE_defaultValue = 14;
Model.RULE_ttlClause = 15;
Model.RULE_qualifiedName = 16;
Model.RULE_paramBind = 17;
Model.RULE_literalValue = 18;
Model.RULE_literalMap = 19;
Model.RULE_mapField = 20;
Model.RULE_inlineMap = 21;

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
        this.ruleIndex = Model.RULE_schemaStatement;
        this.schemaName = null; // Token
        this.validator = null; // ParamBindContext
    }

	Schema() {
	    return this.getToken(Model.Schema, 0);
	};

	OpenParen() {
	    return this.getToken(Model.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Model.CloseParen, 0);
	};

	Name() {
	    return this.getToken(Model.Name, 0);
	};

	Asterisk() {
	    return this.getToken(Model.Asterisk, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};


}



class KeyFieldDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_keyFieldDef;
        this.fieldName = null; // Token
        this.dataType = null; // Token
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Name);
	    } else {
	        return this.getToken(Model.Name, i);
	    }
	};


	Colon() {
	    return this.getToken(Model.Colon, 0);
	};


}



class SimpleKeyFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_simpleKeyField;
        this.field = null; // KeyFieldDefContext
    }

	keyFieldDef() {
	    return this.getTypedRuleContext(KeyFieldDefContext,0);
	};


}



class TwoKeyFieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_twoKeyFields;
        this._keyFieldDef = null; // KeyFieldDefContext
        this.fields = []; // of KeyFieldDefContexts
    }

	Comma() {
	    return this.getToken(Model.Comma, 0);
	};

	keyFieldDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyFieldDefContext);
	    } else {
	        return this.getTypedRuleContext(KeyFieldDefContext,i);
	    }
	};


}



class ThreeKeyFieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_threeKeyFields;
        this._keyFieldDef = null; // KeyFieldDefContext
        this.fields = []; // of KeyFieldDefContexts
    }

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Comma);
	    } else {
	        return this.getToken(Model.Comma, i);
	    }
	};


	keyFieldDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyFieldDefContext);
	    } else {
	        return this.getTypedRuleContext(KeyFieldDefContext,i);
	    }
	};


}



class AccessModeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_accessMode;
        this.aMode = null; // Token
    }

	Only() {
	    return this.getToken(Model.Only, 0);
	};

	Read() {
	    return this.getToken(Model.Read, 0);
	};

	Append() {
	    return this.getToken(Model.Append, 0);
	};


}



class ConnectorClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_connectorClause;
        this.connector = null; // Token
    }

	At() {
	    return this.getToken(Model.At, 0);
	};

	Name() {
	    return this.getToken(Model.Name, 0);
	};


}



class StreamStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_streamStatement;
        this.aMode = null; // AccessModeContext
        this.streamName = null; // QualifiedNameContext
        this.connector = null; // ConnectorClauseContext
        this.key = null; // StreamKeyClauseContext
        this.encryptedWith = null; // EncryptedWithClauseContext
        this.encryptWith = null; // EncryptWithClauseContext
        this.defaults = null; // DefaultClauseContext
    }

	Stream() {
	    return this.getToken(Model.Stream, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	streamKeyClause() {
	    return this.getTypedRuleContext(StreamKeyClauseContext,0);
	};

	accessMode() {
	    return this.getTypedRuleContext(AccessModeContext,0);
	};

	connectorClause() {
	    return this.getTypedRuleContext(ConnectorClauseContext,0);
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	encryptedWithClause() {
	    return this.getTypedRuleContext(EncryptedWithClauseContext,0);
	};

	encryptWithClause() {
	    return this.getTypedRuleContext(EncryptWithClauseContext,0);
	};


}



class StreamKeyClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_streamKeyClause;
        this.fields = null; // TwoKeyFieldsContext
    }

	Key() {
	    return this.getToken(Model.Key, 0);
	};

	OpenParen() {
	    return this.getToken(Model.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Model.CloseParen, 0);
	};

	twoKeyFields() {
	    return this.getTypedRuleContext(TwoKeyFieldsContext,0);
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
        this.ruleIndex = Model.RULE_tableStatement;
        this.aMode = null; // AccessModeContext
        this.tableName = null; // QualifiedNameContext
        this.connector = null; // ConnectorClauseContext
        this.schemaName = null; // Token
        this.key = null; // TableKeyClauseContext
        this.encryptedWith = null; // EncryptedWithClauseContext
        this.encryptWith = null; // EncryptWithClauseContext
        this.defaults = null; // DefaultClauseContext
        this.ttl = null; // TtlClauseContext
    }

	Table() {
	    return this.getToken(Model.Table, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	tableKeyClause() {
	    return this.getTypedRuleContext(TableKeyClauseContext,0);
	};

	Colon() {
	    return this.getToken(Model.Colon, 0);
	};

	accessMode() {
	    return this.getTypedRuleContext(AccessModeContext,0);
	};

	connectorClause() {
	    return this.getTypedRuleContext(ConnectorClauseContext,0);
	};

	Name() {
	    return this.getToken(Model.Name, 0);
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	ttlClause() {
	    return this.getTypedRuleContext(TtlClauseContext,0);
	};

	encryptedWithClause() {
	    return this.getTypedRuleContext(EncryptedWithClauseContext,0);
	};

	encryptWithClause() {
	    return this.getTypedRuleContext(EncryptWithClauseContext,0);
	};


}



class TableKeyClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_tableKeyClause;
        this.simple = null; // SimpleKeyFieldContext
        this.composite2 = null; // TwoKeyFieldsContext
        this.composite3 = null; // ThreeKeyFieldsContext
    }

	Key() {
	    return this.getToken(Model.Key, 0);
	};

	OpenParen() {
	    return this.getToken(Model.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Model.CloseParen, 0);
	};

	simpleKeyField() {
	    return this.getTypedRuleContext(SimpleKeyFieldContext,0);
	};

	twoKeyFields() {
	    return this.getTypedRuleContext(TwoKeyFieldsContext,0);
	};

	threeKeyFields() {
	    return this.getTypedRuleContext(ThreeKeyFieldsContext,0);
	};


}



class EncryptedWithClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_encryptedWithClause;
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypted() {
	    return this.getToken(Model.Encrypted, 0);
	};

	With() {
	    return this.getToken(Model.With, 0);
	};

	Comma() {
	    return this.getToken(Model.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Name);
	    } else {
	        return this.getToken(Model.Name, i);
	    }
	};



}



class EncryptWithClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_encryptWithClause;
        this.fieldName = null; // Token
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypt() {
	    return this.getToken(Model.Encrypt, 0);
	};

	With() {
	    return this.getToken(Model.With, 0);
	};

	Comma() {
	    return this.getToken(Model.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Name);
	    } else {
	        return this.getToken(Model.Name, i);
	    }
	};



}



class DefaultClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_defaultClause;
        this._defaultValue = null; // DefaultValueContext
        this.values = []; // of DefaultValueContexts
    }

	Default() {
	    return this.getToken(Model.Default, 0);
	};

	OpenParen() {
	    return this.getToken(Model.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(Model.CloseParen, 0);
	};

	defaultValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefaultValueContext);
	    } else {
	        return this.getTypedRuleContext(DefaultValueContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Comma);
	    } else {
	        return this.getToken(Model.Comma, i);
	    }
	};



}



class DefaultValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_defaultValue;
        this.name = null; // Token
        this.op = null; // Token
        this.prop = null; // Token
        this.lValue = null; // LiteralValueContext
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Name);
	    } else {
	        return this.getToken(Model.Name, i);
	    }
	};


	Equal() {
	    return this.getToken(Model.Equal, 0);
	};

	ColonEqual() {
	    return this.getToken(Model.ColonEqual, 0);
	};

	QuestionMarkEqual() {
	    return this.getToken(Model.QuestionMarkEqual, 0);
	};

	literalValue() {
	    return this.getTypedRuleContext(LiteralValueContext,0);
	};


}



class TtlClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Model.RULE_ttlClause;
        this.value = null; // Token
    }

	Ttl() {
	    return this.getToken(Model.Ttl, 0);
	};

	LiteralDuration() {
	    return this.getToken(Model.LiteralDuration, 0);
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
        this.ruleIndex = Model.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Name);
	    } else {
	        return this.getToken(Model.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Model.Dot);
	    } else {
	        return this.getToken(Model.Dot, i);
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
        this.ruleIndex = Model.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(Model.Ampersand, 0);
	};

	Name() {
	    return this.getToken(Model.Name, 0);
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
        this.ruleIndex = Model.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
        this.duration = null; // Token
    }

	LiteralText() {
	    return this.getToken(Model.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(Model.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(Model.LiteralBool, 0);
	};

	LiteralDuration() {
	    return this.getToken(Model.LiteralDuration, 0);
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
        this.ruleIndex = Model.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(Model.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(Model.CloseBrace, 0);
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
	        return this.getTokens(Model.Comma);
	    } else {
	        return this.getToken(Model.Comma, i);
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
        this.ruleIndex = Model.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(Model.Colon, 0);
	};

	Name() {
	    return this.getToken(Model.Name, 0);
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
        this.ruleIndex = Model.RULE_inlineMap;
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
	        return this.getTokens(Model.Comma);
	    } else {
	        return this.getToken(Model.Comma, i);
	    }
	};



}




Model.SchemaStatementContext = SchemaStatementContext; 
Model.KeyFieldDefContext = KeyFieldDefContext; 
Model.SimpleKeyFieldContext = SimpleKeyFieldContext; 
Model.TwoKeyFieldsContext = TwoKeyFieldsContext; 
Model.ThreeKeyFieldsContext = ThreeKeyFieldsContext; 
Model.AccessModeContext = AccessModeContext; 
Model.ConnectorClauseContext = ConnectorClauseContext; 
Model.StreamStatementContext = StreamStatementContext; 
Model.StreamKeyClauseContext = StreamKeyClauseContext; 
Model.TableStatementContext = TableStatementContext; 
Model.TableKeyClauseContext = TableKeyClauseContext; 
Model.EncryptedWithClauseContext = EncryptedWithClauseContext; 
Model.EncryptWithClauseContext = EncryptWithClauseContext; 
Model.DefaultClauseContext = DefaultClauseContext; 
Model.DefaultValueContext = DefaultValueContext; 
Model.TtlClauseContext = TtlClauseContext; 
Model.QualifiedNameContext = QualifiedNameContext; 
Model.ParamBindContext = ParamBindContext; 
Model.LiteralValueContext = LiteralValueContext; 
Model.LiteralMapContext = LiteralMapContext; 
Model.MapFieldContext = MapFieldContext; 
Model.InlineMapContext = InlineMapContext; 
