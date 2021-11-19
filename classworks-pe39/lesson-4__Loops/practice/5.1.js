/**
Функкції, щоб спрощувати повторювальні дії + робити легшим і структурованішим код.

 Аргумент передається, щоб з ним взаємодіяли.

 **/

let a="";
let b="";
let operation="";

function isValidNum (num){
	return (Number.isNaN(Number.parseFloat(num))||num===null);
}

function isValidOp (op){
	return ( op==="+" || op==="-" || op==="*" || op==="/" );
}

function isValidDivision (divider,operat){
	if (Number(divider)===0 && operat==="/"){
		alert("На ноль делить нельзя. Введете все заново."); /* розумію що: Внутри функции в данном случае что-либо консолить не стоит, але тут явно доречно)*/
		return (Number(divider)===0 && operat==="/");
	}
}

do{
	a = prompt("Введите число A",a);
	b = prompt("Введите число B",b);
	operation = prompt("Введите математическую операцию. Допустимые значения: +, -, *, /",operation); /* alert(`a= ${a} b=${b} operation=${operation} b===0 ${b===0} operation=/ ${operation==="/"}`);*/
} while ( isValidNum(a) || isValidNum(b) || !isValidOp(operation) || isValidDivision(b,operation)  );

function calculator (arg1,arg2,whatToDo) {
	switch (whatToDo) {
		case '+':
			return (Number(arg1)+Number(arg2)); break;
		case '-':
			return (Number(arg1)-Number(arg2)); break;
		case '*':
			return (Number(arg1)*Number(arg2)); break;
		case '/':
			return (Number(arg1)/Number(arg2)); break;
	}
}

console.log (`${a} ${operation} ${b} = ${calculator(a,b,operation)}` );


