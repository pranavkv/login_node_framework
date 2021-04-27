"use strict";

const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
// const sourcemaps = require("gulp-sourcemaps");
// const aglio = require("gulp-aglio");
// const gulpCopy = require("gulp-copy");
// const fs = require("fs");
const del = require("del");

const SRC_TS = "src/**/*.ts";
let tsProject = ts.createProject("./tsconfig.json");

// task to clean all files in build folder
gulp.task("clean:build", () => {
    return del(["build/**/*"]);
});

gulp.task("tslint", () => {
    return gulp.src(SRC_TS).pipe(tslint({ formatter: "verbose" })).pipe(tslint.report())
});

// tasks to watch over changes
gulp.task("watch", () => {
    gulp.watch(SRC_TS, gulp.series("tslint", "build"));
});

// task to transpile all typescripts into javascripts in build folder
gulp.task("ts2js", () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));
});

//copying views and public files
// gulp.task("copyfiles", () => {
//     gulp.src(["config/*", "README.md", "docs/*"]).pipe(gulpCopy("build/"));
//     gulp.src(["src/views/*.*", "src/public/**/*.*"]).pipe(gulpCopy("build/", { prefix: 1 }));
//     const _packageJson = require("./package.json");
//     _packageJson.scripts.start = "nodemon --ignore docs/ --ignore logs/ --ignore node_modules/ --delay 2 UpstoxApi";
//     _packageJson.scripts.dev = "node UpstoxApi";
//     fs.writeFile("build/package.json", JSON.stringify(_packageJson, null, 3), function (err) {
//         if (err) return console.log(err);
//     });
//     return gulp.src(["src/modules/index/oauth2orize/**/*.*"]).pipe(gulpCopy("build/", { prefix: 1 }));
// });

gulp.task("build", gulp.series("clean:build", "tslint", "ts2js"));
// gulp.task("build", gulp.series("clean:build", "ts2js", "copyfiles"));


// default tasks
gulp.task("default", gulp.series("build"), () => {
    console.log("Project successfully build");
});