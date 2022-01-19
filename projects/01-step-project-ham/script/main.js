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

// Our Amazing Work
const filterTabs = document.querySelector(".filter-list");
const workImages = document.querySelector(".work-imgs");

const doFilteringWorkImages = () => {
    const filterName = filterTabs.querySelector(".filter-tab.active").dataset.filterName;

    const workImgItems = workImages.querySelectorAll(".work-img-wrapper");
    if (filterName === "all") {
        workImgItems.forEach((elem) => {
            if (elem.classList.contains("hidden")) {
                elem.classList.remove("hidden");
            }
        });
    } else {
        workImgItems.forEach((elem) => {
            const elemWorkCategory = elem.dataset.workCategory;
            if (elemWorkCategory === filterName && elem.classList.contains("hidden")) {
                elem.classList.remove("hidden");
            } else if (elemWorkCategory !== filterName && !elem.classList.contains("hidden")) {
                elem.classList.add("hidden");
            }
        });
    }
};

filterTabs.addEventListener("click", (e) => {
    const clickedFilter = e.target;
    if (!clickedFilter.classList.contains("filter-tab")) return;
    if (clickedFilter.classList.contains("active")) return;

    filterTabs.querySelector(".active").classList.remove("active");
    clickedFilter.classList.add("active");

    doFilteringWorkImages();
});

const makeHoverHTML = (filterCatgory) => {
    const categoryNames = {
        "graphic-design": "Graphic Design",
        "web-design": "Web Design",
        "landing-pages": "Landing Pages",
        wordpress: "Wordpress",
    };

    const categoryName = categoryNames[filterCatgory] ? categoryNames[filterCatgory] : " ";
    const htmlContent = `
        <div class="work-img-hover">
            <div class="work-img-hover-circles">
                <div class="img-hover-circle chain">
                </div>
                <div class="img-hover-circle square">
                    <div class="square"></div>
                </div>
            </div>
            <span class="work-img-text-colored upper">creative design</span>
            <span class="work-img-text-grey">${categoryName}</span>
        </div>
    `;
    return htmlContent;
};

let currentHoveredElement = null;

workImages.addEventListener("mouseover", (e) => {
    const hoveredElem = e.target.closest(".work-img-wrapper");

    if (currentHoveredElement === hoveredElem) return;
    if (currentHoveredElement && currentHoveredElement !== hoveredElem) {
        currentHoveredElement.querySelector(".work-img-hover").remove();
    }
    currentHoveredElement = hoveredElem;
    if (!hoveredElem.querySelector(".work-img-hover")) {
        hoveredElem.insertAdjacentHTML("beforeend", makeHoverHTML(hoveredElem.dataset.workCategory));
    }
});

workImages.addEventListener("mouseout", (event) => {
    if (event.relatedTarget === null && currentHoveredElement) {
        currentHoveredElement.querySelector(".work-img-hover").remove();
        currentHoveredElement = null;
        return;
    }
    const relatedTarget = event.relatedTarget.closest(".work-img-wrapper");
    if (relatedTarget !== null && relatedTarget === currentHoveredElement) return;
    const leftIMG = event.target.closest(".work-img-wrapper");
    leftIMG.querySelector(".work-img-hover").remove();
    currentHoveredElement = null;
});

const loadMoreWorkImgsBtn = document.querySelector("#work-imgs-load-btn");

const makeWorkImgHTML = (number, category) => {
    const categoryAdress = {
        "graphic-design": `./img/graphic-design/graphic-design0${number}.jpg`,
        "web-design": `./img/web-design/web-design${number}.jpg`,
        "landing-pages": `./img/landing-pages/landing-page${number}.jpg`,
        wordpress: `./img/wordpress/wordpress0${number}.jpg`,
    };

    return `
        <div class="work-img-wrapper" data-work-category="${category}">
            <img src="${categoryAdress[category]}" alt="image of work sample">
        div>
    `;
};

