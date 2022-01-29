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

/* Решение */


function checkSklad(item){
	if (item in store) {
		return `${item}: ${store[item]}`
	} else return `${item}: not found`
}

let stroka= "banana,kropyva,ssas,safas,apple,tea,coffee,cheese,xleb,safas";

function exactWord (str){
	let word = str.slice(0, str.indexOf(","));
	stroka= str.slice(str.indexOf(",")+1);
	return word;
}

function Main(){
	let result="";

	do{
		result += checkSklad(exactWord(stroka)) +'\n';
	} while (stroka.includes(','));

	result += checkSklad(exactWord(stroka));
	return result;
}

console.log(Main());

