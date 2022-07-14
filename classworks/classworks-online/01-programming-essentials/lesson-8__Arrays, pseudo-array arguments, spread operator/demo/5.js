//sort

let arr = [2,-5,2,63,2555,63,-956];

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

// console.log( arr[ 1 ] ); // -5
// console.log( arr[ 0 ] ); // 2
// console.log( arr[arr.length - 1] ); // -956

// console.log('от меньшего к большему', arr.map( compareNumeric_Small) );
// console.log('от меньшего к большему', arr.sort( (a,b) => a - b ) );



// console.log( arr );
// console.log('a - b от меньшего к большему', arr.sort( (a,b) => a - b ) );
// console.log('b - a от большего к меньшему', arr.sort( (a,b) => b - a ) );
// console.log('// от меньшего к большему', arr.sort( compareNumeric_Small ));
// console.log('// от большего к меньшему', arr.sort( compareNumeric_Big ));
// console.log('reverse', arr.reverse() );