const   gulp         = require('gulp'),
        spawn        = require('child_process').spawn,
        bs           = require('browser-sync').create(),
        sass 		 = require('gulp-sass'),
        concat       = require('gulp-concat'),
        uglify	     = require('gulp-uglifyjs'),
        cssnano      = require('gulp-cssnano'),
        rename       = require('gulp-rename'),
        del			 = require('del'),
        autoprefixer = require('gulp-autoprefixer');

const path = {
    html: ['*.html', '_includes/**/*.html', '_layouts/*.html'],
    sass: ['sass/**/*.sass'],
};

// jekyll build

gulp.task('jekyll:build', function (done) {
    return spawn('jekyll', ['build'], {
        shell: true,
        stdio: 'inherit',
    }).on('close', done);
});

// sass compile
gulp.task('sass', function(){
    return gulp.src(path.sass)
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],{cascade: true }))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.reload({stream: true}));

});

// run local server
gulp.task('browser-sync', ['jekyll:build'], function () {
    bs.init({
        server: {
            baseDir: "_site"
        },
        notify: false,
    });
});

// watch for file changing
gulp.task('jekyll:rebuild', ['jekyll:build'], function () {
    bs.reload();
});

gulp.task('watch', function () {
    gulp.watch(path.sass, ['sass', 'jekyll:rebuild'] );
    // gulp.watch(path.html, );
    gulp.watch(path.html, ['jekyll:rebuild'], bs.reload);

});

gulp.task('serve', ['sass','browser-sync', 'watch']);