

# Promesas, iteradores y recursión

En javascript para frontend, ejecutamos código en un ambiente limitado e incierto: los navegadores. El código secuencial es, a veces, una desventaja pues
paraliza el procesamiento del cliente y por ésta razón el lenguaje está muy orientado a acciones asíncronas para eventos y requests.

La forma más básica de programación asíncrona es el uso de **callbacks**, consideremos el siguiente código usando jQuery.

```javascript
var usersService = 'https://jsonplaceholder.typicode.com/users'
$.get(usersService).then(function(response) {
    // Hacer algo con response!
    console.log(response);
});
```

O, sabiendo que las funciones en javascript son directamente valores que podemos pasar como argumento

```javascript
var showUsers = function(response) {
    // hacer algo con response
    console.log(response);
}
var usersService = 'https://jsonplaceholder.typicode.com/users'
$.get(usersService).then(showUsers);
```

Al principio, los callbacks son geniales para resolver problemas sencillos... pero luego... podemos entrar en el **callback hell**, cuando se anidan y sucede un error,
es dificultoso encontrar el problema que lo causa. Un ejemplo de ésto es cuando, a partir de la respuesta de un AJAX, tenemos que hacer otro (cosa que puede ser bastante común)

```javascript
var userPostsService = 'https://jsonplaceholder.typicode.com/posts?userId=';
var usersService = 'https://jsonplaceholder.typicode.com/posts';
$.get(usersService).then(function(users) {
    // Itero sobre cada usuario
    users.forEach(function(user) {
        $.get(userPostsService + user.id).then(function(postsOfUser) {
            console.log('Mostrando posts del usuario', user.id)
            console.log(postsOfUser)
        })
    })
});
```


El presente reto consiste en rehacer el último ejemplo dado con ciertas variantes:

* No se puede utilizar jQuery
* Para hacer requests se tiene que utilizar la función **standard** *fetch* (ver documentación completa en https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch). 
esta función devuelve una instancia de la clase *Promise* (ver documentación completa en https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)
* Lista de tareas que se deben realizar en el reto:
    * Realizar una petición a https://jsonplaceholder.typicode.com/users
    * Obtener todos los posts de los usuarios en https://jsonplaceholder.typicode.com/posts?userId=1 (solo hay que mandar el parámetro GET userId con el id que corresponde)
    * Mostrar los usuarios **por orden**: los que tengan más posts apareceran primero en pantalla, los que tengan menos al final. En cada caso, mostrar los títulos de los posts (de haber
    porque algunos usuarios no han publicado posts
* Cuando se presione el título de algún posts, debe aparecer un popup o modal que muestre el detalle del post incluyendo los comentarios del mismo (de haber)
    * La petición a los comentarios del post es por GET a esta URL https://jsonplaceholder.typicode.com/comments?postId=1 (sólo hay que mandar el parámetro postId)
* Se puede utilizar Bootstrap para hacer un poco mejor el UI

**Notas**

Una Promise es un objeto que representa datos *que no sabemos el momento en que estarán disponibles* pero declaramos que hacer con ellos cuando lo estén. Damos un ejemplo sencillo 

```javascript
var promesaDeDatos = new Promise(function(resolve, reject) {
    window.setTimeout(function() {
        resolve('Llegaron mis datos');
    }, 5000);
});

promesaDeDatos.then(function(datos) {
    // hacer algo con los datos
    console.log(datos);
});
```


**Herramientas**
* En ésta misma carpeta está disponible un archivo index.html, index.js e index.css.
* El HTML ya tiene incluído Bootstrap
* Para más información del servicio que utilizaremos, ver https://jsonplaceholder.typicode.com/
* Se puede encender un servidor con livereload haciendo *gulp server* por consola en la raíz de éste proyecto. (Recordar hacer *npm install* para tener disponible esta herramienta)