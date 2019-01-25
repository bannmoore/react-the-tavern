const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, './../dev')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { config: { path: './config/postcss/postcss.config.js' } }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
        include: [/node_modules/]
      }
    ]
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    historyApiFallback: true,
    hot: true,
    // host: '0.0.0.0',
    // public: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' }
      }
    },
    stats: commonConfig.stats
  }
})
