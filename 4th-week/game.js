function Game() {
	this.board = undefined;
	this.score = undefined;
	this.currentPlayer = undefined;

	this.initialize = function( ) {
		// Start game
		config('Press OK to begin');
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
		}
		return isAvailable;
	}


	this.isGameOver = function() {
		var bc = this.board;
		
		// diagonal
		if (bc[0][0] == bc[1][1] && bc[1][1] == bc[2][2] && (bc[0][0] == 1 || bc[0][0] == 2)) return true;
		if (bc[0][2] == bc[1][1] && bc[1][1] == bc[2][0] && (bc[0][2] == 1 || bc[0][2] == 2)) return true;
		
		//horizontal
		if (bc[0][0] == bc[0][1] && bc[0][1] == bc[0][2] && (bc[0][0] == 1 || bc[0][0] == 2)) return true;
		if (bc[1][0] == bc[1][1] && bc[1][1] == bc[1][2] && (bc[1][0] == 1 || bc[1][0] == 2)) return true;
		if (bc[2][0] == bc[2][1] && bc[2][1] == bc[2][2] && (bc[2][0] == 1 || bc[2][0] == 2)) return true;

		//vertical
		if (bc[0][0] == bc[1][0] && bc[1][0] == bc[2][0] && (bc[0][0] == 1 || bc[0][0] == 2)) return true;
		if (bc[0][1] == bc[1][1] && bc[1][1] == bc[2][1] && (bc[0][1] == 1 || bc[0][1] == 2)) return true;
		if (bc[0][2] == bc[1][2] && bc[1][2] == bc[2][2] && (bc[0][2] == 1 || bc[0][2] == 2)) return true;
		
		return false;
	}


	this.gameWinner = function() {
		// diagonal
		if (bc[0][0] == bc[1][1] && bc[1][1] == bc[2][2] && (bc[0][0] == 1 || bc[0][0] == 2)) return bc[0][0];
		if (bc[0][2] == bc[1][1] && bc[1][1] == bc[2][0] && (bc[0][2] == 1 || bc[0][2] == 2)) return bc[0][2];
		
		//horizontal
		if (bc[0][0] == bc[0][1] && bc[0][1] == bc[0][2] && (bc[0][0] == 1 || bc[0][0] == 2)) return bc[0][0];
		if (bc[1][0] == bc[1][1] && bc[1][1] == bc[1][2] && (bc[1][0] == 1 || bc[1][0] == 2)) return bc[1][0];
		if (bc[2][0] == bc[2][1] && bc[2][1] == bc[2][2] && (bc[2][0] == 1 || bc[2][0] == 2)) return bc[2][0];

		//vertical
		if (bc[0][0] == bc[1][0] && bc[1][0] == bc[2][0] && (bc[0][0] == 1 || bc[0][0] == 2)) return bc[0][0];
		if (bc[0][1] == bc[1][1] && bc[1][1] == bc[2][1] && (bc[0][1] == 1 || bc[0][1] == 2)) return bc[0][1];
		if (bc[0][2] == bc[1][2] && bc[1][2] == bc[2][2] && (bc[0][2] == 1 || bc[0][2] == 2)) return bc[0][2];
		
		return 0;
	}


	this.positionIsAvailable = function(x,y) {
		return (this.board[x][y] == 0);
	}
}

