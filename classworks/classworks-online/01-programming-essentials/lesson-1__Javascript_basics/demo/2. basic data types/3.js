/**
 * NaN чаще всего является результат ошибочного математического выражения,
 * с ним мы разберёмся по-подробней чуть позже.
 */
const error = NaN;
/* null — это семантическое значение для отсутствия значения (не путать с undefined!!!). */
const nullValue = null;
const notDefinedValue = undefined;

console.log(error);
console.log(nullValue);
console.log(notDefinedValue);


function nat (str) {
	let type = typeof str;
	let str1;

	if (type === "string" ){
		str1 = str;
	} else {
		str1 = 'dfgfdg'
	}
	return str1;
}

console.log(nat(2222));


let str = 'sddfdsfdsfds';
let namb = 1;
let bol = true;