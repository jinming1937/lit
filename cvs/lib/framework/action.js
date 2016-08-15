define(["./watch"],function(){
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
//	var Action = {
//		context:{
//			
//		},
//		touchstart : function(){
//			this.ontouchstart(this.context);
//		},
//		ontouchstart : function(e){
//		},
//		touchmove : function(){
//			this.ontouchmove(this.context);
//		},
//		ontouchmove : function(e){
//		},
//		touchend : function(){
//			this.ontouchend(this.context);
//		},
//		ontouchend : function(e){
//		},
//		touchcancel : function(){
//			this.ontouchcancel(this.context);
//		},
//		ontouchstart : function(e){
//		}
//	}
	
//	Action.prototype.collection = function(){
//
//	};
//
//	Action.prototype.ontouchstart = function(e){
//		
//	};
//	
//	Action.prototype.ontouchmove = function(e){
//		
//	};
//	
//	Action.prototype.ontouchend = function(e){
//		
//	};
//	
//	Action.prototype.ontouchcancel = function(e){
//		
//	}
	
	
	return  Action;
});