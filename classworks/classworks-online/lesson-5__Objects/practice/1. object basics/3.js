/**
 * Задание 3.
 *
 * Расширить функционал объекта из предыдущего задания:
 * - Добавить метод, который добавляет объекту
 * новое свойство с указанным значением.
 *
 * Продвинутая сложность:
 * Метод должен быть «умным» — он генерирует ошибку при создании нового
 * свойства, если свойство с таким именем уже существует.
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
	},
	addProperty(key, value) {
		if (this.hasOwnProperty(key)){
			throw new Error (`We cant add this ${key}`)
		} else {
			this[key]=value;
		}
	}
}
console.log(user);
user.sayhi();
user.changeProperty(`job`, `prograner`)
console.log(user);
// user.addProperty("job", "footboler")
user.addProperty ("age", "28")
console.log(user);