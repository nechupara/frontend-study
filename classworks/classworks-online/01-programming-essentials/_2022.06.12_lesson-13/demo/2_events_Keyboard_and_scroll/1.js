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


// текущее состояние
console.log('текущее состояние', document.readyState);
// вывести изменения состояния
document.addEventListener('readystatechange', () => console.log("вывести изменения состояния", document.readyState));


document.addEventListener('DOMContentLoaded', () => {
	console.log(
		'Сработало событие: document.DOMContentLoaded (HTML загружен в страницу и доступен для манипуляций).',
	);
});

window.onload = function() {
	console.log(
		'Сработало событие: window.load (загружены и обработаны все внешние ресурсы: CSS, JavaScript, изображения...)'
	);
};

window.addEventListener('load', () => {
	console.log(
		'Сработало событие: window.load (загружены и обработаны все внешние ресурсы: CSS, JavaScript, изображения...)',
	);
});


// Делаем запрос на уход с страницы
window.onbeforeunload = function() {
	return false;
};
