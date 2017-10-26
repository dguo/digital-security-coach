const path = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '../src/entry.js')
    ],
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        open: false,
        stats: {
            chunks: false
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});
