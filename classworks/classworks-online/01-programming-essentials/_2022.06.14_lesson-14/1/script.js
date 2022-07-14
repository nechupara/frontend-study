"use strict";
/**
 * Завдання 1.
 *
 * Рахувати кількість натискань на пробіл, ентер,
 * та Backspace клавіші
 * Відображати результат на сторінці
 *
 * ADVANCED: створити функцію, яка приймає тільки
 * назву клавіші, натискання якої потрібно рахувати,
 * а сам лічильник знаходиться в замиканні цієї функції
 * (https://learn.javascript.ru/closure)
 * id елемента, куди відображати результат має назву
 * "KEY-counter"
 *
 * Наприклад виклик функції
 * createCounter('Enter');
 * реалізовує логіку підрахунку натискання клавіші Enter
 * та відображає результат в enter-counter блок
 *
 */
let countEnter = 0;
let countSpace = 0;
let countBackspace = 0;
const enterField = document.getElementById("enter-counter");
const spaceField = document.getElementById("space-counter");
const backSpaceField = document.getElementById("backspace-counter");
const clickHandler = (e) => {
    console.dir(e);
    if (e.code === "Space" && e.repeat !== true) {
        countSpace++;
        spaceField.innerText = countSpace.toString();
    } else if (e.code === "Enter" && e.repeat !== true) {
        countEnter++;
        enterField.innerText = countEnter.toString();
    } else if (e.code === "Backspace" && e.repeat !== true) {
        countBackspace++;
        backSpaceField.innerText = countBackspace.toString();
    }
};
document.body.addEventListener("keydown", clickHandler);
