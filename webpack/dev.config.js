const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, '../src/dev.js')
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }))
            }
        ]
    },
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
