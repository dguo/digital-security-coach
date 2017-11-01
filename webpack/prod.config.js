const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    entry: path.join(__dirname, '../src/prod.js'),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    }
});
