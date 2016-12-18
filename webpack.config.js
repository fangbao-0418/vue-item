var path = require('path');// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将组件中的样式提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin');//html模板插入代码
var vue = require("vue-loader");//webpack的loader插件
//var openBrowserWebpackPlugin = require('open-browser-webpack-plugin');

//webpck插件
var plugins = [

    //  new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     // warnings: false,
    //     // drop_debugger: true,
    //     // drop_console: true
    //   }
    // }),

    /**
      * 提公用js到common.js文件中
      * 提取入口文件里面的公共模块
      *  new webpack.optimize.CommonsChunkPlugin({
      *      name: 'vendors',
      *      filename: 'vendors.js',
      *  }),    
      */
    new webpack.optimize.CommonsChunkPlugin("commons",'common.js'),
    
    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),

    // 模块热替换插件
    new webpack.HotModuleReplacementPlugin(), 
  
    // 允许错误不打断程序
    new webpack.NoErrorsPlugin(),

    
    /**
      * 提取css单文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合
      * 将样式统一发布到style.css中
      */
    new ExtractTextPlugin("common.css"),
    
    //打开浏览器插件
    //new openBrowserWebpackPlugin({ url: 'http://192.168.1.15:8088' }),
    
    new HtmlWebpackPlugin({

         // 源文件，路径相对于本文件所在的位置
        template: "index.html",//原始模板

        // 生成html文件的名字，路径和生产环境下的不同，要与修改后的publickPath相结合，否则开启服务器后页面空白
        filename:"index.html",//输出新文件

        // 需要引入entry里面的哪几个入口，如果entry里有公共模块，记住一定要引入
        //chunks: ['vendors','index'],

        // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
        inject: true,
        title:'',
        // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
        // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    }),

    /**
      * 全局加载jq
      * 使用 ProvidePlugin 加载使用率高的依赖库
      */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
  
    
 
];
//编译输入路径
var entry = {
    // path.resolve([from ...], to) 将to参数解析为绝对路径
    index:'./src/index.js',
    // 需要被提取为公共模块的群组
    vendors:['vue','vue-router','jquery'],
};
//编译输出路径
var buildPath = "/build/";

// 模块导入
module.exports = {
    debug: false,
    entry: entry,
    output: {
        
        // 输出文件，路径相对于本文件所在的位置
        path: __dirname + buildPath,
        
        // 基于文件的md5生成Hash名称的script来防止缓存
        //filename: 'build.js',
        filename: '[name].[hash].js',
        
        // 设置publicPath这个属性会出现很多问题：
        // 1.可以看成输出文件的另一种路径，差别路径是相对于生成的html文件；
        // 2.也可以看成网站运行时的访问路径；
        // 3.该属性的好处在于当你配置了图片CDN的地址，本地开发时引用本地的图片资源，上线打包时就将资源全部指向CDN了，如果没有确定的发布地址不建议配置该属性，特别是在打包图片时，路径很容易出现混乱，如果没有设置，则默认从站点根目录加载
        // publicPath: '../static/js/',

        // 非主入口的文件名，即未被列在entry中，却又需要被打包出来的文件命名配置
       //chunkFilename: '/[id].[chunkhash].js'

    },
    // 服务器配置相关，自动刷新!
    devServer: {
        stats: { colors: true },
        host:"192.168.1.15",
        port:8088,
        contentBase: 'build',
        inline: true,
    },
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.js$/,
                // 通过babel转换
                loader: 'babel',
                // 不用转换的node_modules文件夹
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader?sourceMap!cssnext-loader")
            },
            //.scss 文件想要编译，scss就需要这些东西！来编译处理
            //install css-loader style-loader sass-loader node-sass --save-dev
            {
                test: /\.scss$/,
                loader:ExtractTextPlugin.extract(
                    "style-loader", 'css-loader!sass-loader')
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[name].[ext]'
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader"
            }]
    },
    // .vue的配置。需要单独出来配置
    // vue里的css也要单独提取出来
    vue: {
        loaders: {

            css: ExtractTextPlugin.extract('css'),
            sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
        }
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015', "stage-0"],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        //别名
        alias: {
           //解决vue 2.0 template or render function not defined.
           'vue': 'vue/dist/vue.js',
        }
    },


    plugins: plugins,
    
    //   开启source-map，生产环境下推荐使用cheap-source-map或source-map，后者得到的.map文件体积比较大，但是能够完全还原以前的js代码
    //   开发环境下推荐使用cheap-module-eval-source-map
    devtool: 'cheap-module-eval-source-map'
};




