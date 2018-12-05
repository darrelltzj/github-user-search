const webpack = require('webpack');
require('dotenv').config();

console.log('PORT', process.env.PORT)

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
        PORT: JSON.stringify(process.env.PORT),
        REACT_APP_THEME: JSON.stringify(process.env.REACT_APP_THEME),
      },
    }),
  ],
};
