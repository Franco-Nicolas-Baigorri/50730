import SubCVisitor from './generated/SubCVisitor.js';
import antlr4 from 'antlr4';

export default class CustomSubCVisitor extends SubCVisitor {
  constructor() {
    super();
    this.output = '';           // almacena el código traducido
    this.terminated = false;    // control de break
  }

  visitPrograma(ctx) {
    this.visit(ctx.instrucciones());

    // Muestra la traducción en JavaScript al final
    console.log('\n=== Código JavaScript generado ===\n');
    console.log(this.output.trim());
  }

  visitInstrucciones(ctx) {
    const hijos = ctx.children || [];

    for (const child of hijos) {
      if (
        child.constructor.name.includes("InstruccionesContext") ||
        child.constructor.name.includes("InstruccionContext")
      ) {
        this.visit(child);
      }
    }
  }

  visitInstruccion(ctx) {
    this.terminated = false; // ✅ reinicia el break en cada bucle
    return this.visit(ctx.bucle());
  }

  visitBucle(ctx) {
    const condition = ctx.condicion().getText();

    if (condition === '1') {
      this.output += 'do {\n';
      this.visit(ctx.sentencia());
      this.output += '} while (true);\n';
    } else if (condition === '0') {
      this.output += 'do {\n';
      this.visit(ctx.sentencia());
      this.output += '} while (false);\n';
    }
  }

  visitSentencia(ctx) {
    const hijos = ctx.children || [];

    for (const child of hijos) {
      if (this.terminated) break;

      if (child.constructor.name.includes("SalidaContext")) {
        this.visit(child);
      } else if (child.constructor.name.includes("TerminarContext")) {
        this.visit(child);
        break;
      }
    }
  }

  visitSalida(ctx) {
    const cadena = ctx.cadena().getText(); // incluye comillas
    const texto = cadena.slice(1, -1);     // quita comillas

    console.log(texto);                    // interpretación directa
    this.output += `  console.log("${texto}");\n`; // traducción JS
  }

  visitTerminar(ctx) {
    this.terminated = true;
    this.output += `  break;\n`; // traducción JS
  }
}
