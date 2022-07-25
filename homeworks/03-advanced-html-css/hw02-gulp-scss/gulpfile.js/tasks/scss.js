const _ = require("../config/config");

module.exports = async () => {
    return _.src(`${_.path.src.scss}*style.scss`)
        .pipe(_.sass().on("error", _.sass.logError))
        .pipe(_.cleanCSS({ format: "beautify" }))
        .pipe(_.dest(`${_.path.dist.css}`))
        .pipe(_.browserSync.stream());
};
