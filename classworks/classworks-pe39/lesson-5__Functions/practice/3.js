/**
 * Задание 3.
 *
 * Написать функцию-счётчик count.
 *
 * Функцию обладает будет двумя параметрами:
 * - Первый — число, с которого необходимо начать счёт;
 * - Второй — число, которым необходимо закончить счёт.
 *
 * Если число, с которого начинается счёт больше, чем число,
 * которым он заканчивается, вывести сообщение:
 * «⛔️ Ошибка! Счёт невозможен.»
 * 
 * Если оба этих числа одинаковые, вывести сообщение:
 * «⛔️ Ошибка! Нечего считать.»
 *
 * В начале счёта необходимо вывести сообщение:
 * «🏁 Отсчёт начат.».
 *
 * Каждый «шаг» счёта необходимо выводить в консоль.
 * После прохождения последнего «шага» необходимо вывести сообщение:
 * «✅ Отсчёт завершен.».
 *
 */
function count(start, end){
    if(start > end){
        alert("⛔️ Ошибка! Счёт невозможен.")
        return null;
    }
    if (start === end){
        alert("⛔️ Ошибка! Нечего считать.")
        return;
    }
    alert("🏁 Отсчёт начат.")
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
    alert("✅ Отсчёт завершен.")
}
// count (25, 10);
// count (2, 2);
count (2, 10);