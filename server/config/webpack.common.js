const path = require('path');

module.exports = {
    output: {
        path: path.join(`${__dirname}/../`, 'build'),
        publicPath: 'js/',
        filename: 'app.bundle.js',
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
