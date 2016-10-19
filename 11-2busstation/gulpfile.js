
var gulp  = require('gulp');

var sass = require('gulp-sass');//编译sass

gulp.task('sass',function(){
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/stylesheets'))
});
gulp.task('auto', function () {
    gulp.watch('./SASS/*.scss', ['sass'])
});
gulp.task('default', ['sass', 'auto']);


