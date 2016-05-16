// 引入nodejs中的http模块
var http = require('http');

// 创建createServer方法用于接受http客户端请求及返回响应的http服务器程序
var server = http.createServer(function(req, res) {

    // 通过writeHead对象设置服务器的响应头 及响应状态码定义为200
    res.writeHead(200, {'Content-Type' : 'text/html'});

    // 使用meta属性将设置返回的html代码的字符集设置为UTF-8，目的兼容显示中文
    res.write('<head><meta charset="utf-8"/></head>');

    // 通过响应对象的end方法输入html代码并结束响应流
    res.end("haha");
});

// 通过http对象中的listen方法指定服务器的使用端口及服务器绑定地址
server.listen(8088,'192.168.30.90');