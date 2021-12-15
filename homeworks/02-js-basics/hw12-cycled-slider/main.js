const images = document.querySelectorAll(".image-to-show");
const stopBtn = document.querySelector("#stop-btn");
const startBtn = document.querySelector("#continue-btn");
startBtn.disabled = true;

let currentIndex = 0;
const maxIndex = images.length - 1;
let timerID = null;
const delay = 3000;

const runSlider = (delay) => {
    timerID = setTimeout(() => {
        images[currentIndex].classList.toggle("hidden");
        currentIndex = currentIndex >= maxIndex ? 0 : ++currentIndex;
        images[currentIndex].classList.toggle("hidden");

        runSlider(delay);
    }, delay);
};

runSlider(delay);

stopBtn.addEventListener("click", () => {
    clearTimeout(timerID);
    stopBtn.disabled = true;
    startBtn.disabled = false;
});

startBtn.addEventListener("click", () => {
    runSlider(delay);
    startBtn.disabled = true;
    stopBtn.disabled = false;
});
