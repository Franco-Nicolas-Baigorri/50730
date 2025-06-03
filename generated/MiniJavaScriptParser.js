// Generated from c://Users//Drmal//OneDrive//Escritorio//50730 Analizador//MiniJavaScript.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJavaScriptListener from './MiniJavaScriptListener.js';
import MiniJavaScriptVisitor from './MiniJavaScriptVisitor.js';

const serializedATN = [4,1,15,67,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,0,1,0,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,35,8,2,10,2,12,2,38,9,2,1,2,3,2,41,
8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,2,0,5,5,7,7,
63,0,17,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,44,1,0,0,0,8,49,1,0,0,0,10,53,
1,0,0,0,12,58,1,0,0,0,14,64,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,
0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,0,0,1,22,1,1,0,0,
0,23,27,3,4,2,0,24,27,3,10,5,0,25,27,3,12,6,0,26,23,1,0,0,0,26,24,1,0,0,
0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,1,0,0,29,30,5,10,0,0,30,31,5,6,0,0,
31,32,5,11,0,0,32,36,5,12,0,0,33,35,3,6,3,0,34,33,1,0,0,0,35,38,1,0,0,0,
36,34,1,0,0,0,36,37,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,39,41,3,8,4,0,40,
39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,13,0,0,43,5,1,0,0,0,44,45,
5,2,0,0,45,46,3,14,7,0,46,47,5,14,0,0,47,48,3,2,1,0,48,7,1,0,0,0,49,50,5,
3,0,0,50,51,5,14,0,0,51,52,3,2,1,0,52,9,1,0,0,0,53,54,5,6,0,0,54,55,5,8,
0,0,55,56,3,14,7,0,56,57,5,9,0,0,57,11,1,0,0,0,58,59,5,4,0,0,59,60,5,10,
0,0,60,61,5,5,0,0,61,62,5,11,0,0,62,63,5,9,0,0,63,13,1,0,0,0,64,65,7,0,0,
0,65,15,1,0,0,0,4,19,26,36,40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJavaScriptParser extends antlr4.Parser {

    static grammarFileName = "MiniJavaScript.g4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'output'", 
                            null, null, null, "'='", "';'", "'('", "')'", 
                            "'{'", "'}'", "':'" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", 
                             "TEXT_LITERAL", "IDENTIFIER", "NUMBER", "ASSIGN", 
                             "SEMICOLON", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "COLON", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "switchStatement", 
                         "caseSection", "defaultSection", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJavaScriptParser.ruleNames;
        this.literalNames = MiniJavaScriptParser.literalNames;
        this.symbolicNames = MiniJavaScriptParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.simpleStatement();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 82) !== 0));
	        this.state = 21;
	        this.match(MiniJavaScriptParser.EOF);
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



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJavaScriptParser.RULE_simpleStatement);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.switchStatement();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.assignmentStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.outputStatement();
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



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJavaScriptParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(MiniJavaScriptParser.SWITCH);
	        this.state = 29;
	        this.match(MiniJavaScriptParser.LPAREN);
	        this.state = 30;
	        this.match(MiniJavaScriptParser.IDENTIFIER);
	        this.state = 31;
	        this.match(MiniJavaScriptParser.RPAREN);
	        this.state = 32;
	        this.match(MiniJavaScriptParser.LBRACE);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 33;
	            this.caseSection();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 39;
	            this.defaultSection();
	        }

	        this.state = 42;
	        this.match(MiniJavaScriptParser.RBRACE);
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



	caseSection() {
	    let localctx = new CaseSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJavaScriptParser.RULE_caseSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MiniJavaScriptParser.CASE);
	        this.state = 45;
	        this.constant();
	        this.state = 46;
	        this.match(MiniJavaScriptParser.COLON);
	        this.state = 47;
	        this.simpleStatement();
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



	defaultSection() {
	    let localctx = new DefaultSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJavaScriptParser.RULE_defaultSection);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(MiniJavaScriptParser.DEFAULT);
	        this.state = 50;
	        this.match(MiniJavaScriptParser.COLON);
	        this.state = 51;
	        this.simpleStatement();
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniJavaScriptParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(MiniJavaScriptParser.IDENTIFIER);
	        this.state = 54;
	        this.match(MiniJavaScriptParser.ASSIGN);
	        this.state = 55;
	        this.constant();
	        this.state = 56;
	        this.match(MiniJavaScriptParser.SEMICOLON);
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



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniJavaScriptParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(MiniJavaScriptParser.OUTPUT);
	        this.state = 59;
	        this.match(MiniJavaScriptParser.LPAREN);
	        this.state = 60;
	        this.match(MiniJavaScriptParser.TEXT_LITERAL);
	        this.state = 61;
	        this.match(MiniJavaScriptParser.RPAREN);
	        this.state = 62;
	        this.match(MiniJavaScriptParser.SEMICOLON);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniJavaScriptParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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

