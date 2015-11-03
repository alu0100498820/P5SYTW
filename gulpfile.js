var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var mocha = require('gulp-mocha');
var path = require('path');
var karma = require('karma').server;

gulp.task('minify', function () {
  gulp.src('temp.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('css/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/'))
});

function runKarma(configFile, cb) {
   karma.start({
      configFile: path.resolve(configFile),
      singleRun: true
   }, cb);
}

gulp.task('test', function(cb) {
   runKarma('karma.conf.js', cb);
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});
