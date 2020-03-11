module.exports = function() {
    $.gulp.task('svg', function() {
        return $.gulp.src('./app/img/svg/*.svg')
            .pipe($.plugins.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.plugins.cheerio({
                run: function($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {xmlMode: true}
            }))
            .pipe($.plugins.replace('&gt;', '>'))
            .pipe($.plugins.svgSprite({
                mode: {
                    symbol: {
                        spite: 'spite.svg'
                    }
                }
            }))
            .pipe($.gulp.dest('./dist/img/svg/'))
    });
};