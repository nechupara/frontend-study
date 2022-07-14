/**
 * Задание 1.
 *
 * Написать функцию-фабрику, которая возвращает объекты пользователей.
 *
 * Объект пользователя обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * Функция-фабрика в свою очередь обладает тремя параметрами,
 * которые отражают вышеописанные свойства объекта.
 * Каждый параметр функции обладает значением по-умолчанию: null.
 */

const createUser = (firstName=null, lastName=null, job=null) => {
	return {
		firstName: firstName,
		lastName: lastName,
		job: job,
	}
}
const user1 = createUser(stas, Rozhko, junior)
const user2 = createUser();
const user3 = createUser(Misha)

console.log(user1);
console.log(user2);
console.log(user3);