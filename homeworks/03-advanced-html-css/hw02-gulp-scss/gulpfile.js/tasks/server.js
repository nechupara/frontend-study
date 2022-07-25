const _ = require("../config/config");

module.exports = () => {
    _.browserSync.init({
        server: {
            baseDir: `${_.path.dist.self}`,
        },
        port: 5000,
        browser: "chrome",
        notify: false,
    });
};
