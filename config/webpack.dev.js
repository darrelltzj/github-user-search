const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const LoadablePlugin = require('@loadable/webpack-plugin');

const baseConfig = require('./webpack.base.js');

require('dotenv').config();

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
  },
  plugins: [
    new LoadablePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // PORT: JSON.stringify(process.env.PORT),
        REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
      },
    }),
  ],
};

module.exports = merge(baseConfig, config);
