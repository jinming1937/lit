/*
 * todo:
 * <1>: 2017-05-01 能不能整个框架用一个requireAnimationFrame 来作为页面定时器，
 * <2>: 2017-05-01 还有每次转场前，都要清理当前页面的setAnimation，很麻烦，如何自动清理
 * done:
 * 
 */

/**
 * 提供对requestAnimationFrame的封装
 */
function Animation() {
    var arr = [];

    /**
     * 停止
     */
    this.clearAnimation = function(index) {
        arr[index] = false;
        window.cancelAnimationFrame(this.reqFlag);
        // console.log(this.reqFlag);
    };

    /**
     * 每隔time长时间执行一下fn
     * @param {Function} fn 即时回调函数
     * @param {Function} cbFn 每隔time时间回调函数
     * @param {Number} time 时间
     */
    this.setAnimation = function(fn, cbfn, time) {
        var lastUpdateTime = +new Date() - 17,
            lastTime = 0,
            flag = 0;

        if (typeof fn !== 'function') {
            throw ("params list error: there need a function as the first param!");
        }
        arr.push(true);
        flag = arr.length - 1;
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
            if (arr[flag]) {
                this.reqFlag = window.requestAnimationFrame(animationForIndex);
            }
            lastTime = startTime;
        }
        animationForIndex();
        return flag;
    };
}
module.exports = Animation;