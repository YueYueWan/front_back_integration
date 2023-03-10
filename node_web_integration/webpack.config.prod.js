/*
 * @Descripttion: 
 * @version: 
 * @Author: maoyueer
 * @Date: 2023-01-12 17:08:07
 * @LastEditors: maoyueer
 * @LastEditTime: 2023-02-07 11:10:21
 */
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css|less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'favicon.ico'),
          to: path.resolve(__dirname, '../dist/image/')
        }
      ]
    })
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index-[contenthash:8].css',
        chunkFilename: '[id].css'
      })
    ]
  },
  cache: {
    type: 'filesystem',
  },
  mode: 'production',
  devtool: 'cheap-module-source-map',
})
