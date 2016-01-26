var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './hello.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['babel']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({})
    ]
};