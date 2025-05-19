grammar SubC;

// Axioma
programa: instrucciones EOF;

instrucciones
    : instruccion
    | instrucciones instruccion
    ;

instruccion
    : bucle
    ;

bucle
    : DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMI
    ;

sentencia:
    (salida | terminar)+
;
salida
    : PUTS LPAREN cadena RPAREN SEMI
    ;

terminar
    : BREAK SEMI
    ;

condicion
    : CERO
    | UNO
    ;

cadena
    : STRING
    ;

// --------- LÉXICO ---------

DO      : 'do';
WHILE   : 'while';
BREAK   : 'break';
PUTS    : 'puts';

CERO    : '0';
UNO     : '1';

STRING  : '"' (LETRA | DIGITO | SIMBOLO)* '"';

fragment LETRA   : [a-zA-Z];
fragment DIGITO  : [0-9];
fragment SIMBOLO : [;(){}" ];

// Puntuación
SEMI    : ';';
LPAREN  : '(';
RPAREN  : ')';
LBRACE  : '{';
RBRACE  : '}';

// Ignorar espacios y saltos de línea
WS      : [ \t\r\n]+ -> skip;
