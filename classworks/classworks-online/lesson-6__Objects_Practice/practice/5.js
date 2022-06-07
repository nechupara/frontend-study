/**
 * Задание 5
 * Object.create
 * Реализовать задачу 3 при помощи Object.create
*/

const user = Object.create({}, {
	_role: {
		value: 'admin',
		enumerable: true,
		configurable: true,
		writable: false, // Запрещаем изменять значение
	},
	_login: {
		value: 'testAdmin'
	},
	_email: {
		value: 'email@gmail.com'
	},
	_password: {
		value: "PAssWordAbreAbre123456789"
	},

	role: {
		set(value) {
			// через Object.defineProperty можно поменять значение свойства _role, передав ему в качестве аргумента объект с полем value, равным новому значению
			Object.defineProperty(this, '_role', { // Делаем возможность менять значение только через сет
				value: value
			});
		},
		get() {
			return this._role
		},
	},
	login: {
		set(value) {
			if (value.length >= 3) {
				this._login = value;
			}
		},
		get() {
			return this._login;
		},
	},
	email: {
		set(value) {
			this._email = value;
		},

		get() {
			return this._email;
		},
	},
	password: {
		set(value) {
			if (this.getPasswordStrength(value) === 'Strong' && this._password !== value) {
				this._password = value;
			} else if (this._password === value) {
				console.log('Это ваш пароль!')
			}
		},
		get() {
			return this._password
		},
	},
	getPasswordStrength: {
		value: function (value) {
			if (value.length <= 6) {
				return 'Weak';
			} else if (value.length > 6 && value.length <= 18) {
				return 'Medium';
			} else {
				return 'Strong';
			}
		}
	},
	setFirstName: {
		value: function (value) {
			Object.defineProperty(this, '_role', { // Делаем возможность менять значение только через сет
				value: value,
			});
		}
	}
})

console.log(user.role);
// user.role = 'main manager';
user.setFirstName('sdsdsdds');
// user._role = 'main manager1';
console.log(user.role);
