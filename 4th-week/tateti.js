const Game = function(){
  this.board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ];
  this.currentPlayer = 1;
  this.winner = 0;
};
Game.prototype = {
  getBoard:function(){
    return this.board;
  },
  setCurrentPlayer:function(player){
    this.currentPlayer = player;
  },
  getCurrentPlayer:function(){
    return this.currentPlayer;
  },
  play:function(x,y){
     if(this.isGameOver()){
         return false;
     }
     else {
      if(!this.positionIsAvailable(x,y)) return;
      this.board[y][x] = this.getCurrentPlayer();
      this.gameWinner();
      this.setCurrentPlayer((this.currentPlayer === 1) ? 2 : 1);
    }
  },
  isGameOver:function(){
    return (this.isFullBoard() || this.isGameWinner());
  },
  isFullBoard:function(){
    return this.board.every(function(row){ return row.indexOf(0) === -1;});
  },
  isGameWinner:function(){
    return this.winner;
  },
  gameWinner:function(){
    
    var player = this.getCurrentPlayer();
    var result;
    

    //FILAS
    var c1 = this.board.some(function(row){
      return row.every(function(col){ return col === player });
    });
    
    // COLUMNAS
    var cols = [];
    this.board.forEach(function(rows,i){
      rows.forEach(function(col,j){
        if(typeof cols[j] == 'undefined'){
          cols[j] = [];
        }
        cols[j][i] = col
      });
    })
    var c2 = cols.some(function(row){
      return row.every(function(col){ return col === player });
    });

    // Diagonal1
    var c3 = this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player;
    // Diagonal2
    var c4 = this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player;

    if(c1 || c2 || c3 || c4){
      this.winner = this.currentPlayer;
    }

    // return player;
  },
  positionIsAvailable:function(x,y){
    return (this.board[y][x] === 0);
  }
};

const GridComponent = function(cb, initState){
  this.cb = cb;
  this.initState = initState;
  // this.sarasa = [];
  this.setElements();
};
GridComponent.prototype = {
  setElements:function(){
    const self = this;
    this.container = document.querySelector('#tateti');
    this.initState.forEach((_row, y)=>{
      
      let row = document.createElement('div');
      row.className = 'row';
      _row.forEach((_col, x)=>{
        let col = document.createElement('div');
        col.className = 'col';
        col.dataset.x = x;
        col.dataset.y = y;
        col.addEventListener('click',()=>{
          self.cb(x,y,col)
        })
        row.appendChild(col);
      });
      self.container.appendChild(row);
      // self.sarasa.push(row);
    });
    document.body.appendChild(this.container);
  },
  render: function(div){
    div.innerHTML = (this.initState[div.dataset.y][div.dataset.x] === 1) ? 'x' : 'o';
  }
};

const App = function(){
  const self = this;
  this.game = new Game();
  this.gridComponent = new GridComponent(function(x,y,div){
      self.game.play(x,y);
      self.gridComponent.render(div);
  },this.game.getBoard());
};

var app = new App();