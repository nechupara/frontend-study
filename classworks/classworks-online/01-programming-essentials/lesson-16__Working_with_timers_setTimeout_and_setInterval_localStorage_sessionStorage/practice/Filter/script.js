/**
 * Задание 3.
 *
 * Реализовать фильтр галереи
 * */

function Gallery() {
	const images = [
		{
			data: 'graphic_design',
			src: './images/img1.png'
		},{
			data: 'web_design',
			src: './images/img2.png'
		},{
			data: 'landing_pages',
			src: './images/img3.png'
		},{
			data: 'graphic_design',
			src: './images/img4.png'
		},{
			data: 'web_design',
			src: './images/img5.png'
		},{
			data: 'landing_pages',
			src: './images/img6.png'
		},{
			data: 'graphic_design',
			src: './images/img7.png'
		},{
			data: 'web_design',
			src: './images/img8.png'
		},{
			data: 'landing_pages',
			src: './images/img9.png'
		},{
			data: 'graphic_design',
			src: './images/img10.png'
		},{
			data: 'web_design',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img12.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},{
			data: 'landing_pages',
			src: './images/img11.png'
		},
	]

// 1 находим враппер gallery-menu
// 2 Добавляем евентлиснер gallery-menu
// 3 Собираем колекцию data-gallery
// 4 Получаем значение data-memu у нажитой кнокбки
// 5 Отсортировать data-gallery по критерию из 4 пункта
// 6 все что не подходит дать элементам display: none;
// 7 Добавить условие для data-memu: all, нужно показать все картинки.

}

document.addEventListener('DOMContentLoaded', () => {
	Gallery();
});
