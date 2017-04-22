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
            }
        }
        animationForIndex();
        return flag;
    };
}
module.exports = Animation;