/**
 * Created by chenshy on 2016/8/12.
 */
const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//production生产环境  development开发环境
const env = 'development';  //production development

//const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

var output = {
    path: __dirname  + '/build/',
    filename: '[name].js'
};

var entry = {
    main: [
        //'webpack-dev-server/client?http://127.0.0.1:80',
        //'webpack/hot/only-dev-server',
        './src/index.js' 
    ],
    common: ['react','react-dom','react-router','redux','react-redux',
             'react-router-redux','redux-thunk','immutable','react-tap-event-plugin',"pure-render-decorator",'isomorphic-fetch']

};

var loaders = [
    {   //
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015'],
        include: [path.join(__dirname, '/')]
    },
    {test:/\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
    {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass')}
];

var plugins = [
    new ExtractTextPlugin( "style.css" ),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    //new webpack.DllReferencePlugin({
    //    context: __dirname,
    //    manifest: require('./lib-manifest.json'),
    //}),

    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(env)//production development
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('common','common.js',Infinity),
    //extractCSS
];


if(env == 'development'){
// output.publicPath = 'http://127.0.0.1:80/build/';
//     entry.main.push("webpack-dev-server/client?http://127.0.0.1:80");

    output.publicPath = 'http://127.0.0.1:80/build/';
    entry.main.push("webpack-dev-server/client?http://127.0.0.1:80");
    entry.main.push("webpack/hot/only-dev-server");

    loaders = [
        {   //
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
            include: [path.join(__dirname, '/')]
        },
        {test: /\.css$/, loader: "style!css"},
        {
            test: /\.scss$/,
            loader: "style!css!sass"}
    ];

    plugins.shift();
    plugins.shift();
    plugins.push(new webpack.HotModuleReplacementPlugin());
}


var config = {
    // devtool: false,
    devtool: 'source-map',
    output: output,
    entry: entry,
    module: {
        loaders: loaders
    },
    plugins: plugins,
    devServer: {
        stats:{colors:true},
        hot: true,
        contentBase: "build/",
    }
};

if(env != 'development'){
    delete config.devServer;
    delete config.devtool;
}

module.exports = config;

