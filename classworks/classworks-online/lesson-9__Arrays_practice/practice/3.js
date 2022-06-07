/**
 * Задача 3.
 *
 * Создать массив чисел от 1 до 100.
 * Отфильтровать его таким образом, чтобы в новый массив не попали числа меньше 10 и больше 50.
 * Вывести в консоль новый массив.
*/

const arrayGenerator = (n) => {
	const res = [];
	for (let i = 1; i < n; i++) {
		res.push(Math.round(0.5 + Math.random()*100))
		//res.push(i)
	}
	return  res
}

const filteredAtrray = arrayGenerator(100).filter((elem) => elem > 10 && elem < 50 )

console.log(arrayGenerator(100))
console.log(filteredAtrray.length)