module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('./app/sass/style.scss')
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.sass({
                outputStyle: 'compressed',
                includePaths: require('node-normalize-scss').includePaths
            })).on('error', $.plugins.sass.logError)
            .pipe($.plugins.autoprefixer({
                overrideBrowserslist:  ['last 2 versions'],
                cascade: false
            }))
            .pipe($.plugins.rename({suffix: '.min'}))
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest('./dist/css'))
            .pipe($.browserSync.reload({stream:true}));
    });
};