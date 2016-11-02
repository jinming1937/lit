define(function(){

	/**
	 * [Action 事件，进行事件传递]
	 */
	function Action(){
		/**
		 * 缓存事件对象
		 * @type {Object}
		 */
		this.eventContext = null;
		this.ontouchstart=function(){	
		};
		this.ontouchmove=function(){	
		};
		this.ontouchend=function(){	
		};
		this.ontouchcancel=function(){	
		};
		
		this.touchstart = function(){
			this.ontouchstart && this.ontouchstart(this.eventContext);
		};
		this.touchmove = function(){
			this.ontouchmove && this.ontouchmove(this.eventContext);
		};
		this.touchend = function(){
			this.ontouchend && this.ontouchend(this.eventContext);
		};
		this.touchcancel = function(){
			this.ontouchcancel && this.ontouchcancel(this.eventContext);
		};

		/**
		 * 触发事件
		 * @param  {[type]} e 事件类型
		 * @return {[type]}   [description]
		 */
		this.fire = function(e){
			var _this = this;
			this.eventContext = e;
			switch(e.type){
				case "touchstart":
					_this.touchstart();
					break;
				case "touchmove":
					_this.touchmove();
					break;
				case "touchend":
					_this.touchend();
					break;
				case "touchcancel":
					_this.touchcancel();
					break;
			}
		};
	}
	return  Action;
});