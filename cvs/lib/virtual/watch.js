var inherit = require("../common/inherit");
/*
 * 实现方式：
 * 1、对象继承 Watching, 获得其属性和方法
 * 2、对象通过 addWatching, 添加事件监视
 * 3、对象通过 fireEvent, 触发事件
 * 4、对象通过 removeWatching，移除事件
 * 观察者模式： 
 * 	解藕元素对象与action，并且可以对同一元素对象重复绑定多种事件
 */

/**
 * 事件监视
 */
function Watching() {
    this.eventArray = [];
}

/**
 * @description 添加事件监视
 * todo:
 * <1>: 时间：2017-04-27，应该去掉相同的事件名称的相同的事件句柄
 * <2>: 时间：2017-04-29，这个allowMove，是设置可移动元素的一个标识，但是在这里出现显得突兀
 * done:
 * 
 * @param {String} name 事件名称
 * @param {Function} callBack 回调函数
 * @param {Boolean} isUpEvent 是否阻止冒泡 
 */
Watching.prototype.addWatching = function(name, callBack, isUpEvent) {
    this.allowMove = name === "touchmove" || this.allowMove === true ? true : false;
    this.eventArray.push({
        name: name,
        fn: callBack,
        isUpEvent: isUpEvent ? true : false
    });
};

/**
 * @description 移除事件监视
 * 
 * @param {String} name 事件名称
 */
Watching.prototype.removeWatching = function(name) {
    this.allowMove = name === "touchmove" || this.allowMove === true ? false : true;
    for (var i = this.eventArray.length - 1; i >= 0; i--) {
        if (name === this.eventArray[i].name) {
            this.eventArray.splice(i, 1);
        }
    }
};

/**
 * @description 触发事件
 * 
 * @param {Object} event 事件对象
 */
Watching.prototype.fireEvent = function(event) {
    for (var i = 0, len = this.eventArray.length; i < len; i++) {
        if (this.eventArray[i].name === event.type) {
            this.eventArray[i].fn.call(this, event); /* 注入实例，替换this */
            console.log("watching fireEvent tf:" + new Date().getTime());
        }
    }
};
module.exports = {
    Watching: Watching,
    inherit: inherit
};