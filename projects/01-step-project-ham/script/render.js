const newsDescriptionHTML = `
    <div class="news-date">
        <span class="news-date-day">12</span>
        <span class="news-date-month">Feb</span>
    </div>
    <div class="news-description">
        <p class="news-name">Amazing Blog Post</p>
        <p class="news-author">By admin</p>
        <p class="news-comments">2 comment</p>
    </div>
`;
document.querySelectorAll('.news-item-link').forEach(elem => {
    elem.insertAdjacentHTML('beforeend', newsDescriptionHTML);
})

///////////////////////////////////////////////////////////////////////////


window.onload = () => {
    const masonryElement = document.querySelector('.best-imgs-wrapper');
    const masonry = new Masonry(masonryElement, {
        itemSelector: '.best-img-item',
        // columnWidth: 114,
        fitWidth: true,
        // initLayout: false,
        // percentPosition: true
        // gutter: 20 ,
    })
}


// masonry.imagesLoaded().progress( function() {
//     masonry.masonry('layout');
//   });


//   imagesLoaded( masonryElement ).on( 'progress', function() {
//     // layout Masonry after each image loads
//     masonry.layout();
//   });