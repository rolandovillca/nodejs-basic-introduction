/* File: gulpfile.js */

// grab our gul packages
var gulp = require('gulp');
var gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function(){
  return gutil.log('Gulp is running');
});

// =============================================================================
// Examples to create tasks:
// =============================================================================
// gulp.task('mytask', function(){
//   //do stuff.
// });
//
// gulp.task('dependenttask', ['mytask'], function(){
//   //do stuff after 'mystask' is done.
// })

// =============================================================================
// Examples to copy files:
// =============================================================================
// gulp.src and gulp.dest used to simply copy files looks like:
gulp.task('copyHtml', function(){
  // copy any html files in source/ to public
  gulp.src('source/*.html').pipe(gulp.dest('gulp'));
});

// =============================================================================
// Examples to copy files:
// =============================================================================
// gulp.watch like gulp.task has two main forms. Both of which return an EventEmitter that emits change events.
// The first of which takes a glob, an optional options object, and an array of tasks as it’s parameters.
gulp.watch('source/js/**/*.js', ['jshint']);
