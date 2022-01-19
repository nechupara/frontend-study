const add = document.querySelector(".add");
add.addEventListener("submit", addTask);

const tasks = document.querySelector(".tasks");

function addTask(event) {
    event.preventDefault();
    const task = event.currentTarget.firstElementChild.value;
    if (task === "" || task === " ") {
        return;
    }
    tasks.insertAdjacentHTML(
        "afterbegin",
        `<li class="text">${task}<button class="x-btn" type="button"> x </button></li>`
    );
    document.querySelector(".x-btn").addEventListener("click", onClick);
}

let counter = 0;
function onClick(event) {
    if (counter < 1) {
        event.currentTarget.parentNode.classList.add("red");
        counter++;
    } else {
        event.currentTarget.parentNode.remove();
    }
}
