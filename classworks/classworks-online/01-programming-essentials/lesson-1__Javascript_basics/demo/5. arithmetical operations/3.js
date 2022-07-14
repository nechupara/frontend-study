//==, ===, !=, !==
//!!0 === false;
// !!1 === true;

// console.log('123' = 123); // error
console.log('123' == 123); // true
console.log('123' == '123'); // true
console.log(123 == '123'); // true

console.log('123' === 123); // false

console.log('123' != 123); // false
console.log('123' !== 123); // true

console.log(!!0); // false
console.log(!!0 === false); // true
console.log(!!1); // true
console.log(!!1 === true); // true