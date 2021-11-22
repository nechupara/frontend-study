const mainBtn = document.getElementById("btn");

const getColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
};

mainBtn.addEventListener("click", (event) => {
    event.target.remove();
    const input = document.createElement("input");
    input.placeholder = "Введите диаметр круга";
    input.type = "number";
    const drawBtn = document.createElement("button");
    drawBtn.innerText = "Нарисовать";

    document.body.append(input, drawBtn);

    drawBtn.addEventListener("click", () => {
        if (!+input.value || Number.isNaN(+input.value)) return;
        const diameter = +input.value;

        document.body.innerHTML = "";
        const divContainer = document.createElement("div");
        divContainer.classList.add("container");
        document.body.append(divContainer);

        for (let i = 1; i <= 100; i++) {
            const divCircle = document.createElement("div");
            divCircle.classList.add("circle");
            divCircle.style.backgroundColor = getColor();
            divCircle.style.width = `${diameter}px`;
            divCircle.style.height = `${diameter}px`;
            divCircle.style.borderRadius = "50%";
            divContainer.append(divCircle);
        }

        divContainer.addEventListener("click", (event) => {
            if (event.target.classList.contains("circle")) {
                event.target.remove();
            }
        });
    });
});
