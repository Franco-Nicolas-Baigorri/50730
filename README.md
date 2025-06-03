SINTAXIS Y SEMÁNTICA DE LOS LENGUAJES

ANALIZADOR CON ANTLR4 Y JAVASCRIPT

Este repositorio contiene un analizador léxico,sintático y un intérprete básico para un lenguaje personalizado,generado con ANTLR4 y ejecutado con NODE.JS

Tecnologías utilizadas
	• ANTLR4
	• Node.js
	• JavaScript (ES Modules)
	• Visual Studio Code
Requisitos
	• Node.js instalado
	• ANTLR4 instalado globalmente o compiladores de ANTLR configurados


Instalación y uso
1. Clonar el repositorio:
    Abre una ventana de comandos (Cmd, PowerShell, o terminal en Linux).
    Clona el proyecto desde el repositorio GitHub utilizando el siguiente comando:
        git clone https://github.com/Franco-Nicolas-Baigorri/50730.git
    Si el proyecto se clonó correctamente deberías ver el mensaje “done” en tu salida
    Cambia al directorio raíz del proyecto con el comando:
        cd 50730
2. Instala las dependencias:
        npm install
3. Abre VS Code para utilizar el Analizador. Para esto ejecuta en la ventana de comandos abierta
        code .

	
4.  Ejecutar el analizador:
	Aca puede ejecutar el analizador de dos formas para obtener dos resultados distinos, uno es el arbol de derivación generado por ANTLR4 y el otro es una tabla de Tokens y Lexemas junto con el codigo traducido y ejecutado a JavaScritp

    4.1 ARBOL DE DERIVACION: 
    Para esto es necesesario que modifique el input en el launch.json que se encuentra en la carpeta .vscode el input modificado debe quedar de la siguiente forma (guardar cambios apretando ctrl+S):            "input": "input.txt",
    Luego debe pegar una de las gramaticas ejemplo que se encuentran en el archivo en el input.txt (guardar cambios apretando ctrl+S).
    Por ultimo para ejecutar debe de prsionar la tecla F5 y se generara el arbol de derivacion correspondiente al ejemplo ingrsado.


    4.2 TABLA Y CODIGO JS
    Para esto es necesesario que modifique el input en el launch.json que se encuentra en la carpeta .vscode el input modificado debe quedar de la siguiente forma (guardar cambios apretando ctrl+S):            "input": "input.js",
    Luego habra que abrir un nuevo terminal he introducir el comando:
        npm start
    Hecho esto la consola le pedira ingrasar una cadena, para esto puede tomar tambien uno de los ejemplos dados y pegarla en la consola, una vez pegado solo tiene que presionar ENTER y podra ver generado en la consola la tabla y el codigoJS corespondiente a la cadena que ingreso.