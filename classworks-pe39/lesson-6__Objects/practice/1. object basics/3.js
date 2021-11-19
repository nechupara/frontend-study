/**
 * Задание 3.
 *
 * Расширить функционал объекта из предыдущего задания:
 * - Добавить метод, который добавляет объекту новое свойство с указанным значением.
 *
 * Продвинутая сложность:
 * Метод должен быть «умным» — он генерирует ошибку при создании нового свойства
 * свойство с таким именем уже существует.
 */
let user = {
    name: 'John',
    s_name: 'Watson',
    job: 'frontend_dev',
    sayHi: function (){
        console.log(`Привет. Меня зовут ${this.name} ${this.s_name}. Я ${this.job}`);
    },
    upProp: function (key,k){
        if (key in this) {
            this[key] = k;
        } else {
            // console.log(`${key} - Такого ключа нет.`);
            throw new Error(`${key} - Такого ключа нет.`)
        }
    },
    addProp: function (key, value){
        if (key in this){
            // console.log(`${key} - Такой ключ уже есть.`)
            throw new Error(`${key} - Такой ключ уже есть.`)
        } else {
            this[key] = value;
        }
    }
}
user.addProp("job", 30);