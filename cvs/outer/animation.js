/**
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
        // window.cancelAnimationFrame(this.reqFlag);
        // console.log(this.reqFlag);
    };

    /**
     * 每隔time长时间执行一下fn
     * @param {Function} fn 回调函数
     * @param {Number} time 时间
     */
    this.setAnimation = function(fn, cbfn, time) {
        var lastUpdateTime = 0,
            flag = 0;

        if (typeof fn !== 'function') {
            throw ("params list error: there need a function as the first param!");
        }
        arr.push(true);
        flag = arr.length - 1;
        /**
         * 自执行
         */
        function animationForIndex() {
            var timeFlag = +new Date();
            fn && fn();

            if (typeof time === "number" && !isNaN(time) && timeFlag - lastUpdateTime > time) {
                lastUpdateTime = timeFlag;
                cbfn && cbfn();
            }

            if (arr[flag]) {
                window.requestAnimationFrame(animationForIndex);
                // console.log(this.reqFlag);this.reqFlag = 
            }
        }
        animationForIndex();
        return flag;
    };
}
module.exports = Animation;