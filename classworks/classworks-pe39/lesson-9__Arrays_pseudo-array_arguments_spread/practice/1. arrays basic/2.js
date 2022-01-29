/**
 * Задача 2.
 *
 * Написать мульти-язычную программу-органайзер.
 *
 * Программа спрашивает у пользователя на каком языке он желает увидеть список дней недели.
 * После ввода пользователем желаемого языка программа выводит в консоль дни недели на указанном языке.
 *
 * Доступные языки (локали): ua, ru, en.
 *
 * Если введённая пользователем локаль не совпадает с доступными — программа переспрашивает его до тех пор,
 * пока доступная локаль не будет введена.
 *
 * Условия:
 * - Решение должно быть коротким, лаконичным и универсальным;
 * - Всячески использовать методы массива;
 * - Использование метода Object.keys() обязательно.
 */

/* Дано */
const days = {
	ua: [
		'Неділя',
		'Понеділок',
		'Вівторок',
		'Середа',
		'Четвер',
		'П’ятниця',
		'Субота',

	],
	ru: [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',

	],
	en: [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',

	],
};
(function user() {
	let lang = prompt(`Доступные языки (локали): ua, ru, en.`);
	let lanGuages = Object.keys(days)
	while (!lanGuages.includes(lang)){
		lang = prompt(`Еще раз`);
	}

	let now = new Date();
	let today = now.getDay();
	for (const dayKey in days) {
		if (dayKey === lang) {
			console.log(days[dayKey]);
			days[dayKey].forEach((element,index) =>{ if(today===index){console.log(element)}})
		}

	}

})()

(
	// функции которые нужно авто. запустить
)()
// user()


/* Решение */
/*
const availableLanguages = Object.keys(days);
let locale = prompt(
	`Введите желаемую локаль. Доступные: ${availableLanguages}.`,
	'ru',
);

while (!availableLanguages.includes(locale)) {
	locale = prompt(
		`Вы ввели несуществующую локаль. Попробуйте ещё раз. Доступные: ${availableLanguages}.`,
		'ru',
	);
}

days[locale].forEach(day => {
	console.log(day);
});*/
