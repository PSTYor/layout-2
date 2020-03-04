"use strict";

const gulp = require("gulp"),
      sass = require("gulp-sass"),
      rename = require("gulp-rename"),
      autoprefixer = require("gulp-autoprefixer"),
      sourcemaps = require("gulp-sourcemaps"),
      brSync = require("browser-sync").create(),
      imagemin = require("gulp-imagemin"),
      pug = require("gulp-pug");

gulp.task("sass", function() {
    return gulp.src("./app/sass/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed",
            includePaths: require("node-normalize-scss").includePaths
        })).on("error", sass.logError)
        .pipe(autoprefixer({
            overrideBrowserslist:  ["last 2 versions"],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("pug", function () {
    return gulp.src("./app/pug/index.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./dist"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("image", function() {
    return gulp.src("./app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("brSync", function() {
    brSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000
    });
});

gulp.task("watch", gulp.parallel("brSync", function() {
    gulp.watch("./app/sass/**/*.scss", gulp.parallel("sass"));
    gulp.watch("./app/pug/index.pug", gulp.parallel("pug"));
    gulp.watch("./app/img/*", gulp.parallel("image"));
}));

gulp.task("default", gulp.parallel("watch"));