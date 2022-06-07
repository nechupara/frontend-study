/**
 * Задание 2.
 *
 * Написать функцию, capitalizeAndDoublify, которая переводит
 * символы строки в верхний регистр и дублирует каждый её символ.
 *
 * Условия:
 * - Использовать встроенную функцию repeat;
 * - Использовать встроенную функцию toUpperCase;
 * - Использовать цикл for...of.
 */


function capitalizeAndDoublify (string) {
	let result = '';

	for (let value of string) {
		result += value.repeat(2).toUpperCase();
	}

	return result;
}
console.log(capitalizeAndDoublify('think'));