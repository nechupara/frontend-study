/**
 * Задание 2.
 *
 * Расширить функционал объекта из предыдущего задания:
 * - Метод sayHi должен вывести сообщение: «Привет. Меня зовут ИМЯ ФАМИЛИЯ.»;
 * - Добавить метод, который меняет значение указанного свойства объекта.
 *
 * Продвинутая сложность:
 * Метод должен быть «умным» — он генерирует ошибку при совершении попытки
 * смены значения несуществующего в объекте свойства.
 */

let user = {
	name:"Stas",
	lastname:"Rozhko",
	job:"Miner",
	sayhi: function() {
		console.log(`Привет.Меня зовут ${this.name} ${this.lastname}.`);
	},
	changeProperty:function (name, value) {
		if (name in this){
			this[name]=value;
		}
		else {
			throw new Error ("Property doesnt exist")
		}
	}
}
console.log(user);
user.sayhi();
user.changeProperty(`job`, `prograner`)
console.log(user);