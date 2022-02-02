const $ = require('./config/config');

const scssJs = require('./tasks/scss');

// exports.default = function () {
//     return gulp.src('./src/scss/*.scss')
//             .pipe(sass().on('error', sass.logError))
//             .pipe(gulp.dest('./dist'));
// }

exports.default = scssJs;