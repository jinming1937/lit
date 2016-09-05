'use strict';
function litService() {
	var port = 8088;
	var host = "127.0.0.1"
	var http = require('http');
	var url = require('url');
	var fs = require('fs');
	var mine = require('./nodeservice/config/mineTypes').mineTypes;
	var path = require('path');
	var server = http.createServer(function(request, response) {
		/* 获取虚拟路径 */
		var pathname = url.parse(request.url.toLowerCase()).pathname;
		console.log(pathname);
		if(pathname === "" || pathname === "/") {
			/* 没有路径， 默认导向首页*/
			pathname = "nodeservice/index.html";
		}
		/* 拼接为实际路径，__dirname 为node js 中私有获取当前路径的变量 */
		var realPath = path.join(__dirname + "/", pathname);
		console.log(realPath);
		var ext = path.extname(realPath);
		ext = ext ? ext.slice(1) : 'unknown';
		fs.exists(realPath, function(exists) {
			if(!exists) {
				response.writeHead(404, {
					'Content-Type': 'text/plain'
				});
				/* 应该输出错误页面 */
				response.write("This request URL " + pathname + " was not found on this server.");
				response.end();
			} else {
				fs.readFile(realPath, "binary", function(err, file) {
					if(err) {
						response.writeHead(500, {
							'Content-Type': 'text/plain'
						});
						/* 应该输出错误页面 */
						response.end("err");
					} else {
						var contentType = mine[ext] || "text/plain";
						/* service 此目录允许跨域 */
						if(pathname.search(/^\/service\//i)>-1 && pathname.match(/^\/service\//i)[0] ==="/service/"){
							response.writeHead(200, {
								'Content-Type': contentType,
								'Access-Control-Allow-Credentials':true,
								'Access-Control-Allow-Origin':"http://www.xiaozhiga.com:8089",
								'Allow':"HEAD,OPTIONS,GET",
								/**
								 * "Set-Cookie":" =[; =][; expires=][; domain=][; path=][; secure][; HttpOnly]"
								 */
								"Set-Cookie":[
									"jmtest=haha;path=/; Httponly",								
									"innerFrom=110018;Path=/; HttpOnly",
									"ch=h5hotelgeneral;Path=/; HttpOnly",
									"jmtest2=haha;path=/",
									"indate=2016-08-30; Domain=.xiaozhiga.com; Path=/"
								]
							});	
						}else{
							response.writeHead(200, {
								'Content-Type': contentType
							});
						}
						response.write(file, "binary");
						response.end();
					}
				});
			}
		});
	});
	server.listen(port);
	console.log("Server runing at " + host + ":" + port + "/");
}
litService();