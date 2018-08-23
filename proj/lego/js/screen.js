var CanvasElementPackage = require("../../../cvs/lib/base/canvasElement");

function Screen(config) {
  CanvasElementPackage.CanvasELement.call(this, config);
  this.width = config.width || this.frame.width;
  this.height = config.height || this.frame.height;
  this.fillStyle = config.fillStyle || "rgba(255,255,255,1)";
  this.zindex = -100;
  this.createPath = function (context) {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.width, 0);
    context.lineTo(this.width, this.height);
    context.lineTo(0, this.height);
    context.closePath();
  }
  this.draw = function (context) {
    // this.createPath();
    context.fillStyle = this.fillStyle;
    context.fillRect(0, 0, this.width, this.height);
  };
}
CanvasElementPackage.inherit(Screen, CanvasElementPackage.CanvasELement);
module.exports = {
  Screen: Screen,
  inherit: CanvasElementPackage.inherit
};