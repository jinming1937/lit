module.exports = function (grunt) {
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		
		meta:{
			distPath:'build/',
			hotelDist:'build/',
		},
		//uglify js压缩
		uglify:{
			options:{				
				stripBanners:true,
				banner:'/*! <%-pkg.jsname%>-<%-pkg.version%>.js <%- grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				//打包压缩
				//src:['entry/*.js'],
				//dest:'build/<%-pkg.jsname%>-<%-pkg.version%>.js.min.js'
			 	//分文件
			 	dest:{
			 		'build/card.min.js':'entry/card/js/card.js',
			 		'build/tetris.min.js':'entry/tetris/js/tetris.js',
			 	}
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
 			build:['entry/card/js/*.js'],
 			options:{
 				jshintrc:'.jshintrc'
 			}
 		},

		/*watch*/
		watch:{
			build:{
				files:['entry/js/*.js','entry/css/*.css'],
				tasks:['jshint','cssmin','uglify'],
				options:{spawn:false}
			}
		},
		
		cssminplugs:{
			options: {
		        banner: '', // set to empty; see bellow
		        keepSpecialComments: '*', // set to '*' because we already add the banner in sass
		        compatibility : 'ie8',
		        noAdvanced : true
		      },
		      ratchet: {
		        src: '<%= meta.distPath %>css/<%= pkg.name %>.css',
		        dest: '<%= meta.distPath %>css/<%= pkg.name %>.min.css'
		      },
//		      theme: {
//		        files: {
//		          '<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-ios.css',
//		          '<%= meta.distPath %>css/<%= pkg.name %>-theme-android.min.css': '<%= meta.distPath %>css/<%= pkg.name %>-theme-android.css'
//		        }
//		      },
		      c3h5: {
		        files: {
		          '<%= meta.hotelDist %>main.css': '<%= meta.hotelDist %>main.css'
		        }
		    }
		},
		
		/*open new webset*/ 
		connect: {
		    server: {
		        options: {
		            port: 8089,
		            ///hostName:'m.xiaozhiga.com',
		            base:''
		            //base:'xiaozhiga.com'  //??
		            //base: '192.168.30.90'
		        }
		    }
		},
		/* open new link */
		open: {
			kitchen: {
		    	path: 'http://xiaozhiga.com:8089/entry/'
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
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    //require('time-grunt')(grunt);
    
	// server
	//grunt.registerTask('server', ['connect','open','watch']);
	grunt.registerTask('server', ['connect','watch']);
	
	grunt.registerTask('precent',['cssminplugs:c3h5']);
	// 告诉grunt 当我们在终端中输入grunt 时需要做什么（注意先后顺序）
	/*
	 * grunt.registerTask(taskName, [description, ] taskList);
     * taskName：任务别名，descripation：任务描述，taskList：任务列表。
	 */
	grunt.registerTask('default',['jshint','cssmin','uglify']);
	
	
};