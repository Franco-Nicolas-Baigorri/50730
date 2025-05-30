// Generated from SubC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SubCListener from './SubCListener.js';
import SubCVisitor from './SubCVisitor.js';

const serializedATN = [4,1,13,63,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,27,8,
1,10,1,12,1,30,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,4,4,46,8,4,11,4,12,4,47,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,
8,1,8,1,8,0,1,2,9,0,2,4,6,8,10,12,14,16,0,1,1,0,5,6,56,0,18,1,0,0,0,2,21,
1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,45,1,0,0,0,10,49,1,0,0,0,12,55,1,0,0,
0,14,58,1,0,0,0,16,60,1,0,0,0,18,19,3,2,1,0,19,20,5,0,0,1,20,1,1,0,0,0,21,
22,6,1,-1,0,22,23,3,4,2,0,23,28,1,0,0,0,24,25,10,1,0,0,25,27,3,4,2,0,26,
24,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,28,
1,0,0,0,31,32,3,6,3,0,32,5,1,0,0,0,33,34,5,1,0,0,34,35,5,11,0,0,35,36,3,
8,4,0,36,37,5,12,0,0,37,38,5,2,0,0,38,39,5,9,0,0,39,40,3,14,7,0,40,41,5,
10,0,0,41,42,5,8,0,0,42,7,1,0,0,0,43,46,3,10,5,0,44,46,3,12,6,0,45,43,1,
0,0,0,45,44,1,0,0,0,46,47,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,9,1,0,0,
0,49,50,5,4,0,0,50,51,5,9,0,0,51,52,3,16,8,0,52,53,5,10,0,0,53,54,5,8,0,
0,54,11,1,0,0,0,55,56,5,3,0,0,56,57,5,8,0,0,57,13,1,0,0,0,58,59,7,0,0,0,
59,15,1,0,0,0,60,61,5,7,0,0,61,17,1,0,0,0,3,28,45,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SubCParser extends antlr4.Parser {

    static grammarFileName = "SubC.g4";
    static literalNames = [ null, "'do'", "'while'", "'break'", "'puts'", 
                            "'0'", "'1'", null, "';'", "'('", "')'", "'{'", 
                            "'}'" ];
    static symbolicNames = [ null, "DO", "WHILE", "BREAK", "PUTS", "CERO", 
                             "UNO", "STRING", "SEMI", "LPAREN", "RPAREN", 
                             "LBRACE", "RBRACE", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SubCParser.ruleNames;
        this.literalNames = SubCParser.literalNames;
        this.symbolicNames = SubCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SubCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.instrucciones(0);
	        this.state = 19;
	        this.match(SubCParser.EOF);
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


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SubCParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, SubCParser.RULE_instrucciones);
	                this.state = 24;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 25;
	                this.instruccion(); 
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SubCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.bucle();
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



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SubCParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(SubCParser.DO);
	        this.state = 34;
	        this.match(SubCParser.LBRACE);
	        this.state = 35;
	        this.sentencia();
	        this.state = 36;
	        this.match(SubCParser.RBRACE);
	        this.state = 37;
	        this.match(SubCParser.WHILE);
	        this.state = 38;
	        this.match(SubCParser.LPAREN);
	        this.state = 39;
	        this.condicion();
	        this.state = 40;
	        this.match(SubCParser.RPAREN);
	        this.state = 41;
	        this.match(SubCParser.SEMI);
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



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SubCParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 4:
	                this.state = 43;
	                this.salida();
	                break;
	            case 3:
	                this.state = 44;
	                this.terminar();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 47; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
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



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SubCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(SubCParser.PUTS);
	        this.state = 50;
	        this.match(SubCParser.LPAREN);
	        this.state = 51;
	        this.cadena();
	        this.state = 52;
	        this.match(SubCParser.RPAREN);
	        this.state = 53;
	        this.match(SubCParser.SEMI);
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



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SubCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(SubCParser.BREAK);
	        this.state = 56;
	        this.match(SubCParser.SEMI);
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



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SubCParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
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



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SubCParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(SubCParser.STRING);
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

SubCParser.EOF = antlr4.Token.EOF;
SubCParser.DO = 1;
SubCParser.WHILE = 2;
SubCParser.BREAK = 3;
SubCParser.PUTS = 4;
SubCParser.CERO = 5;
SubCParser.UNO = 6;
SubCParser.STRING = 7;
SubCParser.SEMI = 8;
SubCParser.LPAREN = 9;
SubCParser.RPAREN = 10;
SubCParser.LBRACE = 11;
SubCParser.RBRACE = 12;
SubCParser.WS = 13;

SubCParser.RULE_programa = 0;
SubCParser.RULE_instrucciones = 1;
SubCParser.RULE_instruccion = 2;
SubCParser.RULE_bucle = 3;
SubCParser.RULE_sentencia = 4;
SubCParser.RULE_salida = 5;
SubCParser.RULE_terminar = 6;
SubCParser.RULE_condicion = 7;
SubCParser.RULE_cadena = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(SubCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_bucle;
    }

	DO() {
	    return this.getToken(SubCParser.DO, 0);
	};

	LBRACE() {
	    return this.getToken(SubCParser.LBRACE, 0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	RBRACE() {
	    return this.getToken(SubCParser.RBRACE, 0);
	};

	WHILE() {
	    return this.getToken(SubCParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(SubCParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(SubCParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SubCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminarContext);
	    } else {
	        return this.getTypedRuleContext(TerminarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_salida;
    }

	PUTS() {
	    return this.getToken(SubCParser.PUTS, 0);
	};

	LPAREN() {
	    return this.getToken(SubCParser.LPAREN, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	RPAREN() {
	    return this.getToken(SubCParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SubCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(SubCParser.BREAK, 0);
	};

	SEMI() {
	    return this.getToken(SubCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(SubCParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(SubCParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SubCParser.RULE_cadena;
    }

	STRING() {
	    return this.getToken(SubCParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SubCListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SubCVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SubCParser.ProgramaContext = ProgramaContext; 
SubCParser.InstruccionesContext = InstruccionesContext; 
SubCParser.InstruccionContext = InstruccionContext; 
SubCParser.BucleContext = BucleContext; 
SubCParser.SentenciaContext = SentenciaContext; 
SubCParser.SalidaContext = SalidaContext; 
SubCParser.TerminarContext = TerminarContext; 
SubCParser.CondicionContext = CondicionContext; 
SubCParser.CadenaContext = CadenaContext; 
