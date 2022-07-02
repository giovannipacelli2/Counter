'use strict'

let container = document.body.querySelector( "#container" );
let counter = document.body.querySelector( "#counter" );
let firstTime = null;

container.addEventListener( "pointerdown", pointerControl );

function pointerControl(e){
	e.preventDefault();

	if( firstTime ) return;

	if ( e.pointerType === "mouse" ) {
		container.addEventListener( "click", buttonEvent );
		firstTime = true;
	}
	else if ( e.pointerType === "touch" ) {
		container.addEventListener( "touchstart", buttonEvent );
		firstTime = true;
	}
}

function buttonEvent( e ) {	

	let button = e.target.closest(".BUTTON");

	e.preventDefault();

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
	
}