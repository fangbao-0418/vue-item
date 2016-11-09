/**
 * Created by Administrator on 2016/10/31.
 */
var gulp = require('gulp');
var gutil = require("gulp-util");
var del = require('del');
var webpackconfig = require('./webpack.config.js');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");


//var watcher = gulp.watch('src/**', ['clean','webpack']);
//watcher.on('change', function(event) {
//    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//});

gulp.task('clean',function(cb){
    del([
        'build/*.*'
    ],cb);
});
gulp.task("webpack", function(callback) {
    webpack(webpackconfig,callback);
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
    }).listen(8088, "192.168.1.15", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://192.168.1.15:8088/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('default',['clean','webpack','webpack-dev-server'],function(){

});