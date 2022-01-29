const gulp = require('gulp'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	browserSync = require('browser-sync').create()

// gulp.task('buildHtml',  () =>
// 	gulp
// 		.src('./src/index.html')
// 		.pipe(gulp.dest('./prod/')),
// )


/***** PATHS ****/

const path = {
    src: {
        css: './src/css/*.css',
        js: './src/js/*.js',
    },
    prod: {
        self: './prod/',
        css: './prod/css/',
        js: './prod/js/',
        
    }
}

/***** FUNCTIONS ****/

const buildCss = () => (
       gulp.src(path.src.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.prod.css))
        .pipe(browserSync.stream())
)

const buildJs = () => (
    gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.prod.js))
        .pipe(browserSync.stream())
)

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./index.html').on("change", browserSync.reload);
    gulp.watch(path.src.css, buildCss).on("change", browserSync.reload);
    gulp.watch(path.src.js, buildJs).on("change", browserSync.reload);
}

const cleanBuild = () => gulp.src(path.prod.self, { allowEmpty: true }).pipe(clean())

/***** TASK ****/


gulp.task('dev', gulp.series(cleanBuild ,buildCss, buildJs, watcher))

// gulp.series
// gulp.parallel