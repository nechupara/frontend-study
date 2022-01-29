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

/* Решение */

function user() {
	let str;
	let n;
	
	do {
		str = prompt("Введите строку");
		n = Number(prompt("Введите число"));

	} while (typeof str === "string" && !Number.isNaN(n) && n === 0)
	
	alert(capitalizeAndDoublify(str, n));
}

function capitalizeAndDoublify(str, n = 1) {
	let upperCase = str.toUpperCase();
	let result = "";
	for (const upperCaseElement of upperCase) {
		result += upperCaseElement.repeat(n);
	}
	return result;
}

user();
