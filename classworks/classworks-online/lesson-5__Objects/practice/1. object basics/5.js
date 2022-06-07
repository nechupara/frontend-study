/**
 * Задание 5.
 *
 * Написать функцию-помощник для ресторана.
 *
 * Функция обладает двумя параметрами:
 * - Размер заказа (small, medium, large);
 * - Тип обеда (breakfast, lunch, dinner).
 *
 * Функция возвращает объект с двумя полями:
 * - totalPrice — общая сумма блюда с учётом его размера и типа;
 * - totalCalories — количество калорий, содержащееся в блюде с учётом его размера и типа.
 *
 * Заметки:
 * - Дополнительные проверки совершать не нужно;
 * - В решении использовать референтный объект с ценами и калориями.
 */


/* Дано */
const priceList = {
	sizes: {
		small: {
			price: 15,
			calories: 250,
		},
		medium: {
			price: 25,
			calories: 340,
		},
		large: {
			price: 35,
			calories: 440,
		},
	},
	types: {
		breakfast: {
			price: 4,
			calories: 25,
		},
		lunch: {
			price: 5,
			calories: 5,
		},
		dinner: {
			price: 10,
			calories: 50,
		},
	},
};

const  restHelper =  (size, type) => {
	let totalprice = 0;
	let totalcalories = 0;
	totalprice += priceList.sizes[size].price;
	totalprice += priceList.types[type].price;
	totalcalories += priceList.sizes[size].calories;
	totalcalories += priceList.types[type].calories;

	return `загальна вартість ${totalprice} , загальна калорійність ${totalcalories}`
}
console.log(restHelper('small', 'breakfast'))
console.log(restHelper('medium', 'breakfast'))
console.log(restHelper('large', 'dinner'))