// Menu

// Selecionar o elemento com a classe .btn-group-vertical
var btnGroup = document.querySelector('.btn-group-vertical');
var btns = document.querySelectorAll('.btn-group-vertical .btn');

// Alterar as propriedades CSS diretamente
btnGroup.style.flexDirection = 'row';
btnGroup.style.justifyContent = 'start';
btnGroup.style.alignItems = 'center';
btnGroup.style.gap = '5px';

// Alterar as propriedades CSS através de um objeto
btns.forEach(function(btn) {
  btn.style.whiteSpace = 'nowrap';
  btn.style.borderRadius = '5px';
  btn.style.margin = '0px';
});

// Jumbotron

// Selecionar o elemento com a classe .jumbotron
var jumbotron = document.querySelector('.jumbotron');
var pJumbotron = document.querySelector('.jumbotron p');
var hrJumbotron = document.querySelector('.jumbotron hr');

jumbotron.style.display = 'flex';
jumbotron.style.flexDirection = 'column';
jumbotron.style.justifyContent = 'end';
jumbotron.style.alignItems = 'end';

var jumbotronBackgroundColor = document.querySelector('.jumbotron');

jumbotronBackgroundColor.classList.add('bg-secondary');
jumbotronBackgroundColor.classList.add('text-white');

pJumbotron.style.textAlign = 'right';

hrJumbotron.style.borderTop = '1px solid #fff';

// Cards
var card2 = document.querySelectorAll('.card .btn')[1];

card2.classList.remove('btn-primary');
card2.classList.add('btn-success');


// Lista
var list = document.querySelector('.list-group');

var newItem1 = document.createElement('li');
newItem1.classList.add('list-group-item');
newItem1.textContent = "Quarto item";
list.appendChild(newItem1);

var newItem2 = document.createElement('li');
newItem2.classList.add('list-group-item');
newItem2.textContent = "Quinto item";
list.appendChild(newItem2);

var primeiroItem = list.querySelector('.active');
primeiroItem.classList.remove('active');

var quartoItem = list.querySelector(':nth-child(4)');
quartoItem.classList.add('active');