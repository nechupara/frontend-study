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
	goal: "Save the princess"
};

for (let key in user) {
	// console.log( key );
	// console.log( user[key] );
	console.log( `${key}:${user[key]}` );
}
