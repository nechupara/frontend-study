/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * А также одним методом sayHi, который выводит в консоль сообщение 'Привет.'.
 */

let user = {
	name:"Stas",
	last:"Rozhko",
	job:"Miner",
	sayhi: function() {
		console.log("Привет");
	}
}
console.log(user);
user.sayhi()