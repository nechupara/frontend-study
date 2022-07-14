/**
 * Цикл «for»
 *
 *
 * for (let key in user) {
 * // тело цикла
 * }
 *
 */

const user = {
	name: "Mario",
	age: 44,
	pets: [],
	goal: "Save the princess",
	fun: function () { console.log('Yep')},
};

// const neme = 'Yep'
// console.log(user['age']);
// console.log(user.age);

for (let i in user) {
	// console.log( key );
	// console.log( user[key] );
	console.log( `key-${i}: value-${user[i]}` );
	// console.log( 'sdfsfdsfsdf ' + i + 'sdfsdfdsfds'  + ':' +  user[i]);
}
