/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * Условия:
 * - Все свойства должны быть доступны только для записи;
 * - Решить задачу двумя способами.
 */

const user1 = {}

Object.defineProperty()

Object.defineProperties(user1, {
    name: {
        value: 'Jon',
        writable: false
    },
    s_name : {
        value: 'Jon',
        writable: false
    },
    job: {
        value: 'Fed',
        writable: false
    }
})

// console.log(user1.name);
// console.log(user1.name = 'hanna');
// console.log(user1.name);


const user2 = {
    name: 'Jon',
    s_name: 'Jon',
    job: 'Fed',
}
Object.freeze(user2);

console.log(user2.name);
console.log(user2.name = 'hanna');
console.log(user2.name);
