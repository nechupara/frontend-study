const { watch, task, series, parallel, src, dest } = require("gulp");
const gulp = { watch, task, series, parallel, src, dest };

const path = {
    gulptasks: "./tasks/",
    src: {
        scss: "./src/scss/",
        js: "./src/js/",
        img: "./src/img/",
        html: "./src/html/",
    },

    dist: {
        self: "./dist/",
        css: "./dist/css/",
        js: "./dist/js/",
        img: "./dist/img/",
    },
};

const sass = require("gulp-sass")(require("sass"));
const del = require('del');
const concat = require("gulp-concat");
const include = require('gulp-file-include');

module.exports = { path, ...gulp, sass, del, concat, include };
