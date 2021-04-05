# MELI CHALLENGE

## Instalación y uso

### `npm install`

### `npm start`

Este comando inicia cliente y servidor al tiempo

client: http://localhost:3000/
server: http://localhost:5000/

### `npm test`

Comando para correr los test del proyecto del servidor y el cliente


# Descripción del proyecto

El proyecto cumple con todos los requisitos funcionales, adicional a eso agregue unos banners tomados de la página actual y un carrito de compras para mejorar la experiencia asi que pueden ingresar por uno de los banners seleccionar el producto que deseen y dar click en el botón "Comprar ahora" una o varia veces (esto agrega mas unidades del producto), luego de esto pueden ver que productos estan en el carrito y eliminar alguno si lo desean o seguir buscando productos usando la barra de búsqueda.

## Front End

Para el front se usaron las siguientes tecnologias:

  * React
  * Redux: Para el manejo de estado de la aplicación especialmente en el carrito de compras
  * SASS
  * CSS Modules: Solo carga los estilos necesarios cuando se renderizan componentes en pantalla
  * NextJS: Para el SSR
  * Jest: Pruebas unitarias indicando cobertura
  * Isomorphic fetch: para hacer peticiones sin importar si una pagina fue renderizada desde el server o desde el cliente

## Middle End

Para el middle end se usaron las siguientes tecnologias:

  * Express
  * Isomorphic fetch: para hacer peticiones hacia el api de MELI
  * NodeJS
  * Jest: Pruebas unitarias indicando cobertura


Tambien se uso subpackage para que un un solo comando se ejecutara todo lo necesario para hacer la instalación de dependencias, correr las pruebas o iniciar todo el proyecto


Eso es todo, espero les guste 🐱‍

