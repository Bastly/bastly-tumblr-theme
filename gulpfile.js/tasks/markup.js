var gulp = require('gulp');
var config = require('../config').markup;
var rename = require('gulp-rename');
var hb = require('gulp-hb');
var browserSync  = require('browser-sync');

gulp.task('markup', function() {

  return gulp.src(config.src)
    .pipe(hb({
        data: config.dataPath,
        helpers: config.helpersPath,
        partials: config.partialsPath,
        bustCache: true
    }))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
