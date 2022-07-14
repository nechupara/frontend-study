"use strict";
/**
 * Задание 4.
 *
 * Создать элемент h1 с текстом «Нажмите любую клавишу.».
 *
 * При нажатии любой клавиши клавиатуры менять текст элемента h1 на:
 * «Нажатая клавиша: ИМЯ_КЛАВИШИ».
 */
const h2 = document.createElement("h1");
h2.innerText = "Нажмите любую клавишу.";
document.body.append(h2);
document.addEventListener("keydown", (event) => {
    h2.innerText = `Нажатая клавиша: ${event.key}.`;
});
