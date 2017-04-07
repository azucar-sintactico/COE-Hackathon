

function gridComponent(clickHandler, state) {
  this.state = state
  this.container = this.containerGenerator()
  this.attachEvents(clickHandler)
}

gridComponent.prototype.attachEvents = function(clickHandler) {
  this.container.addEventListener('click', function(event) {
    if (event.target.matches('.square')) {
      event.stopPropagation()
      const square = event.target
      const x = square.getAttribute('data-x')
      const y = square.getAttribute('data-y')
      clickHandler.apply(square, [event, {'x' : x, 'y' : y}])
    }
  })
}

gridComponent.prototype.containerGenerator = function() {
  const container = document.createElement('div')
  container.classList.add('grid-component')
  document.querySelector('body').appendChild(container)
  return container;
}

gridComponent.prototype.renderSquare = function(i, j) {
  const square = document.createElement('div')
  square.classList.add('square')
  if (this.state[i, j] === 1) square.innerHTML = 'X'
  else if(this.state[i, j] == 2) square.innerHTML = 'O'
  square.style.left = (i * 200) + 'px'
  square.style.top = (j * 200) + 'px'
  square.setAttribute('data-x', i)
  square.setAttribute('data-y', j)
  this.container.appendChild(square)
}

gridComponent.prototype.render = function() {
  this.container.innerHTML = '';
  for(let i = 0; i < this.state.length; i++)
    for(let j = 0; j < this.state.length; j++)
      this.renderSquare(i, j)
}