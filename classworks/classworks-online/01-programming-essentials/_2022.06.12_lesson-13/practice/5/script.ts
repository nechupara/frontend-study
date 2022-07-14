/**
 * Задание 5.
 * При нажатии shift и "+"" одновременно нужно увеличивать
 * шрифт страницы на 1px
 * а при shift и "-" - уменьшат шрифт на 1px
 *
 * Максимальный размер шрифта - 30px, минимальный - 10px
 *
 */

// 1. Створюємо дефолтний шрифт у body
// 2. Створюємо івентлісенер на натискання клавіш
// 3. Відстежуємо Shift + та Shift -
// 4. Перевіряємо  величину шрифта на максимум (30px) та мінімум (10px)
// 5. Додаємо змінений розмір шрифта до body.
// 6. Виведемо console.log(event.key) та console.log(event.code)

let fontSize = 16;

const maxFontSize = 30;
const minFontSize = 10;

document.body.style.fontSize = `${fontSize}px`;

document.addEventListener("keydown", (e) => {
    if ((e.code === "NumpadAdd" || e.code == "Equal") && e.shiftKey) {
        if (fontSize < maxFontSize) {
            document.body.style.fontSize = `${++fontSize}px`;
        }
    } else if ((e.code === "NumpadSubtract" || e.code === "Minus") && e.shiftKey) {
        if (fontSize > minFontSize) {
            document.body.style.fontSize = `${--fontSize}px`;
        }
    }

    console.log(e);
});

// document.addEventListener("keydown", (event) => {
//     if (event.key === "+" && event.shiftKey && fontSize < maxFontSize) {
//         document.body.style.fontSize = `${++fontSize}px`;
//     } else if ((event.key === "_" || (event.key === "-" && event.shiftKey)) && fontSize > minFontSize) {
//         document.body.style.fontSize = `${--fontSize}px`;
//     }
//     console.log(event);
// });

export{}