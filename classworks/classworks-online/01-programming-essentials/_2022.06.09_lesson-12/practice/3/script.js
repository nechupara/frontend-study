/**
 * Задание 3.
 *
 * Нужно реализовать добавление картинок согласно структуре.
 * < div className = "image-item" >
 * 		< img src = "./images/section_secret/img1.png" alt = "" >
 * 		< div className = "image-desc" > Diana < span className = "colored" > Cline < /span>
 * 		</div >
 * < /div>
 * Нужно найти селектор images-wrap-grid
 *
 * 1) Первым действием нужно добавить лоадер согласно его структуре
 * <div class="loader">
 * 	 <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'><path opacity='0.2' fill='#000' d='M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z'/><path fill='#F48E0B' d='M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z'><animateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 20 20' to='360 20 20' dur='0.5s' repeatCount='indefinite'/></path></svg>
 * </div>
 *
 * 2) Затем нужно добавить в селектор картинки из массива
 *
 * 3) убрать лоадер.
 *
 * Создайте функцию Gallery и релазизуйте логику добавления картинки должно быть то как представлено на Screenshot
 */

/* Дано */
const images = [
    {
        title: "Diana Cline",
        src: "./images/img1.png",
    },
    {
        title: "Gladys Shirley",
        src: "./images/img2.png",
    },
    {
        title: "Kenneth Coley",
        src: "./images/img3.png",
    },
    {
        title: "Craig Macaulay",
        src: "./images/img4.png",
    },
    {
        title: "Robert Guido",
        src: "./images/img5.png",
    },
    {
        title: "Catherin Pilcher",
        src: "./images/img6.png",
    },
    {
        title: "Porter Yee",
        src: "./images/img7.png",
    },
    {
        title: "Dennis Riddle",
        src: "./images/img8.png",
    },
    {
        title: "Mark Fisher",
        src: "./images/img9.png",
    },
    {
        title: "Thomas Fike",
        src: "./images/img10.png",
    },
    {
        title: "Joshua Ross",
        src: "./images/img11.png",
    },
    {
        title: "Angel Williams",
        src: "./images/img12.png",
    },
];

const Gallery = (pictureArray) => {
    const loader = document.querySelector(".loader");
    const imageWrapper = document.querySelector(".images-wrap-grid");
    loader.remove();
};

