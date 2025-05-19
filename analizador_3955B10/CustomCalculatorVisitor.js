import SubCVisitor from './generated/SubCVisitor.js';
import antlr4 from 'antlr4';

export default class CustomSubCVisitor extends SubCVisitor {
  constructor() {
    super();
    this.output = '';         // Por si en el futuro querés guardar JS traducido
    this.terminated = false;  // Control de break dentro del bucle
  }

  visitPrograma(ctx) {
    return this.visit(ctx.instrucciones());
  }

  visitInstrucciones(ctx) {
    const instrucciones = ctx.instruccion();
    if (Array.isArray(instrucciones)) {
      for (let instr of instrucciones) {
        if (this.terminated) break;
        this.visit(instr);
      }
    } else if (instrucciones) {
      this.visit(instrucciones);
    }
  }

  visitInstruccion(ctx) {
    return this.visit(ctx.bucle());
  }

  visitBucle(ctx) {
    const condition = ctx.condicion().getText(); // "1" o "0"
    do {
      if (this.terminated) break;
      this.visit(ctx.sentencia());
    } while (condition === '1');
  }

  visitSentencia(ctx) {
    if (ctx.salida()) {
      return this.visit(ctx.salida());
    } else if (ctx.terminar()) {
      return this.visit(ctx.terminar());
    } else {
      const salidas = ctx.salida();
      if (Array.isArray(salidas)) {
        for (let s of salidas) {
          this.visit(s);
        }
      } else if (salidas) {
        this.visit(salidas);
      }
    }
  }

  visitSalida(ctx) {
    const cadena = ctx.cadena().getText(); // incluye las comillas
    const texto = cadena.slice(1, -1); // quita las comillas
    console.log(texto);
  }

  visitTerminar(ctx) {
    this.terminated = true;
  }
}
