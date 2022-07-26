const _ = require("../config/config");

module.exports = () => {
  return (
    _.src(`${_.path.src.scss}main.scss`)
      .pipe(_.sourcemaps.init())
      .pipe(_.sass().on("error", _.sass.logError))
      // .pipe(_.cleanCSS({format:"beautify"}))
      .pipe(_.sourcemaps.write())
      .pipe(_.dest(`${_.path.dist.css}`))
      .pipe(_.browserSync.stream())
  );
};
