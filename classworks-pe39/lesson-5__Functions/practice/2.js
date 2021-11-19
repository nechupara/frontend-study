/**
 * Задание 2.
 *
 * Написать функцию, которая определяет количество переданных аргументов, и возвращает их количество.
 */

function calcArgs(){
    return arguments.length;
}

alert(calcArgs(1,2,"ss", false, 0));