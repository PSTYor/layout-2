module.exports = function() {
    $.gulp.task('image', function() {
        return $.gulp.src('./app/img/*')
            .pipe($.plugins.imagemin())
            .pipe($.gulp.dest('dist/img'))
            .pipe($.browserSync.reload({stream:true}));
    });
};