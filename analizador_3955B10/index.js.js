import antlr4 from 'antlr4';
import fs from 'fs';

import SubCLexer from './generated/SubCLexer.js';
import SubCParser from './generated/SubCParser.js';
//import SubCVisitor from './generated/SubCVisitor.js';
import CustomSubCVisitor from './CustomSubCVisitor.js';


// Leer entrada desde input.txt
let input;
try {
  input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error("No se pudo leer input.txt");
  process.exit(1);
}

// Crear el flujo de caracteres
const chars = new antlr4.InputStream(input);

// Crear el lexer y obtener los tokens
const lexer = new SubCLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Mostrar tabla de tokens
console.log('\n=== Tabla de Tokens (Lexema - Tipo) ===');
tokens.tokens.forEach(token => {
  if (token.type !== -1) {
    const tokenName = SubCLexer.symbolicNames[token.type];
    console.log(`${token.text}  -->  ${tokenName}`);
  }
});

// Crear el parser
const parser = new SubCParser(tokens);
parser.buildParseTrees = true;
const tree = parser.programa();

// Verificar errores
if (parser._syntaxErrors > 0) {
  console.error("\n❌ Se encontraron errores de sintaxis.");
} else {
  console.log("\n✅ La entrada es sintácticamente correcta.");
}

// Mostrar árbol
console.log('\n=== Árbol de análisis sintáctico ===');
console.log(tree.toStringTree(parser.ruleNames));
// Interpretar con visitor 
console.log('\n=== Interpretación del código ===');
const visitor = new CustomSubCVisitor();
visitor.visit(tree);
