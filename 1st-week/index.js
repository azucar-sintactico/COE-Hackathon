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

var menu = document.querySelector('.menu-container');
var contents = document.querySelector('.content-container');
var  ul = document.createElement('ul'); 


//var header = lista.appendChild(contenido);
var menuContainer = menu.appendChild(ul);

for(var i in data) {
        // create an arbitrary li element
  var li = document.createElement('li'),
     contenido = document.createTextNode(nombres); // create a textnode to the document

  li.appendChild(contenido); // append the created textnode above to the li element
  ul.appendChild(li); // append the created li element above to the ul element
}

//traer names
var nombres = data.filter(function (n) {
  return  n.id === 4 || n.id == 3;
});
console.log(nombres);
