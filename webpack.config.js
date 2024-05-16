const path = require('node:path');
const HtmlWebpackPlguin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: "development",
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: 'images/[name][ext]'
	},
	plugins: [
		new HtmlWebpackPlguin({template: "./src/index.html"}),
		new MiniCssExtractPlugin({filename: "[name].css"})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{loader: MiniCssExtractPlugin.loader},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg)$/,
				type: 'asset/resource'
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			}
		]
	}
}