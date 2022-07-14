/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * Условия:
 * - Все свойства не должны быть доступны для записи;
 * - Решить задачу двумя способами.
 */


const user1 = {};

Object.defineProperties(user1, {
	firstName: {
		value: 'Walter',
		writable: false,
	},
	lastName: {
		value: 'White',
		writable: false,
	},
	job: {
		value: 'Programmer',
		writable: false,
	},
});

/* Решение 2 */
const user2 = {
	firstName: 'Walter',
	lastName: 'White',
	job: 'Programmer',
};

Object.freeze(user2);
