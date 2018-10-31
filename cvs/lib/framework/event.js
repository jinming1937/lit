/**
 * 事件处理
 * 监听者
 */
function Event() {
  /**
   * 保存事件名和事件
   * @type {Array}
   */
  this.eventArray = [];

  /**
   * 触发事件
   * @param {String} fnName
   * @param {Object} context
   */
  this.fire = function (fnName, context) {
    // var _this = this,
    //     /* 同步转异步 */
    //     fun = function(eventObj, context) {
    //         window.setTimeout(function() {
    //             eventObj.fn(context.cvs);
    //         }, 0);
    //     };
    for (var i in this.eventArray) {
      if (fnName === this.eventArray[i].fnName && context.cvsName === this.eventArray[i].cvsName) {
        // fun(this.eventArray[i], context);
        this.eventArray[i].fn(context.cvs);
      }
    }
  };

  /**
   * 绑定事件
   * @param {String} fnName
   * @param {String} cvsName
   * @param {Function} fnObj
   */
  this.on = function (fnName, cvsName, fnObj) {
    this.eventArray.push({
      fnName: fnName,
      cvsName: cvsName,
      fn: fnObj
    });
  };

  /**
   * 取消事件
   * @param {String} fnName 事件名
   */
  this.off = function (fnName) {
    var i = this.eventArray.length - 1;
    for (; i >= 0; i--) { /*倒叙删除 */
      if (this.eventArray[i].fnName === fnName) {
        this.eventArray.splice(i, 1);
      }
    }
  };
}

module.exports = Event;