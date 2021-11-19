/**
 * Задание 5.
 *
 * Объяснить поведение каждое операции.
 */

let x, y, z;

x = 6;
y = 15;
z = 4;
console.log((z = --x - y * 5));

x = 6;
y = 15;
z = 4;
console.log((y /= x + (5 % z)));

x = 6;
y = 15;
z = 4;
console.log((x += y - x++ * z));

/**
 * 1. x * z → 6 * 4 → 24
 * 2. y - 24 → 15 - 24 → -9
 * 3. 6 - 9 = -3
 *
 * Пост-инкремент в данной ситуации не сработает никогда,
 * потому что в выражении к той-же переменной х происходит привязка значения.
 * https://ru.stackoverflow.com/questions/543918/%D0%98%D0%BD%D0%BA%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%B2-javascript
 */

console.log(!!'false' == !!'true');//true
console.log('true' == true); //false
console.log('true' === true);//false
console.log(NaN == 1);//false
console.log(NaN == NaN); //false
console.log(NaN === NaN);//false

