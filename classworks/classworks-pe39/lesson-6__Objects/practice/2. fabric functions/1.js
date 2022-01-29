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

function creatUser(name=null, s_name=null, job=null) {
    const user = {
        name,
        s_name,
        job,
    }

    return user;
}

const user1 = creatUser('Jon', 'Jon', 'Des');
const user2 = creatUser('Hana', 'Jonana', 'Fed');
const user3 = creatUser();

console.log(user1);
console.log(user2);
console.log(user3);
