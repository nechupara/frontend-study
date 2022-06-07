/**
 * Задание 2.
 *
 * Написать программу-калькулятор.
 *
 * Программа запрашивает у пользователя три значения:
 * - Первое число;
 * - Второе число;
 * - Математическая операция, которую необходимо совершить над введёнными числами.
 *
 * Программа должна повторно запрашивать данные, если:
 * - Любое необходимых чисел не соответствуют критерию корректного числа;
 * - Математическая операция не является одной из: +, -, /, *, **.
 *
 * Если все данные введены верно, программа вычисляет указанную операцию, и выводит в консоль результат:
 * «Над числами ЧИСЛО_1 и ЧИСЛО_2 была произведена операция ОПЕРАЦИЯ. Результат: РЕЗУЛЬТАТ.`.
 *
 * После первого успешного выполнения программа должна спросить, есть-ли необходимость выполниться ещё раз,
 * и должна начинать свою работу сначала до тех пор, пока пользователь не ответит «Нет.».
 *
 * Когда пользователь откажется продолжать работу программы, программа выводит сообщение:
 * «✅ Работа завершена.».
 */


const culc=() => {
	let number1 = Number(prompt("Enter first number -"));
	while (!Boolean(number1) || isNaN(number1)){
		number1 = Number(prompt("Enter first number -"))
	}
	let number2 = Number(prompt("Enter second number -"));
	while (!Boolean(number2) || isNaN(number2)) {
		number2 = Number(prompt("Enter second number -"))
	}
	let operation = prompt(`Введите Математическую операцию одну из: +, -, /, *, **.`)
	while (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*" && operation !== "**") {
		operation = prompt(`Введите Математическую операцию одну из: +, -, /, *, **.`)
	}
	let result = null;
	switch (operation) {
		case "+" :
			result=number1 + number2;
			break;
		case "-" :
			result=number1 - number2;
			break;
		case "/" :
			result=number1 / number2;
			break;
		case "*" :
			result=number1 * number2;
			break;
		case "**" :
			result=number1 ** number2;
			break;
	}
	alert(`Над числами ${number1} и ${number2} была произведена операция ${operation}. Результат: ${result}.`)
}

do{
	culc()
}while(confirm(`Выполнить другую математическую операцию?`))
alert(`The End`);
