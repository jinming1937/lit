module.exports = function (grunt) {
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		//uglify js压缩
		uglify:{
			options:{				
				stripBanners:true,
				banner:'/*! <%-pkg.jsname%>-<%-pkg.version%>.js <%- grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:['src/*.js','src/js/*.js'],
				dest:'build/<%-pkg.jsname%>-<%-pkg.version%>.js.min.js'
			}
		},
		//cssmin css 压缩
		cssmin:{
			options:{
				stripBanners:true,
				banner:'/*! <%-pkg.cssname%>-<%-pkg.version%>.css <%- grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				src:['src/*.css','src/css/*.css'],
				dest:'build/<%-pkg.cssname%>-<%-pkg.version%>.css'	
			}
		},

 		//jshint 语法检查
 		jshint:{
 			build:['Gruntfile.js','src/js/*.js','src/*.js'],
 			options:{
 				jshintrc:'.jshintrc'
 			}
 		},

		//watch
		watch:{
			build:{
				files:['src/*.js','src/*.css','src/js/*.js','src/css/*.css'],
				tasks:['uglify'],
				options:{spawn:false}
			}
		}
	});
	// 告诉grunt 我们将使用的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js
	grunt.loadNpmTasks('grunt-contrib-cssmin');//压缩css
	//grunt.loadNpmTasks('grunt-contrib-jshint');//js、 css 语法检查
	grunt.loadNpmTasks('grunt-contrib-watch'); //即时监听
	// 告诉grunt 当我们在终端中输入grunt 时需要做什么（注意先后顺序）
	grunt.registerTask('default',['cssmin','uglify','watch']);
};





// {
//   "name": "gruntTest",
//   "version": "1.0.0",
//   "devDependencies": {
//     "grunt": "^1.0.1",
//     "grunt-contrib-csslint": "^1.0.0",
//     "grunt-contrib-cssmin": "^1.0.1",
//     "grunt-contrib-jshint": "^1.0.0",
//     "grunt-contrib-uglify": "^1.0.1",
//     "grunt-contrib-watch": "^1.0.0"
//   }
// }

//
// module.exports = function (grunt) {
// 	// 任务配置，所有插件的配置信息
// 	grunt.initConfig({
// 		//
// 		pkg:grunt.file.readJSON('package.json'),

// 		//uglify js压缩
// 		uglify:{
// 			options:{				
// 				stripBanners:true,
// 				banner:'/*! <%-pkg.name%>-<%-pkg.version%>.js <%- grunt.template.today("yyyy-mm-dd") %> */\n'
// 			},
// 			build:{
// 				src:['src/*.js','src/js/*.js'],
// 				dest:'build/<%-pkg.name%>-<%-pkg.version%>.js.min.js'
// 			}
// 		},

// 		//cssmin css 压缩
// 		cssmin:{
// 			options:{
// 				stripBanners:true,
// 				banner:'/*! <%-pkg.name%>-<%-pkg.version%>.css <%- grunt.template.today("yyyy-mm-dd") %> */\n'
// 			},
// 			build:{
// 				src:['src/*.css','src/css/*.css'],
// 				dest:'build/<%-pkg.name%>-<%-pkg.version%>.css.min.css'	
// 			}

// 		},


// 		//jshint
// 		jshint:{
// 			build:['Gruntfile.js','src/js/*.js','src/*.js'],
// 			options:{
// 				jshintrc:'.jshintrc'
// 			}
// 		},

// 		//watch
// 		watch:{
// 			build:{
// 				files:['src/*.js','src/*.css','src/js/*.js','src/css/*.css'],
// 				tasks:['jshint','uglify'],
// 				options:{
// 					spawn:false
// 				}
// 			}
// 		}
// 	});
// 	// 告诉grunt 我们将使用的插件
// 	grunt.loadNpmTasks('grunt-contrib-uglify');
// 	grunt.loadNpmTasks('grunt-contrib-cssmin');
// 	grunt.loadNpmTasks('grunt-contrib-jshint');
// 	grunt.loadNpmTasks('grunt-contrib-watch');
// 	// 告诉grunt 当我们在终端中输入grunt 时需要做什么（注意先后顺序）
// 	grunt.registerTask('default',['jshint','cssmin','uglify','watch']);
// 	//grunt.registerTask('default',['jshint','uglify']);
// };