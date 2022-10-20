// Generated from /home/me/SiaCodeLabs/ValenciaQL/vql/packages/libs/parser/grammar/VQL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	


  import {CryptoKeyStmt, CryptoIvStmt} from "../stmts/index.js";


  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


	import {SyntaxError} from "../errors/index.js";
	import {SchemaStmt, TableStmt, TableLevelTde, FieldLevelTde} from "../stmts/model/index.js";
	import Datum from "../Datum.js";


  import {KeyValue, KeyFieldValue, SelectStmt, DeleteStmt, SetStmt} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-\u015e\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002I",
    "\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003T\n\u0003",
    "\u0003\u0004\u0003\u0004\u0005\u0004X\n\u0004\u0003\u0004\u0007\u0004",
    "[\n\u0004\f\u0004\u000e\u0004^\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005n\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006v\n\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u0081\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0007\b\u0089\n\b\f\b\u000e\b\u008c\u000b\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u0098\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000b\u009e\n\u000b\f\u000b\u000e\u000b\u00a1\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0007\r\u00ae\n\r\f\r\u000e\r\u00b1",
    "\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u00ba\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0005\u000f\u00c0\n\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0005\u000f\u00c6\n\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f\u00cb\n\u000f\u0003\u000f\u0005\u000f",
    "\u00ce\n\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u00da\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0005\u0013\u00e7\n\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0007\u0016\u00ff\n\u0016\f\u0016\u000e\u0016\u0102",
    "\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0005\u0017\u010b\n\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0117\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0005\u001a\u0128\n\u001a\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0136",
    "\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u014f\n\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005 \u015c\n \u0003 \u0002",
    "\u0002!\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>\u0002\u0003\u0003\u0002\'(\u0002",
    "\u015e\u0002H\u0003\u0002\u0002\u0002\u0004S\u0003\u0002\u0002\u0002",
    "\u0006U\u0003\u0002\u0002\u0002\bm\u0003\u0002\u0002\u0002\no\u0003",
    "\u0002\u0002\u0002\fz\u0003\u0002\u0002\u0002\u000e\u0085\u0003\u0002",
    "\u0002\u0002\u0010\u008d\u0003\u0002\u0002\u0002\u0012\u0097\u0003\u0002",
    "\u0002\u0002\u0014\u0099\u0003\u0002\u0002\u0002\u0016\u00a5\u0003\u0002",
    "\u0002\u0002\u0018\u00aa\u0003\u0002\u0002\u0002\u001a\u00b4\u0003\u0002",
    "\u0002\u0002\u001c\u00bf\u0003\u0002\u0002\u0002\u001e\u00d1\u0003\u0002",
    "\u0002\u0002 \u00d5\u0003\u0002\u0002\u0002\"\u00de\u0003\u0002\u0002",
    "\u0002$\u00e1\u0003\u0002\u0002\u0002&\u00ea\u0003\u0002\u0002\u0002",
    "(\u00f1\u0003\u0002\u0002\u0002*\u00f9\u0003\u0002\u0002\u0002,\u0106",
    "\u0003\u0002\u0002\u0002.\u0116\u0003\u0002\u0002\u00020\u0118\u0003",
    "\u0002\u0002\u00022\u0127\u0003\u0002\u0002\u00024\u0135\u0003\u0002",
    "\u0002\u00026\u0137\u0003\u0002\u0002\u00028\u013b\u0003\u0002\u0002",
    "\u0002:\u0141\u0003\u0002\u0002\u0002<\u0147\u0003\u0002\u0002\u0002",
    ">\u015b\u0003\u0002\u0002\u0002@A\u0005\u0004\u0003\u0002AB\u0007\u0002",
    "\u0002\u0003BC\b\u0002\u0001\u0002CI\u0003\u0002\u0002\u0002DE\u0005",
    "\u0006\u0004\u0002EF\u0007\u0002\u0002\u0003FG\b\u0002\u0001\u0002G",
    "I\u0003\u0002\u0002\u0002H@\u0003\u0002\u0002\u0002HD\u0003\u0002\u0002",
    "\u0002I\u0003\u0003\u0002\u0002\u0002JK\u00058\u001d\u0002KL\b\u0003",
    "\u0001\u0002LT\u0003\u0002\u0002\u0002MN\u0005:\u001e\u0002NO\b\u0003",
    "\u0001\u0002OT\u0003\u0002\u0002\u0002PQ\u0005<\u001f\u0002QR\b\u0003",
    "\u0001\u0002RT\u0003\u0002\u0002\u0002SJ\u0003\u0002\u0002\u0002SM\u0003",
    "\u0002\u0002\u0002SP\u0003\u0002\u0002\u0002T\u0005\u0003\u0002\u0002",
    "\u0002U\\\u0005\b\u0005\u0002VX\u0007 \u0002\u0002WV\u0003\u0002\u0002",
    "\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0005\b",
    "\u0005\u0002ZW\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\Z",
    "\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_`\b\u0004\u0001\u0002`\u0007\u0003",
    "\u0002\u0002\u0002ab\u0005\n\u0006\u0002bc\b\u0005\u0001\u0002cn\u0003",
    "\u0002\u0002\u0002de\u0005\f\u0007\u0002ef\b\u0005\u0001\u0002fn\u0003",
    "\u0002\u0002\u0002gh\u0005\u001a\u000e\u0002hi\b\u0005\u0001\u0002i",
    "n\u0003\u0002\u0002\u0002jk\u0005\u001c\u000f\u0002kl\b\u0005\u0001",
    "\u0002ln\u0003\u0002\u0002\u0002ma\u0003\u0002\u0002\u0002md\u0003\u0002",
    "\u0002\u0002mg\u0003\u0002\u0002\u0002mj\u0003\u0002\u0002\u0002n\t",
    "\u0003\u0002\u0002\u0002op\u0007\u0005\u0002\u0002pq\u0007\r\u0002\u0002",
    "qr\u0007\u001b\u0002\u0002ru\u0007\u001c\u0002\u0002sv\u0005\u0010\t",
    "\u0002tv\u0005\u0018\r\u0002us\u0003\u0002\u0002\u0002ut\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0007\u001d\u0002\u0002xy\b",
    "\u0006\u0001\u0002y\u000b\u0003\u0002\u0002\u0002z{\u0007\u0005\u0002",
    "\u0002{|\u0007\f\u0002\u0002|}\u0007\u001b\u0002\u0002}\u0080\u0007",
    "\u001c\u0002\u0002~\u0081\u0005\u0010\t\u0002\u007f\u0081\u0007\u0018",
    "\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u007f\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007\u001d",
    "\u0002\u0002\u0083\u0084\b\u0007\u0001\u0002\u0084\r\u0003\u0002\u0002",
    "\u0002\u0085\u008a\u0007\u001b\u0002\u0002\u0086\u0087\u0007)\u0002",
    "\u0002\u0087\u0089\u0007\u001b\u0002\u0002\u0088\u0086\u0003\u0002\u0002",
    "\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u000f\u0003\u0002\u0002",
    "\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008e\u0007+\u0002",
    "\u0002\u008e\u008f\u0007\u001b\u0002\u0002\u008f\u0090\b\t\u0001\u0002",
    "\u0090\u0011\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u0018\u0002\u0002",
    "\u0092\u0098\b\n\u0001\u0002\u0093\u0094\u0007\u0019\u0002\u0002\u0094",
    "\u0098\b\n\u0001\u0002\u0095\u0096\u0007\u001a\u0002\u0002\u0096\u0098",
    "\b\n\u0001\u0002\u0097\u0091\u0003\u0002\u0002\u0002\u0097\u0093\u0003",
    "\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u0013\u0003",
    "\u0002\u0002\u0002\u0099\u009a\u0007!\u0002\u0002\u009a\u009f\u0005",
    "\u0016\f\u0002\u009b\u009c\u0007\u001e\u0002\u0002\u009c\u009e\u0005",
    "\u0016\f\u0002\u009d\u009b\u0003\u0002\u0002\u0002\u009e\u00a1\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003",
    "\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007\"\u0002\u0002\u00a3\u00a4\b\u000b",
    "\u0001\u0002\u00a4\u0015\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007\u001b",
    "\u0002\u0002\u00a6\u00a7\u0007\u001f\u0002\u0002\u00a7\u00a8\u0005\u0012",
    "\n\u0002\u00a8\u00a9\b\f\u0001\u0002\u00a9\u0017\u0003\u0002\u0002\u0002",
    "\u00aa\u00af\u0005\u0016\f\u0002\u00ab\u00ac\u0007\u001e\u0002\u0002",
    "\u00ac\u00ae\u0005\u0016\f\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002",
    "\u00ae\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002",
    "\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b2\u0003\u0002\u0002\u0002",
    "\u00b1\u00af\u0003\u0002\u0002\u0002\u00b2\u00b3\b\r\u0001\u0002\u00b3",
    "\u0019\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u0011\u0002\u0002\u00b5",
    "\u00b6\u0007\u001b\u0002\u0002\u00b6\u00b9\u0007\u001c\u0002\u0002\u00b7",
    "\u00ba\u0007*\u0002\u0002\u00b8\u00ba\u0005\u0010\t\u0002\u00b9\u00b7",
    "\u0003\u0002\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb",
    "\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007\u001d\u0002\u0002\u00bc\u00bd",
    "\b\u000e\u0001\u0002\u00bd\u001b\u0003\u0002\u0002\u0002\u00be\u00c0",
    "\u0005\u001e\u0010\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0007\u0014\u0002\u0002\u00c2\u00c5\u0005\u000e\b\u0002\u00c3\u00c4",
    "\u0007\u001f\u0002\u0002\u00c4\u00c6\u0007\u001b\u0002\u0002\u00c5\u00c3",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u00c7",
    "\u0003\u0002\u0002\u0002\u00c7\u00ca\u0005 \u0011\u0002\u00c8\u00cb",
    "\u0005&\u0014\u0002\u00c9\u00cb\u0005(\u0015\u0002\u00ca\u00c8\u0003",
    "\u0002\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003",
    "\u0002\u0002\u0002\u00cb\u00cd\u0003\u0002\u0002\u0002\u00cc\u00ce\u0005",
    "*\u0016\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002\u00cf\u00d0\b",
    "\u000f\u0001\u0002\u00d0\u001d\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007",
    "\u000f\u0002\u0002\u00d2\u00d3\u0007\u000e\u0002\u0002\u00d3\u00d4\b",
    "\u0010\u0001\u0002\u00d4\u001f\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007",
    "\r\u0002\u0002\u00d6\u00d9\u0007\u001c\u0002\u0002\u00d7\u00da\u0005",
    "\"\u0012\u0002\u00d8\u00da\u0005$\u0013\u0002\u00d9\u00d7\u0003\u0002",
    "\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002",
    "\u0002\u0002\u00db\u00dc\u0007\u001d\u0002\u0002\u00dc\u00dd\b\u0011",
    "\u0001\u0002\u00dd!\u0003\u0002\u0002\u0002\u00de\u00df\u0007\u001b",
    "\u0002\u0002\u00df\u00e0\b\u0012\u0001\u0002\u00e0#\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0007\u001b\u0002\u0002\u00e2\u00e3\u0007\u001e\u0002",
    "\u0002\u00e3\u00e6\u0007\u001b\u0002\u0002\u00e4\u00e5\u0007\u001e\u0002",
    "\u0002\u00e5\u00e7\u0007\u001b\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002",
    "\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002",
    "\u0002\u00e8\u00e9\b\u0013\u0001\u0002\u00e9%\u0003\u0002\u0002\u0002",
    "\u00ea\u00eb\u0007\t\u0002\u0002\u00eb\u00ec\u0007\u0016\u0002\u0002",
    "\u00ec\u00ed\u0007\u001b\u0002\u0002\u00ed\u00ee\u0007\u001e\u0002\u0002",
    "\u00ee\u00ef\u0007\u001b\u0002\u0002\u00ef\u00f0\b\u0014\u0001\u0002",
    "\u00f0\'\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007\b\u0002\u0002\u00f2",
    "\u00f3\u0007\u001b\u0002\u0002\u00f3\u00f4\u0007\u0016\u0002\u0002\u00f4",
    "\u00f5\u0007\u001b\u0002\u0002\u00f5\u00f6\u0007\u001e\u0002\u0002\u00f6",
    "\u00f7\u0007\u001b\u0002\u0002\u00f7\u00f8\b\u0015\u0001\u0002\u00f8",
    ")\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007\u0006\u0002\u0002\u00fa",
    "\u00fb\u0007\u001c\u0002\u0002\u00fb\u0100\u0005,\u0017\u0002\u00fc",
    "\u00fd\u0007\u001e\u0002\u0002\u00fd\u00ff\u0005,\u0017\u0002\u00fe",
    "\u00fc\u0003\u0002\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100",
    "\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101",
    "\u0103\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103",
    "\u0104\u0007\u001d\u0002\u0002\u0104\u0105\b\u0016\u0001\u0002\u0105",
    "+\u0003\u0002\u0002\u0002\u0106\u0107\u0007\u001b\u0002\u0002\u0107",
    "\u010a\u0007\u001f\u0002\u0002\u0108\u010b\u0007\u001b\u0002\u0002\u0109",
    "\u010b\u0005\u0012\n\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a",
    "\u0109\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c",
    "\u010d\b\u0017\u0001\u0002\u010d-\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0007\u0015\u0002\u0002\u010f\u0110\u00050\u0019\u0002\u0110\u0111",
    "\b\u0018\u0001\u0002\u0111\u0117\u0003\u0002\u0002\u0002\u0112\u0113",
    "\u0007\u0015\u0002\u0002\u0113\u0114\u00052\u001a\u0002\u0114\u0115",
    "\b\u0018\u0001\u0002\u0115\u0117\u0003\u0002\u0002\u0002\u0116\u010e",
    "\u0003\u0002\u0002\u0002\u0116\u0112\u0003\u0002\u0002\u0002\u0117/",
    "\u0003\u0002\u0002\u0002\u0118\u0119\u00054\u001b\u0002\u0119\u011a",
    "\b\u0019\u0001\u0002\u011a1\u0003\u0002\u0002\u0002\u011b\u011c\u0005",
    "4\u001b\u0002\u011c\u011d\u0007\u0004\u0002\u0002\u011d\u011e\u0005",
    "4\u001b\u0002\u011e\u011f\b\u001a\u0001\u0002\u011f\u0128\u0003\u0002",
    "\u0002\u0002\u0120\u0121\u00054\u001b\u0002\u0121\u0122\u0007\u0004",
    "\u0002\u0002\u0122\u0123\u00054\u001b\u0002\u0123\u0124\u0007\u0004",
    "\u0002\u0002\u0124\u0125\u00054\u001b\u0002\u0125\u0126\b\u001a\u0001",
    "\u0002\u0126\u0128\u0003\u0002\u0002\u0002\u0127\u011b\u0003\u0002\u0002",
    "\u0002\u0127\u0120\u0003\u0002\u0002\u0002\u01283\u0003\u0002\u0002",
    "\u0002\u0129\u012a\u0005\u0010\t\u0002\u012a\u012b\b\u001b\u0001\u0002",
    "\u012b\u0136\u0003\u0002\u0002\u0002\u012c\u012d\u0007\u001b\u0002\u0002",
    "\u012d\u012e\t\u0002\u0002\u0002\u012e\u012f\u0005\u0010\t\u0002\u012f",
    "\u0130\b\u001b\u0001\u0002\u0130\u0136\u0003\u0002\u0002\u0002\u0131",
    "\u0132\u0007\u001b\u0002\u0002\u0132\u0133\t\u0002\u0002\u0002\u0133",
    "\u0134\u0007\u0018\u0002\u0002\u0134\u0136\b\u001b\u0001\u0002\u0135",
    "\u0129\u0003\u0002\u0002\u0002\u0135\u012c\u0003\u0002\u0002\u0002\u0135",
    "\u0131\u0003\u0002\u0002\u0002\u01365\u0003\u0002\u0002\u0002\u0137",
    "\u0138\u0007\u0010\u0002\u0002\u0138\u0139\u0007*\u0002\u0002\u0139",
    "\u013a\b\u001c\u0001\u0002\u013a7\u0003\u0002\u0002\u0002\u013b\u013c",
    "\u0007\u0012\u0002\u0002\u013c\u013d\u0007\n\u0002\u0002\u013d\u013e",
    "\u0005\u000e\b\u0002\u013e\u013f\u0005.\u0018\u0002\u013f\u0140\b\u001d",
    "\u0001\u0002\u01409\u0003\u0002\u0002\u0002\u0141\u0142\u0007\u0007",
    "\u0002\u0002\u0142\u0143\u0007\n\u0002\u0002\u0143\u0144\u0005\u000e",
    "\b\u0002\u0144\u0145\u0005.\u0018\u0002\u0145\u0146\b\u001e\u0001\u0002",
    "\u0146;\u0003\u0002\u0002\u0002\u0147\u0148\u0007\u0013\u0002\u0002",
    "\u0148\u0149\u0007\u000b\u0002\u0002\u0149\u014a\u0005\u000e\b\u0002",
    "\u014a\u014b\u0007\u001c\u0002\u0002\u014b\u014c\u0005> \u0002\u014c",
    "\u014e\u0007\u001d\u0002\u0002\u014d\u014f\u00056\u001c\u0002\u014e",
    "\u014d\u0003\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f",
    "\u0150\u0003\u0002\u0002\u0002\u0150\u0151\b\u001f\u0001\u0002\u0151",
    "=\u0003\u0002\u0002\u0002\u0152\u0153\u0005\u0010\t\u0002\u0153\u0154",
    "\b \u0001\u0002\u0154\u015c\u0003\u0002\u0002\u0002\u0155\u0156\u0005",
    "\u0014\u000b\u0002\u0156\u0157\b \u0001\u0002\u0157\u015c\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0005\u0018\r\u0002\u0159\u015a\b \u0001\u0002",
    "\u015a\u015c\u0003\u0002\u0002\u0002\u015b\u0152\u0003\u0002\u0002\u0002",
    "\u015b\u0155\u0003\u0002\u0002\u0002\u015b\u0158\u0003\u0002\u0002\u0002",
    "\u015c?\u0003\u0002\u0002\u0002\u001bHSW\\mu\u0080\u008a\u0097\u009f",
    "\u00af\u00b9\u00bf\u00c5\u00ca\u00cd\u00d9\u00e6\u0100\u010a\u0116\u0127",
    "\u0135\u014e\u015b"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class VQLParser extends antlr4.Parser {

    static grammarFileName = "VQL.g4";
    static literalNames = [ null, null, "'AND'", "'CRYPTO'", "'DEFAULT'", 
                            "'DELETE'", "'ENCRYPT'", "'ENCRYPTED'", "'FROM'", 
                            "'INTO'", "'IV'", "'KEY'", "'ONLY'", "'READ'", 
                            "'RETURNING'", "'SCHEMA'", "'SELECT'", "'SET'", 
                            "'TABLE'", "'WHERE'", "'WITH'", null, null, 
                            null, null, null, "'('", "')'", "','", "':'", 
                            "';'", "'{'", "'}'", "'['", "']'", "'<'", "'>'", 
                            "'='", "'=='", "'.'", "'*'", "'&'", "'|'", "'?'" ];
    static symbolicNames = [ null, "Whitespace", "And", "Crypto", "Default", 
                             "Delete", "Encrypt", "Encrypted", "From", "Into", 
                             "Iv", "Key", "Only", "Read", "Returning", "Schema", 
                             "Select", "Set", "Table", "Where", "With", 
                             "SingleLineComment", "LiteralText", "LiteralNum", 
                             "LiteralBool", "Name", "OpenParen", "CloseParen", 
                             "Comma", "Colon", "Semicolon", "OpenBrace", 
                             "CloseBrace", "OpenBracket", "CloseBracket", 
                             "OpenChevron", "CloseChevron", "Equal", "DoubleEqual", 
                             "Dot", "Asterisk", "Ampersand", "VerticalBar", 
                             "QuestionMark" ];
    static ruleNames = [ "start", "query", "model", "modelStatement", "cryptoKeyStmt", 
                         "cryptoIvStmt", "qualifiedName", "paramBind", "literalValue", 
                         "literalMap", "mapField", "inlineMap", "schemaStatement", 
                         "tableStatement", "tableType", "keyClause", "simpleKey", 
                         "compositeKey", "encryptedWithClause", "encryptWithClause", 
                         "defaultClause", "defaultValue", "whereClause", 
                         "simpleKeyValue", "compositeKeyValue", "equalityOp", 
                         "returningClause", "selectStatement", "deleteStatement", 
                         "setStatement", "itemValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VQLParser.ruleNames;
        this.literalNames = VQLParser.literalNames;
        this.symbolicNames = VQLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VQLParser.RULE_start);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Delete:
	        case VQLParser.Select:
	        case VQLParser.Set:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            localctx.q = this.query();
	            this.state = 63;
	            this.match(VQLParser.EOF);
	            return localctx.q;
	            break;
	        case VQLParser.Crypto:
	        case VQLParser.Read:
	        case VQLParser.Schema:
	        case VQLParser.Table:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            localctx.m = this.model();
	            this.state = 67;
	            this.match(VQLParser.EOF);
	            return localctx.m; 
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



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VQLParser.RULE_query);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Select:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            localctx.select = this.selectStatement();
	             return localctx.select; 
	            break;
	        case VQLParser.Delete:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            localctx.del = this.deleteStatement();
	             return localctx.del; 
	            break;
	        case VQLParser.Set:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
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
	    this.enterRule(localctx, 4, VQLParser.RULE_model);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        localctx._modelStatement = this.modelStatement();
	        localctx.statements.push(localctx._modelStatement);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << VQLParser.Crypto) | (1 << VQLParser.Read) | (1 << VQLParser.Schema) | (1 << VQLParser.Table) | (1 << VQLParser.Semicolon))) !== 0)) {
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===VQLParser.Semicolon) {
	                this.state = 84;
	                this.match(VQLParser.Semicolon);
	            }

	            this.state = 87;
	            localctx._modelStatement = this.modelStatement();
	            localctx.statements.push(localctx._modelStatement);
	            this.state = 92;
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
	    this.enterRule(localctx, 6, VQLParser.RULE_modelStatement);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            localctx.cryptoKey = this.cryptoKeyStmt();
	             return localctx.cryptoKey; 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            localctx.cryptoIv = this.cryptoIvStmt();
	             return localctx.cryptoIv; 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            localctx.schema = this.schemaStatement();
	             return localctx.schema; 
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
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
	    this.enterRule(localctx, 8, VQLParser.RULE_cryptoKeyStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(VQLParser.Crypto);
	        this.state = 110;
	        this.match(VQLParser.Key);
	        this.state = 111;
	        localctx.name = this.match(VQLParser.Name);
	        this.state = 112;
	        this.match(VQLParser.OpenParen);
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Ampersand:
	            this.state = 113;
	            localctx.key = this.paramBind();
	            break;
	        case VQLParser.Name:
	            this.state = 114;
	            localctx.opts = this.inlineMap();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 117;
	        this.match(VQLParser.CloseParen);

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
	    this.enterRule(localctx, 10, VQLParser.RULE_cryptoIvStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(VQLParser.Crypto);
	        this.state = 121;
	        this.match(VQLParser.Iv);
	        this.state = 122;
	        localctx.name = this.match(VQLParser.Name);
	        this.state = 123;
	        this.match(VQLParser.OpenParen);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Ampersand:
	            this.state = 124;
	            localctx.iv = this.paramBind();
	            break;
	        case VQLParser.LiteralText:
	            this.state = 125;
	            localctx.literalIv = this.match(VQLParser.LiteralText);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 128;
	        this.match(VQLParser.CloseParen);

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
	    this.enterRule(localctx, 12, VQLParser.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(VQLParser.Name);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VQLParser.Dot) {
	            this.state = 132;
	            this.match(VQLParser.Dot);
	            this.state = 133;
	            this.match(VQLParser.Name);
	            this.state = 138;
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
	    this.enterRule(localctx, 14, VQLParser.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(VQLParser.Ampersand);
	        this.state = 140;
	        localctx.name = this.match(VQLParser.Name);

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
	    this.enterRule(localctx, 16, VQLParser.RULE_literalValue);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            localctx.txt = this.match(VQLParser.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case VQLParser.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            localctx.num = this.match(VQLParser.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case VQLParser.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            localctx.bool = this.match(VQLParser.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
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
	    this.enterRule(localctx, 18, VQLParser.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(VQLParser.OpenBrace);
	        this.state = 152;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VQLParser.Comma) {
	            this.state = 153;
	            this.match(VQLParser.Comma);
	            this.state = 154;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(VQLParser.CloseBrace);

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
	    this.enterRule(localctx, 20, VQLParser.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        localctx.name = this.match(VQLParser.Name);
	        this.state = 164;
	        this.match(VQLParser.Colon);
	        this.state = 165;
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
	    this.enterRule(localctx, 22, VQLParser.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VQLParser.Comma) {
	            this.state = 169;
	            this.match(VQLParser.Comma);
	            this.state = 170;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 175;
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



	schemaStatement() {
	    let localctx = new SchemaStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, VQLParser.RULE_schemaStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(VQLParser.Schema);
	        this.state = 179;
	        localctx.schemaName = this.match(VQLParser.Name);
	        this.state = 180;
	        this.match(VQLParser.OpenParen);
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Asterisk:
	            this.state = 181;
	            this.match(VQLParser.Asterisk);
	            break;
	        case VQLParser.Ampersand:
	            this.state = 182;
	            localctx.validator = this.paramBind();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 185;
	        this.match(VQLParser.CloseParen);

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



	tableStatement() {
	    let localctx = new TableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, VQLParser.RULE_tableStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VQLParser.Read) {
	            this.state = 188;
	            localctx.kind = this.tableType();
	        }

	        this.state = 191;
	        this.match(VQLParser.Table);
	        this.state = 192;
	        localctx.tableName = this.qualifiedName();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VQLParser.Colon) {
	            this.state = 193;
	            this.match(VQLParser.Colon);
	            this.state = 194;
	            localctx.schemaName = this.match(VQLParser.Name);
	        }

	        this.state = 197;
	        localctx.key = this.keyClause();
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case VQLParser.Encrypted:
	        	this.state = 198;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case VQLParser.Encrypt:
	        	this.state = 199;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case VQLParser.EOF:
	        case VQLParser.Crypto:
	        case VQLParser.Default:
	        case VQLParser.Read:
	        case VQLParser.Schema:
	        case VQLParser.Table:
	        case VQLParser.Semicolon:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VQLParser.Default) {
	            this.state = 202;
	            localctx.defaults = this.defaultClause();
	        }


	        		const tableName = localctx.tableName.getText();

	        		if (tableName.startsWith("sys.")) {
	        			throw new SyntaxError("System tables can't defined by the user: " + tableName + ".");
	        		}

	        		return new TableStmt(
	        			tableName,
	        			localctx.schemaName && (localctx.schemaName===null ? null : localctx.schemaName.text),
	        			localctx.kind || "READ WRITE",
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



	tableType() {
	    let localctx = new TableTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, VQLParser.RULE_tableType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(VQLParser.Read);
	        this.state = 208;
	        this.match(VQLParser.Only);
	         return "READ ONLY"; 
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



	keyClause() {
	    let localctx = new KeyClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, VQLParser.RULE_keyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(VQLParser.Key);
	        this.state = 212;
	        this.match(VQLParser.OpenParen);
	        this.state = 215;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 213;
	            localctx.simple = this.simpleKey();
	            break;

	        case 2:
	            this.state = 214;
	            localctx.composite = localctx._compositeKey = this.compositeKey();
	            break;

	        }
	        this.state = 217;
	        this.match(VQLParser.CloseParen);

	        		return localctx.simple || localctx._compositeKey;
	        	
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



	simpleKey() {
	    let localctx = new SimpleKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, VQLParser.RULE_simpleKey);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        localctx.fieldName = this.match(VQLParser.Name);

	        		return [(localctx.fieldName===null ? null : localctx.fieldName.text)];
	        	
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



	compositeKey() {
	    let localctx = new CompositeKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, VQLParser.RULE_compositeKey);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        localctx._Name = this.match(VQLParser.Name);
	        localctx.fieldNames.push(localctx._Name);
	        this.state = 224;
	        this.match(VQLParser.Comma);
	        this.state = 225;
	        localctx._Name = this.match(VQLParser.Name);
	        localctx.fieldNames.push(localctx._Name);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VQLParser.Comma) {
	            this.state = 226;
	            this.match(VQLParser.Comma);
	            this.state = 227;
	            localctx._Name = this.match(VQLParser.Name);
	            localctx.fieldNames.push(localctx._Name);
	        }


	        		return localctx.fieldNames.map((field) => field.text)
	        	
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
	    this.enterRule(localctx, 36, VQLParser.RULE_encryptedWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(VQLParser.Encrypted);
	        this.state = 233;
	        this.match(VQLParser.With);
	        this.state = 234;
	        localctx.cryptoKey = this.match(VQLParser.Name);
	        this.state = 235;
	        this.match(VQLParser.Comma);
	        this.state = 236;
	        localctx.cryptoIv = this.match(VQLParser.Name);

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
	    this.enterRule(localctx, 38, VQLParser.RULE_encryptWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(VQLParser.Encrypt);
	        this.state = 240;
	        localctx.fieldName = this.match(VQLParser.Name);
	        this.state = 241;
	        this.match(VQLParser.With);
	        this.state = 242;
	        localctx.cryptoKey = this.match(VQLParser.Name);
	        this.state = 243;
	        this.match(VQLParser.Comma);
	        this.state = 244;
	        localctx.cryptoIv = this.match(VQLParser.Name);

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
	    this.enterRule(localctx, 40, VQLParser.RULE_defaultClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(VQLParser.Default);
	        this.state = 248;
	        this.match(VQLParser.OpenParen);
	        this.state = 249;
	        localctx._defaultValue = this.defaultValue();
	        localctx.values.push(localctx._defaultValue);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VQLParser.Comma) {
	            this.state = 250;
	            this.match(VQLParser.Comma);
	            this.state = 251;
	            localctx._defaultValue = this.defaultValue();
	            localctx.values.push(localctx._defaultValue);
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 257;
	        this.match(VQLParser.CloseParen);

	        		const values = {};

	        		for (const field of localctx.values) {
	        			values[field.name] = field.value;
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
	    this.enterRule(localctx, 42, VQLParser.RULE_defaultValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        localctx.name = this.match(VQLParser.Name);
	        this.state = 261;
	        this.match(VQLParser.Colon);
	        this.state = 264;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Name:
	            this.state = 262;
	            localctx.prop = this.match(VQLParser.Name);
	            break;
	        case VQLParser.LiteralText:
	        case VQLParser.LiteralNum:
	        case VQLParser.LiteralBool:
	            this.state = 263;
	            localctx.lValue = this.literalValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }

	        		return {
	        			name: (localctx.name===null ? null : localctx.name.text),
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



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, VQLParser.RULE_whereClause);
	    try {
	        this.state = 276;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.match(VQLParser.Where);
	            this.state = 269;
	            localctx.value = this.simpleKeyValue();

	                return new KeyValue([localctx.value]);
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.match(VQLParser.Where);
	            this.state = 273;
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
	    this.enterRule(localctx, 46, VQLParser.RULE_simpleKeyValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
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
	    this.enterRule(localctx, 48, VQLParser.RULE_compositeKeyValue);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            localctx.partition = this.equalityOp();
	            this.state = 282;
	            this.match(VQLParser.And);
	            this.state = 283;
	            localctx.id = this.equalityOp();

	                return [localctx.partition, localctx.id];
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            localctx.partition = this.equalityOp();
	            this.state = 287;
	            this.match(VQLParser.And);
	            this.state = 288;
	            localctx.discriminator = this.equalityOp();
	            this.state = 289;
	            this.match(VQLParser.And);
	            this.state = 290;
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
	    this.enterRule(localctx, 50, VQLParser.RULE_equalityOp);
	    var _la = 0; // Token type
	    try {
	        this.state = 307;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  localctx.param.name,
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 298;
	            localctx.name = this.match(VQLParser.Name);
	            this.state = 299;
	            _la = this._input.LA(1);
	            if(!(_la===VQLParser.Equal || _la===VQLParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 300;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 303;
	            localctx.name = this.match(VQLParser.Name);
	            this.state = 304;
	            _la = this._input.LA(1);
	            if(!(_la===VQLParser.Equal || _la===VQLParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 305;
	            localctx.value = this.match(VQLParser.LiteralText);

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
	    this.enterRule(localctx, 52, VQLParser.RULE_returningClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(VQLParser.Returning);
	        this.state = 310;
	        this.match(VQLParser.Asterisk);
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
	    this.enterRule(localctx, 54, VQLParser.RULE_selectStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(VQLParser.Select);
	        this.state = 314;
	        this.match(VQLParser.From);
	        this.state = 315;
	        localctx.tableName = this.qualifiedName();
	        this.state = 316;
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
	    this.enterRule(localctx, 56, VQLParser.RULE_deleteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(VQLParser.Delete);
	        this.state = 320;
	        this.match(VQLParser.From);
	        this.state = 321;
	        localctx.tableName = this.qualifiedName();
	        this.state = 322;
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
	    this.enterRule(localctx, 58, VQLParser.RULE_setStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.match(VQLParser.Set);
	        this.state = 326;
	        this.match(VQLParser.Into);
	        this.state = 327;
	        localctx.tableName = this.qualifiedName();
	        this.state = 328;
	        this.match(VQLParser.OpenParen);
	        this.state = 329;
	        localctx.value = this.itemValue();
	        this.state = 330;
	        this.match(VQLParser.CloseParen);
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VQLParser.Returning) {
	            this.state = 331;
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
	    this.enterRule(localctx, 60, VQLParser.RULE_itemValue);
	    try {
	        this.state = 345;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VQLParser.Ampersand:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 336;
	            localctx.bind = this.paramBind();
	             return localctx.bind; 
	            break;
	        case VQLParser.OpenBrace:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            localctx.litMap = this.literalMap();
	             return localctx.litMap; 
	            break;
	        case VQLParser.Name:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 342;
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


}

VQLParser.EOF = antlr4.Token.EOF;
VQLParser.Whitespace = 1;
VQLParser.And = 2;
VQLParser.Crypto = 3;
VQLParser.Default = 4;
VQLParser.Delete = 5;
VQLParser.Encrypt = 6;
VQLParser.Encrypted = 7;
VQLParser.From = 8;
VQLParser.Into = 9;
VQLParser.Iv = 10;
VQLParser.Key = 11;
VQLParser.Only = 12;
VQLParser.Read = 13;
VQLParser.Returning = 14;
VQLParser.Schema = 15;
VQLParser.Select = 16;
VQLParser.Set = 17;
VQLParser.Table = 18;
VQLParser.Where = 19;
VQLParser.With = 20;
VQLParser.SingleLineComment = 21;
VQLParser.LiteralText = 22;
VQLParser.LiteralNum = 23;
VQLParser.LiteralBool = 24;
VQLParser.Name = 25;
VQLParser.OpenParen = 26;
VQLParser.CloseParen = 27;
VQLParser.Comma = 28;
VQLParser.Colon = 29;
VQLParser.Semicolon = 30;
VQLParser.OpenBrace = 31;
VQLParser.CloseBrace = 32;
VQLParser.OpenBracket = 33;
VQLParser.CloseBracket = 34;
VQLParser.OpenChevron = 35;
VQLParser.CloseChevron = 36;
VQLParser.Equal = 37;
VQLParser.DoubleEqual = 38;
VQLParser.Dot = 39;
VQLParser.Asterisk = 40;
VQLParser.Ampersand = 41;
VQLParser.VerticalBar = 42;
VQLParser.QuestionMark = 43;

VQLParser.RULE_start = 0;
VQLParser.RULE_query = 1;
VQLParser.RULE_model = 2;
VQLParser.RULE_modelStatement = 3;
VQLParser.RULE_cryptoKeyStmt = 4;
VQLParser.RULE_cryptoIvStmt = 5;
VQLParser.RULE_qualifiedName = 6;
VQLParser.RULE_paramBind = 7;
VQLParser.RULE_literalValue = 8;
VQLParser.RULE_literalMap = 9;
VQLParser.RULE_mapField = 10;
VQLParser.RULE_inlineMap = 11;
VQLParser.RULE_schemaStatement = 12;
VQLParser.RULE_tableStatement = 13;
VQLParser.RULE_tableType = 14;
VQLParser.RULE_keyClause = 15;
VQLParser.RULE_simpleKey = 16;
VQLParser.RULE_compositeKey = 17;
VQLParser.RULE_encryptedWithClause = 18;
VQLParser.RULE_encryptWithClause = 19;
VQLParser.RULE_defaultClause = 20;
VQLParser.RULE_defaultValue = 21;
VQLParser.RULE_whereClause = 22;
VQLParser.RULE_simpleKeyValue = 23;
VQLParser.RULE_compositeKeyValue = 24;
VQLParser.RULE_equalityOp = 25;
VQLParser.RULE_returningClause = 26;
VQLParser.RULE_selectStatement = 27;
VQLParser.RULE_deleteStatement = 28;
VQLParser.RULE_setStatement = 29;
VQLParser.RULE_itemValue = 30;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VQLParser.RULE_start;
        this.q = null; // QueryContext
        this.m = null; // ModelContext
    }

	EOF() {
	    return this.getToken(VQLParser.EOF, 0);
	};

	query() {
	    return this.getTypedRuleContext(QueryContext,0);
	};

	model() {
	    return this.getTypedRuleContext(ModelContext,0);
	};


}



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
        this.ruleIndex = VQLParser.RULE_query;
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
        this.ruleIndex = VQLParser.RULE_model;
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
	        return this.getTokens(VQLParser.Semicolon);
	    } else {
	        return this.getToken(VQLParser.Semicolon, i);
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
        this.ruleIndex = VQLParser.RULE_modelStatement;
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
        this.ruleIndex = VQLParser.RULE_cryptoKeyStmt;
        this.name = null; // Token
        this.key = null; // ParamBindContext
        this.opts = null; // InlineMapContext
    }

	Crypto() {
	    return this.getToken(VQLParser.Crypto, 0);
	};

	Key() {
	    return this.getToken(VQLParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
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
        this.ruleIndex = VQLParser.RULE_cryptoIvStmt;
        this.name = null; // Token
        this.iv = null; // ParamBindContext
        this.literalIv = null; // Token
    }

	Crypto() {
	    return this.getToken(VQLParser.Crypto, 0);
	};

	Iv() {
	    return this.getToken(VQLParser.Iv, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	LiteralText() {
	    return this.getToken(VQLParser.LiteralText, 0);
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
        this.ruleIndex = VQLParser.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Name);
	    } else {
	        return this.getToken(VQLParser.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Dot);
	    } else {
	        return this.getToken(VQLParser.Dot, i);
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
        this.ruleIndex = VQLParser.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(VQLParser.Ampersand, 0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
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
        this.ruleIndex = VQLParser.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
    }

	LiteralText() {
	    return this.getToken(VQLParser.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(VQLParser.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(VQLParser.LiteralBool, 0);
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
        this.ruleIndex = VQLParser.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(VQLParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(VQLParser.CloseBrace, 0);
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
	        return this.getTokens(VQLParser.Comma);
	    } else {
	        return this.getToken(VQLParser.Comma, i);
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
        this.ruleIndex = VQLParser.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(VQLParser.Colon, 0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
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
        this.ruleIndex = VQLParser.RULE_inlineMap;
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
	        return this.getTokens(VQLParser.Comma);
	    } else {
	        return this.getToken(VQLParser.Comma, i);
	    }
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
        this.ruleIndex = VQLParser.RULE_schemaStatement;
        this.schemaName = null; // Token
        this.validator = null; // ParamBindContext
    }

	Schema() {
	    return this.getToken(VQLParser.Schema, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
	};

	Asterisk() {
	    return this.getToken(VQLParser.Asterisk, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
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
        this.ruleIndex = VQLParser.RULE_tableStatement;
        this.kind = null; // TableTypeContext
        this.tableName = null; // QualifiedNameContext
        this.schemaName = null; // Token
        this.key = null; // KeyClauseContext
        this.encryptedWith = null; // EncryptedWithClauseContext
        this.encryptWith = null; // EncryptWithClauseContext
        this.defaults = null; // DefaultClauseContext
    }

	Table() {
	    return this.getToken(VQLParser.Table, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	keyClause() {
	    return this.getTypedRuleContext(KeyClauseContext,0);
	};

	Colon() {
	    return this.getToken(VQLParser.Colon, 0);
	};

	tableType() {
	    return this.getTypedRuleContext(TableTypeContext,0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
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



class TableTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VQLParser.RULE_tableType;
    }

	Read() {
	    return this.getToken(VQLParser.Read, 0);
	};

	Only() {
	    return this.getToken(VQLParser.Only, 0);
	};


}



class KeyClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VQLParser.RULE_keyClause;
        this.simple = null; // SimpleKeyContext
        this.composite = null; // CompositeKeyContext
        this._compositeKey = null; // CompositeKeyContext
    }

	Key() {
	    return this.getToken(VQLParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
	};

	simpleKey() {
	    return this.getTypedRuleContext(SimpleKeyContext,0);
	};

	compositeKey() {
	    return this.getTypedRuleContext(CompositeKeyContext,0);
	};


}



class SimpleKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VQLParser.RULE_simpleKey;
        this.fieldName = null; // Token
    }

	Name() {
	    return this.getToken(VQLParser.Name, 0);
	};


}



class CompositeKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VQLParser.RULE_compositeKey;
        this._Name = null; // Token
        this.fieldNames = []; // of Tokens
    }

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Comma);
	    } else {
	        return this.getToken(VQLParser.Comma, i);
	    }
	};


	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Name);
	    } else {
	        return this.getToken(VQLParser.Name, i);
	    }
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
        this.ruleIndex = VQLParser.RULE_encryptedWithClause;
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypted() {
	    return this.getToken(VQLParser.Encrypted, 0);
	};

	With() {
	    return this.getToken(VQLParser.With, 0);
	};

	Comma() {
	    return this.getToken(VQLParser.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Name);
	    } else {
	        return this.getToken(VQLParser.Name, i);
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
        this.ruleIndex = VQLParser.RULE_encryptWithClause;
        this.fieldName = null; // Token
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypt() {
	    return this.getToken(VQLParser.Encrypt, 0);
	};

	With() {
	    return this.getToken(VQLParser.With, 0);
	};

	Comma() {
	    return this.getToken(VQLParser.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Name);
	    } else {
	        return this.getToken(VQLParser.Name, i);
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
        this.ruleIndex = VQLParser.RULE_defaultClause;
        this._defaultValue = null; // DefaultValueContext
        this.values = []; // of DefaultValueContexts
    }

	Default() {
	    return this.getToken(VQLParser.Default, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
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
	        return this.getTokens(VQLParser.Comma);
	    } else {
	        return this.getToken(VQLParser.Comma, i);
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
        this.ruleIndex = VQLParser.RULE_defaultValue;
        this.name = null; // Token
        this.prop = null; // Token
        this.lValue = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(VQLParser.Colon, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.Name);
	    } else {
	        return this.getToken(VQLParser.Name, i);
	    }
	};


	literalValue() {
	    return this.getTypedRuleContext(LiteralValueContext,0);
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
        this.ruleIndex = VQLParser.RULE_whereClause;
        this.value = null; // SimpleKeyValueContext
        this.values = null; // CompositeKeyValueContext
    }

	Where() {
	    return this.getToken(VQLParser.Where, 0);
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
        this.ruleIndex = VQLParser.RULE_simpleKeyValue;
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
        this.ruleIndex = VQLParser.RULE_compositeKeyValue;
        this.partition = null; // EqualityOpContext
        this.id = null; // EqualityOpContext
        this.discriminator = null; // EqualityOpContext
    }

	And = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VQLParser.And);
	    } else {
	        return this.getToken(VQLParser.And, i);
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
        this.ruleIndex = VQLParser.RULE_equalityOp;
        this.param = null; // ParamBindContext
        this.name = null; // Token
        this.value = null; // Token
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	Name() {
	    return this.getToken(VQLParser.Name, 0);
	};

	Equal() {
	    return this.getToken(VQLParser.Equal, 0);
	};

	DoubleEqual() {
	    return this.getToken(VQLParser.DoubleEqual, 0);
	};

	LiteralText() {
	    return this.getToken(VQLParser.LiteralText, 0);
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
        this.ruleIndex = VQLParser.RULE_returningClause;
    }

	Returning() {
	    return this.getToken(VQLParser.Returning, 0);
	};

	Asterisk() {
	    return this.getToken(VQLParser.Asterisk, 0);
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
        this.ruleIndex = VQLParser.RULE_selectStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Select() {
	    return this.getToken(VQLParser.Select, 0);
	};

	From() {
	    return this.getToken(VQLParser.From, 0);
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
        this.ruleIndex = VQLParser.RULE_deleteStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Delete() {
	    return this.getToken(VQLParser.Delete, 0);
	};

	From() {
	    return this.getToken(VQLParser.From, 0);
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
        this.ruleIndex = VQLParser.RULE_setStatement;
        this.tableName = null; // QualifiedNameContext
        this.value = null; // ItemValueContext
        this.returning = null; // ReturningClauseContext
    }

	Set() {
	    return this.getToken(VQLParser.Set, 0);
	};

	Into() {
	    return this.getToken(VQLParser.Into, 0);
	};

	OpenParen() {
	    return this.getToken(VQLParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VQLParser.CloseParen, 0);
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
        this.ruleIndex = VQLParser.RULE_itemValue;
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




VQLParser.StartContext = StartContext; 
VQLParser.QueryContext = QueryContext; 
VQLParser.ModelContext = ModelContext; 
VQLParser.ModelStatementContext = ModelStatementContext; 
VQLParser.CryptoKeyStmtContext = CryptoKeyStmtContext; 
VQLParser.CryptoIvStmtContext = CryptoIvStmtContext; 
VQLParser.QualifiedNameContext = QualifiedNameContext; 
VQLParser.ParamBindContext = ParamBindContext; 
VQLParser.LiteralValueContext = LiteralValueContext; 
VQLParser.LiteralMapContext = LiteralMapContext; 
VQLParser.MapFieldContext = MapFieldContext; 
VQLParser.InlineMapContext = InlineMapContext; 
VQLParser.SchemaStatementContext = SchemaStatementContext; 
VQLParser.TableStatementContext = TableStatementContext; 
VQLParser.TableTypeContext = TableTypeContext; 
VQLParser.KeyClauseContext = KeyClauseContext; 
VQLParser.SimpleKeyContext = SimpleKeyContext; 
VQLParser.CompositeKeyContext = CompositeKeyContext; 
VQLParser.EncryptedWithClauseContext = EncryptedWithClauseContext; 
VQLParser.EncryptWithClauseContext = EncryptWithClauseContext; 
VQLParser.DefaultClauseContext = DefaultClauseContext; 
VQLParser.DefaultValueContext = DefaultValueContext; 
VQLParser.WhereClauseContext = WhereClauseContext; 
VQLParser.SimpleKeyValueContext = SimpleKeyValueContext; 
VQLParser.CompositeKeyValueContext = CompositeKeyValueContext; 
VQLParser.EqualityOpContext = EqualityOpContext; 
VQLParser.ReturningClauseContext = ReturningClauseContext; 
VQLParser.SelectStatementContext = SelectStatementContext; 
VQLParser.DeleteStatementContext = DeleteStatementContext; 
VQLParser.SetStatementContext = SetStatementContext; 
VQLParser.ItemValueContext = ItemValueContext; 
