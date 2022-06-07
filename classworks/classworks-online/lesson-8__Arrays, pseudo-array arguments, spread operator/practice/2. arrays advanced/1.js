/**
 * Задача 1.
 *
 * Написать функцию-помощник кладовщика replaceItems.
 *
 * Функция должна заменять указанный товар новыми товарами.
 *
 * Функция обладает двумя параметрами:
 * - Имя товара, который необходимо удалить;
 * - Список товаров, которыми необходимо заменить удалённый товар.
 *
 * Функция не обладает возвращаемым значением.
 *
 * Условия:
 * - Генерировать ошибку, если имя товара для удаления не присутствует в массиве;
 * - Генерировать ошибку, список товаров для замены удалённого товара не является массивом.
 *
 * Заметки:
 * - Дан «склад товаров» в виде массива с товарами через.
 */

/* Дано */
let storage = [
	'apple',
	'water',
	'banana',
	'pineapple',
	'tea',
	'cheese',
	'coffee',
];

/* Решение */
const replaceItems = ( itemDelete, itemsInsert ) => {
	if ( !storage.includes( itemDelete ) ) {
		throw new Error( 'Удаляемого товара нет на складе.' );
	}
	if ( !Array.isArray( itemsInsert ) ) {
		throw new Error( 'Список новых товаров должен обладать типом «массив».' );
	}
	let itemDeleteIndex = storage.indexOf( itemDelete )
	storage.splice( itemDeleteIndex, 1, ...itemsInsert )
	// console.log( typeof itemsInsert );
}

console.log(storage);
replaceItems('apple', ['carrot', 'wheat', 'grape']);
// console.log(storage);
