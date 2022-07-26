const _ = require("../config/config")
console.log(_);

module.exports = async () => {
    return _.del([`${_.path.dist.self}**`, `!${_.path.dist.self}`]);
};
