/*
let name = "John";
let age = 30;

let user = {
	name: name,
	age: age
};

console.log( user.name ); // John
*/



let name = "John";
let age = 30;

let user = {
	name, // same as name: name
	age // same as age: age
};
alert(user.name); // John
