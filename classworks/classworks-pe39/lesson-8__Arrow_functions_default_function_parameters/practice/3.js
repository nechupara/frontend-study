/**
 * Задание 3.
 *
 * Написать функцию, которая возвращает наибольшее число, из переданных ей в качестве аргументов при вызове.
 *
 * Генерировать ошибку, если:
 * - Если функция была вызвана менее, чем с двумя аргументами;
 * - Хоть один из аргументов не является допустимым числом (в ошибке указать его порядковый номер).
 *
 * Условия:
 * - Использовать тип функции arrow function;
 * - Использовать объект arguments запрещено;
 * - Обязательно использовать объект Math.
 */


let maxNumber = (...parameters) => {
	if(parameters.length < 2) {
		throw new Error("Меньше двух аргументов")
	}
	for (const parameter of parameters) {
		if (typeof parameter !== "number" || Number.isNaN(parameter)) {
			throw new Error(`Аргумент не число ${parameters.indexOf(parameter)}`)
		}
	}
	return Math.max(...parameters)
}

console.log(maxNumber(4,7,822,23));

