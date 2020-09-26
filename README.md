# Practica 6  - 201504242

## Autor ✒️

* **Pablo Javier Blanco Calderon** - *201504242* - [blanco-pablo](https://github.com/blanco-pablo)
* __LINK__ dek video: https://drive.google.com/file/d/1QIVzrydtaB0BdTrUoXXIxyRU8JTD7O--/view?usp=sharing


## Restricciones 🚀

* Tomar como base la práctica anterior (crear rama feature y al final merge a develop/master).

* Según el lenguaje seleccionado, integrar una herramienta para realizar las pruebas unitarias de la menos una clase.

* Configurar Sonarqube para que ejecute las pruebas y que calcule la cobertura de pruebas unitarias.

* 3 microservicios

## Caracteristicas :necktie:

* Cliente
    * Solicitar pedido al restaurante
    * Verificar estado del pedido al restaurante
    * Verificar estado del pedido al repartidor

* Restaurante
    * Recibir pedido del cliente
    * Informar estado del pedido al cliente
    * Avisar al repartidor que ya está listo el pedido
* Repartidor
    * Recibir pedido del restaurante
    * Informar estado del pedido al cliente
    * Marcar como entregado
# Herramientas :hammer:

* __Visual Studio Code__

    Version: 1.47.3 (user setup)
    Commit: 91899dcef7b8110878ea59626991a18c8a6a1b3e
    Date: 2020-07-23T13:12:49.994Z
    Electron: 7.3.2
    Chrome: 78.0.3904.130
    Node.js: 12.8.1
    V8: 7.8.279.23-electron.0
    OS: Windows_NT x64 10.0.18362

__Aca el [link](https://code.visualstudio.com/download) de descarga.__

* __Express__

    Fast, unopinionated, minimalist web framework for node JS.
    Express esta disponible para que cualquier usuarios pueda descargarlo de forma totalmente gratuita desde el __[siguiente enlace](https://www.npmjs.com/package/express)__

# Pre-Requisitos :bulb:

1. __Node JS:__ Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. [Link de Descarga ACA.](https://nodejs.org/es/download/)

2. __NPM:__ npm es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript, bajo Artistic License 2.0. [Link de Descarga ACA.](https://www.npmjs.com/get-npm)

* Para verificar si tiene Node.js instalado, ejecute este comando en su terminal:
```bash
node -v
```
* Para confirmar que tiene npm instalado, puede ejecutar este comando en su terminal:
```bash
npm -v
```
# Uso 🛠️

1. Clonar la rama Practica4_SA del repositorio: https://github.com/blanco-pablo/Practica6_201504242
```bash
git clone https://github.com/blanco-pablo/Practica6_201504242

```
* Entre a la carpeta que quiere ejecutar:
```bash
cd '.\Cliente\'
```
```bash
cd '.\Repartidor\'
```
```bash
cd '.\Restaurante\'
```
```bash
cd '.\ESB\'
```
2. Correr el comando para descargar las dependencias especificadas en el package.json
```bash
npm install
```

* Podremos ver que instala las siguientes dependencias:
    * "express": "^4.17.1", documentacion [aqui](https://www.npmjs.com/package/express)
    * "express-soap": "^1.1.2", documentacion [aqui](https://www.npmjs.com/package/express-soap)
    * "jade": "^1.11.0", documentacion [aqui](https://www.npmjs.com/package/express-jade)
    * "request": "^2.88.2", documentacion [aqui](https://expressjs.com/es/api.html)

3. Ejecutar el test en sonar seria:
```bash
npm run sonar
```
4. En el navegador abrir:
    * Cliente SONAR: http://localhost:9000
---
