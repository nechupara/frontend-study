"use strict";
const {task, parallel, watch, series, lastRun, src, dest} = require('gulp');

/**
 * Пакеты для обоработки стилей
 * */
const csscomb = require('gulp-csscomb');  //Сортирует css свойства
const csso = require('gulp-csso');  //Оптимизация css
const dependents = require('gulp-dependents'); //Проверяет зависимости в файле
const gulpPostcss = require('gulp-postcss'); //Пост обработка файлов css
const postcss = require('postcss'); //Пост обработка файлов css
const gulpSass = require('gulp-sass'); //Обработка sass/scss файлов, и перекомпиляция в css
const dartSass = require('sass'); //Обработка sass/scss файлов
const sass = gulpSass(dartSass);
const cssnano = require("cssnano"); //Минификация стилей
const flexFix = require('postcss-flexbugs-fixes'); //Фикс частых ошибок при использовании FlexBox
const sassInheritance = require("gulp-sass-inheritance"); //Проверяет зависимости в файлах scss
const groupmedia = require("gulp-group-css-media-queries"); // Групируем media-queries
const sourcemaps = require('gulp-sourcemaps'); //Создает карту css свойст
const autoprefixer = require('autoprefixer'); //Добавление поефикса(флага) для свойст если нужно

/**
 * Пакеты для обоработки html
 * */
const gulpHtmlPicture = require('gulp-html-picture'); //Превратить <img> => <picture> конструкцию с форматами webp и avif
const fileInclude = require('gulp-file-include'); //Подключение html секций

/**
 * Пакеты для обоработки JavaScrips
 * */
const babel = require('gulp-babel'); //Для того что бы писать современный код.
const uglifyES = require("gulp-uglify-es").default; //Оптимизация JavaScrips

/**
 * Пакеты для обоработки изображений
 * */
const size = require('gulp-size'); //Определения размера оптимизированных картинок
const imagemin = require('gulp-imagemin'); //Оптимизация картинок
const imageminOptipng = require('imagemin-optipng'); //Оптимизация картинок png
const imageminMozjpeg = require('imagemin-mozjpeg'); //Оптимизация картинок jpg
const imageminSvgo = require('imagemin-svgo'); //Оптимизация картинок svg
const webp = require('gulp-webp'); //Конвертировать картинки формата png|jpg|jpeg => webp
const avif = require('gulp-avif'); //Конвертировать картинки формата png|jpg|jpeg => avif

/**
 * Пакеты для обоработки шрифтов
 * */
const ttf2woff = require('gulp-ttf2woff'); //Конвертировать шрифт ttf => woff
const ttf2woff2 = require('gulp-ttf2woff2'); //Конвертировать шрифт ttf => woff2

const yargs = require('yargs');

/**
 * Пакеты для работы с спрайтами
 * */
const argv = yargs.array('sprites').argv;
const svgSprite = require('gulp-svg-sprite'); //Генерация спрайтов
const replace = require('gulp-replace');  // Поиск селекторов по html

/**
 * Пакет для создания сервера
 * */
const browserSync = require('browser-sync'); //Локальный сервер что бы сразу видить свои изменения

/**
 * Вспомогательные пакеты
 * */
const gulpif = require("gulp-if"); // if для создания условий при которых выполнится пакет
const notify = require('gulp-notify'); // Подключение уведомления об ошибках в файле
const plumber = require('gulp-plumber'); // Подключение уведомления об ошибках в файле
const rename = require('gulp-rename'); // Переименование файла
const debug = require('gulp-debug'); // Вспомогательные сообщения в консоле
const chalk = require('chalk'); // Редактирование текста в консоле
const log = require("fancy-log"); // Консоль лог в консоле
const {
	accessSync, readFileSync, writeFile,
	readdir,
	appendFile, constants
} = require("fs"); // Пакет для работы с файлами

/**
 * Конфиги
 * */
const {paths} = require('./global.paths.config.js');
const {pngOptions} = require('./gulp/configs/pngOptions.js');
const {mozjpegOptions} = require('./gulp/configs/mozjpegOptions.js');
const {webpOptions} = require('./gulp/configs/webpOptions.js');
const {avifOptions} = require('./gulp/configs/avifOptions.js');
const {svgOptions} = require('./gulp/configs/svgOptions.js');

