const link = document.querySelector( 'a' );

link.addEventListener( 'click', event => {
	event.preventDefault();
	console.log( event.target );
} );
