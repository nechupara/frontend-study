let user = {         // объект
	name: "John",   // под ключом "name" хранится значение "John"
	age: 30,        // под ключом "age" хранится значение 30
	isAdmin: true   // под ключом "isAdmin" хранится значение true
};

console.log( user );

// присваивание значения свойству
user["likes birds"] = true;

console.log( user );

// удаление свойства
delete user["likes birds"];

console.log( user );