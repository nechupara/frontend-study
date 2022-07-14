"use strict";
/**
 * Завдання 2.
 *
 * Початкове значення кнопки повинно дорівнювати 0
 * При натисканні на кнопку збільшувати це значення на 1
 *
 */
let countClick = 0;
const btn = document.querySelector(".counter");
btn.addEventListener("click", () => {
    countClick++;
    btn.innerText = countClick.toString();
});
