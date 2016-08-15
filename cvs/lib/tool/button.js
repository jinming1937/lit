define(["../framework/action"],function(Action){
	console.log("load button");
	function Button(){
		Action.call(this);
		this.eventContext = null;
		this.value = "";
	}
	Button.prototype.init = function(config){
		this.value = config.value || "button";
		this.ontouchstart = config.ontouchstart;
		this.ontouchmove = config.ontouchmove;
		this.ontouchend = config.ontouchend;
		this.ontouchcancel = config.ontouchcancel;
		this.x = config.x || 0;
		this.y = config.y || 0;
		this.width = config.width || 80;
		this.height = config.height || 30;
		this.color = "#000";
		this.backgroundColor = "#F00";
	};
	
	return Button;
});