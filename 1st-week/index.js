
var filter = (array, predicate) => {
    return filtered = array.reduce(
        (k, e) => { if (predicate(e)) k.push(e); return k; },
        new Array()
    )
}

var delegate = (selector, handler, context, params = []) => {
    return (event) => { //
        if ( event.target.matches(selector) ) {
            event.stopPropagation();
            handler.apply(context, [event].concat(params));
        }
    } //
}

var clean = (element) => element.innerHTML = '';


var AppComponent = function(data, container) {
  this.data = data;
  this.container = document
    .querySelector(container);
  this.contentContainer = this.container
    .querySelector('.content-container');
  this.menuContainer = this.container
    .querySelector('.menu-container');

  this.attachEvents()
      .render()
      
}
AppComponent.prototype.getCurrentPage = function() {
  return filter(
    this.data,
    (page) => page.isActive
  )[0];
}
AppComponent.prototype.renderMenu = function () { 
    clean(this.menuContainer)
    this.data.forEach(this.renderButton.bind(this));
    return this;
}
AppComponent.prototype.renderButton = function(page) {
    var button = document.createElement('div');
    button.setAttribute('data-href', page.id);
    button.innerHTML = page.name;
    button.className = 'btn btn-page';
    if ( page.isActive ) 
      button.className += ' btn-success'
    else 
      button.className += ' btn-primary'
    this.menuContainer.appendChild(button);
}
AppComponent.prototype.renderCurrentPage = function() {
  var name    = document.createElement('h1'),
      content = document.createElement('p'),
      page    = this.getCurrentPage();
  clean(this.contentContainer)
  name.innerHTML    = page.name;
  content.innerHTML = page.content;
  this.contentContainer.appendChild(name);
  this.contentContainer.appendChild(content);
  return this;
}
AppComponent.prototype.changePage = function(event) {
  this.data = this.data
    .map((page) => { page.isActive = false; return page; })
    .map((page) => { if ( page.id == event.target.getAttribute('data-href') ) page.isActive = true; return page; })
  this.render();
}
AppComponent.prototype.render = function() {
  this.renderMenu()
      .renderCurrentPage();
  return this;
}
AppComponent.prototype.attachEvents = function() {
  this.menuContainer.addEventListener(
    'click',
    delegate('.btn-page', this.changePage, this)
  )
  return this;
}


AppComponent.factory = (selector) => {
  return (data) => {
    return new AppComponent(
      data,
      selector
    )
  }
}


fetch('./menu.json')
  .then( (response) => response.json() )
  .then( AppComponent.factory('.wrapper') )

