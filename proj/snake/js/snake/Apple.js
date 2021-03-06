var CanvasElementPackage = require("../../../../cvs/lib/base/canvasElement");

/* 苹果 */
function Apple(config) {
  CanvasElementPackage.CanvasELement.call(this, config);
  this.size = config.size || 20;
  this.maxPixelX = config.maxPixelX;
  this.maxPixelY = config.maxPixelY;
  this.borderX = config.borderX;
  this.borderY = config.borderY;
  this.pixelArray = config.pixelArray; /* 屏幕分辨率 */
  this.getBodyArray = config.getBodyArray;
  this.zindex = config.zindex || 10;
  // this.pixelX = parseInt((this.maxPixelX)*Math.random());
  // this.pixelY = parseInt((this.maxPixelY)*Math.random());
  this.randomPixel();
  // this.frame.manage(this);
  this.createPath = function (argument) {
    this.frame.cxt.beginPath();
  };
  /* 渲染 */
  this.draw = function () {
    var _this = this;
    this.frame.cxt.save();
    this.frame.cxt.beginPath();
    this.frame.cxt.arc(
      _this.pixelX * _this.size + _this.borderX / 2 + _this.size / 2,
      _this.pixelY * _this.size + _this.borderX / 2 + _this.size / 2,
      _this.size / 2, 0, Math.PI * 2,
      false
    );
    this.frame.cxt.closePath();
    this.frame.cxt.fillStyle = "#09bb07";
    this.frame.cxt.fill();
    this.frame.cxt.restore();
  };
}

/* 产生随机位置:排除掉蛇占据的位置 */
Apple.prototype.randomPixel = function () {
  var _pixelArray = [].concat(this.pixelArray); /* 屏幕分辨率不能破坏，只能操作其副本 */
  var snakeArray = this.getBodyArray();
  var snakeTrueArray = [];
  for (var si = 0, silen = snakeArray.length; si < silen; si++) {
    snakeTrueArray = snakeTrueArray.concat(snakeArray[si]); /* 拿到贪吃蛇身上每一个方块的坐标 */
  }
  for (var leni = this.pixelArray.length - 1; leni >= 0; leni--) {
    for (var j = 0, lenj = snakeTrueArray.length; j < lenj; j++) {
      if (this.pixelArray[leni][0] === snakeTrueArray[j][0] &&
        this.pixelArray[leni][1] === snakeTrueArray[j][1]) {
        _pixelArray.splice(leni, 1);
      } else if (this.pixelArray[leni][0] === this.pixelX &&
        this.pixelArray[leni][1] === this.pixelY) {
        _pixelArray.splice(leni, 1);
      }
    }
  }
  if (_pixelArray.length === 0) {
    if (confirm(" you are NB!!! /r/n restart the game？")) {
      location.href = location.href;
    }
    return;
  }
  var trueIndexArray = _pixelArray[parseInt(_pixelArray.length * Math.random())];
  this.pixelX = trueIndexArray[0];
  this.pixelY = trueIndexArray[1];
};
/* 获取苹果的位置 */
Apple.prototype.getPixel = function () {
  var _this = this;
  return {
    x: _this.pixelX,
    y: _this.pixelY
  };
};
CanvasElementPackage.inherit(Apple, CanvasElementPackage.CanvasELement);
module.exports = Apple;