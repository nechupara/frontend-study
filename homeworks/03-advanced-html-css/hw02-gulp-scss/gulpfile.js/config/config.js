const { watch, task, series, parallel, src, dest } = require("gulp");
const gulp = { watch, task, series, parallel, src, dest };

const path = {
    gulptasks: "./tasks/",
    src: {
        scss: "./_src/scss/",
        js: "./_src/js/",
        img: "./_src/img/",
        html: "./_src/html/",
    },

    dist: {
        self: "./dist/",
        css: "./dist/css/",
        js: "./dist/js/",
        img: "./dist/img/",
    },
};

const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const concat = require("gulp-concat");
const include = require("gulp-file-include");
const prettier = require("gulp-prettier");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");

module.exports = { path, ...gulp, sass, del, concat, include, prettier, browserSync, cleanCSS };
