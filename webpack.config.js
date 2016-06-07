var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/main.js'],
        vendor: []
    },
    output: {
        path: path.resolve(__dirname, 'assert'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            }
        }, {
            test: /\.less$/, 
            loader: "style!css!less"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
};
