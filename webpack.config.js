const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    hot: true,
    port: 3000,
    publicPath: '/'
  },

  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: /(node_modules)/, use: {loader: 'babel-loader'}}
    ]
  }
};
