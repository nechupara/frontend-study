/**
 *
 * Вычисляемые свойства
 *
 * */

let fruit = prompt("Какой фрукт купить?", "apple");

let bag = {
	[fruit]: 5, // имя свойства будет взято из переменной fruit
};

alert( bag.apple ); // 5, если fruit="apple"
alert( bag[fruit] ); // 5

console.log(bag);