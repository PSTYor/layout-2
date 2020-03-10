module.exports = function() {
    $.gulp.task('pug', function () {
        return $.gulp.src('./app/pug/*.pug')
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./dist'))
            .pipe($.browserSync.reload({stream:true}));
    });
};