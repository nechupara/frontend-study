const { watch, task, series, parallel, src, dest } = require("gulp");

const sass = require("gulp-sass")(require("sass"));
const del = require("del");
// const concat = require("gulp-concat");  // CURRENTLY NOT IN USE. I'm usint gulp-include instead
const include = require("gulp-include");
const prettier = require("gulp-prettier");
const browserSync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const ttf2woff2 = require("gulp-ttf2woff2");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

const path = {
  src: {
    root: "./src",
    scss: "./src/scss",
    js: "./src/script",
    img: "./src/img",
    html: "./src/html",
    fonts: "./src/fonts",
  },

  dist: {
    root: "./dist",
    css: "./dist/css",
    js: "./dist/script",
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

const scssDev = () => {
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

const jsDev = () => {
  return src([`${path.src.js}/main.js`])
    .pipe(sourcemaps.init())
    .pipe(
      include({
        includePaths: __dirname + path.src.js.slice(1),
        // prefix: "@@",
        // basepath: `${path.src.html}`,
      })
    )
    .on("error", console.log)
    .pipe(rename({ basename: "scripts", suffix: ".min" }))
    .pipe(
      prettier({
        tabWidth: 2,
        printWidth: 80,
      })
    )
    .pipe(sourcemaps.write())
    .pipe(dest(path.dist.js))
    .pipe(browserSync.stream());
};

const imgDev = () => {
  return src(`${path.src.img}/**/*.{jpg,png,svg,webp}`).pipe(
    dest(path.dist.img)
  );
};

const watchers = () => {
  server();
  watch([`${path.src.scss}/**/*.scss`], scssDev);
  // .on(
  //   "change",
  //   browserSync.reload
  // );
  watch([`${path.src.html}/**/*.html`, `${path.src.root}/index.html`], html);
  // .on(
  //   "change",
  //   browserSync.reload
  // );
  watch(`${path.src.img}/**/*.{jpg,png,svg}`, imgDev).on(
    "change",
    browserSync.reload
  );

  watch(`${path.src.fonts}/**/*.ttf`, font).on("change", browserSync.reload);

  watch(`${path.src.js}/**/*.js`, jsDev).on("change", browserSync.reload);
};

const scss = () => {
  return src(`${path.src.scss}/main.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(
      autoprefixer({
        grid: true,
        overrideBrowserslist: ["last 3 versions"],
        // cascade: true,
      })
    )
    .pipe(rename({ basename: "styles", suffix: ".min" }))
    .pipe(dest(`${path.dist.css}`));
};

const js = () => {
  return src([`${path.src.js}/main.js`])
    .pipe(
      include({
        includePaths: __dirname + path.src.js.slice(1),
        // prefix: "@@",
        // basepath: `${path.src.html}`,
      })
    )
    .on("error", console.log)
    .pipe(uglify({ toplevel: true }))
    .pipe(rename({ basename: "scripts", suffix: ".min" }))
    .pipe(dest(path.dist.js));
};

const img = () => {
  return src(`${path.src.img}/**/*.{jpg,png,svg,webp}`)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.dist.img));
};

exports.default = scssDev;

exports.dev = series(
  clean,
  parallel(scssDev, html, imgDev, font, jsDev),
  watchers,
  server
);

exports.build = series(clean, parallel(html, scss, js, font, img));
