const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

//styles
function style() {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

// Server
function watch() {
  browserSync.init({
    server: "./src",
  });

  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
