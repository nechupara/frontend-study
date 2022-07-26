const _ = require("../config/config");

module.exports = () => {
  return _.src(`${_.path.dist.css}**/*.css`)
    .pipe(_.cleanCSS())
    .pipe(_.dest(`${_.path.dist.css}`))
    .pipe(_.browserSync.stream());
};
