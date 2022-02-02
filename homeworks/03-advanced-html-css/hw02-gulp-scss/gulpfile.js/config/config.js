const { watch, task, series, parallel, src, dest } = require("gulp");
const gulp = { watch, task, series, parallel, src, dest };

const path = {
    src: {
        scss: "./src/scss/",
        js: "./src/js/",
        img: "./src/img/",
    },

    dist: {
        self: "./dist",
        css: "./dist/css/",
        js: "./dist/js/",
        img: "./dist/img/",
    },
};

const sass = require("gulp-sass")(require("sass"));

module.exports = { ...gulp, sass };
