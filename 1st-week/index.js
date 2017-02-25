
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
  this.container = container;
  this.contentContainer = this.container.querySelector('.content-container');
  this.menuContainer = this.container.querySelector('.menu-container');
  this.getCurrentPage = function() {
    return filter(
      this.data,
      (page) => page.isActive
    )[0];
  }
  this.renderMenu = function () { 
      clean(this.menuContainer)
      this.data.forEach(this.renderButton.bind(this));
      return this;
  }
  this.renderButton = function(page) {
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
  this.renderCurrentPage = function() {
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
  this.changePage = function(event) {
    this.data = this.data
      .map((page) => { page.isActive = false; return page; })
      .map((page) => { if ( page.id == event.target.getAttribute('data-href') ) page.isActive = true; return page; })
    this.render();
  }
  this.render = function() {
    this.renderMenu()
        .renderCurrentPage();
    return this;
  }
  this.attachEvents = function() {
    this.menuContainer.addEventListener(
      'click',
      delegate('.btn-page', this.changePage, this)
    )
    return this;
  }
  this.render()
      .attachEvents();
}
AppComponent.factory = (selector) => {
  return (data) => {
    return new AppComponent(
      data,
      document.querySelector(selector)
    )
  }
}


fetch('./menu.json')
  .then( (response) => response.json() )
  .then( AppComponent.factory('.wrapper') )

