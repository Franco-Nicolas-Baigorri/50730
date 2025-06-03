import MiniJavaScriptVisitor from './generated/MiniJavaScriptVisitor.js';

export default class CustomMiniJSVisitor extends MiniJavaScriptVisitor {
  constructor() {
    super();
    this.variables = {};
    this.outputJS = "";
  }

  visitProgram(ctx) {
    this.visit(ctx.simpleStatement());
    return this.outputJS;
  }

  visitSimpleStatement(ctx) {
    if (ctx.switchStatement()) return this.visit(ctx.switchStatement());
    if (ctx.assignmentStatement()) return this.visit(ctx.assignmentStatement());
    if (ctx.outputStatement()) return this.visit(ctx.outputStatement());
  }

  visitAssignmentStatement(ctx) {
    const id = ctx.IDENTIFIER().getText();
    const value = this.visit(ctx.constant());
    this.variables[id] = value;
    this.outputJS += `let ${id} = ${JSON.stringify(value)};\n`;
  }

  visitOutputStatement(ctx) {
    const text = ctx.TEXT_LITERAL().getText().slice(1, -1);
    this.outputJS += `console.log(${JSON.stringify(text)});\n`;
  }

  visitConstant(ctx) {
    if (ctx.TEXT_LITERAL()) {
      return ctx.TEXT_LITERAL().getText().slice(1, -1);
    } else {
      return Number(ctx.NUMBER().getText());
    }
  }

  visitSwitchStatement(ctx) {
    const id = ctx.IDENTIFIER().getText();
    const value = this.variables[id];
    this.outputJS += `switch(${id}) {\n`;

    for (const caseCtx of ctx.caseSection()) {
      const caseVal = this.visit(caseCtx.constant());
      this.outputJS += `  case ${JSON.stringify(caseVal)}:\n`;

      const nestedVisitor = new CustomMiniJSVisitor();
      nestedVisitor.variables = this.variables;
      nestedVisitor.visit(caseCtx.simpleStatement());
      this.outputJS += nestedVisitor.outputJS + "    break;\n";
    }

    if (ctx.defaultSection()) {
      this.outputJS += `  default:\n`;
      const defaultVisitor = new CustomMiniJSVisitor();
      defaultVisitor.variables = this.variables;
      defaultVisitor.visit(ctx.defaultSection().simpleStatement());
      this.outputJS += defaultVisitor.outputJS;
    }

    this.outputJS += `}\n`;
  }
}

