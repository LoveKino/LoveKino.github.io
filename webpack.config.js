'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/main.js'],
        vendor: []
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url'
        }]
    },
    plugins: [
        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'ddchen\'s blog',
            filename: __dirname + '/index.html'
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
