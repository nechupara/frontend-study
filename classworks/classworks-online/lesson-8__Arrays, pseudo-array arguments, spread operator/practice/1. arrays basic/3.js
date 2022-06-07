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



const mergeArrays = ( ...arrays ) => {
	const resultArrays = [];
	// for (const array of arrays) {
	//     if (!Array.isArray(array)) {
	//         throw new Error (`Argument # ${arrays.indexOf(array)+1} didnt have masiv`)
	//     }
	//     resultArrays.push(...array)
	// }
	arrays.forEach( ( array, index ) => {
		if ( !Array.isArray( array ) ) {
			throw new Error( `Argument # ${ arrays.indexOf( array ) + 1 } didnt have masiv` )
		}
		resultArrays.push( ...array )
	} )
	return resultArrays
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], ['Hello'], [' ', 'world', '!']));
// console.log(mergeArrays([1], 'error!'));
