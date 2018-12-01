const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',
  entry: './src/server.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);