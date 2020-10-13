const gulp = require('gulp');
const war = require('gulp-war');
const zip = require('gulp-zip');

gulp.task('war', function(callback) {
  gulp.src(['./dist/angularApp/**'])
  .pipe(war({
    welcome: 'index.html',
    displayName: 'angularApp'
  }))
  .pipe(zip('angularApp.war'))
  .pipe(gulp.dest('./dist'));
  callback();
});