/**
 * Задание 1.
 *
 * Написать функцию-сумматор.
 * Функция обладает двумя числовыми параметрами, и возвращает результат их сложения.
 */

const summ = function (a, b) {
	return a+b;
}

console.log(summ(4, 6));

const minNumber = function (a, b) {
	// if (a>b) {
	//     return b
	// } else {
	//     return a
	// }


//   return a>b ? b : a

	return Math.min (a, b)

}

console.log(minNumber(10, 20));