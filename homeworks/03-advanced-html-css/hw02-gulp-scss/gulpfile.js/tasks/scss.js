const $ = require('../config/config');

// console.log($);

module.exports = function () {
    return $.src('./src/scss/*.scss')
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.dest('./dist'));
}