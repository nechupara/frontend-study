/**
 * ЗАДАНИЕ 2
 *
 * Объяснить поведение каждой операции.
 */

const number = 123;
const string = 'hello';

/* Операция сложения с одним из операндов в виде строки всегда производит конкатенацию. */
console.log(number + string);
/**
 * Все остальные математические операции работают с операндами как с числами.
 * Если операнд не является числом, движок пытается превратить его в число.
 * Строка 'hello' при конвертации в число станет NaN, поэтому результат
 * всего выражения будет NaN.
 */
console.log(number - string);
console.log(number * string);
