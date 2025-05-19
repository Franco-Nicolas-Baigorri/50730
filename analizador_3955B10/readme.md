# Analizador Sintáctico con ANTLR4 y JavaScript

**Nombre:** Franco Nicolás Baigorri  
**Legajo:** 50730  
**Tema:** 3955B_10  
**Carrera:** Ingeniería en Sistemas de Información  
**Materia:** Sintaxis y Semántica de los Lenguajes

---

## 📚 Descripción del Proyecto

Este proyecto consiste en la construcción de un **analizador léxico y sintáctico** utilizando **ANTLR4** y **JavaScript**, el cual permite interpretar una porción adaptada del lenguaje C, específicamente centrado en estructuras `do-while`, la instrucción `puts` y la instrucción `break`.

El analizador procesa archivos de entrada (`input.txt`) con código fuente y realiza las siguientes tareas:

1. **Análisis léxico y sintáctico:** Indica si el código es correcto o presenta errores (con línea y motivo).
2. **Tabla de lexemas-tokens:** Muestra los tokens reconocidos junto a sus lexemas.
3. **Árbol de análisis sintáctico:** Representación estructurada del código fuente.
4. **Interpretación:** Traduce el código fuente a JavaScript e imprime los resultados esperados.

---

## 🧪 Ejemplos Incluidos

Se incluyen **cuatro archivos** como ejemplos de entrada: dos correctos y dos incorrectos.

### ✅ Ejemplo Correcto 1 (ejemplo_correcto1.txt)

```c
do {
  puts("Hola");
  break;
} while (1);
```

**Explicación paso a paso:**
- El programa comienza con la estructura `do { ... } while (1);`
- Dentro del bucle se imprime `"Hola"` con `puts(...)`.
- Luego se ejecuta `break;`, que interrumpe el bucle.
- Aunque la condición es `1` (true), el bucle termina por el `break`.
- La salida esperada en consola es: `Hola`

### ✅ Ejemplo Correcto 2 (ejemplo_correcto2.txt)

```c
do {
  puts("Primero");
  puts("Segundo");
  break;
  puts("Tercero");
} while (1);
```

**Explicación:**
- Se imprimen `"Primero"` y `"Segundo"`.
- Luego se encuentra un `break`, que interrumpe el bucle.
- `"Tercero"` nunca se imprime porque está luego del `break`.
- Salida:  
  ```
  Primero
  Segundo
  ```

---

### ❌ Ejemplo Incorrecto 1 (ejemplo_incorrecto1.txt)

```c
do {
  puts("Esto NO deberia verse");
} while (0);
puts("Fuera del bucle");
```

**Errores detectados:**
- La gramática definida solo permite un bucle `do-while` como instrucción raíz.
- El `puts("Fuera del bucle")` está fuera del bucle, lo cual viola la regla principal: `programa: instrucciones;` y `instrucción: bucle;`.
- El analizador reporta un error de sintaxis con ubicación y descripción.

### ❌ Ejemplo Incorrecto 2 (ejemplo_incorrecto2.txt)

```c
do {
  puts("Hola";
} while (1);
```

**Errores detectados:**
- Falta un paréntesis de cierre en `puts("Hola"`.
- El analizador detecta error léxico y de sintaxis en la línea correspondiente.

---

## 🛠️ Tecnologías Utilizadas

- [ANTLR 4.13.2](https://www.antlr.org/)
- Node.js v22.15.1
- Visual Studio Code
- Git y GitHub

---

## 📂 Estructura del Proyecto

```
analizador_3955B10/
├── antlr-4.13.2-complete.jar
├── SubC.g4
├── CustomSubCVisitor.js
├── index.js.js
├── input.txt
├── ejemplo_correcto1.txt
├── ejemplo_correcto2.txt
├── ejemplo_incorrecto1.txt
├── ejemplo_incorrecto2.txt
├── generated/
├── node_modules/
├── package.json
├── README.md
└── gramatica.txt
```

---

## ▶️ Instrucciones para ejecutar

1. Asegurarse de tener instalado Java (JRE 1.8 o superior) y Node.js (versión LTS).
2. Clonar el repositorio:
   ```bash
   git clone https://github.com/Franco-Nicolas-Baigorri/50730.git
   cd 50730/analizador_3955B10
   ```
3. Instalar dependencias:
   ```bash
   npm install
   ```
4. Generar los analizadores desde la gramática:
   ```bash
   java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor SubC.g4 -o generated
   ```
5. Ejecutar el analizador con uno de los archivos de entrada:
   ```bash
   node index.js.js
   ```

Podés cambiar el contenido del archivo `input.txt` por alguno de los ejemplos incluidos.

---

## 🔗 Autor

Franco Nicolás Baigorri  
Legajo: 50730  
[Repositorio en GitHub](https://github.com/Franco-Nicolas-Baigorri/50730)

---

**¡Gracias por visitar el proyecto!**
