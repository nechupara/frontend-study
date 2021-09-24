// Дополнительное задание с выводом простых чисел находится в файлах simple-numbers.html и simple-numbers.js
// ответ на теоретический вопрос находится в файле theory-answer.md

const startNumber = 1;
let endNumber = +prompt("Введите число:");
const divider = 5;
let isExist = false;

while (!Number.isInteger(endNumber) || endNumber < 1) {
    endNumber = +prompt("Неверное число.\nВведите число ещё раз:");
}

for (let i = startNumber; i <= endNumber; i++) {
    if (i % divider === 0) {
        console.log(i);
        if (!isExist) isExist = true; // чтобы флагу много раз не присваивать true. Может в этом смысла нет.
    }
}

if (!isExist) {
    console.log("Sorry, no numbers");
}
