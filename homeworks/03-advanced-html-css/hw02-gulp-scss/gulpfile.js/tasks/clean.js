const _ = require("../config/config");

module.exports = async () => {
    return _.del([`${_.path.dist.self}**`, `!${_.path.dist.self}`])
};
