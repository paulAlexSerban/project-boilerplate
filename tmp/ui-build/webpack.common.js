/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const glob = require('glob');
const webpack = require('webpack'); // to access built-in plugins
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const loaders = require('./loaders');
const plugins = require('./plugins');

const getEntries = (path) => glob.sync(path).reduce((acc, item) => {
  const path = item.split('/');
  path.pop();
  const name = path.pop();
  acc[name] = item;
  return acc;
}, {});

module.exports = {
  entry: { ...getEntries('./src/components/controllers/pages/*/*.js') },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader,
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'scripts/[name].script.js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.ESLintPlugin,
    plugins.MiniCssExtractPlugin,
    // plugins.StyleLintPlugin,
    new WebpackManifestPlugin({ publicPath: '' }),
  ],
};
