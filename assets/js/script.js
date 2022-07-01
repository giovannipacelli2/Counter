'use strict'

let container = document.body.querySelector( "#container" );
let counter = document.body.querySelector( "#counter" );

container.addEventListener( "click", buttonEvent );
container.onmousedown = function () { return false };

function buttonEvent( e ) {
	let button = e.target;
	
	if (!button) return;
	if (!button.classList.contains("button")) return;
	
	e.preventDefault();
	
	if ( button.id === "increase" ) {
		let result = Number( counter.textContent );
		counter.textContent = ++result;
	}
	if ( button.id === "decrease" ) {
		let result = Number( counter.textContent );
		counter.textContent = --result;
	}
}