/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable global-require */
const gulp = require("gulp");
const webpackStream = require('webpack-stream');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const webpack = require('webpack'); // to access built-in plugins
const BabelLoader = require('../../loaders/BabelLoader');
const ESLintPlugin = require('../../plugins/ESLint');
const entries = require('../../config/entries');
const output = require('../../config/output');
const devConfig = require('../../config/devConfig');

gulp.task("default", () =>
  gulp
    .src("../src/components/controllers/pages/**/*.page.js")
    .pipe(
      webpackStream({
        entry: entries,
        output,
        module: {
          rules: [BabelLoader],
        },
        plugins: [
          new webpack.ProgressPlugin(),
          new WebpackManifestPlugin({ publicPath: "" }),
          ESLintPlugin,
        ],
        ...devConfig,
      })
    )
    .pipe(gulp.dest("../dist/js"))
);
