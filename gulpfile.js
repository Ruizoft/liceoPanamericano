var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  gulp.watch('app/static/sass/**/*.scss', ['styles']);
});


gulp.task('serve', ['styles'], function() {

    browserSync.init({
        proxy: "localhost:8080"
    });

    gulp.watch("app/static/sass/**/*.scss", ['styles']);
    gulp.watch("app/templates/*.html").on('change', browserSync.reload);
    gulp.watch("app/static/directives/*.html").on('change', browserSync.reload);
    browserSync.stream();
});

gulp.task('styles', function(){
	gulp.src('app/static/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('app/static/css'))
		.pipe(browserSync.stream());
});