/**
 * Задание 8
 *
 * Написать функцию, получающую на вход два числа.
 * Если оба числа чётные - функция возвращает их произведение.
 * Если оба числа нечётные - функция возвращает их сумму.
 * Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
 * Оба числа проверить на корректность.
 * */

const checkNumber = (a, b) => {
	if (!Number.isInteger (a) || !Number.isInteger (b)){
		throw new Error ("Ошибка! Должно быть целые числа!")
	}
	if (a % 2 === 0 && b % 2 === 0) {
		return a*b
	} else if (a % 2 === 1 && b % 2 === 1) {
		return a+b
	} else if (a % 2 === 1 && b % 2 === 0) {
		return a
	} else if (a % 2 === 0 && b % 2 === 1) {
		return b
	}
}
console.log(checkNumber(1.3, 1.8 ));
// console.log(checkNumber(2, 4));
// console.log(checkNumber(3, 7 ));
// console.log(checkNumber(5, 8 ));
// console.log(checkNumber(2, 9 ));
// console.log(checkNumber(1.5, 8));