const addBtn = document.getElementById("add");
const input = document.getElementById("input");
const list = document.getElementById("list");


addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    li.innerText = input.value;
    li.append(removeBtn);
    list.append(li);

    let counter = 0;
    
    removeBtn.addEventListener("click", (event) => {
        if (counter < 1) {
            event.target.closest("li").style = " text-decoration: line-through";
            counter++;
        } else {
            event.target.closest("li").remove();
        }
    });
});