loadMoreWorkImgsBtn.addEventListener("click", (e) => {
    loadMoreWorkImgsBtn.disabled = true;
    const spinner = document.querySelector(".lds-spinner");
    spinner.classList.toggle("hidden");
    setTimeout(() => {
        const imgsList = [];
        const amountExistingImgs = workImages.querySelectorAll(".work-img-wrapper").length;
        const startIndex = amountExistingImgs > 12 ? 3 : 0;
        for (let i = 1; i <= 3; i++) {
            imgsList.push(makeWorkImgHTML(startIndex + i, "graphic-design"));
            imgsList.push(makeWorkImgHTML(startIndex + i, "web-design"));
            imgsList.push(makeWorkImgHTML(startIndex + i, "landing-pages"));
            imgsList.push(makeWorkImgHTML(startIndex + i, "wordpress"));
        }

        for (let i = 0; i < imgsList.length; i++) {
            const randomIndex = Math.floor(Math.random() * imgsList.length);
            const temp = imgsList[i];
            imgsList[i] = imgsList[randomIndex];
            imgsList[randomIndex] = temp;
        }

        spinner.classList.toggle("hidden");

        imgsList.forEach((elem) => {
            workImages.insertAdjacentHTML("beforeend", elem);
        });

        const filterName = filterTabs.querySelector(".filter-tab.active").dataset.filterName;

        if (filterName !== "all") {
            doFilteringWorkImages();
        }

        loadMoreWorkImgsBtn.disabled = false;
        if (startIndex) {
            loadMoreWorkImgsBtn.remove();
        }
    }, 2000);
});

// WHAT PEOPLE SAY SECTION

const scrollToRightBtn = document.querySelector("#scroll-right-arrow");
const scrollToLeftBtn = document.querySelector("#scroll-left-arrow");
const smallPhotosBlock = document.querySelector(".carousel-photo-wrapper");
const quotesWrapper = document.querySelector(".persons-quotes-wrapper");
let currentQuoteBlock = quotesWrapper.querySelector(".person-quote-block:not(.hidden-to-left, .hidden-to-right)");
let currentCarouselPhoto = document.querySelector(".carousel-photo.active");

scrollToRightBtn.addEventListener("click", (e) => {
    if (!currentQuoteBlock.nextElementSibling) return;
    currentQuoteBlock.classList.add("hidden-to-left");
    currentQuoteBlock = currentQuoteBlock.nextElementSibling;
    currentQuoteBlock.style.zIndex = "1";
    currentQuoteBlock.classList.remove("hidden-to-right");

    currentCarouselPhoto.classList.remove("active");
    currentCarouselPhoto = currentCarouselPhoto.nextElementSibling;
    currentCarouselPhoto.classList.add("active");
});

scrollToLeftBtn.addEventListener("click", (e) => {
    if (!currentQuoteBlock.previousElementSibling) return;
    currentQuoteBlock.classList.add("hidden-to-right");
    currentQuoteBlock = currentQuoteBlock.previousElementSibling;
    currentQuoteBlock.style.zIndex = "1";
    currentQuoteBlock.classList.remove("hidden-to-left");

    currentCarouselPhoto.classList.remove("active");
    currentCarouselPhoto = currentCarouselPhoto.previousElementSibling;
    currentCarouselPhoto.classList.add("active");
});

smallPhotosBlock.addEventListener("click", (e) => {
    if (!(e.target.tagName === "IMG" || e.target.classList.contains("carousel-photo"))) {
        return;
    }

    const target = e.target.closest(".carousel-photo");

    if (target.classList.contains("active")) return;

    const personName = target.dataset.personName;
    currentCarouselPhoto.classList.remove("active");
    target.classList.add("active");
    currentCarouselPhoto = target;

    const quoteBlockToShow = quotesWrapper.querySelector(`.person-quote-block[data-person-name=${personName}]`);
    if (quoteBlockToShow.classList.contains("hidden-to-left")) {
        currentQuoteBlock.classList.add("hidden-to-right");
        let tempElem = currentQuoteBlock.previousElementSibling;
        while (tempElem !== quoteBlockToShow) {
            tempElem.style.zIndex = "-1";
            tempElem.classList.remove("hidden-to-left");
            tempElem.classList.add("hidden-to-right");
            tempElem = tempElem.previousElementSibling;
        }
        quoteBlockToShow.style.zIndex = "1";
        quoteBlockToShow.classList.remove("hidden-to-left");
    } else {
        currentQuoteBlock.classList.add("hidden-to-left");
        let tempElem = currentQuoteBlock.nextElementSibling;
        while (tempElem !== quoteBlockToShow) {
            tempElem.style.zIndex = "-1";
            tempElem.classList.remove("hidden-to-right");
            tempElem.classList.add("hidden-to-left");
            tempElem = tempElem.nextElementSibling;
        }
        quoteBlockToShow.style.zIndex = "1";
        quoteBlockToShow.classList.remove("hidden-to-right");
    }
    currentQuoteBlock = quoteBlockToShow;
});
