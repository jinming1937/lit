var WatchingPackage = require("./watch");

/**
 * [Action 事件，对frame中捕捉到的事件进行分发传递]
 */
function Action() {
  WatchingPackage.Watching.call(this);
  /**
   * 缓存事件对象
   * @type {Object}
   */
  this.eventContext = null;
}
Action.prototype.ontouchmove = function () { };
Action.prototype.ontouchend = function () { };
Action.prototype.ontouchcancel = function () { };
Action.prototype.ontouchstart = function () { };

/**
 * 私有方法：touchstart
 * 
 * @param {Object} e 事件对象
 */
function touchstart(e) {
  this.ontouchstart(e || this.eventContext);
  this.fireEvent(e || this.eventContext);
}

/**
 * 私有方法：touchmove
 * 
 * @param {Object} e 事件对象
 */
function touchmove(e) {
  this.ontouchmove(e || this.eventContext);
  this.fireEvent(e || this.eventContext);
  // console.log("action touchmove tf:" + new Date().getTime());
}

/**
 * 私有方法：touchend
 * 
 * @param {Object} e 事件对象
 */
function touchend(e) {
  this.ontouchend(e || this.eventContext);
  this.fireEvent(e || this.eventContext);
}

/**
 * 私有方法：touchcancel
 * 
 * @param {Object} e 事件对象
 */
function touchcancel(e) {
  this.ontouchcancel(e || this.eventContext);
  this.fireEvent(e || this.eventContext);
}

/**
 * 触发事件分发
 * 
 * @param {Object} e 事件对象
 */
Action.prototype.fire = function (e) {
  this.eventContext = e;
  switch (e.type) {
    case "touchstart":
      touchstart.call(this);
      break;
    case "touchmove":
      touchmove.call(this);
      break;
    case "touchend":
      touchend.call(this);
      break;
    case "touchcancel":
      touchcancel.call(this);
      break;
    default:
      break;
  }
};
WatchingPackage.inherit(Action, WatchingPackage.Watching);
module.exports = {
  Action: Action,
  inherit: WatchingPackage.inherit
};