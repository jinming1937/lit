// require('../../outer/combine');
var Frame = require("./frame"),
  router = require("./router"),
  eventPlug = require("./event"),
  Animation = require('../../outer/animation'),
  Tween = require("./tween");

/**
* todo:
* <1>:根据手机/平板 设置是否全屏幕,暂时没有方法支持
* done:
* 
* 全局程序入口
* 单例
* 初始化frame
* 挂载路由信息
* 挂载页面对象 
* Core
*/
function Core() {
  //
  eventPlug.call(this);
  var _this = this;
  /* 防止转场动画时，重复点击跳转页面按钮，重复执行转场 */
  this.isExecTween = false;
  this.collection = {};
  this.router = router;
  this.animate = new Animation();
  this.tween = new Tween(new Animation());
  this.frame = new Frame({
    canvas: document.getElementsByClassName("cvs")[0],
    width: document.body.clientWidth,
    height: document.body.clientHeight, //width > height ? width:height
    getCurrentRouter: function () {
      return _this.currentRouter;
    },
    device: window.devicePixelRatio
  });
  this.openUrl = "";
  this.historyArray = [];
  this.byHis = false;
  window.addEventListener("popstate", function (e) {
    var state = e.state;
    this.byHis = true;
    // 跳转
    // _this.init(window.location.href);
    // state.plName
    _this.open({ href: window.location.href }, this.byHis);
  });
}

/**
 * 初始化
 * 挂载路由信息
 */
Core.prototype.init = function (_href) {
  var _this = this;
  var strUrl = _href || location.href;
  var currentPage = this.router.match(strUrl);
  this.currentRouter = currentPage;
  if (currentPage) {
    //todo
    var currentFrame = this.frame;
    currentPage.cvs = currentFrame;
    this.frame.clear();
    this.show(currentPage);
    console.log("core show");
    this.tween.init(currentFrame, function () {
      /* 转场，清理该页面的element */
      _this.frame.destroyByPage(currentPage.cvsName);
      _this.init(_this.openUrl);
      _this.isExecTween = false;
      _this.setSearch({
        title: _this.currentRouter.title,
        cvsName: _this.currentRouter.cvsName,
        href: _this.openUrl
      });
    });
  } else {
    console.log("init error!!!");
  }
};

/**
 * 
 * @return {[type]} [description]
 */
Core.prototype.onPaint = function () {

};

Core.prototype.setSearch = function (routerObj) {
  var strUrl = routerObj.href || location.href;
  if (this.byHis) {
    // history.replaceState({
    //   'plName': routerObj.cvsName,
    // }, routerObj.title || document.title, strUrl);
  } else {
    /**
     * todo 1、去history栈里搜索历史，如果没有则pushState, 如果有，则go() 
     * back open goto 
     * 
     */

    history.pushState({
      'plName': routerObj.cvsName,
    }, routerObj.title || document.title, strUrl);
  }

  // if (search) {
  //     if (search.match(new RegExp('plugin=' + routerObj.cvsName, 'g'))) {
  //         // History.replaceState({
  //         //     'plName': routerObj.cvsName
  //         // }, routerObj.title || document.title, strUrl);
  //         History.back();
  //     } else {
  //         strUrl += '&plugin=' + routerObj.cvsName;
  //         History.pushState({
  //             'plName': routerObj.cvsName
  //         }, routerObj.title || document.title, strUrl);
  //     }
  // } else {
  //     strUrl += '?plugin=' + routerObj.cvsName;
  //     History.pushState({
  //         'plName': routerObj.cvsName
  //     }, routerObj.title || document.title, strUrl);
  // }
}

/**
 * 页面展示方法
 * @param {Object} routerObj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.show = function (routerObj) {
  this.beforeShow(routerObj);
  this.fire("show", routerObj);
};

/**
 * 页面转出执行的方法
 * @param {Object} routerObj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.hide = function (routerObj) {
  this.beforeHide(routerObj);
  this.fire("hide", routerObj);
};

/**
 * 页面转入前执行的方法
 * @param {Object} routerObj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.beforeShow = function (routerObj) {
  this.animate.clearAnimation();
  this.fire("beforeShow", routerObj);
};

/**
 * 页面转出前执行的方法
 * @param {Object} routerObj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.beforeHide = function (routerObj) {
  this.fire("beforeHide", routerObj);
};

/**
 * 
 * @param  {[type]} obj [description] { href:'', title:'' }
 * @return {[type]}     [description]
 */
Core.prototype.open = function (obj, byHis) {
  this.byHis = byHis || false;
  if (this.isExecTween) {
    return;
  }
  this.isExecTween = true;
  var _href = obj.href;
  this.openUrl = _href;
  var aimRouter = this.router.match(_href);
  if (!aimRouter) {
    return;
  }
  this.tween.fullWin();
};

/**
 * 注意： core 是一个全局的程序入口，所以应该是一个单例
 */
var core = new Core();
module.exports = core;





/**
 * <1>页面转场 改变URL ， 插件转场改变 Search
 * <2>页面转场 Open ,由core管理；插件转场 show,hide, 由frame管理
 */