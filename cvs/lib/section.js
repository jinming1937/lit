var config = require("./config")
/**
 * 场景切换补间动画
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
function section() {
   this.wid = 1;
   this.init = function(ctx, cb) {
      this.ctx = ctx;
      this.dic = ctx.canvas.width / 10;
      this.cb = cb;
   }
   this.cl = function(w) {
      for (var i = 0; i < 10; i++) {
         this.ctx.fillStyle = config.section.color;
         this.ctx.fillRect(i * this.dic, 0, w, this.ctx.canvas.height);
      }
   };
   this.fullWin = function() {
      var _this = this;
      setTimeout(function() {
         if (_this.wid <= _this.dic) {
             _this.wid += 2;
             _this.cl(_this.wid);
             _this.fullWin();
         } else {
             _this.wid = 1;
             console.log('finish');
             _this.cb && _this.cb();
         }
      }, 50 / 3);
   }
}


module.exports = section;