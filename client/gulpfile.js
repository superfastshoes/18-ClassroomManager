var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    wiredep = require('wiredep').stream,
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),      
    inject = require('gulp-inject'),    
    open = require('gulp-open'); 

var jsSources = ['src/app/**/*.js'],
    cssSources = ['src/css/**/*.css'],
    htmlSources = ['**/*.html'];

gulp.task('watch', function() {
    gulp.watch(jsSources, ['js']);
    gulp.watch(cssSources, ['css']);
    gulp.watch(htmlSources, ['html']);
});

var paths = ['./src/app/app.module.js','./src/app/factory/**/*.js','./src/app/**/*.js','./src/css/**/*.css'];

gulp.task('inject', function() {
    console.log('injecting..');
    var sources = gulp.src(paths, {read: false});

    console.log('all good..');
    return gulp.src('./src/index.html')
        .pipe(wiredep())
        .pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest('./src'));
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(connect.reload())
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('css', function() {
    gulp.src(cssSources)
        .pipe(connect.reload())
});

gulp.task('connect', function() {
    connect.server({
        root: './src',
        livereload: true
    })
});

gulp.task('app', function(){
    var options = {
        uri: 'http://localhost:8080',
        app: 'chrome'
    };
    gulp.src('./src/index.html')
        .pipe(open(options));
});


gulp.task('serve', ['connect', 'watch', 'inject', 'app']);