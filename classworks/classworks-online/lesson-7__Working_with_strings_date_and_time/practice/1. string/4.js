/**
 * Задание 4.
 *
 * Написать функцию-помощник кладовщика.
 *
 * Функция обладает одним параметром:
 * - Строка со списком товаров через запятую (water,banana,black,tea,apple).
 *
 * Функция возвращает строку в формате ключ-значение, где ключ — имя товара, а значение — его остаток на складе.
 * Каждый новый товар внутри строки должен содержатся на новой строке.
 *
 * Если какого-то товара на складе нет, в качестве остатка указать «not found».
 *
 * Условия:
 * - Имя товара не должны быть чувствительно к регистру;
 * - Дополнительных проверок совершать не нужно.
 */

/* Дано */
const store = {
  apple: 8,
  beef: 162,
  banana: 14,
  chocolate: 0,
  milk: 2,
  water: 16,
  coffee: 0,
  tea: 13,
  cheese: 0,
};


function getProductData (products) {
	let result = '';
	let arr = products.split(',');

	for (let value of arr) {
		let count = store[value];

		if(!count) {
			count = 'Not Found'
		}

		result += `${value}: ${count}, `
	}

	return result
}

console.log( getProductData( 'water,banana,black,tea,apple' ) );

