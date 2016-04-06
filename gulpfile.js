var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify');

gulp.task('overeasyDocs-app', function () {
    return gulp.src('src/oedocs-app/**/*.js')
        .pipe(concat('oedocs-app.js'))
        .pipe(gulp.dest('js/'))
        .pipe(rename('oedocs-app.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('js/'));
});

gulp.task('default', ['overeasyDocs-app']);

