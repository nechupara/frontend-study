// @ts-check
"use strict";

const H_CELLS = 20;
const V_CELLS = 20;
const NUMBER_OF_BOMBS = Math.floor((H_CELLS * V_CELLS) / 6);

const drawField = () => {
    const field = document.createElement("div");
    field.classList.add("field");
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
            cell.dataset.row = rowNumber.toString();
            cell.dataset.col = colNumber.toString();
            cell.dataset.index = cellIndex.toString();
            cellIndex++;
            // cell.innerText = rowIndex === 0 ? `${colIndex}` : `${rowIndex}${colIndex}`;
            field.append(cell);
        }
    }
    document.body.prepend(field);
};

const placeBombs = () => {
    const cells = document.querySelectorAll(".cell");
    let bombsToPlace = NUMBER_OF_BOMBS;
    while (bombsToPlace) {
        const index = Math.floor(Math.random() * H_CELLS * V_CELLS);
        if (cells[index].classList.contains("mine")) continue;
        cells[index].classList.add("mine");
        bombsToPlace--;
    }
};

/** @param {Number} index @returns {Array.<{row: Number, col: Number}>}*/

const getNeighborsCoords = (index) => {
    const cell = /** @type {HTMLDivElement} */ (document.querySelector(`[data-index='${index}']`));
    const row = +cell.dataset.row;
    const col = +cell.dataset.col;

    const coordinats = [];
    let neighborsRows = [];
    let neighborsCols = [];

    if (row > 1 && row < V_CELLS) {
        neighborsRows = [row - 1, row, row + 1];
    } else if (row == 1) {
        neighborsRows = [row, row + 1];
    } else if (row == V_CELLS) {
        neighborsRows = [row - 1, row];
    }

    if (col > 1 && col < H_CELLS) {
        neighborsCols = [col - 1, col, col + 1];
    } else if (col === 1) {
        neighborsCols = [col, col + 1];
    } else if (col === H_CELLS) {
        neighborsCols = [col - 1, col];
    }

    for (const rowN of neighborsRows) {
        for (const colN of neighborsCols) {
            if (rowN !== row || colN !== col) {
                coordinats.push({ row: rowN, col: colN });
            }
        }
    }
    return coordinats;
};


const assignClassToNeighbors = () => {
    const mines = /** @type {NodeListOf.<HTMLElement>} */ (document.querySelectorAll(".mine"));
    mines.forEach((el) => {
        const mineIndex = +el.dataset.index;
        const currentNeighbors = getNeighborsCoords(mineIndex);
        currentNeighbors.forEach((el) => {
            const currentCell = document.querySelector(`[data-row='${el.row}'][data-col='${el.col}']`);
            if (!currentCell.classList.contains("neighbor") && !currentCell.classList.contains("mine")) {
                currentCell.classList.add("neighbor");
            }
        });
    });
};

const calculateNearbyMines = () => {
    const neighborsOfMines = /** @type {NodeListOf.<HTMLElement>} */ (document.querySelectorAll(".neighbor"));
    for (const cell of neighborsOfMines) {
        const index = +cell.dataset.index;
        let bombs = 0;
        const coordsList = getNeighborsCoords(index);
        for (const coords of coordsList) {
            const currentCell = document.querySelector(`[data-row='${coords.row}'][data-col='${coords.col}']`);
            if (currentCell.classList.contains("mine")) {
                bombs++;
            }
        }
        cell.dataset.minesAround = bombs.toString();
    }
};

const openEmptyArea = () => {
    let wasAction = false;
    do {
        wasAction = false;
        const openedEmptyCells = /** @type {NodeListOf.<HTMLElement>} */ (document.querySelectorAll(".opened:not(.neighbor)"));
        openedEmptyCells.forEach((cell) => {
            const index = +cell.dataset.index;
            const neighborsCoords = getNeighborsCoords(index);
            for (const coords of neighborsCoords) {
                const neighborCell = /** @type {HTMLElement} */ (
                    document.querySelector(`[data-row='${coords.row}'][data-col='${coords.col}']`)
                );
                if (neighborCell.classList.contains("opened") || neighborCell.classList.contains("mine")) continue;
                if (!neighborCell.classList.contains("opened") && !neighborCell.classList.contains("neighbor")) {
                    neighborCell.classList.add("opened");
                    wasAction = true;
                    continue;
                }
                if (neighborCell.classList.contains("neighbor")) {
                    neighborCell.innerHTML = neighborCell.dataset.minesAround;
                    neighborCell.classList.add("opened");
                    wasAction = true;
                    continue;
                }
            }
        });
    } while (wasAction);
};

// console.log(cells);
// const firstCell = field.querySelector("[data-row='2'][data-col='2']");
// console.log(firstCell);

// const mines = field.getElementsByClassName("mine");
// console.log(mines);

// /** @param {HTMLElement} cell @returns {void}*/

// const checkCellsAround = (cell) => {
//     const row = cell.dataset.row;
//     const column = cell.dataset.col;
//     console.log(row, column);
// };

// const mine = /**@type{HTMLElement}*/ (mines[0]);
// console.dir(mines[0]);
// checkCellsAround(/**@type{HTMLElement}*/ (mines[0]));
