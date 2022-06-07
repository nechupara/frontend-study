/**
Объявление функции
*/

/**
 *
 * Function Declaration – функция, объявленная в основном потоке кода.
 * Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.
 *
* */

/*
//Функциональные выражения(Function Declaration)
function showMessage () {
	alert("Hello world");
	// console.log( ( "Hello world" ) );
}

/!* вызов функции *!/
showMessage() // выведет на экран модальное окно с сообщением "Hello world"


//Function Expression
let showMessage = function () {
	alert("Hello world");
	// console.log( ( "Hello world" ) );
}

/!* вызов функции *!/
showMessage() // выведет на экран модальное окно с сообщением "Hello world"

*/














//
// start();
//
// function start() {
// 	function end1() {
// 		console.log('end1');
// 	}
//
// 	let end2 = function (){
// 		console.log('end2');
// 	}
//
// 	let end3 = () => console.log('end3');
//
// 	console.log('start')
// 	end1()
// 	end2()
// 	end3()
// }
//
// start();


// console.log(a);
// let a = 10;
// console.log(a);


// Что будет выведено кодом ниже?
// const add = (a = 2, b = 2) => a + b;
//
// console.log( add(1) );  //null // 3
// console.log( add(5/0, 4) );  //undefined // 6

 // Какой вариант из нижеприведенных создаст такую же функцию?
// function s() { return 10; }

// let s = (a) => Number.isNaN(a);
// function s() { call(10); }
// var s = function() { alert(10); }
// function s() { 10; }
// s();


// (function hello() { return 1; })()
// (function hello() {
//     console.log(1); })();
// (function hello() { alert(1); })()

// (
//     /*Функции*/
// )();


// alert(hello); //function hello() { return 1; };
// alert(hello()); // 1

let user = new Object();
let user = {};
user.isAdmin = true;

console.log(user);