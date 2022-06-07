// reduce
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6#:~:text=%D0%9C%D1%8B%20%D0%BC%D0%BE%D0%B6%D0%B5%D0%BC%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20reduce%20%2C%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B,%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0%D1%82%D0%B5%D0%BD%D0%B8%D1%80%D1%83%D0%B5%D0%BC%20%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%20total%20.

/**
*
* Когда использовать: когда у вас есть массив чисел и вам надо всех их сложить.
*
* */

// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce((total, amount) => {
// 	return total + amount
// }, 23);
// console.log('sum', sum ); //118.11 ////23 => 141.11//

/**
Как использовать:
	В этом примере reduce() принимает два параметра, total и число с которым сейчас идёт работа.
	Метод проходится по каждому числу в массиве, как бы это было с циклом for.
	Когда цикл только начинается, total имеет значение первого числа с начала массива (29.76), а числом в обработке становится следующее по этому же массиву число (41.85).
	Конкретно в этом примере, нам надо прибавить настоящее число к total.
	Такое вычисление повторяется для каждого числа в массиве и каждый раз настоящее число меняется на следующее число в массиве справа.
	Когда уже нет чисел в массиве, метод отдаёт значение total.*/

//ES5 версия JavaScript метода reduce

// let euros = [29.76, 41.85, 46.5];
// let sum = euros.reduce( function(total, amount){
// 	return total + amount
// });
// console.log('sum ES5 ver.', sum ); //


//Находим среднее число с JavaScript методом reduce
/**
Тут вместо вывода суммы вам надо разделить её на длину массива перед тем, как вы вернете последнее значение.
Вы можете это сделать воспользовавшись преимуществами других аргументов доступных в reduce(). Первый из них это index. Как и с циклом for, index показывает количество раз, которое редюсер пробежался по массиву. Последний аргумент это уже сам массив.
* */

// const euros = [29.76, 41.85, 46.5]; // 0 1 2
// const average = euros.reduce((total, amount, index, array) => {
// 	total += amount; // [3] // 118.11 /// 141.11//
// //  29.76 + 41.85 + 46.5
//
// 	//in - 0
// 	// 0 === 3-1=2
// 	//in - 1
// 	// 1 === 3-1=2
// 	//in - 2
// 	// 2 === 3-1=2
//
// 	if( index === array.length-1 ) {
// 		return total/array.length; // 118.11 / 3
//
// 	} else {
// 		return total;
// 	}
// }, 23);
// console.log('average', average ); //39.37 ///

// Синтаксис
// const average = euros.reduce((total, amount, index, array) => {
// /* Тело функции */
// }, 0); // окамулятор значения, дефолтное можно так сказать total но обычно его упускаю так как по дефолту и так 0


// const average = euros.reduce((total, amount, index, array) => {
// 	total += amount
// 	return total/array.length
// }, 23);

/** Map и Filter как редюсеры */

/**
 * В предыдущих примерах исходным значением был ноль, поэтому можно не указывать или указать для ясности.
 * Пропуская указание изначального значения, total будет по дефолту получать значение первого числа в массиве.
 * Указывая исходное значение, как пустой массив, мы можем в последствии добавлять каждое значение в total.
 * Если мы хотим с помощью reduce превратить массив значений в ещё один массив, в котором каждое значение будет умножено на два, то нам нужно добавлять amount * 2. А затем отдавать total, когда уже не останется чисел для добавления.*/

// const errTop2 = [29.76, 41.85, 46.5];
// const doubled = errTop2.reduce((total, amount) => {
//
// 	total.push(amount * 2);
//
// 	return total;
//
// }, []);
//
// console.log('doubled', doubled ); // [ 59.52, 83.7, 93 ]

/**
 * Мы создали новый массив, в котом каждое число умножается на два. Мы могли бы также отфильтровать числа, которые нам не нужны, просто добавив if внутри функции.
 *
 * */

// const errTop3 = [29.76, 41.85, 46.5];
// const above30 = errTop3.reduce((total, amount) => {
// 	if (amount > 30) {
// 		total.push(amount);
// 	}
// 	return total; //filter
// }, []);
// console.log('above30', above30 ); // [ 41.85, 46.5 ]


//https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6



