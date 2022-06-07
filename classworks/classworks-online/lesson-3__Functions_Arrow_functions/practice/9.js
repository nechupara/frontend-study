/**
 * Задание 9.
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

const sumAll = (...parameters) => {
	if (parameters.length<2){
		throw new Error ("Ошибка!")
	}
	let sum=0
	for (const parameter of parameters) {
		if (typeof parameter !== "number" || Number.isNaN(parameter)) {
			throw new Error(
				`Аргумент ${parameters.indexOf(parameter) +
				1} является не корректным числом.`,
			);

		}
		console.log(parameter);
		sum+= parameter;
	}
	return sum
}
console.log(sumAll(1,3,5,6));