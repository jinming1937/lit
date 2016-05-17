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
				src:['entry/*.js','entry/js/*.js','entry/sevenBlock/js/*.js'],
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
				src:['entry/*.css','entry/css/*.css','entry/sevenBlock/css/*.css'],
				dest:'build/<%-pkg.cssname%>-<%-pkg.version%>.css'	
			}
		},

 		/*jshint 语法检查*/
 		jshint:{
 			build:['entry/js/*.js','entry/*.js'],
 			options:{
 				jshintrc:'.jshintrc'
 			}
 		},

		/*watch*/
		watch:{
			build:{
				files:['entry/*.js','entry/*.css','entry/js/*.js','entry/css/*.css'],
				tasks:['jshint','cssmin','uglify'],
				options:{spawn:false}
			}
		},
		
		/*open new webset*/ 
		connect: {
	        server: {
	            options: {
	                port: 8089,
	                base:''
	                //base:'xiaozhiga.com'  //??
	                //base: '192.168.30.90'
	            }
	        }
    		},
    		/* open new link */
    		open: {
	        kitchen: {
	            path: 'http://xiaozhiga:3000/entry/serenBlank/index.html'
	        }
    		}
	});
	// 告诉grunt 我们将使用的插件
//	grunt.loadNpmTasks('grunt-contrib-uglify');//压缩js
//	grunt.loadNpmTasks('grunt-contrib-cssmin');//压缩css
//	grunt.loadNpmTasks('grunt-contrib-jshint');//js、 css 语法检查
//	grunt.loadNpmTasks('grunt-contrib-watch'); //即时监听
//	grunt.loadNpmTasks('grunt-contrib-connect');//连接服务
	
	// Load the plugins
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    //require('time-grunt')(grunt);

	
	
	// server
	grunt.registerTask('server', ['connect','watch']);
	
	// 告诉grunt 当我们在终端中输入grunt 时需要做什么（注意先后顺序）
	/*
	 * grunt.registerTask(taskName, [description, ] taskList);
     * taskName：任务别名，descripation：任务描述，taskList：任务列表。
	 */
	grunt.registerTask('default',['jshint','cssmin','uglify']);
};