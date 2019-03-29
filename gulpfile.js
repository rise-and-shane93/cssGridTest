"use strict";

const gulp = require('gulp'),
browserSync = require ('browser-sync');

const server = browserSync.create();

const paths = {
	html: {
		src: '*.html'
	},
  style: {
    src: 'css/*.css'
  }
};

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

function watchFile() {
	gulp.watch(paths.html.src, gulp.series(reload));
  gulp.watch(paths.style.src, gulp.series(reload));
}

gulp.task('default', gulp.series(serve, watchFile));

