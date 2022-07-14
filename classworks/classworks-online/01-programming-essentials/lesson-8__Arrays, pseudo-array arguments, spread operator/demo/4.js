let users = [
	{id: 1, name: "user1"}, //true
	{id: 2, name: "user2"}, //true
	{id: 3, name: "user3"}  //false
];

let someUsers = users.filter((item) => item.id < 3);

// console.log(someUsers); // id 1 -- 2 /// 1-3
//
// console.log(users);

let users2 = [
	{id: 1, name: "user1"}, //true
	{id: 2, name: "user2"}, //true
	{id: 3, name: "user3"}  //false
];


// let someUsers2 = users2.map((item) => item.id < 3);
let someUsers23= [];
let someUsers2 = users2.map((item) => {
	if ( item.id < 3 ) {
		someUsers23.push(item);
	}
});

console.log('someUsers2', someUsers2 ); //
console.log('someUsers23', someUsers23 ); //
console.log('users2', users2 ); //
