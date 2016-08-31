
var webpack = require('webpack');

module.exports = function(grunt) {
	'use strict'
	
	  //====webpack begin
	  var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	    compress: {  warnings: false}
	  });
	
	  //var slarkPlugin = new webpack.optimize.CommonsChunkPlugin('base', 'base.js');
	
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
		//uglify js压缩
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
				files:{
					"dist/main.min.js":"dist/main.js"
				}
			}
		},
		//
		requirejs: {
			options: {
				baseUrl: "./",
				//mainConfigFile: "./static/js/config.js"
			},
			production: {
				options: {
					include: [
						'cvs/proj/snake/mainSnake',
						'cvs/proj/snake/js/snake',
						'cvs/lib/framework/frame',
						'cvs/outer/hand',
						'cvs/outer/gctrl'
					],
					out: 'dist/main.js'
				}
			}
		},
		//
		webpack: {
			snake: {
				// webpack options 
				entry: {
					mainForClassical:"./cvs/proj/snake/mainForClassical"
				},
				output: {
					path: "dist/",
					filename: "[name].js",
				},
				plugins: [
		          uglifyJsPlugin,
		          devFlagPlugin
		          //slarkPlugin
		        ],
				stats: {
					// Configure the console output 
					colors: false,
					modules: false,/* ?? */
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
			cvs: {
				files: {
					'cvs/proj/test/css/main.min.css': 'cvs/proj/test/css/main.css'
				}
			},
			testsc: {
				files: {
					'dist/main.min.css': 'dist/main.css'
				}
			},
			snake:{
				banner: '<%- banner %>',
				files:{
					'dist/snake/css/main.min.css':'dist/snake/css/main.css'
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
		/* sass 打包 */
		sass: {
			options: {
				banner: '<%= banner %>',
				//sourcemap: 'none',
				style: 'expanded',
				unixNewlines: true
			},
			testsc: {
				files: {
					'<%= meta.distPath %>main.css': 'entry/testScript/main.scss'
				}
			},
			base:{
				files:{
					'dist/base.css':'cvs/sass/base.scss'
				}
			},
			snake:{
				files:{
					'dist/snake/css/main.css':'cvs/proj/snake/sass/main.scss'
				}
			}
			
		},
		/*watch*/
		watch: {
			testsc: {
				files: [
					'entry/**/scss/*.scss',
					//"sc/chooseCity/chooseCity.scss"
				],
				tasks: [
					'sass:testsc',
					'cssmin:testsc'
				]
			},
			snake:{
				files:[
					'cvs/proj/snake/sass/*.scss',
					'cvs/sass/*.scss'
				],
				tasks:[
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
				path: 'http://127.0.0.1:8089/entry/'
			}
		}
	});
	//  告诉grunt 我们将使用的插件
	grunt.loadNpmTasks('grunt-webpack');
	// Load the plugins
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});
	require('time-grunt')(grunt);
	
	// server
	grunt.registerTask('server', ['connect','open' ,'watch']);
	// package
	grunt.registerTask('snake',['sass:snake','cssmin:snake','webpack:snake']);

	grunt.registerTask('testsc', 'sass:testsc');
	
};