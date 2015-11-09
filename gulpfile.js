var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['images/raw/*.png','images/raw/*.jpg','images/raw/*.gif','images/raw/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images')).on('end', cb).on('error', cb);
});t