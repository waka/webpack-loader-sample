'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'sample1-loader' },
          { loader: 'babel-loader' }
        ]
      }
    ]
  },

  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};
