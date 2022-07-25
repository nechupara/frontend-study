const _ = require("../config/config");

module.exports = () => {
    return _.src([`${_.path.src.html}index.html`])
        .pipe(
            _.include({
                prefix: "@@",
                basepath: "@file",
            })
        )
        .pipe(
            _.prettier({
                htmlWhitespaceSensitivity: "css",
                tabWidth: 2,
                printWidth: 120,
            })
        )
        .pipe(_.dest(_.path.dist.self))
        .pipe(_.browserSync.stream());
};
