/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * А также одним методом sayHi, который выводит в консоль сообщение 'Привет.'.
 */


let user = {
    name: 'John',
    s_name: 'Watson',
    job: 'frontend_dev',
    sayHi: function (){
        console.log(`Привет.`);
    },
}

user.sayHi();