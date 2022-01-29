//sort

let arr = [2,-5,9,6,2555,63,-956];
function compareNumeric_Small(a, b) { // от меньшего к большему
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}

function compareNumeric_Big(a, b) { // от большего к меньшему
	if (a < b) return 1;
	if (a == b) return 0;
	if (a > b) return -1;
}


console.log( arr );
console.log('// от меньшего к большему', arr.sort( compareNumeric_Small ));
console.log('// от большего к меньшему', arr.sort( compareNumeric_Big ));
console.log('reverse', arr.reverse() );