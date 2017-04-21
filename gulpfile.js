var sass = require('gulp-sass'); //包含sass转换为css插件
var gulp = require('gulp');
var connect = require('gulp-connect'); //包含服务器插件
gulp.task('hello',function(){
    console.log('你好！');
});
//复制文件到指定文件夹
gulp.task('watch',function(){
//当文件发生变化时，自动执行相应的任务
    gulp.watch('demo.scss',['sass']);
});
gulp.task('server',function(){
    connect.server({
        root:'dist',      //服务器的根目录
        livereload: true  //启用实时刷新的功能
    });
});
gulp.task('sass',function(){
    return gulp.src('demo.scss')
        .pipe(sass())  //上面定义的名字 var sass
        .pipe(gulp.dest('dist/css')); 
});
//退出任务监听：Ctrl + C  然后  Y
//默认任务 gulp
gulp.task('default',['server','watch']);