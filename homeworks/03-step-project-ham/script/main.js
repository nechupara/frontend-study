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
const workImages = document.querySelector('.work-imgs');

const doFilteringWorkImages = () => {
    const filterName = filterTabs.querySelector('.filter-tab.active').dataset.filterName;
    
    const workImgItems = workImages.querySelectorAll('.work-img-wrapper')
    if (filterName === 'all') {
        workImgItems.forEach(elem => {
            if (elem.classList.contains('hidden')) {
                elem.classList.remove('hidden');
            }
        })
    } else {
        workImgItems.forEach(elem => {
            const elemWorkCategory = elem.dataset.workCategory;
            if (elemWorkCategory === filterName && elem.classList.contains('hidden')) {
                elem.classList.remove('hidden');
            } else if (elemWorkCategory !== filterName && !elem.classList.contains('hidden')) {
                elem.classList.add('hidden');
            }
        })
    }
}

filterTabs.addEventListener('click', e => {
    const clickedFilter = e.target;
    if (!clickedFilter.classList.contains('filter-tab')) return;
    if (clickedFilter.classList.contains('active')) return;

    filterTabs.querySelector('.active').classList.remove('active');
    clickedFilter.classList.add('active');

    doFilteringWorkImages();

});

const makeHoverHTML = (filterCatgory) => {
    const categoryNames = {
        'graphic-design': 'Graphic Design',
        'web-design': 'Web Design',
        'landing-pages': 'Landing Pages',
        'wordpress': 'Wordpress',
    }

    const categoryName = categoryNames[filterCatgory] ? categoryNames[filterCatgory] : ' ';
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

let currentHoveredElement = null;

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
});

const workImgsBtn = document.querySelector('#work-imgs-load-btn');

const makeWorkImgHTML = (number, category) => {
    const categoryAdress = {
        'graphic-design' : `./img/graphic-design/graphic-design0${number}.jpg`,
        'web-design' : `./img/web-design/web-design${number}.jpg`,
        'landing-pages' : `./img/landing-pages/landing-page${number}.jpg`,
        'wordpress' : `./img/wordpress/wordpress0${number}.jpg`,
    }

    return `
        <div class="work-img-wrapper" data-work-category="${category}">
            <img src="${categoryAdress[category]}" alt="image of work sample">
        div>
    `
}

workImgsBtn.addEventListener('click', e => {
    workImgsBtn.disabled = true;
    const spinner = document.querySelector('.lds-spinner');
    spinner.classList.toggle('hidden');
    setTimeout(() => {
        const imgsList = [];
        const amountExistingImgs =  workImages.querySelectorAll('.work-img-wrapper').length;
        const startIndex = amountExistingImgs > 12 ? 3 : 0;
        for (let i = 1; i <= 3; i++ ) {
            imgsList.push(makeWorkImgHTML(startIndex + i, 'graphic-design'));
            imgsList.push(makeWorkImgHTML(startIndex + i, 'web-design'));
            imgsList.push(makeWorkImgHTML(startIndex + i, 'landing-pages'));
            imgsList.push(makeWorkImgHTML(startIndex + i, 'wordpress'));
        }
    
        for (let i = 0; i < imgsList.length; i++) {
            const randomIndex = Math.floor(Math.random()*(imgsList.length));
            const temp = imgsList[i];
            imgsList[i] = imgsList[randomIndex];
            imgsList[randomIndex] = temp;
        }
        
        spinner.classList.toggle('hidden');
    
        imgsList.forEach(elem => {
            workImages.insertAdjacentHTML('beforeend', elem);
        })
    
        const filterName = filterTabs.querySelector('.filter-tab.active').dataset.filterName;

        if (filterName !== 'all') {
            doFilteringWorkImages();
        }

        workImgsBtn.disabled = false;
        if (startIndex) {
            workImgsBtn.remove();
        }
    }, 1000);
})

// WHAT PEOPLE SAY SECTION

const scrollToRightBtn = document.querySelector('#scroll-left-arrow');
let currentQuote = document.querySelector('.person-quote-block:not(.hidden-to-left, .hidden-to-right)');
// console.log(currentQuote);
scrollToRightBtn.addEventListener('click', e => {
    if (!currentQuote.nextElementSibling) return;
    currentQuote.classList.add('hidden-to-left')
    console.log('kkkkk', currentQuote.nextElementSibling);
    currentQuote = currentQuote.nextElementSibling;
    currentQuote.classList.remove('hidden-to-right')
})