var Webpack = require('webpack'),
    path = require('path');

var sourcePath = path.join(__dirname, 'src', 'index.js'),
    clientPath = path.join(__dirname, 'client');


var config = {
    entry: { 
    	app: [sourcePath]
	},
    devtool: "source-map",
    output: {
        path: clientPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                use: ['babel-loader', 'react-svg-loader?es5=1'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
    	new Webpack.optimize.OccurrenceOrderPlugin()
	]
};

module.exports = config;
