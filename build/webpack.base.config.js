const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = {
  entry: {
    app: './src/index.js',
    framework: [
      'react',
      'react-dom'
    ],
  },
  output: {
    filename: "js/[name].[chunkhash:16].js",
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
        include: APP_PATH
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" //在html中插入<style>标签
          },
          {
            loader: "css-loader",//获取引用资源，如@import,url()
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {
            loader: "postcss-loader",//自动加前缀
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })
              ]
            }
          },
          {loader: "less-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
          },
          {loader: "sass-loader"},
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    "Android 4.1",
                    "iOS 7.1",
                    "Chrome > 31",
                    "ff > 31",
                    "ie >= 8"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
        //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        use: [
          {
            loader: 'url-loader',
            options: {
              // outputPath:'../',//输出**文件夹
              publicPath: '/',
              name: "images/[name].[ext]",
              limit: 500  //是把小于500B的文件打成Base64的格式，写入JS
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};