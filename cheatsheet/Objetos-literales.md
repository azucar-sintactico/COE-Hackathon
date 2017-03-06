# Objetos literales

Un objeto literal es una lista delimitada por llaves de nombres de propiedades y valores.

```javascript
var objetoLiteral = {
  propiedad1 : 'valor'
  propiedad2 : 123,
  // Obtiene propiedad1
  propiedadMetodo : function() {
    return this.propiedad1;
  }
}
```

Los objetos literales pueden corresponder en concepto a lo que los Javas llaman *clases estaticas*, porque
no puede ser instanciada y todos sus valores y metodos apuntan al mismo lugar.

```javascript
console.log(objetoLiteral.propiedadMetodo()) // imprime "valor"
objetoLiteral.propiedad1 = 'otro valor';
console.log(objetoLiteral.propiedadMetodo()) // imprime "otro valor"
var intentoInstanciar = new objetoLiteral() // Uncaught TypeError: objetoLiteral is not a constructor
```