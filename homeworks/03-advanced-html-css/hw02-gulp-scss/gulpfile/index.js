const { series, parallel } = require("gulp");
const _ = require("./config/config");

const scss = require(`${_.path.gulptasks}scss`);
const clean = require(`${_.path.gulptasks}clean`);
const html = require(`${_.path.gulptasks}html`);
const server = require(`${_.path.gulptasks}server`);
const cleanCSS = require(`${_.path.gulptasks}cleanCSS`);

const watchers = () => {
  server();
  _.watch([`${_.path.src.scss}**/*.scss`], scss);
  // .on(
  //   "change",
  //   _.browserSync.reload
  // );
  _.watch([`${_.path.src.html}*.html`], html);
  // .on(
  //   "change",
  //   _.browserSync.reload
  // );
};

const dirName = ()=>{console.log(__filename);}

exports.default = scss;
exports.scss = scss;
exports.cleanCss = cleanCSS;
exports.clean = clean;
exports.html = html;
exports.watcher = watchers;
exports.server = server;
exports.dev = series(clean, parallel(scss, html), watchers, server);
