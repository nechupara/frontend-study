/**
 * Задание 3.
 *
 * Пользователь вводит 3 числа.
 * Вывести в консоль сообщение с максимальным числом из введённых.
 *
 * Если одно из введённых пользователем чисел не является числом,
 * вывести сообщение: «⛔️ Ошибка! Одно из введённых чисел не является числом.».
 *
 * Условия: объектом Math пользоваться нельзя.
 */

let a = Number(prompt('enter A'));
let b = Number(prompt('enter B'));
let c = Number(prompt('enter C'));

let max = a;

// Проверка на 0  Добавить !str || 0 === str.length

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || !a || !b|| !c || 0 === a.length || 0 === b.length || 0 === c.length){
    alert('⛔️ Ошибка! Одно из введённых чисел не является числом.');
} else {
    if ( b  > max) {
        max = b;
    }

    if ( c > max) {
        max = c;
    }

    alert(`Самое большое ${max}`);
}