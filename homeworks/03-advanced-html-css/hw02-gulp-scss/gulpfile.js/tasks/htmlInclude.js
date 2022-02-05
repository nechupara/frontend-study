const _ = require('../config/config');

module.exports = () => {
    return _.src([`${_.path.src.html}index.html`])
            .pipe(_.include({
                prefix: '@@',
                basepath: '@file'
              }))
            .pipe(_.dest( `./`));
}