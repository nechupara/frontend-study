let userNumber_1 = prompt('Enter first number:');
while(!isNumberValid(userNumber_1)) {
    userNumber_1 = prompt('You entered the wrong number.\nPlease, enter first number again:');
}

let userNumber_2 = prompt('Enter second number:');
while(!isNumberValid(userNumber_2)) {
    userNumber_2 = prompt('You entered the wrong number.\nPlease, enter second number again:');
}

let userOperator = prompt('Enter what to do with numbers:');
while(!isOperatorValid(userOperator)) {
    userOperator = prompt('Possible variants are "+", "-", "*", "/".\nPlease, enter the correct operator:')
}

userNumber_1 = +userNumber_1;
userNumber_2 = +userNumber_2;

console.log(`${userNumber_1} ${userOperator} ${userNumber_2} = ${calculate(userNumber_1, userNumber_2, userOperator)}`);

// FUNCTIONS:
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ?  num1 / num2 : 'You cannot divide by zero' ;
        default:
            return 'Something went wrong';
    }
}

function isNumberValid(input) {
    return (!Number.isNaN(+input) && !!input) ? true : false;
}

function isOperatorValid(input) {
    return (input === '+' || input === '-' || input === '*' || input === '/') ? true : false;
}
