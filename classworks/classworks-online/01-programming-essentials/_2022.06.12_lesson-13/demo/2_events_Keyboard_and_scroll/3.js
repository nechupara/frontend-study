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
window.addEventListener('scroll', function() {
	document.querySelector('.cart').innerHTML = pageYOffset + 'px';
});