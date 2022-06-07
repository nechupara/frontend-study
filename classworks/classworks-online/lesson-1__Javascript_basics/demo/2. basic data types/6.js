/* Symbol */

// Создаём новый символ - id
// let id = Symbol();

// Создаём символ id с описанием (именем) "id"
let id = Symbol("id");

// typeof
console.log( id );

// Или мы можем обратиться к свойству symbol.description, чтобы вывести только описание:
console.log( id.description );

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log( id1 == id2 ); // false