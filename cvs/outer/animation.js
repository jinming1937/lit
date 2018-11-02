/*
 * todo:
 * <1>: 2017-05-01 能不能整个框架用一个requireAnimationFrame 来作为页面定时器，
 * <2>: 2017-05-01 还有每次转场前，都要清理当前页面的setAnimation，很麻烦，如何自动清理
 *   创建对象的时候挂载到core上？？？， 这样的话，show、hide就可以通过core clearAnimation
 * 或者直接把一个单例挂在core ！！！， 用的时候 直接 set， 不用的时候 clear！！！！ 貌似这才是正确的操作吧
 * done:
 * 
 */

/**
 * 提供对requestAnimationFrame的封装
 */
function Animation() {
  this.isExecAnimation = false;
  this.__flag = 0;
  this.reqFlag = 0;
  /**
   * 停止
   */
  this.clearAnimation = function (index) {
    this.__flag = index || this.__flag;
    this.isExecAnimation = false;
    window.cancelAnimationFrame(this.reqFlag);
  };

  /**
   * 每隔time长时间执行一下fn
   * @param {Function} fn 即时回调函数
   * @param {Function} cbFn 每隔time时间回调函数
   * @param {Number} time 时间
   */
  this.setAnimation = function (fn, cbfn, time) {
    var lastUpdateTime = +new Date() - 17,
      _this = this,
      lastTime = 0;

    if (typeof fn !== 'function') {
      throw ("params list error: there need a function as the first param!");
    }
    this.__flag++;
    this.isExecAnimation = true;
    /**
     * 自执行
     */
    function animationForIndex(startTime) {
      var timeFlag = +new Date(),
        fps;
      startTime = typeof startTime === "undefined" ? 16 : startTime;
      fps = parseInt(1000 / ((startTime - lastTime) || 16));
      fps >= 10 && fn && fn(fps, startTime);

      if (typeof time === "number" && !isNaN(time) && timeFlag - lastUpdateTime > time) {
        lastUpdateTime = timeFlag;
        fps >= 10 && cbfn && cbfn(fps, startTime);
      }
      if (_this.isExecAnimation) {
        _this.reqFlag = window.requestAnimationFrame(animationForIndex);
      }
      lastTime = startTime;
    }
    animationForIndex();
    return this.__flag;
  };
}
module.exports = Animation;