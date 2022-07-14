/**
 *
 * Контекст выполнения - `this`
 *
 * */



/*
const user = {
	name: "Henry",
	age: 24,
	accessLevel: "junior",
	changeAccessLevel: function (newValue) {  // Метод объекта
		console.log(this) // в консоли окажется объект user
	}
}

user.changeAccessLevel("middle") //ничего не изменится, так как в методе написан только вывод в консоль
*/

const user = {
	name: "Henry",
	age: 24,
	accessLevel: "junior",
	changeAccessLevel: function (newValue) {
		this.accessLevel = newValue
	}
}

console.log(user);

user.changeAccessLevel("middle") // значение свойства accessLevel у объекта будет заменено не то, которое передано в качестве аргумента

console.log(user);