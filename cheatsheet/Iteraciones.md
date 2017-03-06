

# Iteraciones

Javascript es un lenguaje que se caracteriza, principalmente por:

* Todo es un objeto.
* Los objetos son diccionarios (maps, para los javas).

En este artículo tratamos el problema de iterar sobre objetos en general, siguiendo este orden de dificultad:

* Arreglos
* Objetos literales

Cada uno en su forma imperativa y declarativa.

## Arreglos

Supongamos que tenemos el siguiente arreglo que contiene las imagenes de una galería y queremos agregar cada una en un
contenedor de imagenes para nuestro componente con la function 'agregarImagen'.

```javascript
var imagenes = [
    {
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "http://placehold.it/600/92c952",
  },
  {
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "http://placehold.it/600/771796",
  },
  {
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "http://placehold.it/600/24f355"
  },
]
/**
 * Agrega una imagen a la galería
 * @param {string} title
 * @param {string} url
 * @return {void}
 */
function agregarImagen(title, url) {
  /* ... */
  /* proceso de agregar la imagen al contenedor */
}
```

### Forma imperativa

#### Clasica

Utilizamos las estructuras de control clásicas **for** y **while**. Contendo los elementos del arreglo,
este conteo siempre comienza desde cero.

```javascript
/* for ( sentencia de inicio de ciclo; 
  expresion que indica si continuar el ciclo; 
  sentencia al final de cada iteracion )
  */
for (var i = 0; i < imagenes.length; i++) {
  var titulo = imagenes[i].title;
  var url = imagenes[i].url;
  agregarImagen(titulo, url);
}
```

### Con syntactic sugar

Dado que, los arreglos son una lista de clave - valor (donde las claves son numericas), podemos utilizar las siguientes forma "dulce".

#### for...in

```javascript
// Itera sobre los indices del arreglo
for (var i in imagenes) {
  var titulo = imagenes[i].title;
  var url = imagenes[i].url;
  agregarImagen(titulo, url);
}
```

#### for...of

Esta forma de iteracion puede no ser compatible, aunque su uso es mucho mas comodo: **esta disponible en ES6**. Es decir, por el momento en la ultimas versiones de Chrome, Firefox y Edge.

```javascript
// Itera sobre los valores del arreglo
for (var imagen of imagenes) {
  var titulo = imagen.title;
  var url = imagen.url;
  agregarImagen(titulo, url);
}
```

### Forma declarativa

En la forma declarativa, pasamos funciones y no nos preocupamos por *como* se realiza la iteracion.


```javascript
// forEach espera una funcion que recibe el valor y la clave (opcionales)
imagenes.forEach(function(imagen) {
  var titulo = imagen.title;
  var url = imagen.url;
  agregarImagen(titulo, url)
})
```

Si tenemos soporte para ES6, podemos usar las funciones de *flecha doble*

```javascript
imagenes.forEach( (imagen) => agregarImagen(imagen.title, imagen.url) )
```

Tambien podemos rediseñar nuestra funcion que agrega la imagen para recibir el objeto directamente.

```javascript
function agregarImagen(imagen) {
  var title = imagen.title;
  var url = imagen.url;
  /* el mismo proceso que teniamos antes */
}
imagenes.forEach( agregarImagen );
```