const argP = yargs.argv,
	production = !!argP.production;

task('copy', () => {
	return src([`${paths.src_folder}/**/*.*`, `!${paths.src_folder}/styles/**/*.*`, `!${paths.src_folder}/scripts/**/*.*`, `!${paths.src_folder}/views/**/*.*`], {
		since: lastRun('copy')
	})
		.pipe(dest(paths.dist_folder))
});

task('html', () => {
	return src([paths.src_folder + '/*.html'], {
		since: lastRun('html')
	})
		.pipe(fileInclude())
		.pipe(dest(paths.dist_folder))
		.pipe(browserSync.stream());
});

task('html:picture', () => {
	return src([paths.dist_folder + '/*.html'], {
		since: lastRun('html:picture')
	})
		.pipe(gulpHtmlPicture({webp: true, avif: true, noPicture: 'no_picture'}))
		.pipe(dest(paths.dist_folder))
});

task('html:copy', () => {
	return src([paths.src_folder + '/*.html'], {
		since: lastRun('html')
	})
		.pipe(dest(paths.dist_folder))
		.pipe(browserSync.stream());
});

task('sass', () => {
	// Post-CSS plugins array
	const processors = [
		// auto fix some flex-box issues
		flexFix(),
		// auto adds vendor prefixes
		autoprefixer({
			grid: true,
			cascade: true
		})
	];

	return src([paths.src_folder + '/styles/**/*.scss'
	], {since: lastRun('sass')})
		.pipe(
			plumber({
				errorHandler: notify.onError(err => ({
					title: "sass",
					message: err.message
				}))
			})
		) // Window notification
		.pipe(gulpif(production, sourcemaps.init()))
		.pipe(dependents())
		.pipe(sassInheritance({dir: paths.src_folder + '/styles/'}))
		.pipe(sass.sync({
			sourceComments: false,
			outputStyle: "expanded"
		}).on('error', sass.logError))
		.pipe(groupmedia())
		.pipe(gulpif(production, debug({title: chalk.cyan.bold(`-> Start style minification`)})))
		.pipe(gulpif(production, gulpPostcss(processors)))
		.pipe(gulpif(production, csscomb())) // Format CSS coding style with
		.pipe(gulpif(production, csso({
			restructure: true,
			sourceMap: true,
			debug: false
		})))
		.pipe(gulpif(production, gulpPostcss([cssnano])))
		.pipe(rename({suffix: ".min"}))
		.pipe(gulpif(production, sourcemaps.write('.')))
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder + '/css/'))
		.pipe(browserSync.stream());
});

task('image', () => {
	return src(paths.src_folder + '/images/**/*.+(png|jpg|jpeg|svg)', {since: lastRun('image')})
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'Image',
					message: error.message /*+ '<%= file.relative %>'*/
				}))
			})
		) // Window notification
		.pipe(gulpif(production, imagemin([
			imageminOptipng({pngOptions}),
			imageminMozjpeg({mozjpegOptions}),
			imageminSvgo({plugins: svgOptions})
		])))
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder + '/images/'))
		.pipe(size({title: '[images]'}))
		.pipe(browserSync.stream());
});

task('image:webp', () => {
	return src(paths.src_folder + '/images/**/*.+(png|jpg|jpeg)', {since: lastRun('image:webp')})
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'image:webp',
					message: error.message /*+ '<%= file.relative %>'*/
				}))
			})
		) // Window notification
		.pipe(gulpif(production, webp({webpOptions}))) // Оптимизация webp & конвертация jpg/png to webp
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder + '/images/'))
		.pipe(size({title: '[images]'})) //Размер картинок
		.pipe(browserSync.stream());
});

