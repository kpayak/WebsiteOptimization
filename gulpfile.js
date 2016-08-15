var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('cssminify', function () {
    gulp.src('./css/*.css')
    gulp.src('./views/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('htmlminify', function() {
  gulp.src('*.html')
  gulp.src('./views/*.html')
  //gulp.src('./views/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS:true,
        minifyJS:true
        }))
    .pipe(gulp.dest('dist'));
});