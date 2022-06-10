// @ts-check
"use strict";

const H_CELLS = 20;
const V_CELLS = 30;
const NUMBER_OF_BOMBS = Math.floor((H_CELLS * V_CELLS) / 6);

const field = /** @type {HTMLDivElement} */ (document.querySelector(".field"));
const drawField = () => {
    field.style.cssText = `display: grid;
                           grid-template-columns: repeat(${H_CELLS}, 1fr);
                           grid-template-rows: repeat(${V_CELLS}, 1fr);
    `;

    let cellIndex = 0;
    for (let rowNumber = 1; rowNumber <= V_CELLS; rowNumber++) {
        for (let colNumber = 1; colNumber <= H_CELLS; colNumber++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("hidden");
            cell.dataset.index = cellIndex.toString();
            cellIndex++;
            field.append(cell);
        }
    }
};

const placeBombs = () => {
    const cells = /** @type {NodeListOf.<HTMLDivElement>} */ (field.querySelectorAll(".cell"));
    let bombsToPlace = NUMBER_OF_BOMBS;
    while (bombsToPlace) {
        const index = Math.floor(Math.random() * H_CELLS * V_CELLS);
        if (cells[index].classList.contains("mine")) continue;
        cells[index].classList.add("mine");
        bombsToPlace--;
    }
};

/** @param {number} index @returns {number}*/
const getRow = (index) => {
    return Math.floor(index / H_CELLS) + 1;
};

/** @param {number} index @returns {number}*/
const getCol = (index) => {
    return (index % H_CELLS) + 1;
};

/** @param {Number} index @returns {Array.<number>}*/

const getNeighborsIndexesList = (index) => {
    // const row = getRow(index);
    const col = getCol(index);

    const indexList = [
        index - 1,
        index + 1,
        index - H_CELLS - 1,
        index - H_CELLS,
        index - H_CELLS + 1,
        index + H_CELLS + 1,
        index + H_CELLS,
        index + H_CELLS - 1,
    ];
    /** @type {Array.<number>} */
    const resultIndexList = [];

    for (const i of indexList) {
        if (!(i < 0 || i >= V_CELLS * H_CELLS || Math.abs(col - getCol(i)) > 1)) {
            resultIndexList.push(i);
        }
    }

    return resultIndexList;
};

const assignClassToNeighbors = () => {
    const mines = /** @type {NodeListOf.<HTMLElement>} */ (field.querySelectorAll(".mine"));
    mines.forEach((el) => {
        const mineIndex = +el.dataset.index;
        const indexesOfNeighbors = getNeighborsIndexesList(mineIndex);
        indexesOfNeighbors.forEach((cellIndex) => {
            const currentCell = document.querySelector(`[data-index='${cellIndex}']`);
            if (!currentCell.classList.contains("neighbor") && !currentCell.classList.contains("mine")) {
                currentCell.classList.add("neighbor");
            }
        });
    });
};

const calculateNearbyMines = () => {
    const neighborsOfMines = /** @type {NodeListOf.<HTMLElement>} */ (field.querySelectorAll(".neighbor"));
    for (const cell of neighborsOfMines) {
        const index = +cell.dataset.index;
        let bombs = 0;
        const nearbyCellsIndexes = getNeighborsIndexesList(index);
        for (const cellIndex of nearbyCellsIndexes) {
            const currentCell = field.querySelector(`[data-index='${cellIndex}']`);
            if (currentCell.classList.contains("mine")) {
                bombs++;
            }
        }
        cell.dataset.minesAround = bombs.toString();
    }
};

const openEmptyArea = () => {
    while (true) {
        const openedEmptyCells = /** @type {NodeListOf.<HTMLElement>} */ (field.querySelectorAll(".expand"));
        if (!openedEmptyCells.length) break;
        openedEmptyCells.forEach((cell) => {
            cell.classList.remove("expand");
            const index = +cell.dataset.index;
            const neighborsIndexes = getNeighborsIndexesList(index);
            for (const cellIndex of neighborsIndexes) {
                const neighborCell = /** @type {HTMLElement} */ (field.querySelector(`[data-index='${cellIndex}']`));
                if (neighborCell.classList.contains("opened") || neighborCell.classList.contains("mine")) {
                    continue;
                }
                if (!neighborCell.classList.contains("opened") && !neighborCell.classList.contains("neighbor")) {
                    neighborCell.classList.add("opened", "expand");
                    neighborCell.classList.remove("flag", "hidden");
                    continue;
                }
                if (neighborCell.classList.contains("neighbor")) {
                    neighborCell.innerHTML = neighborCell.dataset.minesAround;
                    neighborCell.classList.add("opened");
                    neighborCell.classList.remove("flag", "hidden");
                    continue;
                }
            }
        });
    }
};

const checkNearbyFlags = () => {
    
}
