/**
 * Задание 7.
 *
 * Напишите программу «Кофейная машина».
 *
 * Программа принимает монеты и готовит напитки:
 * - Кофе за 25 монет;
 * - Капучино за 50 монет;
 * - Чай за 10 монет.
 *
 * Чтобы программа узнала что делать, она должна знать:
 * - Сколько монет пользователь внёс;
 * - Какой он желает напиток.
 *
 * В зависимости от того, какой напиток выбрал пользователь,
 * программа должна вычислить сдачу и вывести сообщение в консоль:
 * «Ваш «НАЗВАНИЕ НАПИТКА» готов. Возьмите сдачу: «СУММА СДАЧИ».".
 *
 * Если пользователь ввёл сумму без сдачи — вывести сообщение:
 * «Ваш «НАЗВАНИЕ НАПИТКА» готов. Спасибо за сумму без сдачи! :)"
 */



function cofeMashine () {
	const cofeCost= 25;
	const cappuchinoCost =50;
	const teaCost = 10;

	let payLoad = Number(prompt(`Внесите стоимость`));
	let drinkChoice = prompt(`Cofe, Tea, Cappuchino`).toLowerCase();

	console.log(drinkChoice);

	if (drinkChoice === "cofe"){
		if (payLoad === cofeCost) {
			console.log(`Ваш ${drinkChoice} готов. Спасибо за сумму без сдачи! :)`);
		} else if (payLoad < cofeCost) {
			console.log(`Денег недостаточно`);
		} else {
			console.log(`Ваш ${drinkChoice} готов. Возьмите сдачу: ${payLoad-cofeCost}.`);
		}
	} else if (drinkChoice === "tea"){
		if (payLoad === teaCost) {
			console.log(`Ваш ${drinkChoice} готов. Спасибо за сумму без сдачи! :)`);
		} else if (payLoad < teaCost) {
			console.log(`Денег недостаточно`);
		} else {
			console.log(`Ваш ${drinkChoice} готов. Возьмите сдачу: ${payLoad-teaCost}.`);
		}
	} else if (drinkChoice === "cappuchino"){
		if (payLoad === cappuchinoCost) {
			console.log(`Ваш ${drinkChoice} готов. Спасибо за сумму без сдачи! :)`);
		} else if (payLoad < cappuchinoCost) {
			console.log(`Денег недостаточно`);
		} else {
			console.log(`Ваш ${drinkChoice} готов. Возьмите сдачу: ${payLoad-cappuchinoCost}.`);
		}
	} else {
		console.log(`Извините, мы не готовим ${drinkChoice}`);
	}
}

cofeMashine();