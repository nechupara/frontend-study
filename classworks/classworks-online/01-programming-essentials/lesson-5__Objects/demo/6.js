/**
 *
 * Проверка существования свойства, оператор «in»
 *
 * */



// let user = {};
// alert( user.noSuchProperty === undefined ); // true означает "свойства нет“

// Синтаксис оператора: "key" in object


let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует


