import React from 'react';
import ReactDom from 'react-dom';

import App from './Components/App';

var root = document.getElementById('root');
ReactDom.render(<App />, root);

var form = document.getElementsByTagName('form')[0];
var field1 = form.querySelector('[name="name"]');
var field2 = form.querySelector('[name="owner"]');
var field3 = form.querySelector('[name="date"]');
var field4 = form.querySelector('[name="time"]');
var field5 = form.querySelector('[name="content"]');
var listWrapper = document.querySelector('.list');

var pets = [];

form.onsubmit = function (event) {
  event.preventDefault();
  
  var petName = field1.value.trim();
  var master  = field2.value.trim();
  var day     = field3.value.trim();
  var time    = field4.value.trim();
  var notes   = field5.value.trim();

  if (petName === "") return;

  var item = {
    animal: petName,
    person: master,
    date: day + ' ' + time,
    text: notes,
  }
  pets.push(item);

  form.reset();
  renderHtml(pets);
}

function renderHtml(array) {
  listWrapper.innerHTML = '';
  array.forEach(function(pet){
    var card = renderCard(pet);
    listWrapper.appendChild(card);
  });
}

function renderCard(data) {
  var li = document.createElement('li');

  var div = document.createElement('div');
  div.classList.add('float-right');
  div.textContent = data.date;

  var h3 = document.createElement('h3');
  
  var span = document.createElement('span');
  span.textContent = data.animal;

  var button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
  button.textContent = 'Удалить';

  var h5 = document.createElement('h5');
  h5.textContent = data.person;

  var p = document.createElement('p');
  p.textContent = data.text;
  
  h3.appendChild(span);
  h3.appendChild(button);
  li.appendChild(div);
  li.appendChild(h3);
  li.appendChild(h5);
  li.appendChild(p);

  return li;
}

// код тут