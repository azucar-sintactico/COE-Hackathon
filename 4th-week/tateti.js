const Game = function(){
  this.board = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ];
  this.currentPlayer = 1;
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
    this.board[y][x] = this.getCurrentPlayer();
  },
  isGameOver:function(){
    console.log('isGameOver?');
    return false;
  },
  positionIsAvailable:function(x,y){
    return (this.board[y][x] === 0);
  }
};

const GridComponent = function(cb, initState){
  this.cb = cb;
  this.initState = initState;
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
          self.cb(x,y)
        })
        row.appendChild(col);
      });
      self.container.appendChild(row);

    });
    document.body.appendChild(this.container);
  },
  render:()=>{

  }
};

const App = function(){
  const self = this;
  this.game = new Game();
  this.gridComponent = new GridComponent((x,y)=>{
    if(self.game.positionIsAvailable(x,y)){
      self.game.play(x,y);
      console.log(self.game.board.toString())
    }
  },this.game.getBoard());
};

var app = new App();