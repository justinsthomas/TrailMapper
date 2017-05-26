var path = require('path');

const webpackConfig = {
	entry: './app/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	}
};

module.exports = config;
