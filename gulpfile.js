const gulp = require('gulp');
const del = require('del');
const argv = require('yargs').argv;
const sharp = require('gulp-sharp-responsive');

gulp.task('convert', (done) => {
    const arr = process.argv.splice(3);
    console.log(arr);

    let prOpt = {
        width: +arr[1],
        suffix: arr[0].replace('--', '-')
    };

    gulp.src(['img/**/*.{png,jpg}'])
        .pipe(sharp({
            formats: [
                { width: prOpt.width, rename: { suffix: prOpt.suffix }, jpegOptions: { quality: 60, progressive: true }, pngOptions: { quality: 60 } },
                { width: prOpt.width * 2, rename: { suffix: prOpt.suffix + '@2x' }, jpegOptions: { quality: 60, progressive: true }, pngOptions: { quality: 60 } },
                { width: prOpt.width, rename: { suffix: prOpt.suffix }, format: 'webp', webpOptions: { quality: 60 } },
                { width: prOpt.width * 2, rename: { suffix: prOpt.suffix + '@2x' }, format: 'webp', webpOptions: { quality: 60 } },
            ]
        }))
        .pipe(gulp.dest('output'));
    done();
});

gulp.task('clean:output', () => {
   return del(['output'])
});

gulp.task('clean:img', (done) => {
    return del(['img/*'])
});

gulp.task('clean', gulp.series(gulp.parallel('clean:output', 'clean:img')));