define(function() {

    /**
     * 事件处理
     * 监听者
     * 处理对象之间耦合，回调函数耦合，深回调
     */
    function Events() {
        /**
         * 保存事件名和事件
         * @type {Array}
         */
        var eventArray = [];

        /**
         * 触发事件
         * @param  {[type]} fnName  [description]
         * @param  {[type]} context [description]
         * @param  {[type]} bindObj [description]
         * @return {[type]}         [description]
         */
        this.fire = function(fnName, context, bindObj) {
            var _this = this,
                fun = function(eventObj, context) {
                    window.setTimeout(function() {
                        eventObj.fn.apply(context);
                    }, 0);
                };
            for (var i in this.eventArray) {
                if (fnName === eventArray[i].fnName) {
                    /* 同步转异步 */
                    fun(eventArray[i], context);
                }
            }
        };

        /**
         * 绑定事件
         * @param  {[type]} fnName  [description]
         * @param  {[type]} fnObj   [description]
         * @param  {[type]} bindObj [description]
         * @return {[type]}         [description]
         */
        this.on = function(fnName, fnObj, bindObj) {
            eventArray.push({
                fnName: fnName,
                fn: fnObj,
                obj: bindObj
            });
        };

        /**
         * 取消事件
         * @param {String} fnName 事件名
         */
        this.off = function(fnName) {
            var i = eventArray.length - 1;
            for (; i >= 0; i--) { /*倒叙删除 */
                if (eventArray[i].fnName === fnName) {
                    eventArray.splice(i, 1);
                }
            }
        };
    }

    return new Events();
});