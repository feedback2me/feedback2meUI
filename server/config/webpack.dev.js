/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true&timeout=1000',
        './src/app-dev.js',
    ],
    // watch: true,
    externals: [
        nodeExternals({
            whitelist: [
                'webpack-hot-middleware/client?reload=true&timeout=1000',
            ],
        }),
    ],
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
