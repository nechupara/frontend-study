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


/* Решение */
function user(){
	let str = prompt('Введите желаемую строку');
	let n = +prompt('ведите количество повторов');
	repeatStr(str, n);
}

function repeatStr(str, n= 1) {
	if (typeof str !=="string"){
		throw new Error('вы ввели не строку.');
	}
	if (typeof n!== "number"){
		throw new Error('вы ввели не число.');
	}
	let result = str;
	for (let i=1; i < n ; i++ ){
		result += str;
	}

	alert(result);
}

user();
