// let user = { };
// let user = new Object();


const user = {     // объект
	name: "John",  // под ключом "name" хранится значение "John"
	age: 30        // под ключом "age" хранится значение 30
};

user.test = true

console.log( user );

delete user.age;

console.log( user );