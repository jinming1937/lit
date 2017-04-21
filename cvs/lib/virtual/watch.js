/*
 * 实现方式：
 * 1、对象继承 Watching, 获得其属性和方法
 * 2、对象通过 addWatching, 添加事件监视
 * 3、对象通过 eventFire, 触发事件
 * 4、对象通过 removeWatching，移除事件
 * 观察者模式： 
 * 	解藕元素对象与action，并且可以对同一元素对象重复绑定事件
 */

/* 事件监视 */
function Watching() {
    this.eventArray = [];
    this.addWatching = function(name, callBack, isUpEvent) {
        this.allowMove = name === "touchmove" || this.allowMove === true ? true : false;
        this.eventArray.push({
            name: name,
            fn: callBack,
            isUpEvent: isUpEvent ? true : false
        });
    };
    this.removeWatching = function(name) {
        this.allowMove = name === "touchmove" || this.allowMove === true ? false : true;
        for (var i = this.eventArray.length - 1; i >= 0; i--) {
            if (name === this.eventArray[i].name) {
                this.eventArray.splice(i, 1);
            }
        }
    };
    this.eventFire = function(e) {
        var _this = this,
            fun = function(i, e) {
                window.setTimeout(function() {
                    _this.eventArray[i].fn(e);
                }, 0);
            };
        for (var i = 0, len = this.eventArray.length; i < len; i++) {
            if (this.eventArray[i].name === e.type) {
                fun(i, e);
            }
        }
    };
}
module.exports = Watching;