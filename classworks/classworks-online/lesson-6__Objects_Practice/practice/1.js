/**
 * Задание 1
 * Написать программу для расчета индекса массы тела.
 *
 * Спросить у пользователя его имя, его рост в метрах (1.83 например) и его вес.
 * Проверить на то, что это числа, спрашивать до тех пор пока не введет корректно.
 *
 * Высчитав ИМТ, сгенерировать совет. (https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B4%D0%B5%D0%BA%D1%81_%D0%BC%D0%B0%D1%81%D1%81%D1%8B_%D1%82%D0%B5%D0%BB%D0%B0)
 * 16 и менее - 'У вас выраженный дефицит массы тела. Пожалуйста, обратитесь к специалистам'
 * 16—18,5 - 'Недостаточная масса тела. Советуем обратить внимание на питание'
 * 18,5—25 - 'У вас нормальный ИМТ. Так держать'
 * 25—30 - 'У вас избыточная масса тела. Советуем обратить внимание на питание'
 * Больше 30 - 'У вас ожирение. Пожалуйста, обратитесь к специалистам'
 * Если получено значение, что не лежит в диапазоне от 12 и до 50 - 'Какие-то данные некорректные, проверьре введеные данные'
 * Вывести в модальном окне - "Ваш ИМТ ${полученное значение} ${совет}"
 *
 */

const calculateBodyMassIndex = () => {
	let userName = prompt("what is your name?")
	while (!Boolean(userName) || userName.length < 2 || !isNaN(Number(userName))) {
		userName = prompt("Your name is incorrect. what is your real name?")
	}
	let userHeight = parseFloat(prompt("what is your height?"))
	while (!Boolean(userHeight) || isNaN(userHeight)) {
		userHeight = parseFloat(prompt("what is your height?"))
	}
	let userWeight = parseFloat(prompt("what is your weight?"))
	while (!Boolean(userWeight) || isNaN(userWeight)) {
		userWeight = parseFloat(prompt("what is your weight?"))
	}
	let indexBMI = userWeight/userHeight**2;
	let indexAdvice = null;
	if (indexBMI < 12 || indexBMI > 50) {
		alert("Какие-то данные некорректные, проверьре введеные данные")
	} else if (indexBMI <= 16) {
		indexAdvice = 'У вас выраженный дефицит массы тела. Пожалуйста, обратитесь к специалистам';
	} else if (indexBMI >16 && indexBMI <= 18.5){
		indexAdvice = 'Недостаточная масса тела. Советуем обратить внимание на питание'
	} else if (indexBMI >18.5 && indexBMI <= 25){
		indexAdvice = 'У вас нормальный ИМТ. Так держать'
	} else if (indexBMI >25 && indexBMI <= 30) {
		indexAdvice = 'У вас избыточная масса тела. Советуем обратить внимание на питание'
	} else {
		indexAdvice = 'У вас ожирение. Пожалуйста, обратитесь к специалистам'
	}
	alert(`${userName}, ваш ИМТ ${indexBMI.toFixed(2)} ${indexAdvice}`)
}
calculateBodyMassIndex()