


import * as gulp from "gulp";
import * as tsd from "gulp-tsd";

gulp.task("tsd", () => {
    gulp.src("gulp_tsd.json")
        .pipe(tsd());
});

gulp.task("tsd:options", (callback: any) => {
    tsd({
        command: "reinstall",
        config: "tsd.json"
    }, callback);
});
