'use strict'

let bottom = document.body.querySelector("#container").getBoundingClientRect().bottom;

document.addEventListener("DOMContentLoaded", setHeightOfPage);

window.addEventListener( "resize", setHeightOfPage );

function setHeightOfPage() {
    let windowsHeight = document.documentElement.clientHeight;
    let page = document.body.querySelector( ".page" );

    if ( windowsHeight < bottom ) {
        page.style.height = ( bottom + 10) + "px";
        return;
    }

    page.style.height = ( windowsHeight - 1) + "px";
}