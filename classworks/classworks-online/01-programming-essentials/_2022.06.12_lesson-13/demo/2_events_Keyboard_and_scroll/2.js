/**
 * События: основы.
 */

const cart = document.querySelector('.cart');

const handler = event => {
  console.log('event:', event);
  console.log('event.type:', event.type);
  console.log('event.target:', event.target);
};

cart.addEventListener('click', handler);

//Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.
document.addEventListener('keydown', function(event) {
	console.log('keydown: code - ', event.code );
	console.log('keydown: key - ', event.key );
});

document.addEventListener('keyup', function(event) {
	console.log('keyup: code - ', event.code );
	console.log('keyup: key - ', event.key );
});