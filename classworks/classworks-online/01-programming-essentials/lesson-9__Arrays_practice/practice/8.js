/**
 * Задача 8.
 *
 * Создать массив объектов students (в количестве 7 шт).
 * У каждого студента должно быть имя, фамилия и направление обучения - Full-stask
 * или Front-end. У каждого студента должен быть метод, sayHi, который возвращает строку
 * `Привет, я ${имя}, студент Dan, направление ${направление}`.
 * Перебрать каждый объект и вызвать у каждого объекта метод sayHi;
 */
const usersList = [
	{
		name: "Irina",
		lastName: "Sto",
		module: "Front-end",
		sayHi() {
			return `Привет, я ${ this.name }, студент Dan, направление ${ this.module }`;
		},
	},
	{
		name: "Inna",
		lastName: "Stowwww",
		module: "Full-stack",
		sayHi() {
			return `Привет, я ${ this.name }, студент Dan, направление ${ this.module }`;
		},
	},
	{
		name: "Kate",
		lastName: "Ni",
		module: "Full-stack",
		sayHi() {
			return `Привет, я ${ this.name }, студент Dan, направление ${ this.module }`;
		},
	},
];

for ( let user of usersList ) {
	console.log( user.sayHi() );
}

// //
// usersList.forEach((user) => {
//     console.log(user.sayHi());
// });
