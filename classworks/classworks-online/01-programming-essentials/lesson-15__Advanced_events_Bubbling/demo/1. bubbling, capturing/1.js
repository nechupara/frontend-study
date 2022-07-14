/**
 * События: всплытие.
 */

const cart = document.querySelector('.cart');
const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const handler = event => {
 alert(`event.target: ${event.target.nodeName} event.currentTarget: ${event.currentTarget.nodeName}`)
};

const globalHandler = (event, globalTarget) => {
  alert(`globalHandler: event.target: ${event.target.nodeName}	event.currentTarget: ${globalTarget}`)
};

window.addEventListener('click', (event) => globalHandler(event,'window'));
document.addEventListener('click', (event) => globalHandler(event,'document'));
document.body.parentElement.addEventListener('click', handler);
document.body.addEventListener('click', handler);

cart.addEventListener('click', handler);
ul.addEventListener('click', handler);

listItems.forEach(item => item.addEventListener('click', handler));
