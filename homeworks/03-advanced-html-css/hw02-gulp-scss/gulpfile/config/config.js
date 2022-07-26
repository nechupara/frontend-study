const { watch, task, series, parallel, src, dest } = require("gulp");
const gulp = { watch, task, series, parallel, src, dest };

const path = {
  gulptasks: "./tasks/",
  src: {
    root: "./src/",
    scss: "./src/scss/",
    js: "./src/js/",
    img: "./src/img/",
    html: "./src/html/",
  },

  dist: {
    root: "./dist/",
    css: "./dist/css/",
    js: "./dist/js/",
    img: "./dist/img/",
  },
};

const sass = require("gulp-sass")(require("sass"));
const del = require("del"); // Should be edited!!!!
const concat = require("gulp-concat");
const include = require("gulp-include");
const prettier = require("gulp-prettier");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

module.exports = {
  path,
  ...gulp,
  sass,
  del,
  concat,
  include,
  prettier,
  browserSync,
  cleanCSS,
  sourcemaps
};
