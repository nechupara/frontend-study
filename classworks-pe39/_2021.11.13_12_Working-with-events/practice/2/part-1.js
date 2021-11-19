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
const PHRASE = 'Добро пожаловать!';

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}
