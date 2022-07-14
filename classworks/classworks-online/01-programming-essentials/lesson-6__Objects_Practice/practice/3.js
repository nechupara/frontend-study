/**
 * Задание 3
 * У нас есть обьект User, у которого есть такие поля:
 * - role (super admin, admin, main manager, content manager);
 * - login;
 * - email;
 * - password;

 * сеттеры и геттеры:
 * - role (можно установить роль только из списка: super admin, admin, main manager, content manager);
 * - login (не меньше трех букв);

 * Дополнительное задание: добавьте метод getPasswordStrength, который проверяет силу пароля. Метод получает
 *  строку (пароль) и возвращает один из трех вариантов:
 * - weak - меньше 6 символов;
 * - medium - больше 6 символов;
 * - strong - больше 18 символов;
 **/

/* Dano */
// const user = {
// 	role: 'admin',
// 	login: 'testAdmin',
// 	email: 'email@gmail.com',
// 	password: 'sdffdsfasewrw3rwrerwezcx',
// };

/* Dano */
const user = {
	_role: 'admin',
	_login: 'testAdmin',
	_email: 'email@gmail.com',
	_password: 'PAssWordAbreAbre123456789',
	set role(value) {
		this._role = value;
	},
	get role() {
		return this._role
	},

	set login(value) {
		if (value.length >= 3) {
			this._login = value;
		}
	},
	get login() {
		return this._login;
	},

	set email(value) {
		this._email = value;
	},

	get email() {
		return this._email;
	},

	set password(value) {
		if (this.getPasswordStrength(value) === 'Strong' && this._password !== value){
			this._password = value;
		} else if (this._password === value){
			console.log('Это ваш пароль!')
		}
	},
	get password() {
		return this._password
	},
	getPasswordStrength(value){
		if (value.length <= 6){
			return 'Weak';
		} else if (value.length > 6 && value.length <= 18) {
			return 'Medium';
		} else {
			return 'Strong';
		}
	}
};

//https://learn.javascript.ru/regular-expressions

