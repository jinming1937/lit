var CanvasElementPackage = require("../base/canvasElement");

function DrawWords(config) {
  CanvasElementPackage.CanvasELement.call(this, config);
  this.x = config.x || 20;
  this.y = config.y || 20;
  this.word = config.word || "";
  this.fillStyle = config.fillStyle || "";
  this.font = config.font || "";

  this.getWord = function () {
    return this.word;
  };

  this.setWord = function (word) {
    this.word = word;
  };

  this.draw = function (context) {
    var _this = this;
    this.frame.cxt.save();
    this.frame.cxt.textAlign = "center";
    this.frame.cxt.textBaseline = "middle";
    this.style.setStyle(this.frame.cxt);
    if (this.fillStyle) {
      this.frame.cxt.fillStyle = this.fillStyle;
    }
    if (this.font) { // 受超级抗锯齿影响，图形被缩小了dps倍数，这里应该放大
      this.frame.cxt.font = (this.font + '').replace(/\d+px/, function ($1) {
        return (+$1) * window.devicePixelRatio + 'px';
      });
    }
    this.frame.cxt.fillText(_this.getWord(), this.x, this.y);
    this.frame.cxt.restore();
  };
  this.paint = function () {
    var _this = this;
    this.frame.cxt.save();
    this.style.setStyle(this.frame.cxt);
    this.frame.cxt.fillText(_this.getWord(), _this.x, _this.y);
    this.frame.cxt.restore();
    console.log("345");
  };
}
CanvasElementPackage.inherit(DrawWords, CanvasElementPackage.CanvasELement);
module.exports = {
  DrawWords: DrawWords,
  inherit: CanvasElementPackage.inherit
};