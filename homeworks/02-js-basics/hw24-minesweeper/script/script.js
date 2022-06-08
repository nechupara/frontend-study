// @ts-check
"use strict";

drawField();
placeBombs();

assignClassToNeighbors();
calculateNearbyMines();

const field = document.querySelector(".field");
field.addEventListener("click", (event) => {
    event.stopPropagation();
    const clickedItem = /** @type {HTMLElement} */ (event.target);

    if (!clickedItem.classList.contains("cell") || clickedItem.classList.contains("opened")) return;
    if (clickedItem.classList.contains("mine")) {
        alert("GAME IS OVER");
        return;
    }
    clickedItem.classList.add("opened");
    if (clickedItem.classList.contains("neighbor")) {
        clickedItem.innerHTML = clickedItem.dataset.minesAround;
    } else {
        openEmptyArea();
    }
});

field.addEventListener("dblclick", (event) => {
    event.stopPropagation();
    const clickedItem = /** @type {HTMLElement} */ (event.target);
    if (clickedItem.classList.contains("opened") && clickedItem.classList.contains("neighbor")) {
        console.log(clickedItem);
    }
});

field.addEventListener("contextmenu", (event) => {
    event.stopPropagation();
    event.preventDefault();
    const clickedItem = /** @type {HTMLElement} */ (event.target);
});
