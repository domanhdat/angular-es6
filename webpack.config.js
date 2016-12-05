require('dotenv').config({silent: true});
const webpack   = require('webpack');
const path      = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist/app');
const APP_DIR   = path.resolve(__dirname, 'app');

const config = {
    entry  : APP_DIR + '/app.module.js',
    output : {
        path    : BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            {
                test  : /\.html$/,
                loader: "html-loader"
            },
            {
                test   : /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production"),
            }
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     compress: { warnings: false },
        //     output: { comments: false },
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin(),
    ],
};

module.exports = config;