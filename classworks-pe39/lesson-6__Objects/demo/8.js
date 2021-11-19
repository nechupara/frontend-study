let user = {
	name: "John",
	surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
	get() { // – функция без аргументов, которая сработает при чтении свойства,
		return `${this.name} ${this.surname}`;
	},

	set(value) { // – функция, принимающая один аргумент, вызываемая при присвоении свойства,
		[this.name, this.surname] = value.split(" ");
	}
});

console.log(user.fullName); // John Smith
console.log(user.name = 'sddsdsds'); // sddsdsds
console.log(user.name); // John

// for(let key in user) console.log(key); // name, surname