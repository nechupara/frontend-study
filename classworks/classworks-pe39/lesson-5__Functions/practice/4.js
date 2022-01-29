/**
 * Задание 4.
 *
 * Написать улучшенную функцию-счётчик countAdvanced.
 *
 * Функцию-счётчик из предыдущего задания расширить дополнительным функционалом:
 * - Добавить ей третий параметр, и выводить в консоль только числа, кратные значению из этого параметра;
 * - Генерировать ошибку, если функция была вызвана не с тремя аргументами;
 * - Генерировать ошибку, если любой из аргументов не является допустимым числом.
 */
function countAdvanced(start, end, en){
    if(arguments.length !== 3) {
        alert("ERROR");
        return;
    }

    if(typeof start !== 'number' || typeof end !== 'number' || typeof en !== 'number'){
        alert("NaN");
        return;
    }

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
        if(i % en === 0) {
            console.log(i);
        }
    }
    alert("✅ Отсчёт завершен.")
}
// count (25, 10);
// count (2, 2);
countAdvanced (2, 10, 2);