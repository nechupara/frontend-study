/**
 * Задание 3.
 *
 * На экране указан список товаров с указанием названия и количества на складе.
 *
 * Найти товары, которые закончились:
 * - Изменить 0 на «закончился»;
 * - Изменить цвет текста на красный;
 * - Изменить жирность текста на 600.
 *
 * Требования:
 * - Цвет элемента изменить посредством модификации атрибута style.
 */


let emptyElem = document.querySelectorAll( ".store li" );
console.log( emptyElem )
emptyElem.forEach( elem => {
	if ( elem.innerText.includes( ": 9" ) ) {
		elem.innerText = `${ elem.innerText.slice( 0, elem.innerText.length - 1 ) } закончился`;
		elem.style.color = "red"
		elem.style.fontWeight = "600"
	}
} )