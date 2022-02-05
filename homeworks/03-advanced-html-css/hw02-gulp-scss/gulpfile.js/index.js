const _ = require('./config/config');

const scss = require(`${_.path.gulptasks}scss`);
const clean = require(`${_.path.gulptasks}clean`);
const include = require(`${_.path.gulptasks}htmlInclude`);

exports.default = scss;
exports.clean = clean;
exports.include = include;