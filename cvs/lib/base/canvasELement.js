var core = require("../framework/core"),
    Element = require("./element"),
    ElementAction = require("./elementAction"),
    Style = require("./style");

var uqid = 'un';
var num = 0;

function CanvasELement(config) {
    ElementAction.call(this);
    Element.call(this);
    /**
     * [elementConfig description]
     * @type {Object}
     */
    this.elementConfig = config || {};
    /**
     * [elementType 元素形状类型 1:圆形、圆环,2:多边形]
     * @type {Number}
     */
    this.elementType = 0;

    /**
     * [frame 获取全局的canvas context(画布上下文)]
     * @type {Object}
     */
    this.frame = core.frame;

    /**
     * [draw  元素必须有draw方法，来渲染自己,该方法必须重写]
     * @return {[type]} [description]
     */
    this.draw = function() {
        throw ("this function need overwrite");
    };

    this.stroke = function(argument) {

    };

    this.fill = function(argument) {

    };

    this.createPath = function(argument) {
        this.frame.cxt.beginPath();
        this.frame.cxt.closePath();
        // throw ("this function need overwrite");
    };

    /**
     * 类名
     * @type {String}
     */
    this.className = "";

    /**
     * 类数组
     * @type {Array}
     */
    this.classList = this.className.replace(/\s\s/g, ' ').replace(/^\s/g, '').replace(/\s$/g, '').split(/\s/g);

    /**
     * 
     * @type {style}
     */
    this.style = new Style(this.elementConfig.className || "");

    /**
     * 元素唯一标识
     * @type {String}
     */
    this.elementUqid = uqid + (++num);
    /**
     * 默认不允许移动该元素
     * 必须在绑定thouchmove后，将其设为true,才可以移动该元素
     * @type {Boolean}
     */
    this.allowMove = typeof this.elementConfig.ontouchmove === 'function' ? true : false;
    /**
     * 元素由 frame 管理 
     */
    this.frame.manage(this);

}
CanvasELement.prototype = new ElementAction();
CanvasELement.prototype.constructor = CanvasELement;
module.exports = CanvasELement;