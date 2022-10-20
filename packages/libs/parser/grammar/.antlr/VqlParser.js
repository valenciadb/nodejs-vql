// Generated from /home/me/SiaCodelabs/ValenciaQL/vql/packages/libs/parser/grammar/Vql.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';

	


  import {CryptoKeyStmt, CryptoIvStmt} from "../stmts/index.js";


  import parseBool from "../utils/parseBool.js";
  import parseNum from "../utils/parseNum.js";
  import {ParamBind} from "../stmts/index.js";


	import {SyntaxError} from "../errors/index.js";
	import {SchemaStmt, StreamStmt, TableStmt, TableLevelTde, FieldLevelTde} from "../stmts/model/index.js";
	import Datum from "../Datum.js";


  import {KeyValue, KeyFieldValue, SelectStmt, DeleteStmt, SetStmt} from "../stmts/index.js";


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00034\u0191\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0003\u0002\u0003\u0002\u0005\u0002K\n\u0002\u0003\u0002\u0007",
    "\u0002N\n\u0002\f\u0002\u000e\u0002Q\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003n\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004v\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u0081\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006\u0089",
    "\n\u0006\f\u0006\u000e\u0006\u008c\u000b\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u009a\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0007\t\u00a0\n\t\f\t\u000e\t\u00a3\u000b\t\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0007\u000b\u00b0\n\u000b\f\u000b\u000e\u000b\u00b3\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00bc\n\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005\r",
    "\u00c4\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0005\u0013\u00e0\n\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00e5\n\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00ea\n\u0013\u0003\u0013\u0005\u0013",
    "\u00ed\n\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0005\u0015\u00f8",
    "\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00fd\n\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u0101\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u0106\n\u0015\u0003\u0015\u0005\u0015",
    "\u0109\n\u0015\u0003\u0015\u0005\u0015\u010c\n\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005",
    "\u0016\u0115\n\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0007\u0019\u012e\n\u0019\f\u0019\u000e\u0019\u0131\u000b",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u013a\n\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0005\u001c\u014a\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u015b\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0005\u001f\u0169\n\u001f\u0003 \u0003 \u0003",
    " \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0005#\u0182\n#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003$\u0003$\u0003$\u0005$\u018f\n$\u0003$\u0002\u0002%\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*,.02468:<>@BDF\u0002\u0005\u0004\u0002\u0005\u0005\u0010\u0010",
    "\u0004\u0002&\'44\u0003\u0002\'(\u0002\u0197\u0002H\u0003\u0002\u0002",
    "\u0002\u0004m\u0003\u0002\u0002\u0002\u0006o\u0003\u0002\u0002\u0002",
    "\bz\u0003\u0002\u0002\u0002\n\u0085\u0003\u0002\u0002\u0002\f\u008d",
    "\u0003\u0002\u0002\u0002\u000e\u0099\u0003\u0002\u0002\u0002\u0010\u009b",
    "\u0003\u0002\u0002\u0002\u0012\u00a7\u0003\u0002\u0002\u0002\u0014\u00ac",
    "\u0003\u0002\u0002\u0002\u0016\u00b6\u0003\u0002\u0002\u0002\u0018\u00c0",
    "\u0003\u0002\u0002\u0002\u001a\u00c7\u0003\u0002\u0002\u0002\u001c\u00ca",
    "\u0003\u0002\u0002\u0002\u001e\u00cf\u0003\u0002\u0002\u0002 \u00d6",
    "\u0003\u0002\u0002\u0002\"\u00da\u0003\u0002\u0002\u0002$\u00df\u0003",
    "\u0002\u0002\u0002&\u00f0\u0003\u0002\u0002\u0002(\u00f7\u0003\u0002",
    "\u0002\u0002*\u010f\u0003\u0002\u0002\u0002,\u0119\u0003\u0002\u0002",
    "\u0002.\u0120\u0003\u0002\u0002\u00020\u0128\u0003\u0002\u0002\u0002",
    "2\u0135\u0003\u0002\u0002\u00024\u013d\u0003\u0002\u0002\u00026\u0149",
    "\u0003\u0002\u0002\u00028\u014b\u0003\u0002\u0002\u0002:\u015a\u0003",
    "\u0002\u0002\u0002<\u0168\u0003\u0002\u0002\u0002>\u016a\u0003\u0002",
    "\u0002\u0002@\u016e\u0003\u0002\u0002\u0002B\u0174\u0003\u0002\u0002",
    "\u0002D\u017a\u0003\u0002\u0002\u0002F\u018e\u0003\u0002\u0002\u0002",
    "HO\u0005\u0004\u0003\u0002IK\u0007$\u0002\u0002JI\u0003\u0002\u0002",
    "\u0002JK\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LN\u0005\u0004",
    "\u0003\u0002MJ\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002\u0002",
    "QO\u0003\u0002\u0002\u0002RS\u0007\u0002\u0002\u0003ST\b\u0002\u0001",
    "\u0002T\u0003\u0003\u0002\u0002\u0002UV\u0005@!\u0002VW\b\u0003\u0001",
    "\u0002Wn\u0003\u0002\u0002\u0002XY\u0005B\"\u0002YZ\b\u0003\u0001\u0002",
    "Zn\u0003\u0002\u0002\u0002[\\\u0005D#\u0002\\]\b\u0003\u0001\u0002]",
    "n\u0003\u0002\u0002\u0002^_\u0005\u0006\u0004\u0002_`\b\u0003\u0001",
    "\u0002`n\u0003\u0002\u0002\u0002ab\u0005\b\u0005\u0002bc\b\u0003\u0001",
    "\u0002cn\u0003\u0002\u0002\u0002de\u0005\u0016\f\u0002ef\b\u0003\u0001",
    "\u0002fn\u0003\u0002\u0002\u0002gh\u0005(\u0015\u0002hi\b\u0003\u0001",
    "\u0002in\u0003\u0002\u0002\u0002jk\u0005$\u0013\u0002kl\b\u0003\u0001",
    "\u0002ln\u0003\u0002\u0002\u0002mU\u0003\u0002\u0002\u0002mX\u0003\u0002",
    "\u0002\u0002m[\u0003\u0002\u0002\u0002m^\u0003\u0002\u0002\u0002ma\u0003",
    "\u0002\u0002\u0002md\u0003\u0002\u0002\u0002mg\u0003\u0002\u0002\u0002",
    "mj\u0003\u0002\u0002\u0002n\u0005\u0003\u0002\u0002\u0002op\u0007\u0006",
    "\u0002\u0002pq\u0007\u000e\u0002\u0002qr\u0007\u001f\u0002\u0002ru\u0007",
    "!\u0002\u0002sv\u0005\f\u0007\u0002tv\u0005\u0014\u000b\u0002us\u0003",
    "\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "wx\u0007\"\u0002\u0002xy\b\u0004\u0001\u0002y\u0007\u0003\u0002\u0002",
    "\u0002z{\u0007\u0006\u0002\u0002{|\u0007\r\u0002\u0002|}\u0007\u001f",
    "\u0002\u0002}\u0080\u0007!\u0002\u0002~\u0081\u0005\f\u0007\u0002\u007f",
    "\u0081\u0007\u001b\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080",
    "\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082",
    "\u0083\u0007\"\u0002\u0002\u0083\u0084\b\u0005\u0001\u0002\u0084\t\u0003",
    "\u0002\u0002\u0002\u0085\u008a\u0007\u001f\u0002\u0002\u0086\u0087\u0007",
    "/\u0002\u0002\u0087\u0089\u0007\u001f\u0002\u0002\u0088\u0086\u0003",
    "\u0002\u0002\u0002\u0089\u008c\u0003\u0002\u0002\u0002\u008a\u0088\u0003",
    "\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u000b\u0003",
    "\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008d\u008e\u0007",
    "1\u0002\u0002\u008e\u008f\u0007\u001f\u0002\u0002\u008f\u0090\b\u0007",
    "\u0001\u0002\u0090\r\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u001b",
    "\u0002\u0002\u0092\u009a\b\b\u0001\u0002\u0093\u0094\u0007\u001c\u0002",
    "\u0002\u0094\u009a\b\b\u0001\u0002\u0095\u0096\u0007\u001e\u0002\u0002",
    "\u0096\u009a\b\b\u0001\u0002\u0097\u0098\u0007\u001d\u0002\u0002\u0098",
    "\u009a\b\b\u0001\u0002\u0099\u0091\u0003\u0002\u0002\u0002\u0099\u0093",
    "\u0003\u0002\u0002\u0002\u0099\u0095\u0003\u0002\u0002\u0002\u0099\u0097",
    "\u0003\u0002\u0002\u0002\u009a\u000f\u0003\u0002\u0002\u0002\u009b\u009c",
    "\u0007)\u0002\u0002\u009c\u00a1\u0005\u0012\n\u0002\u009d\u009e\u0007",
    "#\u0002\u0002\u009e\u00a0\u0005\u0012\n\u0002\u009f\u009d\u0003\u0002",
    "\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003\u0002",
    "\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007*",
    "\u0002\u0002\u00a5\u00a6\b\t\u0001\u0002\u00a6\u0011\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\u0007\u001f\u0002\u0002\u00a8\u00a9\u0007%\u0002",
    "\u0002\u00a9\u00aa\u0005\u000e\b\u0002\u00aa\u00ab\b\n\u0001\u0002\u00ab",
    "\u0013\u0003\u0002\u0002\u0002\u00ac\u00b1\u0005\u0012\n\u0002\u00ad",
    "\u00ae\u0007#\u0002\u0002\u00ae\u00b0\u0005\u0012\n\u0002\u00af\u00ad",
    "\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af",
    "\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2\u00b4",
    "\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\b\u000b\u0001\u0002\u00b5\u0015\u0003\u0002\u0002\u0002\u00b6\u00b7",
    "\u0007\u0012\u0002\u0002\u00b7\u00b8\u0007\u001f\u0002\u0002\u00b8\u00bb",
    "\u0007!\u0002\u0002\u00b9\u00bc\u00070\u0002\u0002\u00ba\u00bc\u0005",
    "\f\u0007\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb\u00ba\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\u00be\u0007",
    "\"\u0002\u0002\u00be\u00bf\b\f\u0001\u0002\u00bf\u0017\u0003\u0002\u0002",
    "\u0002\u00c0\u00c3\u0007\u001f\u0002\u0002\u00c1\u00c2\u0007%\u0002",
    "\u0002\u00c2\u00c4\u0007\u001f\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002",
    "\u0002\u00c5\u00c6\b\r\u0001\u0002\u00c6\u0019\u0003\u0002\u0002\u0002",
    "\u00c7\u00c8\u0005\u0018\r\u0002\u00c8\u00c9\b\u000e\u0001\u0002\u00c9",
    "\u001b\u0003\u0002\u0002\u0002\u00ca\u00cb\u0005\u0018\r\u0002\u00cb",
    "\u00cc\u0007#\u0002\u0002\u00cc\u00cd\u0005\u0018\r\u0002\u00cd\u00ce",
    "\b\u000f\u0001\u0002\u00ce\u001d\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0005\u0018\r\u0002\u00d0\u00d1\u0007#\u0002\u0002\u00d1\u00d2\u0005",
    "\u0018\r\u0002\u00d2\u00d3\u0007#\u0002\u0002\u00d3\u00d4\u0005\u0018",
    "\r\u0002\u00d4\u00d5\b\u0010\u0001\u0002\u00d5\u001f\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\t\u0002\u0002\u0002\u00d7\u00d8\u0007\u000f\u0002",
    "\u0002\u00d8\u00d9\b\u0011\u0001\u0002\u00d9!\u0003\u0002\u0002\u0002",
    "\u00da\u00db\u0007 \u0002\u0002\u00db\u00dc\u0007\u001f\u0002\u0002",
    "\u00dc\u00dd\b\u0012\u0001\u0002\u00dd#\u0003\u0002\u0002\u0002\u00de",
    "\u00e0\u0005 \u0011\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00df",
    "\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1",
    "\u00e2\u0007\u0015\u0002\u0002\u00e2\u00e4\u0005\n\u0006\u0002\u00e3",
    "\u00e5\u0005\"\u0012\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6",
    "\u00e9\u0005&\u0014\u0002\u00e7\u00ea\u0005,\u0017\u0002\u00e8\u00ea",
    "\u0005.\u0018\u0002\u00e9\u00e7\u0003\u0002\u0002\u0002\u00e9\u00e8",
    "\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002\u00ea\u00ec",
    "\u0003\u0002\u0002\u0002\u00eb\u00ed\u00050\u0019\u0002\u00ec\u00eb",
    "\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u00ef\b\u0013\u0001\u0002\u00ef%\u0003",
    "\u0002\u0002\u0002\u00f0\u00f1\u0007\u000e\u0002\u0002\u00f1\u00f2\u0007",
    "!\u0002\u0002\u00f2\u00f3\u0005\u001c\u000f\u0002\u00f3\u00f4\u0007",
    "\"\u0002\u0002\u00f4\u00f5\b\u0014\u0001\u0002\u00f5\'\u0003\u0002\u0002",
    "\u0002\u00f6\u00f8\u0005 \u0011\u0002\u00f7\u00f6\u0003\u0002\u0002",
    "\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002",
    "\u0002\u00f9\u00fa\u0007\u0016\u0002\u0002\u00fa\u00fc\u0005\n\u0006",
    "\u0002\u00fb\u00fd\u0005\"\u0012\u0002\u00fc\u00fb\u0003\u0002\u0002",
    "\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002\u00fd\u0100\u0003\u0002\u0002",
    "\u0002\u00fe\u00ff\u0007%\u0002\u0002\u00ff\u0101\u0007\u001f\u0002",
    "\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002",
    "\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102\u0105\u0005*\u0016",
    "\u0002\u0103\u0106\u0005,\u0017\u0002\u0104\u0106\u0005.\u0018\u0002",
    "\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0104\u0003\u0002\u0002\u0002",
    "\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0108\u0003\u0002\u0002\u0002",
    "\u0107\u0109\u00050\u0019\u0002\u0108\u0107\u0003\u0002\u0002\u0002",
    "\u0108\u0109\u0003\u0002\u0002\u0002\u0109\u010b\u0003\u0002\u0002\u0002",
    "\u010a\u010c\u00054\u001b\u0002\u010b\u010a\u0003\u0002\u0002\u0002",
    "\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002",
    "\u010d\u010e\b\u0015\u0001\u0002\u010e)\u0003\u0002\u0002\u0002\u010f",
    "\u0110\u0007\u000e\u0002\u0002\u0110\u0114\u0007!\u0002\u0002\u0111",
    "\u0115\u0005\u001a\u000e\u0002\u0112\u0115\u0005\u001c\u000f\u0002\u0113",
    "\u0115\u0005\u001e\u0010\u0002\u0114\u0111\u0003\u0002\u0002\u0002\u0114",
    "\u0112\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u0115",
    "\u0116\u0003\u0002\u0002\u0002\u0116\u0117\u0007\"\u0002\u0002\u0117",
    "\u0118\b\u0016\u0001\u0002\u0118+\u0003\u0002\u0002\u0002\u0119\u011a",
    "\u0007\n\u0002\u0002\u011a\u011b\u0007\u0019\u0002\u0002\u011b\u011c",
    "\u0007\u001f\u0002\u0002\u011c\u011d\u0007#\u0002\u0002\u011d\u011e",
    "\u0007\u001f\u0002\u0002\u011e\u011f\b\u0017\u0001\u0002\u011f-\u0003",
    "\u0002\u0002\u0002\u0120\u0121\u0007\t\u0002\u0002\u0121\u0122\u0007",
    "\u001f\u0002\u0002\u0122\u0123\u0007\u0019\u0002\u0002\u0123\u0124\u0007",
    "\u001f\u0002\u0002\u0124\u0125\u0007#\u0002\u0002\u0125\u0126\u0007",
    "\u001f\u0002\u0002\u0126\u0127\b\u0018\u0001\u0002\u0127/\u0003\u0002",
    "\u0002\u0002\u0128\u0129\u0007\u0007\u0002\u0002\u0129\u012a\u0007!",
    "\u0002\u0002\u012a\u012f\u00052\u001a\u0002\u012b\u012c\u0007#\u0002",
    "\u0002\u012c\u012e\u00052\u001a\u0002\u012d\u012b\u0003\u0002\u0002",
    "\u0002\u012e\u0131\u0003\u0002\u0002\u0002\u012f\u012d\u0003\u0002\u0002",
    "\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0132\u0003\u0002\u0002",
    "\u0002\u0131\u012f\u0003\u0002\u0002\u0002\u0132\u0133\u0007\"\u0002",
    "\u0002\u0133\u0134\b\u0019\u0001\u0002\u01341\u0003\u0002\u0002\u0002",
    "\u0135\u0136\u0007\u001f\u0002\u0002\u0136\u0139\t\u0003\u0002\u0002",
    "\u0137\u013a\u0007\u001f\u0002\u0002\u0138\u013a\u0005\u000e\b\u0002",
    "\u0139\u0137\u0003\u0002\u0002\u0002\u0139\u0138\u0003\u0002\u0002\u0002",
    "\u013a\u013b\u0003\u0002\u0002\u0002\u013b\u013c\b\u001a\u0001\u0002",
    "\u013c3\u0003\u0002\u0002\u0002\u013d\u013e\u0007\u0017\u0002\u0002",
    "\u013e\u013f\u0007\u001d\u0002\u0002\u013f\u0140\b\u001b\u0001\u0002",
    "\u01405\u0003\u0002\u0002\u0002\u0141\u0142\u0007\u0018\u0002\u0002",
    "\u0142\u0143\u00058\u001d\u0002\u0143\u0144\b\u001c\u0001\u0002\u0144",
    "\u014a\u0003\u0002\u0002\u0002\u0145\u0146\u0007\u0018\u0002\u0002\u0146",
    "\u0147\u0005:\u001e\u0002\u0147\u0148\b\u001c\u0001\u0002\u0148\u014a",
    "\u0003\u0002\u0002\u0002\u0149\u0141\u0003\u0002\u0002\u0002\u0149\u0145",
    "\u0003\u0002\u0002\u0002\u014a7\u0003\u0002\u0002\u0002\u014b\u014c",
    "\u0005<\u001f\u0002\u014c\u014d\b\u001d\u0001\u0002\u014d9\u0003\u0002",
    "\u0002\u0002\u014e\u014f\u0005<\u001f\u0002\u014f\u0150\u0007\u0004",
    "\u0002\u0002\u0150\u0151\u0005<\u001f\u0002\u0151\u0152\b\u001e\u0001",
    "\u0002\u0152\u015b\u0003\u0002\u0002\u0002\u0153\u0154\u0005<\u001f",
    "\u0002\u0154\u0155\u0007\u0004\u0002\u0002\u0155\u0156\u0005<\u001f",
    "\u0002\u0156\u0157\u0007\u0004\u0002\u0002\u0157\u0158\u0005<\u001f",
    "\u0002\u0158\u0159\b\u001e\u0001\u0002\u0159\u015b\u0003\u0002\u0002",
    "\u0002\u015a\u014e\u0003\u0002\u0002\u0002\u015a\u0153\u0003\u0002\u0002",
    "\u0002\u015b;\u0003\u0002\u0002\u0002\u015c\u015d\u0005\f\u0007\u0002",
    "\u015d\u015e\b\u001f\u0001\u0002\u015e\u0169\u0003\u0002\u0002\u0002",
    "\u015f\u0160\u0007\u001f\u0002\u0002\u0160\u0161\t\u0004\u0002\u0002",
    "\u0161\u0162\u0005\f\u0007\u0002\u0162\u0163\b\u001f\u0001\u0002\u0163",
    "\u0169\u0003\u0002\u0002\u0002\u0164\u0165\u0007\u001f\u0002\u0002\u0165",
    "\u0166\t\u0004\u0002\u0002\u0166\u0167\u0007\u001b\u0002\u0002\u0167",
    "\u0169\b\u001f\u0001\u0002\u0168\u015c\u0003\u0002\u0002\u0002\u0168",
    "\u015f\u0003\u0002\u0002\u0002\u0168\u0164\u0003\u0002\u0002\u0002\u0169",
    "=\u0003\u0002\u0002\u0002\u016a\u016b\u0007\u0011\u0002\u0002\u016b",
    "\u016c\u00070\u0002\u0002\u016c\u016d\b \u0001\u0002\u016d?\u0003\u0002",
    "\u0002\u0002\u016e\u016f\u0007\u0013\u0002\u0002\u016f\u0170\u0007\u000b",
    "\u0002\u0002\u0170\u0171\u0005\n\u0006\u0002\u0171\u0172\u00056\u001c",
    "\u0002\u0172\u0173\b!\u0001\u0002\u0173A\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u0007\b\u0002\u0002\u0175\u0176\u0007\u000b\u0002\u0002\u0176",
    "\u0177\u0005\n\u0006\u0002\u0177\u0178\u00056\u001c\u0002\u0178\u0179",
    "\b\"\u0001\u0002\u0179C\u0003\u0002\u0002\u0002\u017a\u017b\u0007\u0014",
    "\u0002\u0002\u017b\u017c\u0007\f\u0002\u0002\u017c\u017d\u0005\n\u0006",
    "\u0002\u017d\u017e\u0007!\u0002\u0002\u017e\u017f\u0005F$\u0002\u017f",
    "\u0181\u0007\"\u0002\u0002\u0180\u0182\u0005> \u0002\u0181\u0180\u0003",
    "\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002\u0182\u0183\u0003",
    "\u0002\u0002\u0002\u0183\u0184\b#\u0001\u0002\u0184E\u0003\u0002\u0002",
    "\u0002\u0185\u0186\u0005\f\u0007\u0002\u0186\u0187\b$\u0001\u0002\u0187",
    "\u018f\u0003\u0002\u0002\u0002\u0188\u0189\u0005\u0010\t\u0002\u0189",
    "\u018a\b$\u0001\u0002\u018a\u018f\u0003\u0002\u0002\u0002\u018b\u018c",
    "\u0005\u0014\u000b\u0002\u018c\u018d\b$\u0001\u0002\u018d\u018f\u0003",
    "\u0002\u0002\u0002\u018e\u0185\u0003\u0002\u0002\u0002\u018e\u0188\u0003",
    "\u0002\u0002\u0002\u018e\u018b\u0003\u0002\u0002\u0002\u018fG\u0003",
    "\u0002\u0002\u0002\u001fJOmu\u0080\u008a\u0099\u00a1\u00b1\u00bb\u00c3",
    "\u00df\u00e4\u00e9\u00ec\u00f7\u00fc\u0100\u0105\u0108\u010b\u0114\u012f",
    "\u0139\u0149\u015a\u0168\u0181\u018e"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class VqlParser extends antlr4.Parser {

    static grammarFileName = "Vql.g4";
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
    static ruleNames = [ "start", "statement", "cryptoKeyStmt", "cryptoIvStmt", 
                         "qualifiedName", "paramBind", "literalValue", "literalMap", 
                         "mapField", "inlineMap", "schemaStatement", "keyFieldDef", 
                         "simpleKeyField", "twoKeyFields", "threeKeyFields", 
                         "accessMode", "connectorClause", "streamStatement", 
                         "streamKeyClause", "tableStatement", "tableKeyClause", 
                         "encryptedWithClause", "encryptWithClause", "defaultClause", 
                         "defaultValue", "ttlClause", "whereClause", "simpleKeyValue", 
                         "compositeKeyValue", "equalityOp", "returningClause", 
                         "selectStatement", "deleteStatement", "setStatement", 
                         "itemValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VqlParser.ruleNames;
        this.literalNames = VqlParser.literalNames;
        this.symbolicNames = VqlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VqlParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        localctx._statement = this.statement();
	        localctx.statements.push(localctx._statement);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (VqlParser.Append - 3)) | (1 << (VqlParser.Crypto - 3)) | (1 << (VqlParser.Delete - 3)) | (1 << (VqlParser.Read - 3)) | (1 << (VqlParser.Schema - 3)) | (1 << (VqlParser.Select - 3)) | (1 << (VqlParser.Set - 3)) | (1 << (VqlParser.Stream - 3)) | (1 << (VqlParser.Table - 3)) | (1 << (VqlParser.Semicolon - 3)))) !== 0)) {
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===VqlParser.Semicolon) {
	                this.state = 71;
	                this.match(VqlParser.Semicolon);
	            }

	            this.state = 74;
	            localctx._statement = this.statement();
	            localctx.statements.push(localctx._statement);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(VqlParser.EOF);

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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VqlParser.RULE_statement);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            localctx.select = this.selectStatement();
	             return localctx.select; 
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            localctx.del = this.deleteStatement();
	             return localctx.del; 
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            localctx.set = this.setStatement();
	             return localctx.set; 
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            localctx.cryptoKey = this.cryptoKeyStmt();
	             return localctx.cryptoKey; 
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 95;
	            localctx.cryptoIv = this.cryptoIvStmt();
	             return localctx.cryptoIv; 
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 98;
	            localctx.schema = this.schemaStatement();
	             return localctx.schema; 
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 101;
	            localctx.table = this.tableStatement();
	             return localctx.table; 
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 104;
	            localctx.stream = this.streamStatement();
	             return localctx.stream; 
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
	    this.enterRule(localctx, 4, VqlParser.RULE_cryptoKeyStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(VqlParser.Crypto);
	        this.state = 110;
	        this.match(VqlParser.Key);
	        this.state = 111;
	        localctx.name = this.match(VqlParser.Name);
	        this.state = 112;
	        this.match(VqlParser.OpenParen);
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.Ampersand:
	            this.state = 113;
	            localctx.key = this.paramBind();
	            break;
	        case VqlParser.Name:
	            this.state = 114;
	            localctx.opts = this.inlineMap();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 117;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 6, VqlParser.RULE_cryptoIvStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(VqlParser.Crypto);
	        this.state = 121;
	        this.match(VqlParser.Iv);
	        this.state = 122;
	        localctx.name = this.match(VqlParser.Name);
	        this.state = 123;
	        this.match(VqlParser.OpenParen);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.Ampersand:
	            this.state = 124;
	            localctx.iv = this.paramBind();
	            break;
	        case VqlParser.LiteralText:
	            this.state = 125;
	            localctx.literalIv = this.match(VqlParser.LiteralText);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 128;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 8, VqlParser.RULE_qualifiedName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 131;
	        this.match(VqlParser.Name);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VqlParser.Dot) {
	            this.state = 132;
	            this.match(VqlParser.Dot);
	            this.state = 133;
	            this.match(VqlParser.Name);
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
	    this.enterRule(localctx, 10, VqlParser.RULE_paramBind);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(VqlParser.Ampersand);
	        this.state = 140;
	        localctx.name = this.match(VqlParser.Name);

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
	    this.enterRule(localctx, 12, VqlParser.RULE_literalValue);
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.LiteralText:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            localctx.txt = this.match(VqlParser.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case VqlParser.LiteralNum:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            localctx.num = this.match(VqlParser.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case VqlParser.LiteralBool:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            localctx.bool = this.match(VqlParser.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case VqlParser.LiteralDuration:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 149;
	            localctx.duration = this.match(VqlParser.LiteralDuration);
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
	    this.enterRule(localctx, 14, VqlParser.RULE_literalMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(VqlParser.OpenBrace);
	        this.state = 154;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VqlParser.Comma) {
	            this.state = 155;
	            this.match(VqlParser.Comma);
	            this.state = 156;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
	        this.match(VqlParser.CloseBrace);

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
	    this.enterRule(localctx, 16, VqlParser.RULE_mapField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        localctx.name = this.match(VqlParser.Name);
	        this.state = 166;
	        this.match(VqlParser.Colon);
	        this.state = 167;
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
	    this.enterRule(localctx, 18, VqlParser.RULE_inlineMap);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        localctx._mapField = this.mapField();
	        localctx.fields.push(localctx._mapField);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VqlParser.Comma) {
	            this.state = 171;
	            this.match(VqlParser.Comma);
	            this.state = 172;
	            localctx._mapField = this.mapField();
	            localctx.fields.push(localctx._mapField);
	            this.state = 177;
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
	    this.enterRule(localctx, 20, VqlParser.RULE_schemaStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(VqlParser.Schema);
	        this.state = 181;
	        localctx.schemaName = this.match(VqlParser.Name);
	        this.state = 182;
	        this.match(VqlParser.OpenParen);
	        this.state = 185;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.Asterisk:
	            this.state = 183;
	            this.match(VqlParser.Asterisk);
	            break;
	        case VqlParser.Ampersand:
	            this.state = 184;
	            localctx.validator = this.paramBind();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 187;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 22, VqlParser.RULE_keyFieldDef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        localctx.fieldName = this.match(VqlParser.Name);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Colon) {
	            this.state = 191;
	            this.match(VqlParser.Colon);
	            this.state = 192;
	            localctx.dataType = this.match(VqlParser.Name);
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
	    this.enterRule(localctx, 24, VqlParser.RULE_simpleKeyField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
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
	    this.enterRule(localctx, 26, VqlParser.RULE_twoKeyFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 201;
	        this.match(VqlParser.Comma);
	        this.state = 202;
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
	    this.enterRule(localctx, 28, VqlParser.RULE_threeKeyFields);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 206;
	        this.match(VqlParser.Comma);
	        this.state = 207;
	        localctx._keyFieldDef = this.keyFieldDef();
	        localctx.fields.push(localctx._keyFieldDef);
	        this.state = 208;
	        this.match(VqlParser.Comma);
	        this.state = 209;
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
	    this.enterRule(localctx, 30, VqlParser.RULE_accessMode);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        localctx.aMode = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===VqlParser.Append || _la===VqlParser.Read)) {
	            localctx.aMode = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 213;
	        this.match(VqlParser.Only);
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
	    this.enterRule(localctx, 32, VqlParser.RULE_connectorClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(VqlParser.At);
	        this.state = 217;
	        localctx.connector = this.match(VqlParser.Name);
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
	    this.enterRule(localctx, 34, VqlParser.RULE_streamStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Append || _la===VqlParser.Read) {
	            this.state = 220;
	            localctx.aMode = this.accessMode();
	        }

	        this.state = 223;
	        this.match(VqlParser.Stream);
	        this.state = 224;
	        localctx.streamName = this.qualifiedName();
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.At) {
	            this.state = 225;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 228;
	        localctx.key = this.streamKeyClause();
	        this.state = 231;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case VqlParser.Encrypted:
	        	this.state = 229;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case VqlParser.Encrypt:
	        	this.state = 230;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case VqlParser.EOF:
	        case VqlParser.Append:
	        case VqlParser.Crypto:
	        case VqlParser.Default:
	        case VqlParser.Delete:
	        case VqlParser.Read:
	        case VqlParser.Schema:
	        case VqlParser.Select:
	        case VqlParser.Set:
	        case VqlParser.Stream:
	        case VqlParser.Table:
	        case VqlParser.Semicolon:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Default) {
	            this.state = 233;
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
	    this.enterRule(localctx, 36, VqlParser.RULE_streamKeyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(VqlParser.Key);
	        this.state = 239;
	        this.match(VqlParser.OpenParen);
	        this.state = 240;
	        localctx.fields = this.twoKeyFields();
	        this.state = 241;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 38, VqlParser.RULE_tableStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Append || _la===VqlParser.Read) {
	            this.state = 244;
	            localctx.aMode = this.accessMode();
	        }

	        this.state = 247;
	        this.match(VqlParser.Table);
	        this.state = 248;
	        localctx.tableName = this.qualifiedName();
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.At) {
	            this.state = 249;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Colon) {
	            this.state = 252;
	            this.match(VqlParser.Colon);
	            this.state = 253;
	            localctx.schemaName = this.match(VqlParser.Name);
	        }

	        this.state = 256;
	        localctx.key = this.tableKeyClause();
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case VqlParser.Encrypted:
	        	this.state = 257;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case VqlParser.Encrypt:
	        	this.state = 258;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case VqlParser.EOF:
	        case VqlParser.Append:
	        case VqlParser.Crypto:
	        case VqlParser.Default:
	        case VqlParser.Delete:
	        case VqlParser.Read:
	        case VqlParser.Schema:
	        case VqlParser.Select:
	        case VqlParser.Set:
	        case VqlParser.Stream:
	        case VqlParser.Table:
	        case VqlParser.Ttl:
	        case VqlParser.Semicolon:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Default) {
	            this.state = 261;
	            localctx.defaults = this.defaultClause();
	        }

	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Ttl) {
	            this.state = 264;
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
	    this.enterRule(localctx, 40, VqlParser.RULE_tableKeyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(VqlParser.Key);
	        this.state = 270;
	        this.match(VqlParser.OpenParen);
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 271;
	            localctx.simple = this.simpleKeyField();
	            break;

	        case 2:
	            this.state = 272;
	            localctx.composite2 = this.twoKeyFields();
	            break;

	        case 3:
	            this.state = 273;
	            localctx.composite3 = this.threeKeyFields();
	            break;

	        }
	        this.state = 276;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 42, VqlParser.RULE_encryptedWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(VqlParser.Encrypted);
	        this.state = 280;
	        this.match(VqlParser.With);
	        this.state = 281;
	        localctx.cryptoKey = this.match(VqlParser.Name);
	        this.state = 282;
	        this.match(VqlParser.Comma);
	        this.state = 283;
	        localctx.cryptoIv = this.match(VqlParser.Name);

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
	    this.enterRule(localctx, 44, VqlParser.RULE_encryptWithClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(VqlParser.Encrypt);
	        this.state = 287;
	        localctx.fieldName = this.match(VqlParser.Name);
	        this.state = 288;
	        this.match(VqlParser.With);
	        this.state = 289;
	        localctx.cryptoKey = this.match(VqlParser.Name);
	        this.state = 290;
	        this.match(VqlParser.Comma);
	        this.state = 291;
	        localctx.cryptoIv = this.match(VqlParser.Name);

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
	    this.enterRule(localctx, 46, VqlParser.RULE_defaultClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(VqlParser.Default);
	        this.state = 295;
	        this.match(VqlParser.OpenParen);
	        this.state = 296;
	        localctx._defaultValue = this.defaultValue();
	        localctx.values.push(localctx._defaultValue);
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===VqlParser.Comma) {
	            this.state = 297;
	            this.match(VqlParser.Comma);
	            this.state = 298;
	            localctx._defaultValue = this.defaultValue();
	            localctx.values.push(localctx._defaultValue);
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 304;
	        this.match(VqlParser.CloseParen);

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
	    this.enterRule(localctx, 48, VqlParser.RULE_defaultValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        localctx.name = this.match(VqlParser.Name);
	        this.state = 308;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (VqlParser.ColonEqual - 36)) | (1 << (VqlParser.Equal - 36)) | (1 << (VqlParser.QuestionMarkEqual - 36)))) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 311;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.Name:
	            this.state = 309;
	            localctx.prop = this.match(VqlParser.Name);
	            break;
	        case VqlParser.LiteralText:
	        case VqlParser.LiteralNum:
	        case VqlParser.LiteralDuration:
	        case VqlParser.LiteralBool:
	            this.state = 310;
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
	    this.enterRule(localctx, 50, VqlParser.RULE_ttlClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(VqlParser.Ttl);
	        this.state = 316;
	        localctx.value = this.match(VqlParser.LiteralDuration);

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



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, VqlParser.RULE_whereClause);
	    try {
	        this.state = 327;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.match(VqlParser.Where);
	            this.state = 320;
	            localctx.value = this.simpleKeyValue();

	                return new KeyValue([localctx.value]);
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            this.match(VqlParser.Where);
	            this.state = 324;
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
	    this.enterRule(localctx, 54, VqlParser.RULE_simpleKeyValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
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
	    this.enterRule(localctx, 56, VqlParser.RULE_compositeKeyValue);
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 332;
	            localctx.partition = this.equalityOp();
	            this.state = 333;
	            this.match(VqlParser.And);
	            this.state = 334;
	            localctx.id = this.equalityOp();

	                return [localctx.partition, localctx.id];
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 337;
	            localctx.partition = this.equalityOp();
	            this.state = 338;
	            this.match(VqlParser.And);
	            this.state = 339;
	            localctx.discriminator = this.equalityOp();
	            this.state = 340;
	            this.match(VqlParser.And);
	            this.state = 341;
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
	    this.enterRule(localctx, 58, VqlParser.RULE_equalityOp);
	    var _la = 0; // Token type
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 346;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  localctx.param.name,
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            localctx.name = this.match(VqlParser.Name);
	            this.state = 350;
	            _la = this._input.LA(1);
	            if(!(_la===VqlParser.Equal || _la===VqlParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 351;
	            localctx.param = this.paramBind();

	                return new KeyFieldValue(
	                  (localctx.name===null ? null : localctx.name.text),
	                  '=',
	                  localctx.param
	                );
	              
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 354;
	            localctx.name = this.match(VqlParser.Name);
	            this.state = 355;
	            _la = this._input.LA(1);
	            if(!(_la===VqlParser.Equal || _la===VqlParser.DoubleEqual)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 356;
	            localctx.value = this.match(VqlParser.LiteralText);

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
	    this.enterRule(localctx, 60, VqlParser.RULE_returningClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(VqlParser.Returning);
	        this.state = 361;
	        this.match(VqlParser.Asterisk);
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
	    this.enterRule(localctx, 62, VqlParser.RULE_selectStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(VqlParser.Select);
	        this.state = 365;
	        this.match(VqlParser.From);
	        this.state = 366;
	        localctx.tableName = this.qualifiedName();
	        this.state = 367;
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
	    this.enterRule(localctx, 64, VqlParser.RULE_deleteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(VqlParser.Delete);
	        this.state = 371;
	        this.match(VqlParser.From);
	        this.state = 372;
	        localctx.tableName = this.qualifiedName();
	        this.state = 373;
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
	    this.enterRule(localctx, 66, VqlParser.RULE_setStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(VqlParser.Set);
	        this.state = 377;
	        this.match(VqlParser.Into);
	        this.state = 378;
	        localctx.tableName = this.qualifiedName();
	        this.state = 379;
	        this.match(VqlParser.OpenParen);
	        this.state = 380;
	        localctx.value = this.itemValue();
	        this.state = 381;
	        this.match(VqlParser.CloseParen);
	        this.state = 383;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===VqlParser.Returning) {
	            this.state = 382;
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
	    this.enterRule(localctx, 68, VqlParser.RULE_itemValue);
	    try {
	        this.state = 396;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case VqlParser.Ampersand:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 387;
	            localctx.bind = this.paramBind();
	             return localctx.bind; 
	            break;
	        case VqlParser.OpenBrace:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
	            localctx.litMap = this.literalMap();
	             return localctx.litMap; 
	            break;
	        case VqlParser.Name:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 393;
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

VqlParser.EOF = antlr4.Token.EOF;
VqlParser.Whitespace = 1;
VqlParser.And = 2;
VqlParser.Append = 3;
VqlParser.Crypto = 4;
VqlParser.Default = 5;
VqlParser.Delete = 6;
VqlParser.Encrypt = 7;
VqlParser.Encrypted = 8;
VqlParser.From = 9;
VqlParser.Into = 10;
VqlParser.Iv = 11;
VqlParser.Key = 12;
VqlParser.Only = 13;
VqlParser.Read = 14;
VqlParser.Returning = 15;
VqlParser.Schema = 16;
VqlParser.Select = 17;
VqlParser.Set = 18;
VqlParser.Stream = 19;
VqlParser.Table = 20;
VqlParser.Ttl = 21;
VqlParser.Where = 22;
VqlParser.With = 23;
VqlParser.SingleLineComment = 24;
VqlParser.LiteralText = 25;
VqlParser.LiteralNum = 26;
VqlParser.LiteralDuration = 27;
VqlParser.LiteralBool = 28;
VqlParser.Name = 29;
VqlParser.At = 30;
VqlParser.OpenParen = 31;
VqlParser.CloseParen = 32;
VqlParser.Comma = 33;
VqlParser.Semicolon = 34;
VqlParser.Colon = 35;
VqlParser.ColonEqual = 36;
VqlParser.Equal = 37;
VqlParser.DoubleEqual = 38;
VqlParser.OpenBrace = 39;
VqlParser.CloseBrace = 40;
VqlParser.OpenBracket = 41;
VqlParser.CloseBracket = 42;
VqlParser.OpenChevron = 43;
VqlParser.CloseChevron = 44;
VqlParser.Dot = 45;
VqlParser.Asterisk = 46;
VqlParser.Ampersand = 47;
VqlParser.VerticalBar = 48;
VqlParser.QuestionMark = 49;
VqlParser.QuestionMarkEqual = 50;

VqlParser.RULE_start = 0;
VqlParser.RULE_statement = 1;
VqlParser.RULE_cryptoKeyStmt = 2;
VqlParser.RULE_cryptoIvStmt = 3;
VqlParser.RULE_qualifiedName = 4;
VqlParser.RULE_paramBind = 5;
VqlParser.RULE_literalValue = 6;
VqlParser.RULE_literalMap = 7;
VqlParser.RULE_mapField = 8;
VqlParser.RULE_inlineMap = 9;
VqlParser.RULE_schemaStatement = 10;
VqlParser.RULE_keyFieldDef = 11;
VqlParser.RULE_simpleKeyField = 12;
VqlParser.RULE_twoKeyFields = 13;
VqlParser.RULE_threeKeyFields = 14;
VqlParser.RULE_accessMode = 15;
VqlParser.RULE_connectorClause = 16;
VqlParser.RULE_streamStatement = 17;
VqlParser.RULE_streamKeyClause = 18;
VqlParser.RULE_tableStatement = 19;
VqlParser.RULE_tableKeyClause = 20;
VqlParser.RULE_encryptedWithClause = 21;
VqlParser.RULE_encryptWithClause = 22;
VqlParser.RULE_defaultClause = 23;
VqlParser.RULE_defaultValue = 24;
VqlParser.RULE_ttlClause = 25;
VqlParser.RULE_whereClause = 26;
VqlParser.RULE_simpleKeyValue = 27;
VqlParser.RULE_compositeKeyValue = 28;
VqlParser.RULE_equalityOp = 29;
VqlParser.RULE_returningClause = 30;
VqlParser.RULE_selectStatement = 31;
VqlParser.RULE_deleteStatement = 32;
VqlParser.RULE_setStatement = 33;
VqlParser.RULE_itemValue = 34;

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
        this.ruleIndex = VqlParser.RULE_start;
        this._statement = null; // StatementContext
        this.statements = []; // of StatementContexts
    }

	EOF() {
	    return this.getToken(VqlParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	Semicolon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Semicolon);
	    } else {
	        return this.getToken(VqlParser.Semicolon, i);
	    }
	};



}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VqlParser.RULE_statement;
        this.select = null; // SelectStatementContext
        this.del = null; // DeleteStatementContext
        this.set = null; // SetStatementContext
        this.cryptoKey = null; // CryptoKeyStmtContext
        this.cryptoIv = null; // CryptoIvStmtContext
        this.schema = null; // SchemaStatementContext
        this.table = null; // TableStatementContext
        this.stream = null; // StreamStatementContext
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

	streamStatement() {
	    return this.getTypedRuleContext(StreamStatementContext,0);
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
        this.ruleIndex = VqlParser.RULE_cryptoKeyStmt;
        this.name = null; // Token
        this.key = null; // ParamBindContext
        this.opts = null; // InlineMapContext
    }

	Crypto() {
	    return this.getToken(VqlParser.Crypto, 0);
	};

	Key() {
	    return this.getToken(VqlParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
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
        this.ruleIndex = VqlParser.RULE_cryptoIvStmt;
        this.name = null; // Token
        this.iv = null; // ParamBindContext
        this.literalIv = null; // Token
    }

	Crypto() {
	    return this.getToken(VqlParser.Crypto, 0);
	};

	Iv() {
	    return this.getToken(VqlParser.Iv, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
	};

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	LiteralText() {
	    return this.getToken(VqlParser.LiteralText, 0);
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
        this.ruleIndex = VqlParser.RULE_qualifiedName;
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Name);
	    } else {
	        return this.getToken(VqlParser.Name, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Dot);
	    } else {
	        return this.getToken(VqlParser.Dot, i);
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
        this.ruleIndex = VqlParser.RULE_paramBind;
        this.name = null; // Token
    }

	Ampersand() {
	    return this.getToken(VqlParser.Ampersand, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
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
        this.ruleIndex = VqlParser.RULE_literalValue;
        this.txt = null; // Token
        this.num = null; // Token
        this.bool = null; // Token
        this.duration = null; // Token
    }

	LiteralText() {
	    return this.getToken(VqlParser.LiteralText, 0);
	};

	LiteralNum() {
	    return this.getToken(VqlParser.LiteralNum, 0);
	};

	LiteralBool() {
	    return this.getToken(VqlParser.LiteralBool, 0);
	};

	LiteralDuration() {
	    return this.getToken(VqlParser.LiteralDuration, 0);
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
        this.ruleIndex = VqlParser.RULE_literalMap;
        this._mapField = null; // MapFieldContext
        this.fields = []; // of MapFieldContexts
    }

	OpenBrace() {
	    return this.getToken(VqlParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(VqlParser.CloseBrace, 0);
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
	        return this.getTokens(VqlParser.Comma);
	    } else {
	        return this.getToken(VqlParser.Comma, i);
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
        this.ruleIndex = VqlParser.RULE_mapField;
        this.name = null; // Token
        this.value = null; // LiteralValueContext
    }

	Colon() {
	    return this.getToken(VqlParser.Colon, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
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
        this.ruleIndex = VqlParser.RULE_inlineMap;
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
	        return this.getTokens(VqlParser.Comma);
	    } else {
	        return this.getToken(VqlParser.Comma, i);
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
        this.ruleIndex = VqlParser.RULE_schemaStatement;
        this.schemaName = null; // Token
        this.validator = null; // ParamBindContext
    }

	Schema() {
	    return this.getToken(VqlParser.Schema, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
	};

	Asterisk() {
	    return this.getToken(VqlParser.Asterisk, 0);
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
        this.ruleIndex = VqlParser.RULE_keyFieldDef;
        this.fieldName = null; // Token
        this.dataType = null; // Token
    }

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Name);
	    } else {
	        return this.getToken(VqlParser.Name, i);
	    }
	};


	Colon() {
	    return this.getToken(VqlParser.Colon, 0);
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
        this.ruleIndex = VqlParser.RULE_simpleKeyField;
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
        this.ruleIndex = VqlParser.RULE_twoKeyFields;
        this._keyFieldDef = null; // KeyFieldDefContext
        this.fields = []; // of KeyFieldDefContexts
    }

	Comma() {
	    return this.getToken(VqlParser.Comma, 0);
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
        this.ruleIndex = VqlParser.RULE_threeKeyFields;
        this._keyFieldDef = null; // KeyFieldDefContext
        this.fields = []; // of KeyFieldDefContexts
    }

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Comma);
	    } else {
	        return this.getToken(VqlParser.Comma, i);
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
        this.ruleIndex = VqlParser.RULE_accessMode;
        this.aMode = null; // Token
    }

	Only() {
	    return this.getToken(VqlParser.Only, 0);
	};

	Read() {
	    return this.getToken(VqlParser.Read, 0);
	};

	Append() {
	    return this.getToken(VqlParser.Append, 0);
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
        this.ruleIndex = VqlParser.RULE_connectorClause;
        this.connector = null; // Token
    }

	At() {
	    return this.getToken(VqlParser.At, 0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
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
        this.ruleIndex = VqlParser.RULE_streamStatement;
        this.aMode = null; // AccessModeContext
        this.streamName = null; // QualifiedNameContext
        this.connector = null; // ConnectorClauseContext
        this.key = null; // StreamKeyClauseContext
        this.encryptedWith = null; // EncryptedWithClauseContext
        this.encryptWith = null; // EncryptWithClauseContext
        this.defaults = null; // DefaultClauseContext
    }

	Stream() {
	    return this.getToken(VqlParser.Stream, 0);
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
        this.ruleIndex = VqlParser.RULE_streamKeyClause;
        this.fields = null; // TwoKeyFieldsContext
    }

	Key() {
	    return this.getToken(VqlParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
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
        this.ruleIndex = VqlParser.RULE_tableStatement;
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
	    return this.getToken(VqlParser.Table, 0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	tableKeyClause() {
	    return this.getTypedRuleContext(TableKeyClauseContext,0);
	};

	Colon() {
	    return this.getToken(VqlParser.Colon, 0);
	};

	accessMode() {
	    return this.getTypedRuleContext(AccessModeContext,0);
	};

	connectorClause() {
	    return this.getTypedRuleContext(ConnectorClauseContext,0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
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
        this.ruleIndex = VqlParser.RULE_tableKeyClause;
        this.simple = null; // SimpleKeyFieldContext
        this.composite2 = null; // TwoKeyFieldsContext
        this.composite3 = null; // ThreeKeyFieldsContext
    }

	Key() {
	    return this.getToken(VqlParser.Key, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
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
        this.ruleIndex = VqlParser.RULE_encryptedWithClause;
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypted() {
	    return this.getToken(VqlParser.Encrypted, 0);
	};

	With() {
	    return this.getToken(VqlParser.With, 0);
	};

	Comma() {
	    return this.getToken(VqlParser.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Name);
	    } else {
	        return this.getToken(VqlParser.Name, i);
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
        this.ruleIndex = VqlParser.RULE_encryptWithClause;
        this.fieldName = null; // Token
        this.cryptoKey = null; // Token
        this.cryptoIv = null; // Token
    }

	Encrypt() {
	    return this.getToken(VqlParser.Encrypt, 0);
	};

	With() {
	    return this.getToken(VqlParser.With, 0);
	};

	Comma() {
	    return this.getToken(VqlParser.Comma, 0);
	};

	Name = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.Name);
	    } else {
	        return this.getToken(VqlParser.Name, i);
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
        this.ruleIndex = VqlParser.RULE_defaultClause;
        this._defaultValue = null; // DefaultValueContext
        this.values = []; // of DefaultValueContexts
    }

	Default() {
	    return this.getToken(VqlParser.Default, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
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
	        return this.getTokens(VqlParser.Comma);
	    } else {
	        return this.getToken(VqlParser.Comma, i);
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
        this.ruleIndex = VqlParser.RULE_defaultValue;
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
	        return this.getTokens(VqlParser.Name);
	    } else {
	        return this.getToken(VqlParser.Name, i);
	    }
	};


	Equal() {
	    return this.getToken(VqlParser.Equal, 0);
	};

	ColonEqual() {
	    return this.getToken(VqlParser.ColonEqual, 0);
	};

	QuestionMarkEqual() {
	    return this.getToken(VqlParser.QuestionMarkEqual, 0);
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
        this.ruleIndex = VqlParser.RULE_ttlClause;
        this.value = null; // Token
    }

	Ttl() {
	    return this.getToken(VqlParser.Ttl, 0);
	};

	LiteralDuration() {
	    return this.getToken(VqlParser.LiteralDuration, 0);
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
        this.ruleIndex = VqlParser.RULE_whereClause;
        this.value = null; // SimpleKeyValueContext
        this.values = null; // CompositeKeyValueContext
    }

	Where() {
	    return this.getToken(VqlParser.Where, 0);
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
        this.ruleIndex = VqlParser.RULE_simpleKeyValue;
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
        this.ruleIndex = VqlParser.RULE_compositeKeyValue;
        this.partition = null; // EqualityOpContext
        this.id = null; // EqualityOpContext
        this.discriminator = null; // EqualityOpContext
    }

	And = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(VqlParser.And);
	    } else {
	        return this.getToken(VqlParser.And, i);
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
        this.ruleIndex = VqlParser.RULE_equalityOp;
        this.param = null; // ParamBindContext
        this.name = null; // Token
        this.value = null; // Token
    }

	paramBind() {
	    return this.getTypedRuleContext(ParamBindContext,0);
	};

	Name() {
	    return this.getToken(VqlParser.Name, 0);
	};

	Equal() {
	    return this.getToken(VqlParser.Equal, 0);
	};

	DoubleEqual() {
	    return this.getToken(VqlParser.DoubleEqual, 0);
	};

	LiteralText() {
	    return this.getToken(VqlParser.LiteralText, 0);
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
        this.ruleIndex = VqlParser.RULE_returningClause;
    }

	Returning() {
	    return this.getToken(VqlParser.Returning, 0);
	};

	Asterisk() {
	    return this.getToken(VqlParser.Asterisk, 0);
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
        this.ruleIndex = VqlParser.RULE_selectStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Select() {
	    return this.getToken(VqlParser.Select, 0);
	};

	From() {
	    return this.getToken(VqlParser.From, 0);
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
        this.ruleIndex = VqlParser.RULE_deleteStatement;
        this.tableName = null; // QualifiedNameContext
        this.where = null; // WhereClauseContext
    }

	Delete() {
	    return this.getToken(VqlParser.Delete, 0);
	};

	From() {
	    return this.getToken(VqlParser.From, 0);
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
        this.ruleIndex = VqlParser.RULE_setStatement;
        this.tableName = null; // QualifiedNameContext
        this.value = null; // ItemValueContext
        this.returning = null; // ReturningClauseContext
    }

	Set() {
	    return this.getToken(VqlParser.Set, 0);
	};

	Into() {
	    return this.getToken(VqlParser.Into, 0);
	};

	OpenParen() {
	    return this.getToken(VqlParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(VqlParser.CloseParen, 0);
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
        this.ruleIndex = VqlParser.RULE_itemValue;
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




VqlParser.StartContext = StartContext; 
VqlParser.StatementContext = StatementContext; 
VqlParser.CryptoKeyStmtContext = CryptoKeyStmtContext; 
VqlParser.CryptoIvStmtContext = CryptoIvStmtContext; 
VqlParser.QualifiedNameContext = QualifiedNameContext; 
VqlParser.ParamBindContext = ParamBindContext; 
VqlParser.LiteralValueContext = LiteralValueContext; 
VqlParser.LiteralMapContext = LiteralMapContext; 
VqlParser.MapFieldContext = MapFieldContext; 
VqlParser.InlineMapContext = InlineMapContext; 
VqlParser.SchemaStatementContext = SchemaStatementContext; 
VqlParser.KeyFieldDefContext = KeyFieldDefContext; 
VqlParser.SimpleKeyFieldContext = SimpleKeyFieldContext; 
VqlParser.TwoKeyFieldsContext = TwoKeyFieldsContext; 
VqlParser.ThreeKeyFieldsContext = ThreeKeyFieldsContext; 
VqlParser.AccessModeContext = AccessModeContext; 
VqlParser.ConnectorClauseContext = ConnectorClauseContext; 
VqlParser.StreamStatementContext = StreamStatementContext; 
VqlParser.StreamKeyClauseContext = StreamKeyClauseContext; 
VqlParser.TableStatementContext = TableStatementContext; 
VqlParser.TableKeyClauseContext = TableKeyClauseContext; 
VqlParser.EncryptedWithClauseContext = EncryptedWithClauseContext; 
VqlParser.EncryptWithClauseContext = EncryptWithClauseContext; 
VqlParser.DefaultClauseContext = DefaultClauseContext; 
VqlParser.DefaultValueContext = DefaultValueContext; 
VqlParser.TtlClauseContext = TtlClauseContext; 
VqlParser.WhereClauseContext = WhereClauseContext; 
VqlParser.SimpleKeyValueContext = SimpleKeyValueContext; 
VqlParser.CompositeKeyValueContext = CompositeKeyValueContext; 
VqlParser.EqualityOpContext = EqualityOpContext; 
VqlParser.ReturningClauseContext = ReturningClauseContext; 
VqlParser.SelectStatementContext = SelectStatementContext; 
VqlParser.DeleteStatementContext = DeleteStatementContext; 
VqlParser.SetStatementContext = SetStatementContext; 
VqlParser.ItemValueContext = ItemValueContext; 
