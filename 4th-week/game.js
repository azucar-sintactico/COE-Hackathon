function Game() {
	this.board = undefined;
	//this.playerOne = playerOne;
	//this.playerTwo = playerTwo;
	this.score = undefined;
	this.currentPlayer = undefined;
	//this.plays = plays;

	this.initialize = function( ) {
		// Start game
		config('Press OK to begin');
		// const buttonStart = document.querySelector('.buttonStart');
		this.board = [[0, 0, 0],
				          [0, 0, 0],
			          	   [0, 0, 0]];
		this.currentPlayer = 1;
	}

	this.play = function(x, y) {

		var isAvailable = this.positionIsAvailable(x, y)
		if ( isAvailable ) {
			// jugamos
			this.board[x][y] = this.currentPlayer;
			this.currentPlayer = (this.currentPlayer  === 1) ? 2 : 1; 
			//return true;
		}// else {
		//	return false;
		//}
		return isAvailable;
	}


	this.isGameOver = function() {
		var boardCheck = this.board;
		for ( var x = 0; x < boardCheck.lenght; x++) {
			for ( var y = 0; y < boardCheck.lenght; y++) {
				boardCheck[x][y] = 
			}
		}
		// evalua si es Game Over
		const gameOver ;

		if(gameOver == true) {

		}
		gameWinner();
		return gameOver;
	}


	this.gameWinner = function() {
		// evalua si hay ganador
		if (playerOne == 1) {
			return 1;
		}  else if (playerTwo == 1 ) {
			return 2;
		} else {
			return 0;
		}
	}


	this.positionIsAvailable = function(x,y) {
		return (this.board[x][y] == 0);
		//if(a == 0) {
		//	return true;
		//}else{
		//	return false;
		//}
	}
}


const board = document.querySelector('div');

