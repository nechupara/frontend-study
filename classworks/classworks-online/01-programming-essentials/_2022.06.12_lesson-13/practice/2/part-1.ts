/**
 * Задание 3.
 *
 * Создать элемент h1 с текстом «Добро пожаловать!».
 *
 * Под элементом h1 добавить элемент button c текстом «Раскрасить».
 *
 * При клике по кнопке менять цвет каждой буквы элемента h1 на случайный.
 */

/* Дано */
const PHRASE = "Добро пожаловать!";

function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const h1 = document.createElement("h1");

h1.innerText = "Добро пожаловать!";

const btn = document.createElement("button");
btn.innerHTML = "Раскрасить";

document.body.prepend(btn)
document.body.prepend(h1)

const btnHandler = () => {
    const symbolList = h1.innerText.split('')
}

