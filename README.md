#lit 小东西框架：小东西包含大智慧，轻装上阵，快速展示页面

//时间：2017-03-22
修复自动贪吃蛇bug： 偶尔走错路bug，导致撞墙等 
原因：蛇在水平方向，方向大致相同时，判断写错了一个字母，（x: appleXY.x > snakeHeadXY.x? 1:-1,)snakeHeadXY.x 写成了y

//时间: 2017-03-21
添加 Clock 时钟小插件

整理文件目录结构，分离proj项目文件和cvs框架文件

部分文件改名称，如： main -> core

移除与框架无关部分文件，如： guid.js

"grunt-contrib-clean": "~0.6.0",    //目录清理

"grunt-contrib-concat": "~0.5.0",   // 合并文件

"grunt-contrib-connect": "~0.8.0",  // 开启端口服务

"grunt-contrib-copy": "~0.7.0",     // 复制文件

"grunt-contrib-csslint": "~0.3.1",  // css检查

"grunt-contrib-cssmin": "~0.10.0",  // css压缩

"grunt-contrib-jshint": "~0.10.0",  // js检查

"grunt-contrib-uglify": "^2.0.0",   // js压缩

"grunt-contrib-watch": "~0.6.1",    // 监听文件变化，自动执行任务

"grunt-csscomb": "~3.0.0",          // css按照最优的顺序排出来,便于阅读,而且也很规范

"grunt-html-validation": "~0.1.18", // 

"grunt-open": "~0.2.3",             // 打开页面插件

"grunt-sass": "^1.2.0",             // sass插件

"grunt-sed": "~0.1.1",              // 

"grunt-webpack": "^1.0.11",         // webpack

"load-grunt-tasks": "~1.0.0",       // 加载grunt任务

"rjs-build-analysis": "0.0.3",      // 

"time-grunt": "~1.0.0",             // 任务执行时间

"webpack-dev-server": "^1.14.1"     // webpack 插件