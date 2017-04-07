

function App() {
  this.game = new Game();
  this.game.initialize();
  this.grid = new gridComponent(console.log, this.game.board);
}

var TaTeTi = new App();