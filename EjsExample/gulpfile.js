const gulp = require("gulp");

gulp.task('copy',function(){
    
    /* copy bootstrap css files */
    gulp.src("./bower_components/bootstrap/dist/css/*.min.css")
        .pipe(gulp.dest('./app/public/css'));

    /* copy bootstrap js files */
    gulp.src("./bower_components/bootstrap/dist/js/*.min.js")
        .pipe(gulp.dest('./app/public/js'));

    /* jquery files */
    gulp.src("./bower_components/jquery/dist/*.min.js")
        .pipe(gulp.dest('./app/public/js'));

    /* pooper files */
    gulp.src("./bower_components/popper.js/dist/umd/*.min.js")
        .pipe(gulp.dest('./app/public/js'));

});