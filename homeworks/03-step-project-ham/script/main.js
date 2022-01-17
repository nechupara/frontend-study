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
const filterTabs = document.querySelector('.filter-list');

filterTabs.addEventListener('click', e => {
    const clickedFilter = e.target;
    if (!clickedFilter.classList.contains('filter-tab')) return;

    if (!clickedFilter.classList.contains('active')) {
        filterTabs.querySelector('.active').classList.remove('active');

        clickedFilter.classList.add('active');
    }

});


const makeHoverHTML = (filterCatgory) => {
    const categoryNames = {
        'graphic-design': 'Graphic Design',
        'web-design': 'Web Design',
        'landing-pages': 'Landing Pages',
        'wordpress': 'Wordpress',
    }

    const categoryName = categoryNames[filterCatgory] ? categoryNames[filterCatgory] : 'NA';
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
    `
    return htmlContent;
}

const workImages = document.querySelector('.work-imgs');
let currentHoveredElement = null; // test

workImages.addEventListener('mouseover', e => {
    const hoveredElem = e.target.closest('.work-img-wrapper');

    if (currentHoveredElement === hoveredElem) return;
    if (currentHoveredElement && currentHoveredElement !== hoveredElem) {
        currentHoveredElement.querySelector('.work-img-hover').remove();
    }
    currentHoveredElement = hoveredElem;
    if (!hoveredElem.querySelector('.work-img-hover')) {
        hoveredElem.insertAdjacentHTML('beforeend', makeHoverHTML(hoveredElem.dataset.workCategory));
    }
    
});

workImages.addEventListener('mouseout', event => {
    if (event.relatedTarget === null && currentHoveredElement) {
        currentHoveredElement.querySelector('.work-img-hover').remove();
        currentHoveredElement = null;
        return;
    }
    const relatedTarget = event.relatedTarget.closest('.work-img-wrapper');
    if (relatedTarget !== null && relatedTarget === currentHoveredElement) return;
    const leftIMG = event.target.closest('.work-img-wrapper')
        leftIMG.querySelector('.work-img-hover').remove();
        currentHoveredElement = null;
    // }
});