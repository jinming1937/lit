var CanvasElementPackage = require("../base/canvasElement");

function Line(config) {
  CanvasElementPackage.CanvasELement.call(this, config);
  /**
   * @type {Number}
   */
  this.elementType = 1;
  this.length = config.length || 80; //长度
  this.lineWidth = config.lineWidth || 1; // 粗细
  this.x = parseInt(config.x, 10) || 0;
  this.y = parseInt(config.y, 10) || 0;
  this.rotateRate = config.rotateRate || 0; // 旋转角度
  this.strokeStyle = config.strokeStyle || "#F00";
  this.createPath = function (context) {
    context.translate(this.x, this.y);
    context.beginPath();
    context.rotate(this.rotateRate);
    context.moveTo(0, 0);
    context.lineTo(this.length, 0);
  };
  /**
   * 
   */
  this.draw = function (context) {
    context.lineWidth = this.lineWidth;
    this.createPath(context);
    context.strokeStyle = this.strokeStyle;
    context.stroke();
  };
}

CanvasElementPackage.inherit(Line, CanvasElementPackage.CanvasELement);
module.exports = {
  Line: Line,
  inherit: CanvasElementPackage.inherit
};