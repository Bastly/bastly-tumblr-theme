var gulp    = require('gulp');
var config  = require('../config').production;
var size    = require('gulp-size');
var uglify = require('gulp-uglify');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.jsSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDest))
    .pipe(size());
});
