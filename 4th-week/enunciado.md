

# Ta-Te-Ti

#####Ta-Te-Ti == Gato == La vieja == Tres en línea

El juego estaría conformado por una **clase** Game con las siguientes propiedades

* Board: matriz 3x3 del tablero, en la cual cada casilla tendría valores del 0 al 2
  * 0 significa que nadie ha jugado esa posicion
  * 1 que ha jugado el primer jugador (X)
  * 2 que ha jugado el segundo jugador (O)
* currentPlayer: un número que podría ser 1 y 2 y representa el jugador que le toca en este turno

Y los siguientes métodos

* initialize: no recibe argumentos, inicializa las propiedades del objeto (tablero vacío y es turno del primer jugador)
* play(x, y): recibe dos números que son las posiciones que el jugador ha escogido, debe modificar la propiedad Board
para actualizar la jugada
* isGameOver: no recibe argumentos, devuelve *true* si el juego se ha acabado y *false* si quedan turnos por jugar aún
* gameWinner: no recibe argumentos, devuelve 0 si ninguno de los jugadores ganó, 1 si ganó el primer 
jugador y 2 si ganó el segundo
* positionIsAvailable: indice si cierta posición en la grilla es jugable


Una **clase** gridComponent la cual en su constructor recibe una **función** y un *estado* inicial

* La función es un **callback** de cuando un jugador hace click en alguno de los recuadros de la grilla. Es decir,
esta clase tiene que agregar lo(s) event listener(s) de click
* El estado es una matriz 3x3 que representa lo que este componente debe mostrar en cada recuadro 

Esta clase debe tambien tener un método *render* que se encarga de poner o actualizar los datos en pantalla
para que el usuario pueda jugar. Se pueden agregar otros métodos pero el único obligatorio es el render.

Una **clase** App la cual en su constructor debe

* Inicializar un nuevo juego con Game
* Inicializar un nuevo tablero con gridComponent
* Enviar una función **callback** a gridComponent para manejar la lógica con la clase Game