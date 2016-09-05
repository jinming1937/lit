define(function(){
	/**
	 * 基本行为：
	 */
	function Action(){
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
		}
	}
	return  Action;
});