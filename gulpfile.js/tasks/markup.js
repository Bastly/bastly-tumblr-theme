var gulp = require('gulp');
var config = require('../config').markup;
var preprocess = require('gulp-preprocess');
var browserSync  = require('browser-sync');

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(preprocess())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
