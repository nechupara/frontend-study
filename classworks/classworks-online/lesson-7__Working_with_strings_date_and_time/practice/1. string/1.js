/**
 * Задание 1.
 *
 * Написать имплементацию встроенной функции строки repeat(times).
 *
 * Функция должна обладать двумя параметрами:
 * - Целевая строка для поиска символа по индексу;
 * - Количество повторений целевой строки.
 *
 * Функция должна возвращать преобразованную строку.
 *
 * Условия:
 * - Генерировать ошибку, если первый параметр не является строкой, а второй не является числом.
 */


function repeat (string, count) {
	if (typeof string !== 'string'  || !Number.isInteger(count)) {
		throw new Error();
	}
	let result = '';

	for (let i = 0; i < count; i++) {
		result += string;
		//result = result + string;
	};

	return result;
}

// console.log(repeat(5, 6));
// console.log(repeat(true, 'dhfv'));
console.log(repeat('имплементацию', 6));
