let users = [
	{id: 1, name: "user1"},
	{id: 2, name: "user2"},
	{id: 3, name: "user3"}
];

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers);