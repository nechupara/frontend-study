// @ts-check
"use strict";

const H_CELLS = 8;
const V_CELLS = 8;

const field = document.createElement("div");
field.classList.add('field')

/** @type {Array.<{cell: HTMLTableCellElement, row: number, column: number}>} */
const cells = [];

for (let rowIndex = 0; rowIndex < V_CELLS; rowIndex++) {
    const row = document.createElement("div");
    for (let colIndex = 0; colIndex < H_CELLS; colIndex++) {
        const cell = document.createElement("td");
        cell.dataset.row = rowIndex.toString();
        cell.dataset.col = colIndex.toString();
        cell.innerText = rowIndex === 0 ? `${colIndex}` : `${rowIndex}${colIndex}`;

        row.append(cell);
        cells.push({ cell: cell, row: rowIndex, column: colIndex });
    }
    table.append(row);
}

document.body.append(table);
console.log(cells);
const firstCell = table.querySelector("[data-row='2'][data-col='2']");
console.log(firstCell);

const num = Number.parseInt(`${0}${3}`);
console.log(num);

let bombsToPlace = Math.floor((H_CELLS * V_CELLS) / 6);

while (bombsToPlace) {
    const index = Math.floor(Math.random() * H_CELLS * V_CELLS);
    if (cells[index].cell.classList.contains("mine")) continue;
    cells[index].cell.classList.add("mine");
    bombsToPlace--;
}
