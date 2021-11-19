
const context = () => this;

const pizza = {
	name: "Margaritga",
	addExtras: function (extras) {
		console.log('context of function', this)
		const checkThis = () => console.log('context of arrow function', this)
	}
}

const obj = {
	name: "Margaritga",
	addExtras: () => this
}

console.log( context() );
console.log( pizza.addExtras() );
console.log( obj.addExtras() );