var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('cssminify', function () {
    gulp.src(['./css/*.css','./views/css/*.css'])
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('htmlminify', function() {
  gulp.src(['*.html','./views/*.html'])
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyCSS:true,
        minifyJS:true
        }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./*.html', ['htmlminify']);
    gulp.watch('./views/*.html', ['htmlminify']);
    gulp.watch('./css/*.css', ['cssminify']);
    gulp.watch('./views/css/*.css', ['cssminify']);
});