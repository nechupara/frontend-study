// /**
//  * Задание 5.
//  *
//  * Написать программу-калькулятор.
//  *
//  * Программа запрашивает у пользователя три значения:
//  * - Первое число;
//  * - Второе число;
//  * - Математическая операция, которую необходимо совершить над введёнными числами.
//  *
//  * Программа должна повторно запрашивать данные, если:
//  * - Любое необходимых чисел не соответствуют критерию корректного числа;
//  * - Математическая операция не является одной из: +, -, /, *, **.
//  *
//  * Если все данные введены верно, программа вычисляет указанную операцию, и выводит в консоль результат:
//  * «Над числами ЧИСЛО_1 и ЧИСЛО_2 была произведена операция ОПЕРАЦИЯ. Результат: РЕЗУЛЬТАТ.`.
//  * 
//  * После первого успешного выполнения программа должна спросить, есть-ли необходимость выполниться ещё раз,
//  * и должна начинать свою работу сначала до тех пор, пока пользователь не ответит «Нет.».
//  *
//  * Когда пользователь откажется продолжать работу программы, программа выводит сообщение:
//  * «✅ Работа завершена.».
//  */



let fNum;
let sNum;
let next = false;
let res;
let opr;

do {
	fNum = prompt("Введите первое число");

	if (fNum === null) break

	while(Number.isNaN(Number.parseFloat(fNum))){
		fNum = prompt("Введите первое число");
	}

	sNum = prompt("Введите  второе число");

	if (sNum === null) break

	while(Number.isNaN(Number.parseFloat(sNum))){
		sNum = prompt("Введите второе число");
	}

	opr = prompt("Выберете математическую операцию:  +, -, /, *, **");

	if (opr === null) break

	while(opr !== "+" && opr !== "-" && opr !== "/" && opr !== "*" && opr !== "**"){
		opr = prompt("Выберете математическую операцию:  +, -, /, *, **");

	}

	switch (opr) {
		case "+":
			res = parseFloat(fNum) + parseFloat(sNum);
			break;
		case "-":
			res = parseFloat(fNum) - parseFloat(sNum);
			break;
		case "/":
			res = parseFloat(fNum) / parseFloat(sNum);
			break;
		case "*":
			res = parseFloat(fNum) * parseFloat(sNum);
			break;
		case "**":
			res = parseFloat(fNum) ** parseFloat(sNum);
			break;
	}

	//   if (opr == "+") {
	//   res = parseFloat(fNum) + parseFloat(sNum);
	// } else if (opr == "-") {
	//   res = parseFloat(fNum) - parseFloat(sNum);
	// } else if  (opr == "/") {
	//   res = parseFloat(fNum) / parseFloat(sNum);
	// } else if (opr == "*") {
	//   res = parseFloat(fNum) * parseFloat(sNum);
	// } else if (opr == "**") {
	//   res = parseFloat(fNum) ** parseFloat(sNum);
	// }
	
	console.log(`Над числами  ${fNum} и  ${sNum} была произведена операция ${opr}. Результат:  ${res}.`);

	next = confirm("Выполнить еще раз?");

}while (next);

alert("✅ Работа завершена.");
