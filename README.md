# lit 小东西
##### 小东西框架：小东西包含大智慧
* 我的邮箱：jinming1937@163.com
 <br/>
 <br/>
 
### 问题<br/>
#### 时间：2017-04-27<br/>
>* 神奇的问题实例化两个对象：一个addWatching,一个赋值on事件，但是这两个的move事件都不流畅，但是只要同时使用这两种方式绑定事件就会很流畅
>   * 这个问题暂时放在分支moveblock上<br/>已解决：查看更新：2017-05-01

### 小目标<br/>
#### 时间：2017-04-28<br/>
>* 预计6月份以后会用ES6重写部分模块

### 更新<br/>
#### 时间：2017-09-28<br/>
>* 解决文字丢失bug：frame.js 重写fillText方法时, text 参数丢失

#### 时间：2017-09-05<br/>
>* 加入超级抗锯齿:重写 context 的画图方法，跟据浏览器device来成比例计算出 x, y  width ,height等

#### 时间：2017-06-05<br/>
>* 优化animation，提供fps，修正以前计算的fps逻辑
>* 优化众多页面的fps调用
>* 优化tool工具，对三角形圆心等基础插件按包继承方式重构
>* 添加四叶草，和风车类似
>* 砍掉lib/config.js,剥离tween.js 转场
>* 添加转场动画管理库：准备使用基本／扩展的图形进行可扩展个性化转场

#### 时间：2017-05-12<br/>
>* 添加风车
>* 更新animation.js 修正传给回调函数的time

#### 时间：2017-05-01<br/>
>* 解决addWatching 或者 ontouchmove= 添加事件的时候会卡顿问题
>	* 原因：更新了继承方式（inherit＋call），去掉了元素构造函数原生的ontouch等事件，导致frame.js
中f触发函数 item.element.hasOwnProperty("ontouchmove") && item.element.allowMove的判断
必须要同时声明这两种绑定方式，才可以缓存move事件的元素，而缓存了move事件的元素，在move的时候直接执行
该元素的fire事件（fire是action原型中的方法，可以直接分发事件），于是直接执行了元素绑定事件内部的代码，所以流畅
>* 解决rou2测试按钮作为移动元素不能被重置到frame.elementArray最后的问题
>	* 原因：由于以前修改倒叙遍历，才用了forEach,但是循环内部还没有修改i（index,索引），导致逻辑错误
>* 修复bug:_this.elementArray.push(_this.catchElementTouchMove); 添加的应该是elementArray的项，而不是元素
>* 优化frame.js 私有触发事件函数f:如果touchstart时没有触发在可移动元素上，但是touchmove的时候，
移动到了绑定touchmove事件的元素上，于是该元素不会被重置到其他元素之上
>* 将修改继承方式更新到snake其他的文件中

#### 时间：2017-04-29<br/>
>* 完善继承方式
>* 添加在inherit添加备注,并制定类型编写规范

#### 时间：2017-04-28<br/>
>* 更新inherit:继承属性

#### 时间：2017-04-27<br/>
>* 更新继承方式：call－》 call + prototype
>* 更新事件传递模式：子类实例可以赋值on事件，赋值事件名，但是事件名重写不影响基类
>* 更新元素抽象类，元素实体类继承模式，添加元素事件类型，元素实体类型

#### 时间：2017-04-26<br/>
>* 贪吃蛇手柄事件和自动前进事件优化
>* 样式格式优化

#### 时间：2017-04-25<br/>
>* 修改bug:frame.js fire函数中f方法颠倒元素顺序，导致元素按照非预期顺序渲染
>* 修改snake自动循环模式：用requireAnimationFrame
>* 修改snake在页面主动draw方式，改为自动托管在frame的reRender中调用
>* 修改贪吃蛇的颜色
>* 修改hitTheBall名为ball,准备开发ball
>* 更新Gruntfile.js 更新监听命令

#### 时间：2017-04-22<br/>
>* 修改/cvs/lib/base/style.js module.export 拼写错误 => module.exports
>* core.js 去掉events.js引用,原因：暂时未启用该文件
>* event.js 去掉同步转异步,直接在for循环执行fire 触发对象绑定的方法
>* frame.js 更新完善注释
>* gctrl.js 优化取点器，优化对应的样式

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
