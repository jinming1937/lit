define([
    "./element"
], function(Element) {
    console.log("load circle");
    function Circle(config) {
        Element.call(this, config);
        /**
         * [elementType 多边形的静态属性，这里应该再抽象一层,而且这个应该定义成枚举，这是个问题：多边形，todo：shape class]
         * @type {Number}
         */
        this.elementType = 1;
        this.config = config || {};
        this.x = config.x || 0; //
        this.y = config.y || 0; //
        this.radius = config.radius || 80; //半径
        this.color = config.color || "#F00";
        this.backgroundColor = config.backgroundColor || "#F00";
        this.isUpEvent = config.isUpEvent || false;

        /**
         * 
         * @return {[type]} [description]
         */
        this.draw = function(){
        	var _this = this;
            var _frame = this.frame;
            _frame.cxt.strokeStyle = _this.backgroundColor || "#FFF";
            _frame.cxt.beginPath();
            _frame.cxt.arc(parseInt(_this.x), parseInt(_this.y),_this.radius,0,2*Math.PI);
            _frame.cxt.fillStyle = _this.color || "#FFF";
			_frame.cxt.fill();
        };

        /**
         * [ontouchmove ontouchmove]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchmove = function(e) {
            if(typeof config.ontouchmove === "function") {
                if(config.strong){
                    config.ontouchmove(e);
                    this.eventFire(e); 
                }else{
                    this.eventFire(e);
                    this.x = e.changedTouches[0].clientX;
                    this.y = e.changedTouches[0].clientY;
                }
                this.draw();
            }
        };

        this.draw();
    } 

    return Circle;
});