var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');
var openURL = require('open');
 
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    root: ['.', 'src'],
    directoryListing: {
            enable: true,
            path: 'src'
        }
      
  });
  openURL('http://localhost:8080');
});

gulp.task('livereload', function() {
  watch(['./styles/*.css', './src/*.js'])
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['./styles/*.css', './src/*.js'], ['livereload']);
});

gulp.task('start', ['webserver', 'watch']);

gulp.task('default', ['start']);