MiniJavaScriptParser.EOF = antlr4.Token.EOF;
MiniJavaScriptParser.SWITCH = 1;
MiniJavaScriptParser.CASE = 2;
MiniJavaScriptParser.DEFAULT = 3;
MiniJavaScriptParser.OUTPUT = 4;
MiniJavaScriptParser.TEXT_LITERAL = 5;
MiniJavaScriptParser.IDENTIFIER = 6;
MiniJavaScriptParser.NUMBER = 7;
MiniJavaScriptParser.ASSIGN = 8;
MiniJavaScriptParser.SEMICOLON = 9;
MiniJavaScriptParser.LPAREN = 10;
MiniJavaScriptParser.RPAREN = 11;
MiniJavaScriptParser.LBRACE = 12;
MiniJavaScriptParser.RBRACE = 13;
MiniJavaScriptParser.COLON = 14;
MiniJavaScriptParser.WS = 15;

MiniJavaScriptParser.RULE_program = 0;
MiniJavaScriptParser.RULE_simpleStatement = 1;
MiniJavaScriptParser.RULE_switchStatement = 2;
MiniJavaScriptParser.RULE_caseSection = 3;
MiniJavaScriptParser.RULE_defaultSection = 4;
MiniJavaScriptParser.RULE_assignmentStatement = 5;
MiniJavaScriptParser.RULE_outputStatement = 6;
MiniJavaScriptParser.RULE_constant = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniJavaScriptParser.EOF, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_simpleStatement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitSimpleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitSimpleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_switchStatement;
    }

	SWITCH() {
	    return this.getToken(MiniJavaScriptParser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJavaScriptParser.LPAREN, 0);
	};

	IDENTIFIER() {
	    return this.getToken(MiniJavaScriptParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(MiniJavaScriptParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(MiniJavaScriptParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(MiniJavaScriptParser.RBRACE, 0);
	};

	caseSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSectionContext);
	    } else {
	        return this.getTypedRuleContext(CaseSectionContext,i);
	    }
	};

	defaultSection() {
	    return this.getTypedRuleContext(DefaultSectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitSwitchStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitSwitchStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_caseSection;
    }

	CASE() {
	    return this.getToken(MiniJavaScriptParser.CASE, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	COLON() {
	    return this.getToken(MiniJavaScriptParser.COLON, 0);
	};

	simpleStatement() {
	    return this.getTypedRuleContext(SimpleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterCaseSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitCaseSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitCaseSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefaultSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_defaultSection;
    }

	DEFAULT() {
	    return this.getToken(MiniJavaScriptParser.DEFAULT, 0);
	};

	COLON() {
	    return this.getToken(MiniJavaScriptParser.COLON, 0);
	};

	simpleStatement() {
	    return this.getTypedRuleContext(SimpleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterDefaultSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitDefaultSection(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitDefaultSection(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(MiniJavaScriptParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(MiniJavaScriptParser.ASSIGN, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMICOLON() {
	    return this.getToken(MiniJavaScriptParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_outputStatement;
    }

	OUTPUT() {
	    return this.getToken(MiniJavaScriptParser.OUTPUT, 0);
	};

	LPAREN() {
	    return this.getToken(MiniJavaScriptParser.LPAREN, 0);
	};

	TEXT_LITERAL() {
	    return this.getToken(MiniJavaScriptParser.TEXT_LITERAL, 0);
	};

	RPAREN() {
	    return this.getToken(MiniJavaScriptParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(MiniJavaScriptParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitOutputStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitOutputStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_constant;
    }

	NUMBER() {
	    return this.getToken(MiniJavaScriptParser.NUMBER, 0);
	};

	TEXT_LITERAL() {
	    return this.getToken(MiniJavaScriptParser.TEXT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiniJavaScriptVisitor ) {
	        return visitor.visitConstant(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiniJavaScriptParser.ProgramContext = ProgramContext; 
MiniJavaScriptParser.SimpleStatementContext = SimpleStatementContext; 
MiniJavaScriptParser.SwitchStatementContext = SwitchStatementContext; 
MiniJavaScriptParser.CaseSectionContext = CaseSectionContext; 
MiniJavaScriptParser.DefaultSectionContext = DefaultSectionContext; 
MiniJavaScriptParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJavaScriptParser.OutputStatementContext = OutputStatementContext; 
MiniJavaScriptParser.ConstantContext = ConstantContext; 
