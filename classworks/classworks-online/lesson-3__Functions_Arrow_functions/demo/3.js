/**
 *
 * Параметры
 *
* */

/*
function showMessage(from, text) { // аргументы: from, text
	console.log(from + ': ' + text);
}

showMessage('Dan IT', 'Привет!'); // Dan IT: Привет! (*)
showMessage('Dan IT', "Как дела?"); // Dan IT: Как дела? (**)
*/

/**
*
* Параметры по умолчанию
*
* */

function showMessage(from, text = "текст не добавлен") { // аргументы: from, text
	console.log(from + ': ' + text);
}

showMessage('Dan IT'); // Dan IT текст не добавлен
showMessage('Dan IT', 'Сегодня 17 студентов'); // Dan IT текст не добавлен
