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
let user1 = makeUser("Ann", 35);

alert(user.name); // John
alert(user1.name); // John
console.log(user);

/**
 *
 * Проверка на наличие свойства у переменной
 *
 * */

console.log("name" in user)
console.log("true" in user)

function checkObjProp (object, property, value) {
	return object[property] === value;
}

console.log(checkObjProp(user, 'name', 'John'));
console.log(checkObjProp(user, 'age', 'Ann'));
console.log(checkObjProp(user, 'fieldName', 'Ann'));