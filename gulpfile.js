'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var yaml = require('gulp-yaml');

gulp.task('nodemon', function () {
  nodemon({
    script: 'bin/www',
    ext: 'js',
    watch: [
      "controllers/**/*.js",
      "routes/**/*.js",
      "services/**/*.js",
	    "mock/**/*.js",
      "config/*.js",
      "models/*.js",
      "app.js"
    ],
    ignore: [
      "node_modules/**"
    ],
    env: {
      "NODE_ENV": "development"
    }
  })
    .on('restart', function () {
      console.log('app restarted!')
    });

});

gulp.task('yaml', function () {
  gulp.src('./docs/api.yaml')
    .pipe(yaml({
	    space: 2,
	    safe: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.watch(['./docs/api.yaml'], ['yaml']);

gulp.task('default', ['nodemon', 'yaml']);