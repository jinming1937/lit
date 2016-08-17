define(["../framework/action","../framework/watch"],function(Action,Watch){
	console.log("load button");
	function Button(config){
		Action.call(this);
		Watch.call(this);
		this.eventContext = config;
		this.value = config.value || "button";
		this.ontouchstart = function(e){
			config.ontouchstart && config.ontouchstart(e);
			this.eventFire(e);
		};
		this.ontouchmove = function(e){
			config.ontouchmove && config.ontouchmove(e);
			this.eventFire(e);
		};
		this.ontouchend = function(e){
			config.ontouchend && config.ontouchend(e);
			this.eventFire(e);
		};
		this.ontouchcancel = function(e){
			config.ontouchcancel && config.ontouchcancel(e);
			this.eventFire(e);
		};
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.width = config.width || 80;
		this.height = config.height || 30;
		this.color = "#000";
		this.backgroundColor = "#F00";
		this.isUpEvent = config.isUpEvent|| false;	
	}
	/*  */
	Button.prototype.init = function(config){

	};
	
	return Button;
});