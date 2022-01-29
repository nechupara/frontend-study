/**
 * Задание 2.
 *
 * Написать функцию-сумматор всех своих параметров.
 *
 * Функция принимает произвольное количество параметров.
 * Однако каждый из них обязательно должен быть числом.
 *
 * Генерировать ошибку, если:
 * - Если функция была вызвана менее, чем с двумя аргументами;
 * - Хоть один из аргументов не является допустимым числом (в ошибке указать его порядковый номер).
 *
 * Условия:
 * - Использовать тип функции arrow function;
 * - Использовать объект arguments запрещено.
 */


let sumator = (...parameters) => {
	if(parameters.length < 2) {
		throw new Error("Меньше двух аргументов")
	}

	let result = 0;
	for (const parameter of parameters) {
		if (typeof parameter !== "number" || Number.isNaN(parameter)) {
			throw new Error(`Аргумент не число ${parameters.indexOf(parameter)}`)
		}
		result += parameter;
	}

	return result
}

console.log(sumator(1, 2, 5, 6, true));