var ActionPackage = require("../virtual/action");

function ELementAction() {
    // Action.call(this);
    /**
     * todo :
     * <1> : 时间：2017-04-27，这里有个问题，按道理来说，ontouchstart 可以被重写,元素的实例重写了此事件后，执行重写后的
     * 但是，addWatching 添加的事件，不应该被重写，所以这里的this.fireEvent(e); 仍然应该在某处执行；这样的话，ontouchstart中
     * 通过config传入的事件，虽然相当于 element.ontouchstart = function(){} , 就显得多余了，直接采用此方式即可；
     * 所以，1、这里的ontouchstart 应该换个名字，作为touchstart内部执行的一个方法，保存着执行fireEvent事件；
     *      2、touchstart 这种事件不应该被重写，而且element.touchestart(); 应该直接执行绑定的事件；
     *      3、touchstart 即使重写了，在元素调用此方法的时候也应该只是相当于执行了个新的方法，而原来绑定的事件应该被保留，仍然可执行，可解绑；
     * down : 
     * <1> :
     * [ontouchstart ontouchstart]
     * @param  {Object} e [event]
     * @return {[type]}   [description]
     */
    // this.ontouchstart = function(e) {
    //     /**
    //      * 执行通过config配置的事件
    //      */
    //     this.elementConfig.ontouchstart && this.elementConfig.ontouchstart(e);
    //     /**
    //      * 执行通过addWatching监听的事件
    //      */
    //     this.fireEvent(e);
    // };

    // /**
    //  * [ontouchmove ontouchmove]
    //  * @param  {[type]} e [event]
    //  * @return {[type]}   [description]
    //  */
    // this.ontouchmove = function(e) {
    //     this.elementConfig.ontouchmove && this.elementConfig.ontouchmove(e);
    //     this.fireEvent(e);
    // };

    // /**
    //  * [ontouchend ontouchend]
    //  * @param  {[type]} e [event]
    //  * @return {[type]}   [description]
    //  */
    // this.ontouchend = function(e) {
    //     this.elementConfig.ontouchend && this.elementConfig.ontouchend(e);
    //     this.fireEvent(e);
    // };

    // /**
    //  * [ontouchcancel ontouchcancel]
    //  * @param  {[type]} e [event]
    //  * @return {[type]}   [description]
    //  */
    // this.ontouchcancel = function(e) {
    //     this.elementConfig.ontouchcancel && this.elementConfig.ontouchcancel(e);
    //     this.fireEvent(e);
    // };
}

// ELementAction.prototype = new Action();
// ELementAction.prototype.constructor = "ElementAction";

module.exports = {
    ELementAction: ActionPackage.inherit(ELementAction, ActionPackage.Action),
    inherit: ActionPackage.inherit
};