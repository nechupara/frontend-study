/**
 * Задача 3.
 *
 * Напишите функцию mergeArrays для объединения нескольких массивов в один.
 *
 * Функция обладает неограниченным количеством параметров.
 * Функция возвращает один массив, который является сборным из массивов,
 * переданных функции в качестве аргументов при её вызове.
 *
 * Условия:
 * - Все аргументы функции должны обладать типом «массив», иначе генерировать ошибку;
 * - В ошибке обязательно указать какой по счёту аргумент провоцирует ошибку.
 *
 * Заметки:
 * - Делать поддержку выравнивания вложенных массивов (флеттенинг) не нужно.
 */


let mergeArrays = (...arrays) => {
	const result = [];
	for (const element of arrays) {
		if (!Array.isArray(element)){
			throw new Error(`argument ${arrays.indexOf(element)+1} not array, is: - ${typeof element}`)
		}
		result.push(...element);
	}
	return result;
}
console.log(mergeArrays([1,2,3], [true,false,true], ["ok","not"]));
console.log(mergeArrays([1,2,3], 1, ["ok","not"]));