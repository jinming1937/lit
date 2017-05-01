var config = require("../config");

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
function Tween() {
    this.wid = 1;
    this.init = function(ctx, cb) {
        this.ctx = ctx;
        this.dic = ctx.canvas.width / 10;
        this.cb = cb;
    };
    /**
     * 百叶窗 纵向
     * @param  {Number} w 宽度
     * @return {[type]}   [description]
     */
    this.cl = function(w) {
        this.ctx.fillStyle = config.tween.color;
        for (var i = 0; i < 10; i++) {
            this.ctx.fillRect(i * this.dic, 0, w, this.ctx.canvas.height);
        }
    };
    this.fullWin = function() {
        var _this = this;
        if (_this.wid <= _this.dic) {
            _this.wid += 2;
            _this.cl(_this.wid);
            window.requestAnimationFrame(function() { _this.fullWin(); });
        } else {
            _this.wid = 1;
            console.log('finish');
            _this.cb && _this.cb();
        }
    };
}
module.exports = Tween;