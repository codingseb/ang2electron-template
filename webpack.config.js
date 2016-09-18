var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        'angular2': [
            'rxjs',
            'reflect-metadata',
            'angular2/bundles/angular2-polyfills',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app': './src/angular-app/app'
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: [/node_modules/]
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common',   filename: 'common.js' }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'src/assets/index.ejs',
            chunksSortMode: 'dependency'
        })
    ]
};