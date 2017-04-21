# lit 小东西
##### 小东西框架：小东西包含大智慧，轻装上阵，快速展示页面
* 我的邮箱：jinming1937@163.com
 <br/>
 <br/>
 
### 更新<br/>
#### 时间：2017-04-21<br/>
>* 更新规范：采用CMD规范
>* 更新js:严格语法，优化代码
>* 移除测试项目test(模块化加载对象)

#### 时间：2017-03-31<br/>
>* 采用requestAnimationFrame 函数,更新转场tween.js

#### 时间：2017-03-28<br/>
>* 更新文件结构：把元素相关的文件放到/lib/base里
>* 添加grid.js 辅助线

#### 时间：2017-03-26<br/>
>* 添加style.js，为了从元素初始化的config对象中分离部分样式<br/>
>* 添加cssjs.js，辅助style.js<br/>

#### 时间：2017-03-25<br/>
>* 添加元素： 圆角矩形 ，作为按钮，稍微好看一点
>* 修改元素事件冒泡机制
>* 更新frame.js 对元素的事件捕捉方式：改区域点击为isPointInPath<br/>
>	* 这样可以对多种形状（包括弧形边界）进行事件捕捉<br/>
>* element 添加方法 stroke， fill , createPath<br/>
>	* stroke, fill 提供空方法，可以给子类的接口<br/>
>	* createPath 重新创建了路径，并关闭，子类如果支持事件，必须重写，如果不支持，则不做处理<br/>

#### 时间：2017-03-24<br/>
>* 打包命令添加banner
>* frame.js添加todo注释
>* 新增分支reDesign: frame.js准备重构--element判断逻辑增强<br/>

#### 时间：2017-03-23<br/>
>* 项目清理<br/>
>* 整理无用项目路径 : img，sass <br/>
>* 删除无用样式<br/>

#### 时间：2017-03-22<br/>
>* 修复自动贪吃蛇bug： 偶尔走错路bug，导致撞墙等<br/>
>	* 原因：蛇在水平方向，方向大致相同时，判断写错了一个字母，（x: appleXY.x > snakeHeadXY.x? 1:-1,)snakeHeadXY.x 写成了y<br/>

#### 时间: 2017-03-21<br/>
>* 添加 Clock 时钟小插件<br/>
>* 整理文件目录结构，分离proj项目文件和cvs框架文件<br/>
>* 部分文件改名称，如： main -> core<br/>
>* 移除与框架无关部分文件，如： guid.js<br/>
