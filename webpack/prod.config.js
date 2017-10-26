const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    entry: path.join(__dirname, '../src/entry.js')
});
