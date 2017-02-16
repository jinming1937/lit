//CMD module
//加载webpack
var webpack = require('webpack');
//
module.exports = function(grunt) {
    'use strict'

    //====webpack begin
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    });

    var devFlagPlugin = new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    });
    //===== webpack end

    // 任务配置，所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            distPath: 'dist/'
        },
        /* banner */
        banner: '/*!\n' +
            ' * =====================================================\n' +
            ' * <%= pkg.name %> v<%= pkg.version %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * =====================================================\n' +
            ' */\n',
        //uglify js单独压缩
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%-pkg.jsname%>-<%-pkg.version%>.js <%- grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            cvs: {
                //打包压缩
                //src:['entry/*.js'],
                //dest:'build/<%-pkg.jsname%>-<%-pkg.version%>.js.min.js'
                //分文件
                files: {
                    //'build/card.min.js': 'entry/card/js/card.js',
                    //'build/tetris.min.js': 'entry/tetris/js/tetris.js',
                    'cvs/lib/cvs.min.js': 'cvs/lib/cvs.js',
                    'cvs/proj/test/js/test.min.js': 'cvs/proj/test/js/test.js'
                }
            },
            snake: {
                files: {
                    "dist/main.min.js": "dist/main.js"
                }
            }
        },
        /*jshint 语法检查*/
        jshint: {
            build: [
                //'entry/card/js/*.js',
                'cvs/lib/cvs.js',
                //'cvs/proj/test/js/test.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        //
        webpack: {
            lit: {
                // webpack options 
                entry: {
                    //mainForClassical:"./cvs/proj/snake/mainForClassical",
                    mainForIndex: "./cvs/proj/snake/mainForIndex",
                    mainForBall:"./cvs/proj/hitTheBall/mainForBall",
                    toolScript:"./entry/fastwork/toolScript"
                },
                output: {
                    path: "dist/",
                    filename: "[name].js",
                },
                plugins: [
                    //uglifyJsPlugin,
                    devFlagPlugin
                ],
                stats: {
                    // Configure the console output 
                    colors: false,
                    modules: false,
                    /* ?? */
                    reasons: true
                },
                // stats: false disables the stats output 
                storeStatsTo: "xyz", // writes the status to a variable named xyz 
                // you may use it later in grunt i.e. <%= xyz.hash %> 
                progress: false, // Don't show progress 
                // Defaults to true 
                failOnError: false, // don't report error to grunt if webpack find errors 
                // Use this if webpack errors are tolerable and grunt should continue 
                //watch: true, // use webpacks watcher 
                // You need to keep the grunt process alive 
                //watchOptions: {
                //	aggregateTimeout: 500,
                //	poll: true
                //},
                // Use this when you need to fallback to poll based watching (webpack 1.9.1+ only) 
                //keepalive: true, // don't finish the grunt task 
                // Use this in combination with the watch option 
                inline: true, // embed the webpack-dev-server runtime into the bundle 
                // Defaults to false 
                //hot: true, // adds the HotModuleReplacementPlugin and switch the server to hot mode 
                // Use this in combination with the inline option 
            },
            //anotherName: {...}
        },
        //cssmin css 压缩
        cssmin: {
            options: {
                stripBanners: true,
                banner: '/*! <%-pkg.cssname%>-<%-pkg.version%>.css <%- grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            nservice:{
                files:{
                	'<%= meta.distPath %>nodeServiceForIndex.css': '<%= meta.distPath %>nodeServiceForIndex.css'
                }
            },
            base: {
                files: {
                    'dist/cvs/main.css': 'dist/cvs/base.css'
                }
            },
            snake: {
                banner: '<%- banner %>',
                files: {
                    'dist/snake/css/main.min.css': 'dist/snake/css/main.css'
                }
            },
            hitBall:{
                banner: '<%- banner %>',
                files: {
                    'dist/hitTheBall/css/main.css': 'dist/hitTheBall/css/main.css'
                }
            },
            toolStyle:{
                banner: '<%- banner %>',
                files: {
                    'dist/toolStyle.css': 'dist/toolStyle.css'
                }
            }
        },
        /* sass 打包 */
        sass: {
            options: {
                banner: '<%= banner %>',
                //sourcemap: 'none',
                style: 'expanded',
                unixNewlines: true
            },
            nservice:{
                files:{
                	'<%= meta.distPath %>nodeServiceForIndex.css': 'nodeservice/sass/nodeServiceForIndex.scss'
                }
            },
            base: {
                files: {
                    'dist/cvs/main.css': 'cvs/sass/base.scss'
                }
            },
            snake: {
                files: {
                    'dist/snake/css/main.css': 'cvs/proj/snake/sass/main.scss'
                }
            },
            hitBall:{
                files: {
                    'dist/hitTheBall/css/main.css': 'cvs/proj/hitTheBall/sass/main.scss'
                }
            },
            toolStyle:{
                files: {
                    'dist/toolStyle.css': 'entry/fastwork/toolStyle.scss'
                }
            }
        },
        /*watch*/
        watch: {
        	nservice:{
        		files: [
                    'nodeservice/sass/*.scss'
                ],
                tasks: [
                    'sass:nservice',
                    'cssmin:nservice'
                ]
        	},
            snake: {
                files: [
                    'cvs/proj/snake/sass/*.scss',
                    'cvs/sass/*.scss'
                ],
                tasks: [
                    'sass:snake',
                    'cssmin:snake'
                ]
            }
        },
        /*open new webset*/
        connect: {
            server: {
                options: {
                    port: 8089,
                    ///hostName:'m.xiaozhiga.com',
                    base: ''
                        //base:'xiaozhiga.com'  //??
                        //base: '192.168.30.90'
                }
            }
        },
        /* open new link */
        open: {
            kitchen: {
                /* 需要提前配置好host */
                path: 'http://www.xiaozhiga.com:8089/cvs/proj/hitTheBall/index.html'
            }
        }
    });
    //  告诉grunt 我们将使用的插件
    grunt.loadNpmTasks('grunt-webpack');
    // Load the plugins
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });
    // 显示各个任务执行了多长时间
    require('time-grunt')(grunt);

    // service
    grunt.registerTask('service', ['connect', 'open', 'watch']);

    // litServerPlus.js ：站点所需的静态文件
    grunt.registerTask('nservice',['sass:nservice','cssmin:nservice','watch:nservice']);
    
    // package snake 项目
    grunt.registerTask('snake', ['sass:snake', 'cssmin:snake', 'webpack:lit']);

    // package ball 项目
    grunt.registerTask('hitball', ['sass:hitBall', 'cssmin:hitBall', 'webpack:lit']);    

    // lit.com:8080 辅助工作的工具页面
    grunt.registerTask('fastwork',['sass:toolStyle','cssmin:toolStyle','webpack:lit']);

};