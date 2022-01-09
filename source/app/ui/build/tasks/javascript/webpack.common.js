/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require('webpack'); // to access built-in plugins
const BabelLoader = require('../../loaders/BabelLoader');
const ESLintPlugin = require('../../plugins/ESLint');
const entry = require('../../config/entries');

module.exports = {
  entry,
  module: {
    rules: [BabelLoader],
  },
  output: {
    path: path.resolve(__dirname, '../../../dist'),
    filename: 'js/[name].script.js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new WebpackManifestPlugin({ publicPath: '' }),
    ESLintPlugin,
  ],
};
