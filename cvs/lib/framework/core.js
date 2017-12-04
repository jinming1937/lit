require('../../outer/combine');
var Frame = require("./frame"),
    router = require("./router"),
    eventPlug = require("./event"),
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
    this.tween = new Tween();
    this.frame = new Frame({
        canvas: document.getElementsByClassName("cvs")[0],
        width: document.body.clientWidth,
        height: document.body.clientHeight, //width > height ? width:height
        getCurrentRouter: function() {
            return _this.currentRouter;
        },
        device:window.devicePixelRatio
    });
    this.openUrl = "";
    this.historyArray = [];
}

/**
 * 初始化
 * 挂载路由信息
 */
Core.prototype.init = function(_href) {
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
        this.tween.init(currentFrame, function() {
            /* 转场，清理该页面的element */
            _this.frame.destroyByPage(currentPage.cvsName);
            _this.init(_this.openUrl);
            _this.isExecTween = false;
        });
    } else {
        console.log("init error!!!");
    }
};

/**
 * 
 * @return {[type]} [description]
 */
Core.prototype.onPaint = function() {

};

Core.prototype.setSearch = function(obj,isBack){
    var strUrl = location.href;
    var search = location.search;
    if (!isBack) {
        strUrl += (search? '&':'?') + 'plugin='+obj.cvsName;
        History.pushState({'plName':obj.cvsName},obj.title || document.title, strUrl);
    } else {
        if (search.match(new RegExp('plugin='+obj.cvsName,'g'))) {
            strUrl = strUrl.replace(new RegExp('plugin='+obj.cvsName,'g'),'');
        } else {

        }
        History.back();
    }
}

/**
 * 页面展示方法
 * @param {Object} obj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.show = function(obj) {
    this.beforeShow(obj);
    this.fire("show", obj);
    this.setSearch(obj,false);
};

/**
 * 页面转出执行的方法
 * @param {Object} obj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.hide = function(obj) {
    this.beforeHide(obj);
    this.fire("hide", obj);
    this.setSearch(obj,true);
};

/**
 * 页面转入前执行的方法
 * @param {Object} obj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.beforeShow = function(obj) {
    this.fire("beforeShow", obj);
};

/**
 * 页面转出前执行的方法
 * @param {Object} obj { index: 0, title:'xxxx',cvsName: "index", urlReg: /\/snake\/snindex/ }
 */
Core.prototype.beforeHide = function(obj) {
    this.fire("beforeHide", obj);
};

/**
 * 
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
Core.prototype.open = function(obj) {
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
    // var visitCvsName = aimRouter.cvsName;
    this.tween.fullWin();
};

/**
 * 注意： mian 是一个全局的程序入口，所以应该是一个单例
 */
var core = new Core();
module.exports = core;