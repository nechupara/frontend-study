// Спросить у пользователя его имя.
// Написать функцию, которая выводит в консоль количество букв в имени пользователя.
// Обработать кейс, когда в начале слова могут быть введены пробелы, нужно вычислить длинну
// без их учета.
// Если введены только цифры (полученное имя - это число),
// то вывести в консоль - Ошибка, введите имя.

let userName = prompt('Enter your name:');

function getLength(string) {
    if (!Number.isNaN(+string) && string) {
        return ('Only number');
    }
    return string.trim().length;
}
console.log(getLength(userName));
