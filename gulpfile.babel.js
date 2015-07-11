var gulp = require("gulp"),
	babel = require("gulp-babel");

gulp.task("default", () => {
	return gulp.src("src/**/*.js")
		.pipe(babel({stage: 1, optional: ["runtime"]}))
		.pipe(gulp.dest("target"));
});