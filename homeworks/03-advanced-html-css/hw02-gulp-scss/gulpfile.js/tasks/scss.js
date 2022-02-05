const _ = require('../config/config');

module.exports = async () => {
    return _.src(`${_.path.src.scss}*.scss`)
            .pipe(_.del([`${_.path.dist.self}**`, `!${_.path.dist.self}`]))
            .pipe(_.sass().on('error', _.sass.logError))
            .pipe(_.dest( `${_.path.dist.css}`));
}