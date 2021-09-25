/* Рекурсия - это когда функция в своём теле вызывает сама себя. Рекурсия используется на практике для более
краткого и понятного кода, также в тех случаях, когда необходимо совершить перебор всех элементов в сложной
структуре, в которой заранее неизвестно количество вложенных элементов. Т.е. например в случае перебора всех
элементов html-страницы - в разных тегах может быть разное количество дочерних элементов. 
В теории любую рекурсивную функцию можно заменить на циклы, но при этом код будет читаться сложнее. Хотя циклы работают 
быстрее и занимают меньше памяти при работе, а рекурсия имеет ограничение по количеству вложенных вызовов и в процессе работы
накапливает в памяти все промежуточные результаты, всё же её в некоторых случаях используют для удобства. Хотя лично у
меня чтение рекурсивного кода взрывает мозг :))) */

let userNumber = prompt('Enter number:');
while(Number.isNaN(+userNumber) || !userNumber) {
    userNumber = prompt('Entered number is incorrect.\nPlease, enter correct number:')
}

userNumber = +userNumber;

alert(`Factorial of number ${userNumber} is ${calcFactorial(userNumber)}`)

// FUNCTIONS

/* просто ради любопытства написал ещё и вариант с циклом. */

// function calcFactorial(n) {
//     let result = 1;
//     if (n === 0) {
//         return result;
//     } else {
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

function calcFactorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * calcFactorial(n-1);
    }
}


