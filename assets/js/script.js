'use strict'

let container = document.body.querySelector( "#container" );
let counter = document.body.querySelector( "#counter" );

container.addEventListener( "click", buttonEvent );
container.onpointerdown = function () { return false };

function buttonEvent( e ) {
	let button = e.target;

	check(button, counter);

	function check (button, counter) {
		if (!button) return;
		if (!button.classList.contains("button")) return;

		if ( button.id === "increase" ) {
			increase(counter);
		}
		if ( button.id === "decrease" ) {
			decrease(counter);
		}

	}
	
	function increase (counter) {
		let result = Number( counter.textContent );
		counter.textContent = ++result;
	}

	function decrease (counter) {
		let result = Number( counter.textContent );
		result--;
		if ( result >= 0 ) {
			counter.textContent = result;
		}
		
	}
	
	e.preventDefault();
	
	
}