const gulp = require('gulp');
const nested = require('postcss-nested');
const postcss = require('gulp-postcss');
const short = require('postcss-short');
const assets = require('postcss-assets');
const stylelint = require('stylelint');
const babel = require('gulp-babel');

const rulesStyle = require('./stylelintrc.json');

gulp.task('style', () => {
  const processors = [
    nested,
    assets,
    short,
    stylelint(rulesStyle)
  ];


  return gulp.src('./input_files/css/**/main.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./css/'));
});

gulp.task('js', () => {
  return gulp.src('./input_files/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./js/'));
});
