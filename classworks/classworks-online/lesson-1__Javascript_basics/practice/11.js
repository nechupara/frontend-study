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


console.log(!!'false' == !!'true');
console.log('true' == true);
console.log('true' === true);
console.log(NaN == 1);
console.log(NaN == NaN);
console.log(NaN === NaN);

