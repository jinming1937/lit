define(["../framework/action","../framework/watch",
	//"../framework/frame"
],function(Action,Watch){
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
		this.color = config.color || "#000";
		this.backgroundColor = config.backgroundColor || "#F00";
		this.isUpEvent = config.isUpEvent|| false;
		this.draw();
		frame.manage(this);
	}
	/* 自渲染 */
	Button.prototype.draw = function(){
		var element = this;
		var _frame = frame;
		var fontSize = 20;
		if(frame.width>frame.height){return;}
		_frame.cxt.fillStyle= element.backgroundColor || "#FFF";
		_frame.cxt.fillRect(element.x,element.y,element.width,element.height);
		_frame.cxt.font= fontSize.toString()+"px"+" Georgia";
		_frame.cxt.fillStyle = element.color;//_this.cxt.font;
		_frame.cxt.fillText(
			element.value,
			element.x+element.width/2-element.width/4,//(element.value.length*fontSize > element.width?element.width:element.value.length*fontSize)/2,
			element.y+element.height/2+fontSize/2, //难道字自动适应从中间渲染，而不是从左上角（20 X 20 正方形的左上角）？
			element.width);
	}
	
	return Button;
});