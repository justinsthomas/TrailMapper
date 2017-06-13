#!/usr/bin/env node
/**
 * This file runs a webpack-dev-server, using the API.
 *
 * For more information on the options passed to WebpackDevServer,
 * see the webpack-dev-server API docs:
 * https://github.com/webpack/docs/wiki/webpack-dev-server#api
 */
console.log('server.js');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../webpack.config.js');
const path = require('path');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    contentBase: 'www',
    hot: true,
    filename: 'app.js',
    publicPath: 'dist/',
    stats: {
        colors: true,
    },
});

server.listen(8080, 'localhost', () => {});