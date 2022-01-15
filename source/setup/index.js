const gulp = require('gulp');
const { series, parallel } = require('gulp');
const exec = require('gulp-exec');

gulp.task('install', () => {
  const options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false, // default = false, true means stdout is written to file.contents
  };
  const reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  };

  return gulp.src('./**/**')
    .pipe(exec(file => `ls -la`, options))
    .pipe(exec.reporter(reportOptions));
});



function clean(cb) {
  console.log('clean task')
  cb();
}

function cssTranspile(cb) {
  console.log('cssTranspile task')
  cb();
}

function cssMinify(cb) {
  console.log('cssMinify task')
  cb();
}

function jsTranspile(cb) {
  console.log('jsTranspile task')
  cb();
}

function jsBundle(cb) {
  console.log('jsBundle task')
  cb();
}

function jsMinify(cb) {
  console.log('jsMinify task')
  cb();
}

function publish(cb) {
  console.log('publish task')
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);