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

console.log(bag);


/*let fruit = prompt("Какой фрукт купить?", "apple");
let bag = {};

// имя свойства будет взято из переменной fruit
bag[fruit] = 5;*/
