'use strict';

global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    browserSync: require("browser-sync").create(),

    path: {
        tasks: require('./gulp/config/tasks')
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('sass', 'pug', 'image'),
    $.gulp.parallel('watch', 'browserSync')
));