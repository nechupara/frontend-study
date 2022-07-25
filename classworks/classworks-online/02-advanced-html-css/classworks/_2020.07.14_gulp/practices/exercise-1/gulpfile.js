"use strict";
const gulp = require("gulp");
gulp.task("moveJs", () => {
    return gulp.src("./src/scripts/*.js").pipe(gulp.dest("./dist/js/"));
});
gulp.task("moveImg", () => {
    return gulp.src("./src/img/**/*.+(png|jpg|jpeg|svg)").pipe(gulp.dest("./dist/images/"));
});
gulp.task("moveAll", gulp.series("moveJs", "moveImg"));
const te = "nnn";
