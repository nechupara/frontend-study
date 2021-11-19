/**
 * Оператор НЕ представлен восклицательным знаком !.
 */

// console.log('! (НЕ)');
// console.log(' ');
// console.log('!0', !0 ); // true
// console.log('!true', !true  ); // false
// console.log('!false', !false ); // true
// console.log('!1', !1 ); // false


/**
* В частности, двойное НЕ используют для преобразования значений к логическому типу:
* */
console.log(' '); //true
console.log('!! двойное НЕ'); // true

console.log('!!"string"', !!"string" ); // true
console.log('!!null', !!null );         // false

console.log('Boolean("string")', Boolean("string") );   // true
console.log('Boolean(NaN)', Boolean(NaN) );                 //
console.log('Boolean(undefined)', Boolean(undefined) );     //
console.log('Boolean(0)', Boolean(0) );     //
console.log('Boolean(1)', Boolean(1) );     //
console.log('Boolean("")', Boolean('') );     //
console.log('Boolean( )', Boolean(' ') );     //
console.log('Boolean(1)', Boolean('1') );     //
console.log('Boolean(0)', Boolean('0') );     //
console.log('Boolean(dfcdsfdsf)', Boolean('dfcdsfdsf') );     //