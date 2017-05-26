var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

// minimize only in production
// var plugins = isProd ? [new webpack.optimize.UglifyJsPlugin({minimize: false })] : []
var plugins = isProd ? [] : []

module.exports = {
  entry: './index.js',
  // source map not in production
  devtool: !isProd && 'source-map',
  output: {
    filename: __dirname + '/dist/build.js',
    libraryTarget: 'umd'
  },
  externals: {
    "remotestoragejs": {
      root: "RemoteStorage", // <script src='remotestorage.js'> will resolve in this.RemoteStorage
      commonjs2: "remotestoragejs", // require('remotestoragejs')
      commonjs: "remotestoragejs", // require('remotestoragejs')
      amd: "remotestoragejs" // define(['remotestoragejs'], ...)
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules|dist/', loader: 'babel?presets[]=es2015' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: plugins
};
