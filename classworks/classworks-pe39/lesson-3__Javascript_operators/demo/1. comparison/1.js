"use strict"

/**
*
	==      - не строгое сравнение
	===     - строгое сравнение
	!=      - нестрогое не равно
	!==     - строгое не равно
*
* */

//  ==
// console.log('"text" == "text"', "text" == "text" );     //true
// console.log('"1" == 1', "1" == 1 );                     //true
// console.log('1 == "1"', 1 == "1" );                     //true
// console.log('1 == "1a"', 1 == "1a" );                   //false
// console.log('1 == 1', 1 == 1 );                         //true
// console.log('"1a" == 1', "1a" == 1 );                   //false
// console.log('true == 1', true == 1 );                   //true
// console.log('0 == false', 0 == false );                 //true
// console.log('true == !!"0"', true == !!"0" );           //true
// console.log('"1" == false', "1" == false );             //false
// console.log('false == false', false == false );         //true
// console.log('true == !!"true"', true == !!"true" );     //true
//
console.log( !'');  // true
console.log( !' '); // false
console.log( !'0'); // false
console.log( !'1'); // false
console.log( !'sdfdsfdsfdsfds');// false
console.log( !1); // false
console.log( !0); // true
//
console.log( !!'');  // true


// ===
// console.log('"text" === "text"', "text" === "text" );   // true
// console.log('"1" === 1', "1" === 1 );                   // false
// console.log('1 === "1"', 1 === "1" );                   // false
// console.log('1 === "1a"', 1 === "1a" );                 // false
// console.log('1 === 22', 1 === 22 );                       // true
// console.log('"1a" === 1', "1a" === 1 );                 // false
// console.log('true === 1', true === 1 );                 // false
// console.log('0 === false', 0 === false );               // false
// console.log('true === "0"', true === "0" );             // false
// console.log('"1" === false', "1" === false );           // false
// console.log('false === false', false === false );       // true
// console.log('true === "true"', true === "true" );       // false
//
// console.log( '  ' );

// !=
// console.log('"text" != "text"', "text" != "text" );     //false
// console.log('"1" != 1', "1" != 1 );                     //false
// console.log('1 != "1"', 1 != "1" );                     //false
// console.log('1 != "1a"', 1 != "1a" );                   //true
// console.log('1 != 1', 1 != 1 );                         //false
// console.log('"1a" != 1', "1a" != 1 );                   //true
// console.log('true != 1', true != 1 );                   //false
// console.log('0 != false', 0 != false );                 //false
// console.log('true != "0"', true != "0" );               //true
// console.log('"1" != false', "1" != false );             //true
// console.log('false != false', false != false );         //false
// console.log('true != "true"', true != "true" );         //true


// console.log( '  ' );

// !==
// console.log('"text" !== "text"', "text" !== "text" );   //false
// console.log('"1" !== 1', "1" !== 1 );                   //true
// console.log('1 !== "1"', 1 !== "1" );                   //true
// console.log('1 !== "1a"', 1 !== "1a" );                 //true
// console.log('1 !== 1', 1 !== 1 );                       //false
// console.log('"1a" !== 1', "1a" !== 1 );                 //true
// console.log('true !== 1', true !== 1 );                 //true
// console.log('0 !== false', 0 !== false );               //true
// console.log('true !== "0"', true !== "0" );             //true
// console.log('"1" !== false', "1" !== false );           //true
// console.log('false !== false', false !== false );       //false
// console.log('true !== "true"', true !== "true" );       //true
