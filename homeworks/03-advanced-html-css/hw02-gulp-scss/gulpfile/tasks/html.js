const _ = require("../config/config");

module.exports = () => {
  return _.src([`${_.path.src.html}index.html`])
    .pipe(_.sourcemaps.init())
    .pipe(
      _.include({
        includePaths: __dirname + "/../.." + _.path.src.html.slice(1),

        // prefix: "@@",
        // basepath: `${_.path.src.html}`,
      })
    )
    .on("error", console.log)
    .pipe(
      _.prettier({
        htmlWhitespaceSensitivity: "css",
        tabWidth: 2,
        printWidth: 120,
      })
    )
    .pipe(_.sourcemaps.write())
    .pipe(_.dest(_.path.dist.root))
    .pipe(_.browserSync.stream());
};
