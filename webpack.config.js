const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html'
    }),
    new CopyWebpackPlugin([
        { from: './assets/images/', to: 'images' },
        { from: './src/app/home', to: 'js/home' },
        { from: './src/app/signup', to: 'js/signup' },
        { from: './src/app/login', to: 'js/login' },
        { from: './src/app/products', to: 'js/products'},
        { from: './src/app', to: 'js'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader']
      }
    ]
  }
};


/* In webpack there are 4 core concepts:
* 1. Entry Point
* 2. output (path to where to save the bundle file)
* 3. Loader (allow us to import/load all kinds of diferent files. More importantly to process them
    for eg: converting SASS to CSS or ES6 to ES5 JS. and for that we need a loader here Babel Loader
    which convert ES6 to ES5)
* 4. Plugins
**/