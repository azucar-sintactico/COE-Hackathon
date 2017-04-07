

function App() {
  var self = this;
  this.game = new Game();
  this.game.initialize();
  this.grid = new gridComponent(function(event, position) {
    if (self.game.play(position.x, position.y)) {
      if (self.game.isGameOver()) {
        console.log('Ha ganado el papito mi rey', self.game.gameWinner())
        setTimeout(function() {
          self.game.initialize();
          self.grid.state = self.game.board;
          self.grid.render();
        }, 1000);
      }
      else {
        console.log('Le toca jugar al papedeloshelaos', self.game.currentPlayer)
      }
    }
    self.grid.state = self.game.board;
    self.grid.render();
  }, this.game.board);
}


var TaTeTi = new App();