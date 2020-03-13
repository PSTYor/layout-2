module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./app/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/img/*.+(png|jpg)', $.gulp.series('image'));
        $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
    });
};