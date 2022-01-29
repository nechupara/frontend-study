/**
 * Задание 6.
 *
 * Написать функцию-счётчик increment.
 *
 * Первый вызов функции должен вернуть 0.
 * Каждый новый вызов функции должен возвращать число, на 1 больше, чем предыдущее.
 * 
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */

let count = 0;

function increment () {
    return count++
}

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());