/*
 * @Descripttion: 
 * @version: 
 * @Author: maoyueer
 * @Date: 2023-01-12 17:07:29
 * @LastEditors: maoyueer
 * @LastEditTime: 2023-02-07 11:14:27
 */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './node_web_integration/src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 解决打包体积警告问题
  performance: {
    hints: 'warning',
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
          type: 'asset/resource'
        },
        {
          test: /\/js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true
            }
          }
        },
        //   {
        //     test: /\.css$/,
        //     use: ["css-loader","style-loader"],
        //  },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        // {
        //   test: /\.scss|.sass$/,
        //   use: [
        //     'vue-style-loader',
        //     'style-loader',
        //     'css-loader',
        //     'less-loader',
        //   ]
        // },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: "my web",
        template: './node_web_integration/public/index.html', // 这是html模板存放的地址
        filename: 'index.html',
      }),
      new CleanWebpackPlugin()
    ],
  }
