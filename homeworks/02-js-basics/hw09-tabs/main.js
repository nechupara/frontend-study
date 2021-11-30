const tabList = document.querySelector(".tabs");

tabList.addEventListener("click", (event) => {
    const clickedTab = event.target;
    if (!clickedTab.classList.contains("tabs-title")) return;

    if (!clickedTab.classList.contains("active")) {
        // скрываем активную вкладку
        document.querySelector(".tabs-title.active").classList.remove("active");
        document.querySelector(".tab-article.visible").classList.remove("visible");
        // показываем выбранную вкладку
        const title = clickedTab.dataset.title;
        clickedTab.classList.add("active");
        document.querySelector(`.tab-article[data-title='${title}']`).classList.add("visible");
    }
});
