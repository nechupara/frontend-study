const number_0 = 0;
const number_1 = 1;

let userNthNumber = prompt('Enter sequential number:');
while (!Number.isInteger(+userNthNumber) || !userNthNumber) {
    userNthNumber = prompt('Number must be integer\nEnter number again:');
}

userNthNumber = +userNthNumber;

function calcFibonacci(num_0, num_1, n) {
    // `F2 = F0 + F1` 
    // `F-1 = F-3 + F-2` => `F-3 = F-1 - F-2`
    // ... , (num_1 - num_0), num_0, num_1, (num_0 + num_1), ...
    if (n === 0) {
        return num_0;
    } else if (n === 1) {
        return num_1;
    } else if (n > 1) {
        if (n === 2) {
            return num_0 + num_1;
        } else {
            return calcFibonacci(num_1, num_0 + num_1, n - 1);
        }
    } else {  // n < 0
        if (n === -1) {
            return num_1 - num_0;
        } else {
            return calcFibonacci(num_1 - num_0, num_0, n + 1);
        }
    }
}

alert(`The ${userNthNumber}th number of Fibonacci sequence is ${calcFibonacci(number_0, number_1, userNthNumber)}`);
