/**
 * Created by Administrator on 2016/10/31.
 */
var gulp = require('gulp');
var gutil = require("gulp-util");
var del = require('del');
var webpackconfig = require('./webpack.config.js');
var webpackProductionConfig = require('./webpack.production.config.js');

var webpack = require("webpack");

var WebpackDevServer = require("webpack-dev-server");


//var watcher = gulp.watch('src/**', ['clean','webpack']);
//watcher.on('change', function(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});

//删除build 下的文件 和文件夹
gulp.task('clean',function(cb){
    //！取反不删除文件
    del([
        'build/**/*',
        '!build/images',
        '!build/images/*'
    ],cb);
});
gulp.task("webpack", function(callback) {
    webpack(webpackconfig,callback);
});
gulp.task("product",function(cb){
    webpack(webpackProductionConfig,cb);
});
gulp.task("build",['clean','product'],function(){
    gutil.log("项目生产完成");
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(webpackconfig);

    new WebpackDevServer(compiler, {
        stats: { colors: true },
        hot: true,
        historyApiFallback: false,
        contentBase: './build/',
        //publicPath: '/js/',
        // quiet: false,
        // noInfo: false,
        inline: true,
        //lazy: false,
        //proxy: {
        //    '*': 'http://localhost:3000'
        //},
    }).listen(8088, "192.168.10.123", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://192.168.10.123:8088/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('default',['clean','webpack','webpack-dev-server'],function(){

});