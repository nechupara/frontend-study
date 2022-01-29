/**
 * Задание 7.
 *
 * Написать функцию createIncrement, которая будет возвращать другую функцию.
 *
 * Первый вызов этой другой функции должен вернуть 0.
 * Каждый новый вызов этой другой функции должен возвращать число, на 1 больше, чем предыдущее.
 *
 * Каждый новый вызов родительской функции createIncrement будет возвращать новую «дочернюю» функцию-счётчик.
 * Каждая новая дочерняя функция должна начинать отсчёт с 0.
 *
 * Условия:
 * - Использовать замыкания;
 * - Объявлять переменные на глобальном уровне модуля запрещено.
 *
 * Продвинутая сложность:
 * - На техническом языке подробно объяснить механизм решения.
 */


function createIncrement () {
    let count = 0;

    return function () {
        return count++
    }
}

let createIncrement1 = createIncrement(); //
let createIncrement2 = createIncrement(); //

console.log('createIncrement1', createIncrement1()); // 0
console.log('createIncrement1', createIncrement1()); // 1
console.log('createIncrement1', createIncrement1()); // 2

console.log('  ');

console.log('createIncrement2', createIncrement2()); // 0
console.log('createIncrement1', createIncrement1()); // 3 // 0
console.log('createIncrement2', createIncrement2()); // 1
console.log('createIncrement1', createIncrement1()); // 3 // 0
console.log('createIncrement2', createIncrement2()); // 2
console.log('createIncrement1', createIncrement1()); // 3 // 0
console.log('createIncrement2', createIncrement2()); // 3
console.log('createIncrement1', createIncrement1()); // 3 // 0