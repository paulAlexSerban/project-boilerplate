/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const path = require('path');
const _ESLintPlugin = require('eslint-webpack-plugin');

const ESLintPlugin = new _ESLintPlugin({
  overrideConfigFile: path.resolve(__dirname, '../../.eslintrc.json'),
  context: path.resolve(__dirname, '../../src'),
  files: '*/*/*/*/*.js',
});

module.exports = ESLintPlugin;
