/*
 * @Descripttion: 
 * @version: 
 * @Author: maoyueer
 * @Date: 2023-01-12 17:07:52
 * @LastEditors: maoyueer
 * @LastEditTime: 2023-02-06 17:32:07
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
    ]
  },
  devServer: {
    open: true,
    port: 8080,
    client: {
      logging: 'none',
    },
    hot: true,
    historyApiFallback: true
  },
  mode: 'development',
  devtool: 'inline-source-map'
})
