import gulp from 'gulp';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
// const imagemin = require( 'gulp-imagemin');
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass)
browserSync.create()

/***** PATHS ****/

const path = {
    src: {
        scss: './src/scss/**/*.scss',
        js: './src/js/*.js',
        img: '.src/images/*.jpg'
    },
    prod: {
        self: './prod/',
        css: './prod/css/',
        js: './prod/js/',
        img: './prod/images/'
        
    }
}

/***** FUNCTIONS ****/

const buildScss = () => (
       gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(gulp.dest(path.prod.css))
        .pipe(browserSync.stream())
)

const buildJs = () => (
    gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.prod.js))
        .pipe(browserSync.stream())
)

const buildImgs = () => (
    gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.prod.img))
    // .pipe(browserSync.stream())
)

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./index.html').on("change", browserSync.reload);
    gulp.watch(path.src.scss, buildScss).on('change', browserSync.reload)
    gulp.watch(path.src.js, buildJs).on("change", browserSync.reload);
    gulp.watch(path.src.js, buildImgs).on("change", browserSync.reload);

}

const cleanBuild = () => gulp.src(path.prod.self, { allowEmpty: true }).pipe(clean())



/***** TASK ****/

const build = gulp.series(buildScss, buildJs);

gulp.task('dev', gulp.series(cleanBuild, gulp.parallel(buildImgs, build), watcher));


// gulp.series
// gulp.parallel