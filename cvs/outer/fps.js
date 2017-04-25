/**
 * 提供获取fps方法的一个对象定义
 * 可以通过这个类的实例来获取fps
 */
var Fps = function() {
    var lastTime = 0;
    this.getFps = function(jitNow) {
        var now = jitNow,
            fps = 1000 / (now - lastTime);
        lastTime = now;
        return fps;
    };
};

module.exports = Fps;