/**
 * События: делегирование.
 */

const board = document.querySelector( '.board' );

let prevTarget = null;

const handler = event => {
	if ( prevTarget ) {
		const defaultCellColor = document.documentElement.style.getPropertyValue(
			'--cellColor',
		);

		prevTarget.innerText = '';
		prevTarget.style.setProperty( '--cellColor', defaultCellColor );
	}

	event.target.innerText = 'X';
	event.target.style.setProperty( '--cellColor', 'deepskyblue' );

	prevTarget = event.target;
};

board.addEventListener( 'click', handler );
