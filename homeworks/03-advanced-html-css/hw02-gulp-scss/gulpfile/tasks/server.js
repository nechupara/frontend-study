const _ = require("../config/config");

module.exports = () => {
    _.browserSync.init({
      server: {
        baseDir: _.path.dist.root,
      },
      port: 5000,
      browser: "google-chrome",
      notify: false,
    });
};
