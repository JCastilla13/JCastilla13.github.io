# Página web de ejemplo de la asignatura de Linguajes de Marcas (M04UF1)

Además, vamos a aprovechar para hablar de Markdown.

## ¿Qué es este repositorio?

Aquí almacenaremos la página web estática de la asignatura así como algunos ejemplos de Markdown, CSS , Javascript, etc.

- Dos **asteriscos** significa BOLD.
- Un *asterisco* significa ITALIC.
- Un _guión bajo_ significa también ITALIC.
- Para ***POLD ITALIC*** tres asteriscos.
- Guión seguido de espacio para hacer un item de lista

## Ejemplos de listas de tareas (tasks)

- [ ] Aprender HTML
- [ ] Aprender CSS
- [ ] Aprender Javascript
- [x] Aprender MySQL

# ENTIérrame (Ejercicio final)

## ¿Qué es HTML? ¿CSS? ¿Javascript?

 · HTML (Hyper Text Markup Language): Lenguaje que se utiliza para estructurar y realizar los contenidos de una página web.

 · CSS (Cascading Style Sheets): Lenguaje que se encarga del diseño visual de las páginas web. Este funciona junto con el lenguaje HTML, que se encarga de las estructuras y contenidos de las páginas web.

 · Javascript: Lenguaje de programación utilizado para desarrollo de páginas web mas interactivas. Gracias a este podemos tanto actualizar fuentes de redes sociales como mostrar animaciones y mapas interactivos.

## ¿Qué es el formato Markdown?

 · Es un lenguaje de marcado sencillo con el que podemos agregar formatos, vínculos e imágenes con facilidad al texto simple. Se puede utilizar en comentarios de ticket.

## ¿Qué es el formato JSON? ¿Cómo se convierte un objeto a JSON? ¿Y JSON a un objeto?

 · JSON (JavaScript Object Notation): Es un formato abierto utilizado como alternativa al XML para la transferencia de datos estructurados entre un servidor de Web y una aplicación Web.

 · Gracias a JSON. stringify(), convertimos un objeto o valor de JavaScript en una cadena de texto JSON.

 · Gracias a JSON.parse(), tomamos una cadena JSON y la convertimos en un objeto JavaScript.

# ERRORES DE JUEGO - LEEME RAFA

   Estos son unos pocos errores que no he conseguido arreglar en el apartado de juego.

1. Al haber mas de un item en la habitación, cuando pones coger "item", 
   pondra el mensaje correspondiente mas uno, dos... extra dependiendo de los items de la habitación. 
   Ese/os mensaje extra es el que sale cuando no esta el item que pones al hacer la acción de coger.
   A medida que vas cogiendo items, dependiendo del número de estos, el mensaje sale menos veces.
   No cuentan los items unpickables. 

2. El inventario "item descripcion", funciona pero no de la manera deseada. 
   Al escribir inventario "item", independientemente, esté el item dentro de tu inventario o no,
   saldrá la descripción de este.
   He estado un buen rato mirando, seguramente sea un error tonto pero no lo he corregido, 
   yo creo que hay algo mal con el if que mira si tengo < 0 items en el inventario.

3. El movimiento no funciona del todo bien, 
   puedes poner el nombre de una habitación "existente" y moverte hacia ese lugar o incluso otra sala.