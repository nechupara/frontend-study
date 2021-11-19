/**
 * Задание 3.
 *
 * Написать функцию truncate, которая «обрезает» слишком длинную строку, добавив в конце троеточие «...».
 *
 * Функция обладает двумя параметрами:
 * - Исходная строка для обрезки;
 * - Допустимая длина строки.
 *
 * Если строка длиннее, чем её допустимая длина — её необходимо обрезать,
 * и конкатенировать к концу символ троеточия так, чтобы вместе с ним длина
 * строки была равно максимально допустимой длине строки из второго параметра.
 *
 * Если строки не длиннее, чем её допустимая длина.
 */

/* Решение */

function userEnter (){
	let string = prompt("Enter ur text:");
	let maxlength = prompt("Enter maxlength text:");
	let testLet = test(string, maxlength);

	if (testLet) {
		alert(truncate(string, maxlength));
	} else alert("Error");

};

function truncate (string, maxlength) {
	if (string.length > maxlength) {
		return string.slice(0, maxlength-3) + "...";

	}
	
	return string;

};

function test (string, maxlength) {

	let newSrt = string.replace(/\s/g, ''); // Убираем все пробелы из строки

	if (newSrt.length < maxlength || newSrt.length-3 > 8) {
		return true
	} else {
		return false
	};
}

userEnter();
