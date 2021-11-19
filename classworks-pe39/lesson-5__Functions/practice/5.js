/**
 * Задание 5.
 *
 * Написать функцию-сумматор всех своих параметров.
 *
 * Функция принимает произвольное количество параметров.
 * Однако каждый из них обязательно должен быть числом.
 *
 * Генерировать ошибку, если:
 * - Хоть один из параметров не является допустимым числом (в ошибке указать порядковый номер аргумента);
 * - Если функция была вызвана менее, чем с двумя аргументами.
 *
 * Условия:
 * - Оператором «...» пользоваться запрещено.
 */
function argSumm() {
    if(arguments.length <= 2 ){
        alert('Error');
    } else {
        let result = 0;
        for (let i=0; i < arguments.length; i++){
            if(typeof arguments[i] !== 'number'){
                alert(`Error arguments: ${arguments[i]}`);
            }
        }
        for (let i=0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    }
}

console.log(argSumm(1, 2, "gfhgf"));