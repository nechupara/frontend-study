const table = document.createElement("table");

for (let i = 1; i <= 30; i++) {
    const row = document.createElement("tr");
    for (let i = 1; i <= 30; i++) {
        row.insertAdjacentHTML("beforeend", "<td></td>");
    }
    table.append(row);
}

document.body.prepend(table);

table.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target.tagName !== "TD") return;
    event.target.classList.toggle("black");
});

document.body.addEventListener("click", () => {
    table.classList.toggle("reverse");
});
