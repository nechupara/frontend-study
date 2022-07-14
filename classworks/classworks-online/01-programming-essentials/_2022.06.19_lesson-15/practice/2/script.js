"use strict";
/**
 * Завдання 2.
 *
 * Зробити список покупок з можливістю
 * додавати нові товари
 *
 * В поле вводу ми можемо ввести назву нового елементу
 * для списку покупок
 * При натисканні на кнопку Add введене значення
 * потрібно додавати в кінець списку покупок, а
 * поле вводу очищувати
 *
 * ADVANCED: Додати можливість видаляти елементи зі списку покупок
 * (додати Х в кінець кожного елементу, при кліку на який відбувається
 * видалення) та відмічати як уже куплені (елемент перекреслюється при
 * кліку на нього)
 * Для реалізації цього потрібно розібратися з Event delegation
 * https://javascript.info/event-delegation
 */
const input = document.getElementById("new-good-input");
const btn = document.getElementById("add-btn");
const list = document.querySelector(".shopping-list");
btn.addEventListener('click', (e) => {
    btn.classList.toggle;
});
//# sourceMappingURL=script.js.map