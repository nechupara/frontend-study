/**
 *
 * Свойство из переменной
 *
 * */

// let name = "John";
// let age = 30;
//
// let user = {
// 	name: name,
// 	age: age
// };
// alert(user.name); // John


// let name = "John";
// let age = 30;
//
// let user = {
// 	name, // same as name: name
// 	age // same as age: age
// };
// alert(user.name); // John


// function makeUser(name, age) {
// 	return {
// 		name: name,
// 		age: age
// 		// ...другие свойства
// 	};
// }
//
// let user = makeUser("John", 30);
// alert(user.name); // John
// console.log(user);

function makeUser(name, age) {
	return {
		name, // то же самое, что и name: name
		age   // то же самое, что и age: age
		// ...
	};
}
let user = makeUser("John", 30);
alert(user.name); // John
console.log(user);