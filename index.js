import { CharStreams, CommonTokenStream } from 'antlr4';
import fs from 'fs';
import readline from 'readline';

import MiniJavaScriptLexer from './generated/MiniJavaScriptLexer.js';
import MiniJavaScriptParser from './generated/MiniJavaScriptParser.js';
import CustomMiniJSVisitor from './CustomMiniJSVisitor.js';

async function main() {
    let input;

    // Leer desde archivo o consola
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }

    // Tokenización
    let inputStream = CharStreams.fromString(input);
    let lexer = new MiniJavaScriptLexer(inputStream);

    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada.");
        return;
    }

    // Tabla de tokens
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    for (let token of tokens) {
        const tokenType = MiniJavaScriptLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------");

    // Volver a cargar lexer y parser porque los tokens ya se consumieron
    inputStream = CharStreams.fromString(input);
    lexer = new MiniJavaScriptLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MiniJavaScriptParser(tokenStream);

    const tree = parser.program();

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis.");
        return;
    }

    console.log("\nEntrada válida.");
    console.log("Árbol de derivación: ");
    console.log(tree.toStringTree(parser.ruleNames));

    // VISITAR Y TRADUCIR A JS
    const visitor = new CustomMiniJSVisitor();
    const jsCode = visitor.visit(tree);

    console.log('\n--- Código JavaScript generado ---\n');
    console.log(jsCode);

    console.log('\n--- Salida al ejecutar el código generado ---\n');
    try {
        eval(jsCode);
    } catch (e) {
        console.error("❌ Error al ejecutar el código generado:", e.message);
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", answer => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
