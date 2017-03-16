define([
    "../virtual/action",
    "../virtual/watch"
],function(Action,Watch) {
    var uqid = 'un';
    var num = 0;
    /**
     * 元素基类：提供公共方法、规范方法接口
     */
    function Element(config) {
        //
        Action.call(this);
        Watch.call(this);

        /**
         * [eventContext description]
         * @type {Object}
         */
        this.eventContext = config;
        /**
         * [elementType 元素形状类型 1:圆形、圆环,2:多边形]
         * @type {Number}
         */
        this.elementType = 0;

        /**
         * [frame 获取全局的canvas context(画布上下文)]
         * @type {Object}
         */
        this.frame = (main.getCurrentFrame()).cvs;


        /**
         * [ontouchstart ontouchstart]
         * @param  {Object} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchstart = function(e) {
            config.ontouchstart && config.ontouchstart(e);
            this.eventFire(e);
        };

        /**
         * [ontouchmove ontouchmove]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchmove = function(e) {
            config.ontouchmove && config.ontouchmove(e);
            this.eventFire(e);
        };

        /**
         * [ontouchend ontouchend]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchend = function(e) {
            config.ontouchend && config.ontouchend(e);
            this.eventFire(e);
        };

        /**
         * [ontouchcancel ontouchcancel]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchcancel = function(e) {
            config.ontouchcancel && config.ontouchcancel(e);
            this.eventFire(e);
        };

        /**
         * [draw  元素必须有draw方法，来渲染自己,该方法必须重写]
         * @return {[type]} [description]
         */
        this.draw = function() {
            throw ("this function need overwrite");
        }

        /**
         * 元素唯一标识
         * @type {String}
         */
        this.elementUqid = uqid+(++num);
        /**
         * 默认不允许移动该元素
         * 必须在绑定thouchmove后，将其设为true,才可以移动该元素
         * @type {Boolean}
         */
        this.allowMove = typeof config['ontouchmove'] === 'function'?true:false;
        /**
         * 元素由 frame 管理 
         */
        this.frame.manage(this);
    }

    return Element;
});