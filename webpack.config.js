const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = {
	entry: PATH.source + '/index.js',
	output: {
		path: PATH.build,
		filename: '[name].js'
	}, 
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack app',
			template: PATH.source + '/index.html'
		}),
		new webpack.ProvidePlugin({
	      React: 'react'
	    })
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use:['style-loader', 'css-loader?localIdentName=[name]_[local]_[hash:base64:5]']
			},
			{
				test: /\.(jpg|png|svg)$/,
				exclude: /node_modules/,
				loader:'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			}
		]
	}
};

const developmentConfig = {
	devServer: {
		stats: 'errors-only',
		port: 9000
	}
};

module.exports = function(env) {
	if (env === 'production') {
		return common;
	}
	if (env === 'development') {
		return Object.assign(
			{},
			common,
			developmentConfig
		)
	}
};