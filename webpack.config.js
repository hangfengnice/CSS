const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname,'src/app.js'),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname,'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management',
       template: path.resolve(__dirname,'index.html')
     })
  ],
  optimization: {
    minimize: true
  },
  devServer: {
        contentBase: './build',
        hot: true
      },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  performance: {
    hints:false
  }
}