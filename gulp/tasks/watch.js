module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./app/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/img/*', $.gulp.series('image'));
    });
};