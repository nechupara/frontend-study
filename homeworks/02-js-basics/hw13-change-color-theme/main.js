const themeBtn = document.querySelector("#theme-btn");

const switchToDark = () => {
    document.body.classList.add("dark-mode");
    themeBtn.innerText = "Light";
    localStorage.setItem("dark-mode", "true");
};

const switchToLight = () => {
    document.body.classList.remove("dark-mode");
    themeBtn.innerText = "Dark";
    localStorage.removeItem("dark-mode");
};

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("dark-mode")) {
        switchToDark();
    }
});

themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
        switchToLight();
    } else {
        switchToDark();
    }
});
