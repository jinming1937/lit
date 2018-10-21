/**
 * 场景切换补间动画
 * todo:
 * <1>: 2017-05-01 这里的this.fullWin方法中window.requestAnimationFrame应该用统一的animation.js
 * done:
 * 
 */


/**
 * 
 * 
 */
function Tween(animation) {
  this.wid = 1;
  this.times = 0;
  this.animation = animation;
  this.init = function (frame, cb) {
    this.width = frame.width;
    this.height = frame.height;
    this.cxt = frame.cxt;
    this.dic = frame.width / 10;
    this.cb = cb;
  };
  /**
   * 百叶窗 纵向
   * @param  {Number} w 宽度
   * @return {[type]}   [description]
   */
  this.cl = function (w) {
    this.cxt.fillStyle = "#000000";
    for (var i = 0; i < 10; i++) {
      this.cxt.fillRect(i * this.dic, 0, w, this.height);
      this.times += 1;
    }
  };
  this.fullWin = function () {
    var _this = this;
    this.animation.setAnimation(function () {
      if (_this.wid < _this.dic) {
        _this.wid += 2;
        _this.cl(_this.wid);
        // window.requestAnimationFrame(function () {
        //   _this.fullWin();
        // });
      } else {
        _this.animation.clearAnimation();
        _this.wid = 1;
        console.log('finish', _this.times);
        _this.times = 0;
        _this.cb && _this.cb();
      }
    });
  };

}
module.exports = Tween;