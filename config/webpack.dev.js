const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React - Crud',
      template: path.resolve(__dirname, '../index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
