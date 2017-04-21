var Frame = require("./frame"),
    router = require("./router"),
    events = require("./event"),
    eventPlug = require("./events"),
    section = require("./section"),
    Tween = require("./tween");

/**
 * 全局程序入口
 * 单例
 * 初始化frame
 * 挂载路由信息
 * 挂载页面对象 
 * Core
 */
function Core() {
    //
    events.call(this);
    var _this = this;
    this.collection = {};
    this.router = router;
    this.tween = new Tween();
    this.frame = new Frame({
        canvas: document.getElementsByClassName("cvs")[0],
        width: document.body.clientWidth,
        height: document.body.clientHeight, //width > height ? width:height
        getCurrentRouter: function() {
            return _this.currentRouter;
        }
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
        this.tween.init(currentFrame.cxt, function() {
            /* 转场，清理该页面的element */
            _this.frame.destroyByPage(currentPage.cvsName);
            _this.init(_this.openUrl);
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

/**
 * 页面展示方法
 * @param {Object} obj
 */
Core.prototype.show = function(obj) {
    this.beforeShow(obj);
    this.fire("show", obj);
};

/**
 * 页面转出执行的方法
 * @param {Object} obj
 */
Core.prototype.hide = function(obj) {
    this.beforeHide(obj);
    this.fire("hide", obj);
};

/**
 * 页面转入前执行的方法
 * @param {Object} obj
 */
Core.prototype.beforeShow = function(obj) {
    this.fire("beforeShow", obj);
};

/**
 * 页面转出前执行的方法
 * @param {Object} obj
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
    var _href = obj.href;
    this.openUrl = _href;
    var visitCvsName = this.router.match(_href).cvsName;
    this.tween.fullWin();
};

/**
 * 注意： mian 是一个全局的程序入口，所以应该是一个单例
 */
var Core = new Core();
module.exports = Core;