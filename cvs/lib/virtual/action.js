var Watching = require("./watch");

var __eventContext = null;
/**
 * [Action 事件，进行事件传递]
 */
function Action() {
    Watching.call(this);
    /**
     * 缓存事件对象
     * @type {Object}
     */
    this.eventContext = null;

    // this.touchstart = function() {
    //     this.ontouchstart && this.ontouchstart(this.eventContext);
    // };
    // this.touchmove = function() {
    //     this.ontouchmove && this.ontouchmove(this.eventContext);
    // };
    // this.touchend = function() {
    //     this.ontouchend && this.ontouchend(this.eventContext);
    // };
    // this.touchcancel = function() {
    //     this.ontouchcancel && this.ontouchcancel(this.eventContext);
    // };
    // /**
    //  * 触发事件
    //  * @param  {[type]} e 事件类型
    //  * @return {[type]}   [description]
    //  */
    // this.fire = function(e) {
    //     var _this = this;
    //     this.eventContext = e;
    //     switch (e.type) {
    //         case "touchstart":
    //             _this.touchstart();
    //             break;
    //         case "touchmove":
    //             _this.touchmove();
    //             break;
    //         case "touchend":
    //             _this.touchend();
    //             break;
    //         case "touchcancel":
    //             _this.touchcancel();
    //             break;
    //     }
    // };
}
Action.prototype = new Watching();
Action.prototype.constructor = Action;
Action.prototype.ontouchmove = function() {};
Action.prototype.ontouchend = function() {};
Action.prototype.ontouchcancel = function() {};
Action.prototype.ontouchstart = function() {};

function touchstart(e) {
    this.ontouchstart(e || this.eventContext);
    this.fireEvent(e || this.eventContext);
}

function touchmove(e) {
    this.ontouchmove(e || this.eventContext);
    this.fireEvent(e || this.eventContext);
}

function touchend(e) {
    this.ontouchend(e || this.eventContext);
    this.fireEvent(e || this.eventContext);
}

function touchcancel(e) {
    this.ontouchcancel(e || this.eventContext);
    this.fireEvent(e || this.eventContext);
}

// Action.prototype.touchstart = function(e) {
//     this.ontouchstart && this.ontouchstart(e || this.eventContext);
//     this.fireEvent(e || this.eventContext || { type: "touchstart" });
// };

// Action.prototype.touchmove = function(e) {
//     this.ontouchmove && this.ontouchmove(e || this.eventContext);
//     this.fireEvent(e || this.eventContext || { type: "touchmove" });
// };

// Action.prototype.touchend = function(e) {
//     this.ontouchend && this.ontouchend(e || this.eventContext);
//     this.fireEvent(e || this.eventContext || { type: "touchend" });
// };

// Action.prototype.touchcancel = function(e) {
//     this.ontouchcancel && this.ontouchcancel(e || this.eventContext);
//     this.fireEvent(e || this.eventContext || { type: "touchcancel" });
// };

Action.prototype.fire = function(e) {
    this.eventContext = e;
    __eventContext = e;
    switch (e.type) {
        case "touchstart":
            touchstart.call(this, e);
            break;
        case "touchmove":
            touchmove.call(this, e);
            break;
        case "touchend":
            touchend.call(this, e);
            break;
        case "touchcancel":
            touchcancel.call(this, e);
            break;
    }
};

module.exports = Action;