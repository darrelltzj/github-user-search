const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const baseConfig = require('./webpack.base.js');

require('dotenv').config();

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
  },
  plugins: [
    // new MinifyPlugin(),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new BrotliPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
      },
    }),
  ],
};

module.exports = merge(baseConfig, config);
