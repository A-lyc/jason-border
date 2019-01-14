const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('default', function () {
  return gulp.src('./src/index.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename('jason-border.css'))
    .pipe(postcss())
    .pipe(gulp.dest('./dist'));
});
