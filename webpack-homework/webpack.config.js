const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',

  devtool:'source-map',
  entry: {
      index: "./src/index.js"
  },

  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/[name].js'
  },

  module: {
      rules: [
          {
              test: /\.(png|jpe?g|gif)$/,
              use: {
                  loader: 'url-loader',
                  options: {
                      outputPath: "./images",
                      publicPath: './images',
                      limit: 100
                  }
              },
          },
          {
              test: /\.css$/,
              use: [
                //   {
                //       loader: "style-loader",
                //       options: {}
                //   },
                 {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                      loader: "css-loader",
                      options: {
                          url: true,
                          import: true,
                          sourceMap: false
                      }
                  }
              ]
          }

      ]

  },
  plugins:[
    new HtmlWebpackPlugin({
        title: "My App",
        filename: "index.html",//给解析后的文件命名
        template: "./template/index.html"//解析此文件
      }) ,
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
    	filename: './css/[name].css'
    }),
  ],
  devServer: {
    open: true,
    port:8080,
    hot:true,
    // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
    hotOnly:true,
  }
}
