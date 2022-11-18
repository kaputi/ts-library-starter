const commonConfig = require('./webpack.common');
const path = require('path');
const packageJson = require('./package.json')

module.exports = {
  ...commonConfig,
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    library: packageJson.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
};