task('image:avif', () => {
	return src(paths.src_folder + '/images/**/*.+(png|jpg|jpeg)', {since: lastRun('image:avif')})
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'image:avif',
					message: error.message /*/!*+ '<%= file.relative %>'*!/*/
				}))
			})
		) // Window notification
		.pipe(gulpif(production, avif({avifOptions}))) // Конвертация jpg/png to avif
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder + '/images/'))
		.pipe(size({title: '[images]'})) //Размер картинок
		.pipe(browserSync.stream());
});

task('images', series('image', 'image:webp', 'image:avif'));

task('sprite', () => {
	return src([`${paths.src_folder}/images/sprites/**/*.svg`, `!${paths.src_folder}/images/sprites/sprite.svg`], {since: lastRun('sprites')})
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'sprite',
					message: error.message /*/!*+ '<%= file.relative %>'*!/*/
				}))
			})
		) // Window notification
		.pipe(
			svgSprite({
				log: 'info',
				shape: {
					id: {
						separator: '-',
						generator: 'svg-%s'
					}
				},
				svg: {
					transform: [
						function (svg) {
							var defsRegex = /<defs[^>]*>.+?<\/defs>/g;
							var defs = svg.match(defsRegex);

							if (defs) {
								svg = svg.replace(defsRegex, '');
								svg = svg.replace('<symbol ', defs.join('') + '<symbol ');
							}

							return svg;
						}
					]
				},
				mode: {
					symbol: {
						dest: '',
						sprite: paths.src_folder + '/images/sprites/sprite.svg',
						inline: true,
						render: {
							scss: {
								template: 'gulp/sprite/tmpl_scss.mustache',
								dest: paths.src_folder + '/styles/sprites/_sprite.scss'
							}
						}
					}
				},
				variables: {
					baseFz: 20,
					prefixStatic: 'svg-'
				}
			})
		)
		.pipe(plumber.stop())
		.pipe(dest('.'))
});

task('svg_inline', () => {
	let spritesDotSVG;
	try {
		accessSync(`${paths.src_folder}/images/sprites/sprite.svg`, constants.R_OK | constants.W_OK);
		spritesDotSVG = true;
	} catch (err) {
		console.error(chalk.cyan.red('-> File sprites not generated'));
		spritesDotSVG = false;
	} // Делам проверку для того что определить есть ли файл sprite.svg
	return src(`${paths.dist_folder}/index.html`)
		.pipe(
			plumber({
				errorHandler: notify.onError(error => ({
					title: 'svg_inline',
					message: error.message /*/!*+ '<%= file.relative %>'*!/*/
				}))
			})
		) // Window notification
		.pipe(gulpif(spritesDotSVG, replace(/<div id="svg_inline">(?:(?!<\/div>)[^])*<\/div>/g, () => { // Поиск div с id svg_inline для того что бы вставить содержимое файла ./images/sprite_src/sprite.svg
			const svgInline = readFileSync(`${paths.src_folder}/images/sprites/sprite.svg`, 'utf8');  // Открываем файл
			return '<div id="svg_inline">\n' + svgInline + '\n</div>';          // Вставляем в div с id svg_inline содержимое файла ./images/sprite_src/sprite.svg
		})))
		.on('error', err => {
			if (err.message === 'no such file or directory')
				log.error(err.message);
		})
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder));
});

task('sprites', series('sprite', 'svg_inline'));

task('js', () => {
	return src([paths.src_folder + '/scripts/**/*.js'], {since: lastRun('js')})
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: "javascript",
				message: err.message
			}))
		})) // Window notification
		.pipe(gulpif(production, sourcemaps.init()))
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(gulpif(production, debug({title: chalk.cyan.bold(`-> Start scripts minification`)})))
		.pipe(gulpif(production, uglifyES()))
		.pipe(gulpif(production, sourcemaps.write('.')))
		.pipe(plumber.stop())
		.pipe(dest(paths.dist_folder + '/js/'))
		.pipe(browserSync.stream());
});

task('serve', () => {
	return browserSync.init({
		server: {
			baseDir: ['dist']
		},
		port: 9000,
		open: true
	});
});

