let year = prompt('Восколько можно получить права ?', '');

if (year < 18) {
	alert( 'Это слишком рано...' );
} else if (year > 50) {
	alert( 'Это поздновато' );
} else {
	alert( 'Верно!' );
}