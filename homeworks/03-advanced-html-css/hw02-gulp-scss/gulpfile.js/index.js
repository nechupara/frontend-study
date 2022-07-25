const _ = require("./config/config");

const scss = require(`${_.path.gulptasks}scss`);
const clean = require(`${_.path.gulptasks}clean`);
const htmlInclude = require(`${_.path.gulptasks}htmlInclude`);
const server = require(`${_.path.gulptasks}server`);

const watcher = () => {
    server();
    _.watch([`${_.path.src.scss}**/*.scss`], scss).on("change", _.browserSync.reload);
    _.watch([`${_.path.src.html}*.html`], htmlInclude).on("change", _.browserSync.reload);
};

exports.default = scss;
exports.clean = clean;
exports.include = htmlInclude;
exports.watcher = watcher;