task('fonts:ttf2woff', (cb) => {
	src(paths.src_folder + '/fonts/**/*.ttf')
		.pipe(ttf2woff())
		.pipe(rename((path) => {
			path.dirname = `/${path.basename.split("-")[0]}/${path.basename.split("-")[1]}/`;
			path.basename = path.basename.split("-")[0];
		})) /* получаем вот такую структуру файлов при работе с шрифтами, автоматически пересабираем в более удобное хранение шрифтов dist/fonts/Montserrat/Bold/Montserrat.woff*/
		.pipe(dest(paths.dist_folder + '/fonts/'))
	cb()
})

task('fonts:ttf2woff2', (cb) => {
	src(paths.src_folder + '/fonts/**/*.ttf')
		.pipe(ttf2woff2())
		.pipe(rename((path) => {
			path.dirname = `/${path.basename.split("-")[0]}/${path.basename.split("-")[1]}/`;
			path.basename = path.basename.split("-")[0];
		}))
		.pipe(dest(paths.dist_folder + '/fonts/'))
	cb()
})

function fontsStyle(cb) {
	const weightFont = {
		'Thin': '100',
		'Light': '300',
		'Regular': '400',
		'Medium': '500',
		'SemiBold': '600',
		'Bold': '700',
		'ExtraBold': '800',
		'Black': '900'
	}; /* Обьект с толщинами для шрифтов  */

	/**
	 * font Extensions
	 *
	 * ['.eot', '.svg', '.ttf', '.woff', '.woff2']
	 *
	 * */

	const EOT = '.eot';
	const SVG = '.svg';
	const TTF = '.ttf';
	const WOFF = '.woff';
	const WOFF2 = '.woff2';

	writeFile(paths.src_folder + "/styles/base/_fonts.scss", "", cb) /* очищает файл */
	return readdir(paths.src_folder + "/fonts/", (err, fonts) => {  /* заполняем файл */
		if (fonts) {
			let current_fontName;
			fonts.forEach((font) => {
				if (font.includes(EOT) || font.includes(SVG) || font.includes(TTF) || font.includes(WOFF) || font.includes(WOFF2)) {
					let fullFontName = font.split("."); /* разбиваем имя файла и типа Montserrat-Black.ttf => ['Montserrat-Black', 'ttf'] */
					let fontNameWeight = fullFontName[0]; /* Получаем имя файла без его типа Montserrat-Black.ttf => Montserrat-Black */
					let fontName = fontNameWeight.split("-")[0]; /* Разбиваем полное имя файла на составные части и берем только его имя */
					let fontWeight = fontNameWeight.split("-")[1]; /* Разбиваем полное имя файла на составные части и берем только его размер шрифта */

					if (current_fontName !== fontNameWeight) {
						appendFile(
							paths.src_folder + "/styles/base/_fonts.scss",
							`@include font("${fontName}", "${fontWeight}", "${weightFont[fontWeight]}", "normal");\r\n`,
							cb
						);
					}
					current_fontName = fontNameWeight;
				}
			});
		}
	});
}

task('fonts', parallel('fonts:ttf2woff', 'fonts:ttf2woff2', fontsStyle));

task('watchers', () => {
	const watchImages = paths.src_folder + '/images/**/*.+(png|jpg|jpeg|svg)';
	const watchSprites = paths.src_folder + '/images/sprites/**/*.svg';
	const watchHTML = paths.src_folder + '/**/*.html';
	const watchStyles = paths.src_folder + '/styles/**/*.scss';
	const watchScripts = paths.src_folder + '/scripts/**/*.js';
	const watchFonts = paths.src_folder + '/fonts/**/*.ttf';

	watch(watchStyles, series('sass')).on('change', browserSync.reload);
	watch(watchScripts, series('js')).on('change', browserSync.reload);
	watch(watchHTML, series('html')).on('change', browserSync.reload);
	watch(watchImages, series('images', 'pages')).on('change', browserSync.reload);
	watch(watchSprites, series('sprite', 'svg_inline'))
	watch(watchFonts, series('fonts')).on('change', browserSync.reload);
});

task('pages', series('html', 'svg_inline', 'html:picture'));

task('dev', series('html', 'sprites', 'html:picture', 'fonts', 'js', parallel('sass', 'images')));

task('default', series('dev', parallel('serve', 'watchers')));
