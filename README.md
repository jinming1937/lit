# lit 小东西
小东西框架：小东西包含大智慧，轻装上阵，快速展示页面

//时间：2017-03-23
项目清理
整理无用项目路径 : img，sass 
删除无用样式

//时间：2017-03-22
修复自动贪吃蛇bug： 偶尔走错路bug，导致撞墙等
原因：蛇在水平方向，方向大致相同时，判断写错了一个字母，（x: appleXY.x > snakeHeadXY.x? 1:-1,)snakeHeadXY.x 写成了y

//时间: 2017-03-21
添加 Clock 时钟小插件
整理文件目录结构，分离proj项目文件和cvs框架文件
部分文件改名称，如： main -> core
移除与框架无关部分文件，如： guid.js
