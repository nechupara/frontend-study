const gulp = require('gulp'),
    concat = require('gulp-concat');

// import gulp from 'gulp';

// gulp.task('buildHtml', () => {
//     gulp.src('./src/index.html')
//         .pipe(gulp.dest('./prod/'))
// })

const path = {
    src: {
        css: './src/css/*.css',
        js: './src/js/*.js'
    },
    prod: {
        self: './prod/',
        css: './prod/css/',
        js: './prod/js/'
    }
}

const buildCss = () => (
    gulp.src(path.src.css)
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.prod.css))
);

const buildJs = () => (
    gulp.src(path.src.js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.prod.js))
);

gulp.task('dev', gulp.series(buildCss, buildJs));