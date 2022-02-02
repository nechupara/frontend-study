const elem = document.querySelectorAll('.grid');

const masonry = new Masonry(elem[0], {
        itemSelector: '.grid-item',
        columnWidth: 160,
        gutter: 10,
});

const masonry2 = new Masonry(elem[1], {
        itemSelector: '.grid-item',
        columnWidth: 180,
});

// $('.grid').masonry({
//     itemSelector: '.grid-item',
//     columnWidth: 160
//   });
