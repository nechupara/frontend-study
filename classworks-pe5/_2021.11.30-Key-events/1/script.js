/**
 * Задание 1.
 *
 * Создать элемент h1 с текстом «Нажмите любую клавишу.».
 *
 * При нажатии любой клавиши клавиатуры менять текст элемента h1 на:
 * «Нажатая клавиша: ИМЯ_КЛАВИШИ».
 */

const h1 = document.querySelector('h1');
window.addEventListener('keydown', event => {
    h1.innerText = event.code;
})