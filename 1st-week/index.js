// Script 

var data = [
  {
    "id": 0,
    "isActive": true,
    "picture": "http://placehold.it/32x32",
    "name": "Exodoc",
    "phone": "+1 (965) 599-3563",
    "address": "468 Glendale Court, Jackpot, Utah, 9039",
    "content": "Ipsum est ad laboris qui. Aute et non aliquip eiusmod elit adipisicing pariatur velit duis nulla ea enim elit eu. Proident sunt tempor culpa esse et veniam irure aliquip nulla mollit tempor ex consectetur. Lorem labore dolor eiusmod ad ipsum consectetur minim ut. Tempor occaecat nulla fugiat occaecat fugiat nulla.\r\n"
  },
  {
    "id": 1,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "Medicroix",
    "phone": "+1 (995) 513-3965",
    "address": "523 Columbus Place, Motley, South Dakota, 7598",
    "content": "Fugiat duis officia in excepteur duis do et sit do. Commodo dolor deserunt minim aliquip ullamco. Laboris ullamco nulla officia sint sint veniam commodo excepteur dolore tempor ullamco nisi aliqua exercitation. Occaecat dolore magna voluptate culpa. Incididunt anim tempor amet commodo sint laboris voluptate excepteur. Tempor do ipsum fugiat voluptate adipisicing qui in Lorem nostrud dolore deserunt ex in do.\r\n"
  },
  {
    "id": 2,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "Snorus",
    "phone": "+1 (983) 567-3473",
    "address": "144 Strauss Street, Escondida, Nevada, 7443",
    "content": "Officia ullamco commodo exercitation in exercitation nostrud sit labore minim in sunt dolore esse dolor. Esse nulla enim quis veniam est duis laboris ea aliqua enim id sint. Magna nisi exercitation est labore adipisicing fugiat fugiat.\r\n"
  },
  {
    "id": 3,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "Furnitech",
    "phone": "+1 (920) 472-3499",
    "address": "121 Beverley Road, Greenock, Arizona, 2881",
    "content": "Proident nostrud id cupidatat aliqua consectetur pariatur tempor minim laborum eiusmod laborum dolor qui. Mollit anim consectetur adipisicing qui sint esse ea cillum. Excepteur incididunt tempor nisi do est ut esse consequat incididunt do sunt et.\r\n"
  },
  {
    "id": 4,
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": "Fuelton",
    "phone": "+1 (888) 411-3916",
    "address": "208 Central Avenue, Fairacres, Illinois, 7304",
    "content": "Cillum pariatur eiusmod ea mollit occaecat. Dolor nostrud ullamco nulla nostrud cupidatat minim ut non esse ullamco duis. Culpa amet dolor magna aliqua aute ea aute nulla ullamco velit velit nulla id. Adipisicing ullamco eiusmod elit sint qui id qui esse excepteur consequat est. Labore id tempor ullamco dolor cupidatat irure incididunt velit.\r\n"
  }
];

var menuContainer = document.querySelector('.menu-container'),
    contentContainer = document.querySelector('.content-container');


var filter = function(array, predicate) {
    var filtered = array.reduce(
        function(k, e) { if (predicate(e)) k.push(e); return k; },
        new Array()
    )
    return filtered;
}

var getCurrentPage = function(data) {
    var filtered = filter(
        data,
        function(e) { return e.isActive; }
    );

    return filtered[0];
}    

var renderMenu = function (data, container) { 
    container.innerHTML = '';
    data.forEach(function (e) { renderMenuButton(e, container) }); 
}

var renderMenuButton = function(page, container) {
    var element = document.createElement('div');
    var classes;

    if ( page.isActive ) classes = ['btn', 'btn-success','btn-page'];
    else classes = ['btn', 'btn-primary','btn-page'];

    element.setAttribute('data-href', page.id);
    element.className = classes.join(' ');
    element.innerHTML = page.name;
    container.appendChild(element);
}

var renderCurrentPage = function(page, container) {
    var element = document.createElement('div'),
        name = document.createElement('h1'),
        content = document.createElement('p');
        //image = document.createElement('img');

    //image.setAttribute('src', page.picture);
    name.innerHTML = page.name;
    content.innerHTML = page.content;
    //element.appendChild(image);
    element.appendChild(name);
    element.appendChild(content);
    container.innerHTML = element.innerHTML;
}

var delegateEventWithHandler = function (selector, handler, params = []) {
    //
    return function(event) {
        if ( event.target.matches(selector) ) {
            event.stopPropagation();
            handler.apply(event.target, [event].concat(params));
        }
    }
    //
}

var getData = function() {
    return data;
}
var setData = function(newData) {
    data = newData;
    render();
}

var changePage = function(event, getData, dispatch) {
    dispatch(
        getData()
            .map(function(e) { e.isActive = false; return e; })
            .map(function(e) { if ( e.id == event.target.getAttribute('data-href') ) e.isActive = true; return e; })
    );
}

function render() {
    renderMenu(data, menuContainer);
    renderCurrentPage(getCurrentPage(data), contentContainer);
}

render();

menuContainer.addEventListener(
    'click',
    delegateEventWithHandler(
        '.btn-page', 
        changePage, 
        [getData, setData]
    )
);