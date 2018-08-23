var core = require("../framework/core"),
  ElePackage = require("./element"),
  Style = require("./style");

/*
 * 整合一些公共属性,抽象／封装进来
 * 不缩写，不改名，增加特定功能名前缀来区分重名属性
 * 坐标 x, y 
 * canvas context 样式 fillStyle, strokeStyle , lineWidth
 * get , set 公共属性 : canvas context rotate, 角度
 * todo:
 * <1> 校验config， x,y 等为数字, 校验不通过 throw error
 * done:
 * 
 */

/**
 * 画布元素
 * 
 * @param {Object} config 配置项
 */
function CanvasELement(config) {
  ElePackage.Ele.call(this);
  /**
   * [elementConfig description]
   * @type {Object}
   */
  this.elementConfig = config || {};

  /**
   * 元素的坐标，移动该元素的时候，该坐标作为改变依据
   */
  this.x = parseInt(this.elementConfig.x || 0);
  this.y = parseInt(this.elementConfig.y || 0);
  /**
   * 旋转角度：角度（0～360）
   */
  this.rotateAngle = parseInt(this.elementConfig.rotateAngle || 0);

  /**
   * 
   */
  this.zindex = 0;
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
  this.draw = function () {
    throw ("this function need overwrite");
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
CanvasELement.prototype.stroke = function () { };
CanvasELement.prototype.fill = function () { };
CanvasELement.prototype.createPath = function () {
  this.frame.cxt.beginPath();
  this.frame.cxt.closePath();
};
ElePackage.inherit(CanvasELement, ElePackage.Ele);
module.exports = {
  CanvasELement: CanvasELement,
  inherit: ElePackage.inherit
};