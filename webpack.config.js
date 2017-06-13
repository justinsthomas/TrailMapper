const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    entry: [
        './app/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/',
    ],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true
    },
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'babel-loader!wc-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.(png|jpg|gif|svg)$/, // handles assets. eg <img src="path.png">
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }
        ],
        loaders: [{
            test: /web-components\//,
            loader: 'web-components-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = webpackConfig;
