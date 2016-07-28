module.exports = function(grunt) {
	'use strict'
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			distPath: 'build/',
			hotelDist: 'build/',
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
					'cvs/lib/cvs.min.js':'cvs/lib/cvs.js',
					'cvs/proj/test/js/test.min.js':'cvs/proj/test/js/test.js'
				}
			}
		},
		//cssmin css 压缩
		cssmin: {
			options: {
				stripBanners: true,
				banner: '/*! <%-pkg.cssname%>-<%-pkg.version%>.css <%- grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			cvs: {
				//src: ['entry/*.css', 'entry/css/*.css', 'entry/sevenBlock/css/*.css'],
				//dest: 'build/<%-pkg.cssname%>-<%-pkg.version%>.css'
				//
				files:{
					'cvs/proj/test/css/main.min.css':'cvs/proj/test/css/main.css'
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

		/*watch*/
		watch: {
			build: {
				files: [
					//'entry/js/*.js',
					//'entry/css/*.css',
					'cvs/lib/cvs.js',
					'cvs/proj/test/css/mian.css',
					'cvs/proj/test/js/*.js'
				],
				tasks: ['jshint', 'cssmin:cvs', 'uglify:cvs'],
				options: {
					spawn: false
				}
			}
		},

		cssminplugs: {
			options: {
				banner: '', // set to empty; see bellow
				keepSpecialComments: '*', // set to '*' because we already add the banner in sass
				compatibility: 'ie8',
				noAdvanced: true
			},
			ratchet: {
				src: '<%= meta.distPath %>css/<%= pkg.name %>.css',
				dest: '<%= meta.distPath %>css/<%= pkg.name %>.min.css'
			},
			theme: {
				files: {
					'<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.css',
					'<%= meta.distPath %>css/<%= pkg.name %>-theme-android.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-android.css'
				}
			},
			c3h5: {
				files: {
					'<%= meta.hotelDist %>main.css': '<%= meta.hotelDist %>main.css'
				}
			},
			tetris:{
				files:{
					//'<%= meta.minCss %>main.css': '<%= meta.minCss %>main.css'
					'entry/tetris/mincss/tetris.min.css': 'entry/tetris/mincss/softtetris.css',
				}
			}
		},
		/* 俄罗斯方块 */
		eluosiCssmin:{
			options:{
				stripBanners:true,
				banner:'<%= banner %>',
			},
			build:{
				dest: {
					'entry/tetris/css/tetris.min.css': 'entry/tetris/css/softtetris.css',
				}
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
				path: 'http://xiaozhiga.com:8099/entry/'
			}
		}
	});
	//  告诉grunt 我们将使用的插件
	//	grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js
	//	grunt.loadNpmTasks('grunt-contrib-cssmin');//压缩css
	//	grunt.loadNpmTasks('grunt-contrib-jshint');//js、 css 语法检查
	//	grunt.loadNpmTasks('grunt-contrib-watch'); //即时监听
	//	grunt.loadNpmTasks('grunt-contrib-connect');//连接服务

	// Load the plugins
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});
	//require('time-grunt')(grunt);

	// server
	//grunt.registerTask('server', ['connect','open','watch']);
	grunt.registerTask('server', ['connect', 'watch']);

	grunt.registerTask('precent', ['cssminplugs:c3h5']);

	/*俄罗斯方块*/
	grunt.registerTask('tetris',['jshint','cssminplugs:tetris']);
	/*
	 * 告诉grunt 当我们在终端中输入grunt 时需要做什么（注意先后顺序）
	 * grunt.registerTask(taskName, [description, ] taskList);
	 * taskName：任务别名，descripation：任务描述，taskList：任务列表。
	 */
	grunt.registerTask('default', ['jshint', 'cssmin', 'uglify']);
};