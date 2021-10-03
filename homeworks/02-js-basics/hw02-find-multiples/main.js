// Дополнительное задание с выводом простых чисел находится в файлах simple-numbers.html и simple-numbers.js
// ответ на теоретический вопрос находится в файле theory-answer.md

const divider = 5;

let endNumber = +prompt("Введите число:");
while (!Number.isInteger(endNumber) || endNumber < 1) {
    endNumber = +prompt("Неверное число.\nВведите число ещё раз:");
}

if (endNumber < divider) {
    console.log("Sorry, no numbers");
} else {
    for (let i = divider; i <= endNumber; i += divider) {
            console.log(i);
    }
}

