const commonConfig = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...commonConfig,
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.staging.js',
    path: path.join(__dirname, 'staging'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, 'staging'),
    },
    compress: true,
    port: 9000,
  },
};
