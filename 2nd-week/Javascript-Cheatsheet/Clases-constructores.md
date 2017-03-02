

# Constructores y clases

Los **constructores** son **funciones** que inicializan un objeto cuando es llamado con la palabra clave **new**.
Todos los objetos creados a traves de un constructor comparten el mismo **prototype**, lo que nos permite tener objetos
con la misma estructura y distintos valores. Esto seria, lo que los Javas llaman *clase*.

```javascript
function musico(instrumento) {
  this.instrumento = instrumento;
}
musico.prototype.tocar = function() {
  console.log('Toco', this.instrumento, 'excelente!');
}

var pato = new musico('bateria');
var gabo = new musico('guitarra');

pato.tocar(); // Toco bateria excelentemente
gabo.tocar(); // Toco guitarra excelentemente
```