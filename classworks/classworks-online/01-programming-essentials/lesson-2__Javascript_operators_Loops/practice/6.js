/**
 * Задание 6.
 *
 * Пользователь должен ввести два числа.
 * Если введённое значение не является числом,
 * программа продолжает опрашивать пользователя до тех пор,
 * пока он не введёт число.
 *
 * Когда пользователь введёт два числа, вывести в консоль сообщение:
 * «Поздравляем. Введённые вами числа: «ПЕРВОЕ_ЧИСЛО» и «ВТОРОЕ_ЧИСЛО».».
 */



// let fNumber = +prompt ("ведите первое число")
// while (isNaN(fNumber) || fNumber === null) {
//     fNumber = +prompt ("ведите первое число")
// }
// let sNumber = parseInt(prompt ("ведите второе число"))
// while (isNaN(sNumber) || sNumber === null) {
//     sNumber = parseInt(prompt ("ведите второе число"))
// }
// alert (`«Поздравляем. Введённые вами числа: ${fNumber} и ${sNumber}`)


let fNumber;
do {
	fNumber = parseInt(prompt ("ведите первое число"))
}
while (isNaN(fNumber) || fNumber === null)
let sNumber;
do {
	sNumber = parseInt(prompt ("ведите второе число"))
}
while (isNaN(sNumber) || sNumber === null)
alert (`«Поздравляем. Введённые вами числа: ${fNumber} и ${sNumber}`)