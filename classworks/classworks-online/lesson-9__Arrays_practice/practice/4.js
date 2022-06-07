/**
 * Задача 4.
 *
 * Создать функцию, которая проверяет, является ли переданная в нее
 * строка палиндромом (анна это паллиндром).
 *
 * Подсказка: нужно преобразовать строку в массив
 */

const isPolindrom = (str) => str.split("").reverse().join("").toLowerCase() === str.toLowerCase() ? "polindron": "not polindrom"

console.log(isPolindrom('Vova'))
console.log(isPolindrom('anna'))