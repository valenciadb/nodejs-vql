// Generated from java-escape by ANTLR 4.11.1
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

const serializedATN = [4,1,50,399,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,1,0,3,0,73,8,0,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,0,1,0,1,0,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,108,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,116,8,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,127,8,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,135,
8,4,10,4,12,4,138,9,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,152,8,6,1,7,1,7,1,7,1,7,5,7,158,8,7,10,7,12,7,161,9,7,1,7,1,7,1,7,1,8,
1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,174,8,9,10,9,12,9,177,9,9,1,9,1,9,1,10,1,
10,1,10,1,10,1,10,3,10,186,8,10,1,10,1,10,1,10,1,11,1,11,1,11,3,11,194,8,
11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,17,3,17,222,8,17,
1,17,1,17,1,17,3,17,227,8,17,1,17,1,17,1,17,3,17,232,8,17,1,17,3,17,235,
8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,3,19,246,8,19,1,19,1,19,
1,19,3,19,251,8,19,1,19,1,19,3,19,255,8,19,1,19,1,19,1,19,3,19,260,8,19,
1,19,3,19,263,8,19,1,19,3,19,266,8,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,
3,20,275,8,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,5,23,300,8,23,10,
23,12,23,303,9,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,312,8,24,1,24,
1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,328,
8,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,1,28,3,28,345,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,3,29,359,8,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,
1,32,1,32,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,384,
8,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,397,8,34,
1,34,0,0,35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,62,64,66,68,0,3,2,0,3,3,14,14,2,0,36,37,50,50,
1,0,37,38,405,0,70,1,0,0,0,2,107,1,0,0,0,4,109,1,0,0,0,6,120,1,0,0,0,8,131,
1,0,0,0,10,139,1,0,0,0,12,151,1,0,0,0,14,153,1,0,0,0,16,165,1,0,0,0,18,170,
1,0,0,0,20,180,1,0,0,0,22,190,1,0,0,0,24,197,1,0,0,0,26,200,1,0,0,0,28,205,
1,0,0,0,30,212,1,0,0,0,32,216,1,0,0,0,34,221,1,0,0,0,36,238,1,0,0,0,38,245,
1,0,0,0,40,269,1,0,0,0,42,279,1,0,0,0,44,286,1,0,0,0,46,294,1,0,0,0,48,307,
1,0,0,0,50,315,1,0,0,0,52,327,1,0,0,0,54,329,1,0,0,0,56,344,1,0,0,0,58,358,
1,0,0,0,60,360,1,0,0,0,62,364,1,0,0,0,64,370,1,0,0,0,66,376,1,0,0,0,68,396,
1,0,0,0,70,77,3,2,1,0,71,73,5,34,0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,74,1,
0,0,0,74,76,3,2,1,0,75,72,1,0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,
0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,82,6,0,-1,0,82,1,1,0,0,
0,83,84,3,62,31,0,84,85,6,1,-1,0,85,108,1,0,0,0,86,87,3,64,32,0,87,88,6,
1,-1,0,88,108,1,0,0,0,89,90,3,66,33,0,90,91,6,1,-1,0,91,108,1,0,0,0,92,93,
3,4,2,0,93,94,6,1,-1,0,94,108,1,0,0,0,95,96,3,6,3,0,96,97,6,1,-1,0,97,108,
1,0,0,0,98,99,3,20,10,0,99,100,6,1,-1,0,100,108,1,0,0,0,101,102,3,38,19,
0,102,103,6,1,-1,0,103,108,1,0,0,0,104,105,3,34,17,0,105,106,6,1,-1,0,106,
108,1,0,0,0,107,83,1,0,0,0,107,86,1,0,0,0,107,89,1,0,0,0,107,92,1,0,0,0,
107,95,1,0,0,0,107,98,1,0,0,0,107,101,1,0,0,0,107,104,1,0,0,0,108,3,1,0,
0,0,109,110,5,4,0,0,110,111,5,12,0,0,111,112,5,29,0,0,112,115,5,31,0,0,113,
116,3,10,5,0,114,116,3,18,9,0,115,113,1,0,0,0,115,114,1,0,0,0,116,117,1,
0,0,0,117,118,5,32,0,0,118,119,6,2,-1,0,119,5,1,0,0,0,120,121,5,4,0,0,121,
122,5,11,0,0,122,123,5,29,0,0,123,126,5,31,0,0,124,127,3,10,5,0,125,127,
5,25,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,128,1,0,0,0,128,129,5,32,0,
0,129,130,6,3,-1,0,130,7,1,0,0,0,131,136,5,29,0,0,132,133,5,45,0,0,133,135,
5,29,0,0,134,132,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,0,0,
137,9,1,0,0,0,138,136,1,0,0,0,139,140,5,47,0,0,140,141,5,29,0,0,141,142,
6,5,-1,0,142,11,1,0,0,0,143,144,5,25,0,0,144,152,6,6,-1,0,145,146,5,26,0,
0,146,152,6,6,-1,0,147,148,5,28,0,0,148,152,6,6,-1,0,149,150,5,27,0,0,150,
152,6,6,-1,0,151,143,1,0,0,0,151,145,1,0,0,0,151,147,1,0,0,0,151,149,1,0,
0,0,152,13,1,0,0,0,153,154,5,39,0,0,154,159,3,16,8,0,155,156,5,33,0,0,156,
158,3,16,8,0,157,155,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,159,160,1,0,
0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,163,5,40,0,0,163,164,6,7,-1,0,164,
15,1,0,0,0,165,166,5,29,0,0,166,167,5,35,0,0,167,168,3,12,6,0,168,169,6,
8,-1,0,169,17,1,0,0,0,170,175,3,16,8,0,171,172,5,33,0,0,172,174,3,16,8,0,
173,171,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,
1,0,0,0,177,175,1,0,0,0,178,179,6,9,-1,0,179,19,1,0,0,0,180,181,5,16,0,0,
181,182,5,29,0,0,182,185,5,31,0,0,183,186,5,46,0,0,184,186,3,10,5,0,185,
183,1,0,0,0,185,184,1,0,0,0,186,187,1,0,0,0,187,188,5,32,0,0,188,189,6,10,
-1,0,189,21,1,0,0,0,190,193,5,29,0,0,191,192,5,35,0,0,192,194,5,29,0,0,193,
191,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,196,6,11,-1,0,196,23,1,0,
0,0,197,198,3,22,11,0,198,199,6,12,-1,0,199,25,1,0,0,0,200,201,3,22,11,0,
201,202,5,33,0,0,202,203,3,22,11,0,203,204,6,13,-1,0,204,27,1,0,0,0,205,
206,3,22,11,0,206,207,5,33,0,0,207,208,3,22,11,0,208,209,5,33,0,0,209,210,
3,22,11,0,210,211,6,14,-1,0,211,29,1,0,0,0,212,213,7,0,0,0,213,214,5,13,
0,0,214,215,6,15,-1,0,215,31,1,0,0,0,216,217,5,30,0,0,217,218,5,29,0,0,218,
219,6,16,-1,0,219,33,1,0,0,0,220,222,3,30,15,0,221,220,1,0,0,0,221,222,1,
0,0,0,222,223,1,0,0,0,223,224,5,19,0,0,224,226,3,8,4,0,225,227,3,32,16,0,
226,225,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,231,3,36,18,0,229,232,
3,42,21,0,230,232,3,44,22,0,231,229,1,0,0,0,231,230,1,0,0,0,231,232,1,0,
0,0,232,234,1,0,0,0,233,235,3,46,23,0,234,233,1,0,0,0,234,235,1,0,0,0,235,
236,1,0,0,0,236,237,6,17,-1,0,237,35,1,0,0,0,238,239,5,12,0,0,239,240,5,
31,0,0,240,241,3,26,13,0,241,242,5,32,0,0,242,243,6,18,-1,0,243,37,1,0,0,
0,244,246,3,30,15,0,245,244,1,0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,
248,5,20,0,0,248,250,3,8,4,0,249,251,3,32,16,0,250,249,1,0,0,0,250,251,1,
0,0,0,251,254,1,0,0,0,252,253,5,35,0,0,253,255,5,29,0,0,254,252,1,0,0,0,
254,255,1,0,0,0,255,256,1,0,0,0,256,259,3,40,20,0,257,260,3,42,21,0,258,
260,3,44,22,0,259,257,1,0,0,0,259,258,1,0,0,0,259,260,1,0,0,0,260,262,1,
0,0,0,261,263,3,46,23,0,262,261,1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,
264,266,3,50,25,0,265,264,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,268,
6,19,-1,0,268,39,1,0,0,0,269,270,5,12,0,0,270,274,5,31,0,0,271,275,3,24,
12,0,272,275,3,26,13,0,273,275,3,28,14,0,274,271,1,0,0,0,274,272,1,0,0,0,
274,273,1,0,0,0,275,276,1,0,0,0,276,277,5,32,0,0,277,278,6,20,-1,0,278,41,
1,0,0,0,279,280,5,8,0,0,280,281,5,23,0,0,281,282,5,29,0,0,282,283,5,33,0,
0,283,284,5,29,0,0,284,285,6,21,-1,0,285,43,1,0,0,0,286,287,5,7,0,0,287,
288,5,29,0,0,288,289,5,23,0,0,289,290,5,29,0,0,290,291,5,33,0,0,291,292,
5,29,0,0,292,293,6,22,-1,0,293,45,1,0,0,0,294,295,5,5,0,0,295,296,5,31,0,
0,296,301,3,48,24,0,297,298,5,33,0,0,298,300,3,48,24,0,299,297,1,0,0,0,300,
303,1,0,0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,304,1,0,0,0,303,301,1,0,
0,0,304,305,5,32,0,0,305,306,6,23,-1,0,306,47,1,0,0,0,307,308,5,29,0,0,308,
311,7,1,0,0,309,312,5,29,0,0,310,312,3,12,6,0,311,309,1,0,0,0,311,310,1,
0,0,0,312,313,1,0,0,0,313,314,6,24,-1,0,314,49,1,0,0,0,315,316,5,21,0,0,
316,317,5,27,0,0,317,318,6,25,-1,0,318,51,1,0,0,0,319,320,5,22,0,0,320,321,
3,54,27,0,321,322,6,26,-1,0,322,328,1,0,0,0,323,324,5,22,0,0,324,325,3,56,
28,0,325,326,6,26,-1,0,326,328,1,0,0,0,327,319,1,0,0,0,327,323,1,0,0,0,328,
53,1,0,0,0,329,330,3,58,29,0,330,331,6,27,-1,0,331,55,1,0,0,0,332,333,3,
58,29,0,333,334,5,2,0,0,334,335,3,58,29,0,335,336,6,28,-1,0,336,345,1,0,
0,0,337,338,3,58,29,0,338,339,5,2,0,0,339,340,3,58,29,0,340,341,5,2,0,0,
341,342,3,58,29,0,342,343,6,28,-1,0,343,345,1,0,0,0,344,332,1,0,0,0,344,
337,1,0,0,0,345,57,1,0,0,0,346,347,3,10,5,0,347,348,6,29,-1,0,348,359,1,
0,0,0,349,350,5,29,0,0,350,351,7,2,0,0,351,352,3,10,5,0,352,353,6,29,-1,
0,353,359,1,0,0,0,354,355,5,29,0,0,355,356,7,2,0,0,356,357,5,25,0,0,357,
359,6,29,-1,0,358,346,1,0,0,0,358,349,1,0,0,0,358,354,1,0,0,0,359,59,1,0,
0,0,360,361,5,15,0,0,361,362,5,46,0,0,362,363,6,30,-1,0,363,61,1,0,0,0,364,
365,5,17,0,0,365,366,5,9,0,0,366,367,3,8,4,0,367,368,3,52,26,0,368,369,6,
31,-1,0,369,63,1,0,0,0,370,371,5,6,0,0,371,372,5,9,0,0,372,373,3,8,4,0,373,
374,3,52,26,0,374,375,6,32,-1,0,375,65,1,0,0,0,376,377,5,18,0,0,377,378,
5,10,0,0,378,379,3,8,4,0,379,380,5,31,0,0,380,381,3,68,34,0,381,383,5,32,
0,0,382,384,3,60,30,0,383,382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,
386,6,33,-1,0,386,67,1,0,0,0,387,388,3,10,5,0,388,389,6,34,-1,0,389,397,
1,0,0,0,390,391,3,14,7,0,391,392,6,34,-1,0,392,397,1,0,0,0,393,394,3,18,
9,0,394,395,6,34,-1,0,395,397,1,0,0,0,396,387,1,0,0,0,396,390,1,0,0,0,396,
393,1,0,0,0,397,69,1,0,0,0,29,72,77,107,115,126,136,151,159,175,185,193,
221,226,231,234,245,250,254,259,262,265,274,301,311,327,344,358,383,396];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class VqlParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
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
	        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & 2147739659) !== 0)) {
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===34) {
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
	        case 47:
	            this.state = 113;
	            localctx.key = this.paramBind();
	            break;
	        case 29:
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
	        case 47:
	            this.state = 124;
	            localctx.iv = this.paramBind();
	            break;
	        case 25:
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
	        while(_la===45) {
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
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            localctx.txt = this.match(VqlParser.LiteralText);
	             return (localctx.txt===null ? null : localctx.txt.text).slice(1, -1); 
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 145;
	            localctx.num = this.match(VqlParser.LiteralNum);
	             return parseNum((localctx.num===null ? null : localctx.num.text)); 
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            localctx.bool = this.match(VqlParser.LiteralBool);
	             return parseBool((localctx.bool===null ? null : localctx.bool.text)); 
	            break;
	        case 27:
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
	        while(_la===33) {
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
	        while(_la===33) {
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
	        case 46:
	            this.state = 183;
	            this.match(VqlParser.Asterisk);
	            break;
	        case 47:
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
	        if(_la===35) {
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
	        if(!(_la===3 || _la===14)) {
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
	        if(_la===3 || _la===14) {
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
	        if(_la===30) {
	            this.state = 225;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 228;
	        localctx.key = this.streamKeyClause();
	        this.state = 231;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 8:
	        	this.state = 229;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case 7:
	        	this.state = 230;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case -1:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 14:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 34:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
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
	        if(_la===3 || _la===14) {
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
	        if(_la===30) {
	            this.state = 249;
	            localctx.connector = this.connectorClause();
	        }

	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
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
	        case 8:
	        	this.state = 257;
	        	localctx.encryptedWith = this.encryptedWithClause();
	        	break;
	        case 7:
	        	this.state = 258;
	        	localctx.encryptWith = this.encryptWithClause();
	        	break;
	        case -1:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 14:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 34:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 261;
	            localctx.defaults = this.defaultClause();
	        }

	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
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
	        while(_la===33) {
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
	        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & 16387) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 311;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.state = 309;
	            localctx.prop = this.match(VqlParser.Name);
	            break;
	        case 25:
	        case 26:
	        case 27:
	        case 28:
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
	            if(!(_la===37 || _la===38)) {
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
	            if(!(_la===37 || _la===38)) {
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
	        if(_la===15) {
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
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 387;
	            localctx.bind = this.paramBind();
	             return localctx.bind; 
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
	            localctx.litMap = this.literalMap();
	             return localctx.litMap; 
	            break;
	        case 29:
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
