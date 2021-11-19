let imagesSectionSecret = document.querySelector('.images-section-secret');
let imageItems = imagesSectionSecret.querySelectorAll('img');

// let arr = new Array();
let arr = [];
let arr1 = [2,-5,9,6,2555,63,-956];
let obj = {};
let key = '';

for ( const imageItem of imageItems ) {
	let obj = imageItem.getAttribute('src')
	arr.push(obj)
}

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

// let arrImage = arr.reverse()
let arrImage = arr.sort( compareNumeric_Big );

console.log( arr1 );
console.log( arr1.sort( compareNumeric_Small ));
console.log( arr1.sort( compareNumeric_Big ));

arrImage.forEach((element, index, arrayRef) => {
	console.log( element );
	imageItems[index].setAttribute('src', element)
})
