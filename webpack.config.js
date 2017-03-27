var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var port = process.env.PORT || 3000;
var pathFunc = function (str) {
  return path.resolve(__dirname, str);
};

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: port,
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:' + port,
    pathFunc('src/app.jsx'),
  ],
  output: {
    path: pathFunc('build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      include: pathFunc('src'),
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.js[x]?$/,
      include: pathFunc('src'),
      exclude: /node_modules/,
      loaders: ['babel'],
    }, ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ShMusic',
      template: 'src/index.html',
    }),
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: 'http://localhost:' + port,
    }),
  ]
};
