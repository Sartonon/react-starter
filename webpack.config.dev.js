const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.config')

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 9000
  },
  devtool: 'source-map'
})
