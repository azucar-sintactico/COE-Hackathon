# Java vs Javascript


Los programadores de Java y Javascript puede argumentar por horas cual de los dos labura en el
mejor lenguaje de programacion. Los Javas dicen que sus programas son mas sencillos de leer y son menos 
propensos a los errores. Mientras que los mas **pro** del COE aka. los Frontend, se rien de que los Javas
tienen que instanciar la clase array [y, nosotros, no] y de que sus tickets son mucho mas aburridos, je.

Una de las discrepancias que hay entre los Javas y los Fronts es que nunca se ponen de acuerdo es la manera
de nombrar los identificadores como variables y funciones. En el mundo de los Java los identificadores
compuestos por mas de una palabra se hacen de la siguiente manera: las palabras todas se escriben en minuscula y son
separadas por un simbolo underscore "\_", por ejemplo esta\_variable_es\_muy\_larga, devuelvo\_un\_json\_feo.

No obstante, nosotros los Front escribimos los identificadores con la primera palabra en minuscula y el resto capitalizada,
en caso de que la palabra sea un acronimo la escribimos solo con mayusculas por ejemplo: $elemento, manipularDOM, 
laPMEscribeMuchoPorSkype, javascriptEsGenial.

El reto consiste en escribir un programa en Javascript capaz de traducir identificadores de Java a identificadores 
de Javascript y viceversa.

Para ello, se debe escribir una funcion "traducir" que, dado un arreglo de identificadores, esta por cada identificador 
detectara de que lenguaje es y debera traducirla al otro lenguaje, retornando el resultado en un arreglo con 
las traducciones en las posiciones correspondientes. 

Se permite que la funcion suponga que todos los identificadores estan escritos de manera correcta en su lenguaje,
y la funcion no tiene porque saber si una palabra representa un acronimo.

Para probar la veracidad de esta funcion, se puede correr *npm run test-week2* en la linea de comandos desde la raiz
de este proyecto, o bien, ejecutar dentro de esta carpeta mocha *test.js*

**Ejemplo de uso**

```javascript
traducir([
  'javascriptEsGenial',
  'devuelvo_un_json',
  'un_ejemplo',
  'otroEjemplo',
  'estamosEnMRM'
]) //=> retorna 

[
  'javascript_es_genial',
  'devuelvoUnJson',
  'unEjemplo',
  'otro_ejemplo',
  'estamos_en_mrm'
]
```