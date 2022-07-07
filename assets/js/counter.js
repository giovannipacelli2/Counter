'use strict'

let container = document.body.querySelector( "#container" );
let counter = document.body.querySelector( "#counter" );
/*let firstTime = null;*/

container.addEventListener( "pointerdown", function(e){ e.preventDefault() } );

container.addEventListener( "click", buttonEvent );




function buttonEvent( e ) {	

	let button = e.target.closest(".set-counter");

	e.preventDefault();

	check(button, counter);

	function check (button, counter) {
		if (!button) return;
		if (!button.classList.contains("set-counter")) return;

		if ( button.id === "increase" ) {
			increase(counter);
		}
		if ( button.id === "decrease" ) {
			decrease(counter);
		}

		if ( button.id === "reset" ) {
			reset(counter);
		}

	}
	
	function increase (counter) {
		let result = Number( counter.textContent );
		result++;
		setCounter( counter, result );
	}

	function decrease (counter) {
		let result = Number( counter.textContent );
		result--;
		if ( result >= 0 ) {
			setCounter( counter, result );
		}
	}	

	function reset (counter) {
		setCounter( counter, "0" );
	}

	function setCounter( counter, res ) {
		counter.textContent = res;
	}
	
}