/**
 * Оператор НЕ представлен восклицательным знаком !.
 */
//
// console.log('! (НЕ)');
// console.log(' ');
// console.log('!0', !0 ); //
// console.log('!true', !true  ); //
// console.log('!false', !false ); //
// console.log('!1', !1 ); //


/**
* В частности, двойное НЕ используют для преобразования значений к логическому типу:
* */
console.log(' '); //
console.log('!! двойное НЕ'); //

console.log('!!"string"', !!"string" ); //
console.log('!!null', !!null );         //

console.log('Boolean("string")', Boolean("string") );   //
console.log('Boolean(NaN)', Boolean(NaN) );                 //
console.log('Boolean(undefined)', Boolean(undefined) );     //
console.log('Boolean(0)', Boolean(0) );       //
console.log('Boolean(1)', Boolean(1) );       //
console.log('Boolean("")', Boolean('') );     //
console.log('Boolean( )', Boolean(' ') );     //
console.log('Boolean(1)', Boolean('1') );     //
console.log('Boolean(0)', Boolean('0') );     //
console.log('Boolean(dfcdsfdsf)', Boolean('dfcdsfdsf') );     //

console.log('Boolean(1)', Boolean(Number('1')) );     //
console.log('Boolean(0)', Boolean(Number('0')) );     //