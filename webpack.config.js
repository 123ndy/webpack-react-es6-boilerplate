var path = require('path')
var webpack = require('webpack')

var precss = require('precss') //required by postcss
var autoprefixer = require('autoprefixer') //required by postcss

var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'App.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
          plugins: ['transform-runtime']
        }
      },
      {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: 'style!css!postcss'
      },
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  },
  plugins: [
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //telling the server, that the index.html is located in 'dist' folder
    inline: true, //makes the server not running in iframe, so I can run it directly in /
    stats: 'error-only', //only shows errors in terminal
  }
}
