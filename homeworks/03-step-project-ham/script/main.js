const servicesTabs = document.querySelector(".services-list");

servicesTabs.addEventListener("click", (e) => {
    const clickedTab = e.target;
    if (!clickedTab.classList.contains("services-list-tab")) return;

    if (!clickedTab.classList.contains("active")) {
        document.querySelector(".services-list-tab.active").classList.remove("active");
        document.querySelector(".service-tab-article.visible").classList.remove("visible");

        const title = clickedTab.dataset.serviceTitle;
        clickedTab.classList.add("active");
        document.querySelector(`.service-tab-article[data-service-title='${title}']`).classList.add("visible");
    }
});
