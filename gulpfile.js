var gulp = require('gulp'),
    less = require('gulp-less'),
    chalk = require('chalk');
    sourcemaps = require('gulp-sourcemaps');

var LessPluginCleanCSS = require("less-plugin-clean-css"),
    cleancss = new LessPluginCleanCSS({advanced: true});

var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix = new LessPluginAutoPrefix({browsers: ["last 3 versions"]});

gulp.task('less', function () {

    gulp.src('./dev/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [autoprefix],
        }))
        .pipe(sourcemaps.write('.'))
        .on('error', function (err) {
            console.log(chalk.red("ERROR! ") + "file: " + chalk.red(err.filename) + " line: " + chalk.cyan(err.line));
        })
        .pipe(gulp.dest('./dev/style'));
});

gulp.task('default', ['less'], function () {

    gulp.watch('./dev/**/*.less', ['less']);
});
