grammar MiniJavaScript;

program: simpleStatement+ EOF;

simpleStatement
    : switchStatement
    | assignmentStatement
    | outputStatement
    ;

switchStatement
    : SWITCH LPAREN IDENTIFIER RPAREN LBRACE caseSection* defaultSection? RBRACE
    ;

caseSection
    : CASE constant COLON simpleStatement
    ;

defaultSection
    : DEFAULT COLON simpleStatement
    ;

assignmentStatement
    : IDENTIFIER ASSIGN constant SEMICOLON
    ;

outputStatement
    : OUTPUT LPAREN TEXT_LITERAL RPAREN SEMICOLON
    ;

constant
    : NUMBER
    | TEXT_LITERAL
    ;

// === TOKENS ===
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
OUTPUT: 'output';

TEXT_LITERAL: '"' (~["\r\n])* '"';
IDENTIFIER: LETTER (LETTER | DIGIT | '_')*;
NUMBER: DIGIT+;

ASSIGN: '=';
SEMICOLON: ';';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
COLON: ':';

// === FRAGMENTOS ===
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];

// === IGNORAR ESPACIOS Y SALTOS DE LÍNEA ===
WS: [ \t\r\n]+ -> skip;
