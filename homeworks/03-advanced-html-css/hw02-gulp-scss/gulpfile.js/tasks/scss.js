const $ = require('../config/config');

module.exports = () => {
    return $.src(`${$.path.src.scss}*.scss`)
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.dest( `${$.path.dist.css}`));
}