var inherit = require("../common/inherit");
/*
 * 场景切换补间动画
 * todo:
 * <1>: 2017-05-01 这里的this.fullWin方法中window.requestAnimationFrame应该用统一的animation.js
 * done:
 * 
 */


/**
 * 补间动画基类
 * 面向接口编程，只关注动画开始，动画结束
 */
function Tween() {
    // this.wid = 1;
    // this.init = function(ctx, cb) {
    //     this.ctx = ctx;
    //     this.dic = ctx.canvas.width / 10;
    //     this.cb = cb;
    // };
    // /**
    //  * 百叶窗 纵向
    //  * @param  {Number} w 宽度
    //  * @return {[type]}   [description]
    //  */
    // this.cl = function(w) {
    //     this.ctx.fillStyle = "#000000";
    //     for (var i = 0; i < 10; i++) {
    //         this.ctx.fillRect(i * this.dic, 0, w, this.ctx.canvas.height);
    //     }
    // };
    // this.fullWin = function() {
    //     var _this = this;
    //     if (_this.wid <= _this.dic) {
    //         _this.wid += 2;
    //         _this.cl(_this.wid);
    //         _this.req = window.requestAnimationFrame(function() { _this.fullWin(); });
    //     } else {
    //         _this.wid = 1;
    //         console.log('finish');
    //         _this.cb && _this.cb();
    //     }
    // };
}

Tween.prototype.start = function() {

};
Tween.prototype.finish = function() {

}
module.exports = {
    Tween: Tween,
    inherit: inherit
};