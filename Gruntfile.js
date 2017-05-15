//CMD module
//加载webpack
var webpack = require('webpack');
//
module.exports = function(grunt) {
    'use strict'

    //====webpack begin
    var bannerPlugin = new webpack.BannerPlugin(
        ' =====================================================\n' +
        ' <%= pkg.name %> v<%= pkg.version %>\n' +
        ' Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' =====================================================\n'
    );

    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        }
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
        /*jshint 语法检查*/
        jshint: {
            build: [
                'cvs/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            },
            lit: ['cvs/**/*.js'],
            snake: ['proj/snake/**/*.js'],
            lego: ['proj/lego/**/*.js'],
            ball: ['proj/ball/**/*.js']
        },
        //清理文件夹
        clean: {
            snake: {
                files: [
                    //清理snake
                    { src: 'dist/snake/' }
                ]
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
            base: {
                files: {
                    'dist/cvs/lit.css': 'cvs/sass/base.scss'
                }
            },
            snake: {
                files: {
                    'dist/snake/css/main.css': 'proj/snake/main.scss'
                }
            },
            lego: {
                files: {
                    'dist/lego/css/main.css': 'proj/lego/main.scss'
                }
            },
            ball: {
                files: {
                    'dist/ball/css/main.css': 'proj/ball/main.scss'
                }
            }
        },
        //cssmin css 压缩
        cssmin: {
            options: {
                stripBanners: true,
                banner: '/*! <%-pkg.cssname%>-<%-pkg.version%>.css <%- grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            base: {
                files: {
                    'dist/cvs/lit.css': 'dist/cvs/lit.css'
                }
            },
            snake: {
                files: {
                    'dist/snake/css/main.css': 'dist/snake/css/main.css'
                }
            },
            lego: {
                files: {
                    'dist/lego/css/main.css': 'dist/lego/css/main.css'
                }
            },
            ball: {
                files: {
                    'dist/ball/css/main.css': 'dist/ball/css/main.css'
                }
            }
        },
        //
        webpack: {
            lit: {
                // webpack options 
                entry: {
                    // lit: "./cvs/lit",
                    mainForSnake: "./proj/snake/mainForSnake",
                    mainForLego: './proj/lego/mainForLego'
                        // mainForBall: "./proj/ball/mainForBall"
                },
                output: {
                    path: "dist/js/",
                    filename: "[name].js",
                },
                plugins: [
                    bannerPlugin,
                    uglifyJsPlugin,
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
        //复制文件
        copy: {
            snake: {
                files: [
                    { expand: true, cwd: 'proj/snake/', src: ['*.html'], dest: '<%= meta.distPath %>snake/' }
                ]
            },
            ball: {
                files: [
                    { expand: true, cwd: 'proj/ball/', src: ['*.html'], dest: '<%= meta.distPath %>ball/' }
                ]
            },
            lego: {
                files: [
                    { expand: true, cwd: 'proj/lego/', src: ['*.html'], dist: '<%= meta.distPath %>lego/' }
                ]
            }
        },
        /*watch*/
        watch: {
            proj: {
                files: [
                    'cvs/sass/*.scss',
                    'proj/**/*.scss',
                    'cvs/**/*.js',
                ],
                tasks: [
                    'jshint:lit',
                    'sass:snake',
                    'cssmin:snake',
                    'sass:ball',
                    'cssmin:ball'
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
                path: 'http://m.xiaozhiga.com:8089/dist/snake/classical.html'
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

    // sco
    grunt.registerTask('sco', ['connect', 'open', 'watch']);

    // package snake 项目
    grunt.registerTask('snake', ['jshint:snake', 'clean:snake', 'sass:snake', 'cssmin:snake', 'webpack:lit', 'copy:snake']);

    // lego
    grunt.registerTask('lego', ['jshint:lego', 'clean:lego', 'sass:lego', 'cssmin:lego', 'webpack:lit', 'copy:lego']);

    // package ball 项目
    grunt.registerTask('ball', ['jshint:ball', 'sass:ball', 'cssmin:ball', 'webpack:lit', 'copy:ball']);
};