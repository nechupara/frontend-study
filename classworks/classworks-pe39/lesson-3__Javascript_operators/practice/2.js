/**
 * Задание 2.
 *
 * Написать программу, которая будет приветствовать пользователя.
 * Сперва пользователь вводит своё имя, после чего программа выводит в консоль сообщение с учётом его должности.
 *
 * Список должностей:
 * Mike — CEO;
 * Jane — CTO;
 * Walter — программист:
 * Oliver — менеджер;
 * John — уборщик.
 *
 * Если введёно не известное программе имя — вывести в консоль сообщение «Пользователь не найден.».
 *
 * Выполнить задачу в двух вариантах:
 * - используя конструкцию if/else if/else;
 * - используя конструкцию switch.
 */

let user = prompt("Mike, Jane, Walter, Oliver, John");

// if/else

    // if (user === "Mike") {
    //     alert("Mike — CEO");
    // } else if (user === "Jane") {
    //     alert("Jane — CTO");
    // } else if (user === "Walter") {
    //     alert("Walter — программист");
    // } else if (user === "Oliver") {
    //     alert("Oliver — менеджер");
    // } else if (user === "John") {
    //     alert("John — уборщик");
    // } else {
    //     alert("We dont have this user in base!")
    // }

    //switch

    switch (user) {
        case "Mike":
            alert("Mike — CEO");
            break;
        case "Jane":
            alert("Jane — CTO");
            break;
        case "Walter":
             alert("Walter — программист");
             break;
        case "Oliver":
            alert("Oliver — менеджер");
            break;
        case "John":
            alert("John — уборщик");
            break;
        default :
            alert("We dont have this user in base!");
    }
