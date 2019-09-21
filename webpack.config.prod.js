const webpackMerge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config')

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-sizes.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
