var path = require('path');

if (process.env.NODE_ENV === 'production') {
    module.exports = require(path.join(__dirname, './production.js'));
} else {
    module.exports = require(path.join(__dirname, './development.js'));
}
