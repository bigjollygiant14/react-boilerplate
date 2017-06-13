// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import autoprefixer from 'autoprefixer';
let path = require('path');

module.export = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /(node_modules)/, use: {loader: 'babel-loader', options: {presets: ['env']}}}
    ]
  }
};
