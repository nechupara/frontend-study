// не совсем понял условие про числа m и n. Нужно ли было позволить пользователю вводить два числа в любом порядке (сначала большее потом меньшее и наоборот), или же нет.
// Сделал условие, что сначала нужно ввести меньшее число, а потом большее.

let firstNumber;
let secondNumber;
let isFirstNumValid;
let isSecondNumValid;
let isNumsValid;

do {
    firstNumber = +prompt("Введите первое число:");
    secondNumber = +prompt("Введите второе число:");

    isFirstNumValid = Number.isInteger(firstNumber) && firstNumber > 0;
    isSecondNumValid = Number.isInteger(secondNumber) && secondNumber > 0;

    if (!isFirstNumValid || !isSecondNumValid || firstNumber >= secondNumber) {
        alert("Вы ввели неверные числа.\nПовторите ввод чисел.");
        isNumsValid = false;
    } else {
        isNumsValid = true;
    }
} while (!isNumsValid);

let isSimpleNums = false;
label_1: for (let i = firstNumber; i <= secondNumber; i++) {
    for (let j = 2; j < i || i === 1; j++) {
        if (i % j === 0 || i === 1) continue label_1;
    }
    console.log(i);
    if (!isSimpleNums) isSimpleNums = true;
}

if (!isSimpleNums) {
    console.log("Sorry, no numbers");
}
