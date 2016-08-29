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
		var pathname = url.parse(request.url).pathname;
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
						response.writeHead(200, {
							'Content-Type': contentType
						});
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