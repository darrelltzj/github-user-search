// const path = require('path');
const webpack = require('webpack');
// const Dotenv = require('dotenv-webpack');
require('dotenv').config();

console.log('PORT', process.env.PORT, process.env.RAZZLE_PORT)

console.log('REACT_APP_THEME', process.env.REACT_APP_THEME)

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PORT: JSON.stringify(process.env.RAZZLE_PORT || process.env.PORT),
        REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
      },
    }),
    // new Dotenv({
    //   path: path.resolve(__dirname, './.env'),
    //   safe: false,
    //   silent: false,
    // }),
  ],
};
