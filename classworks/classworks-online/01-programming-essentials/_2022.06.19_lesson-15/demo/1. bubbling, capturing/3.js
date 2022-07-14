/**
 * События: погружение (перехват).
 */

const cart = document.querySelector('.cart');
const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

const capturingHandler = event => alert(`Погружение: ${event.currentTarget.nodeName}`);
const bubblingHandler = event => alert(`Всплытие: ${event.currentTarget.nodeName}`);

const globalCapturingHandler = (globalTarget) => alert(`Погружение: ${globalTarget}`);
const globalBubblingHandler = (globalTarget) => alert(`Всплытие: ${globalTarget}`);

/* События погружения (перехвата) */
window.addEventListener('click', () => globalCapturingHandler('window'), { capture: true });
document.addEventListener('click', () => globalCapturingHandler('document'), { capture: true });
document.body.parentElement.addEventListener('click', capturingHandler, { capture: true});

cart.addEventListener('click', capturingHandler, { capture: true });
ul.addEventListener('click', capturingHandler, { capture: true });

listItems.forEach(item => item.addEventListener('click', capturingHandler, { capture: true }));
/* События погружения (перехвата) */

/* События всплытия */
window.addEventListener('click', () => globalBubblingHandler('window'));
document.addEventListener('click', () => globalBubblingHandler('document'));
document.body.parentElement.addEventListener('click', bubblingHandler);

cart.addEventListener('click', bubblingHandler);
ul.addEventListener('click', bubblingHandler);

listItems.forEach(item => item.addEventListener('click', bubblingHandler));
/* События всплытия */
