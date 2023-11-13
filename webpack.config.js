const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
		clean: true,
	},
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src', 'components'),
			'@src': path.resolve(__dirname, './src/'),
		},
		extensions: ['.tsx', '.ts', '.js', '.json'],
	},
	devServer: {
		bonjour: true,
		static: {
			directory: path.join(__dirname, './public'),
		},
		open: true,
		host: 'localhost',
		port: 3000,
		liveReload: true,
		watchFiles: ['/src/**/*.tsx', './src/index.html', 'src/styles/*.scss'],
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			title: 'Development',
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: 'src/tabs.json' }],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
			{ test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },
			{
				test: /\.json$/,
				loader: 'json-loader',
				type: 'javascript/auto',
			},
		],
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
