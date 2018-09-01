const path = require('path');
const glob = require('glob');

const files = glob.sync(path.resolve(__dirname, 'src', '**/webpack.config.js'));

module.exports = files.map(item => {
    return require(item.replace(__dirname, '.'));
});