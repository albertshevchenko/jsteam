const gulp = require('gulp');
const postcss = require('gulp-postcss');
const short = require('postcss-short');
const assets = require('postcss-assets');
const reporter = require('postcss-browser-reporter');
const stylelint = require('stylelint');
const babel = require('gulp-babel');

const rulesStyle = require('./stylelintrc.json');

gulp.task('style', () => {
  const processors = [
    assets,
    short,
    stylelint(rulesStyle),
    reporter()
  ];


  return gulp.src('./input/css/**/*.css')
  .pipe(postcss(processors))
  .pipe(gulp.dest('./css/'));
});

gulp.task('js', () => {
  return gulp.src('./input/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./js/'));
});
