const { watch, task, series, parallel, src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const concat = require("gulp-concat");
const include = require("gulp-include");
const prettier = require("gulp-prettier");
const browserSync = require("browser-sync").create();
const gulpCleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const ttf2woff2 = require("gulp-ttf2woff2");

const path = {
  src: {
    root: "./src",
    scss: "./src/scss",
    js: "./src/js",
    img: "./src/img",
    html: "./src/html",
    fonts: "./src/fonts",
  },

  dist: {
    root: "./dist",
    css: "./dist/css",
    js: "./dist/js",
    img: "./dist/img",
    fonts: "./dist/fonts",
  },
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.dist.root,
    },
    port: 5000,
    browser: "google-chrome",
    notify: false,
  });
};

const scss = () => {
  return (
    src(`${path.src.scss}/main.scss`)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      // .pipe(cleanCSS({format:"beautify"}))
      .pipe(rename({ basename: "styles", suffix: ".min" }))
      .pipe(sourcemaps.write())
      .pipe(dest(`${path.dist.css}`))
      .pipe(browserSync.stream())
  );
};

const font = () => {
  return src([`${path.src.fonts}/**/*.ttf`])
    .pipe(ttf2woff2())
    .pipe(dest(path.dist.fonts));
};

const clean = async () => {
  return del([`${path.dist.root}/**`, `!${path.dist.root}`]);
};

const html = () => {
  return src([`${path.src.root}/index.html`])
    .pipe(sourcemaps.init())
    .pipe(
      include({
        includePaths: __dirname + path.src.html.slice(1),
        // prefix: "@@",
        // basepath: `${path.src.html}`,
      })
    )
    .on("error", console.log)
    .pipe(
      prettier({
        htmlWhitespaceSensitivity: "css",
        tabWidth: 2,
        printWidth: 120,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest(path.dist.root))
    .pipe(browserSync.stream());
};

const cleanCSS = () => {
  return src(`${path.dist.css}/**/*.css`)
    .pipe(gulpCleanCSS())
    .pipe(dest(`${path.dist.css}`))
    .pipe(browserSync.stream());
};

const img = () => {
  return src(`${path.src.img}/**/*`).pipe(dest(path.dist.img));
};

const watchers = () => {
  server();
  watch([`${path.src.scss}/**/*.scss`], scss);
  // .on(
  //   "change",
  //   browserSync.reload
  // );
  watch([`${path.src.html}/**/*.html`, `${path.src.root}/index.html`], html);
  // .on(
  //   "change",
  //   browserSync.reload
  // );
  watch(`${path.src.img}/**/*.{jpg,png,svg}`, img).on(
    "change",
    browserSync.reload
  );

  watch(`${path.src.fonts}/**/*.ttf`, font).on("change", browserSync.reload);
};

exports.default = scss;
exports.scss = scss;
exports.cleanCss = cleanCSS;
exports.clean = clean;
exports.html = html;
exports.watcher = watchers;
exports.server = server;
exports.dev = series(clean, parallel(scss, html, img, font), watchers, server);
