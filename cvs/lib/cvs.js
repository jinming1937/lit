console.log("loading cvs.js");
;(function(){
	var canvas = document.getElementById("cvs-main");
	function getScreenSize(){
		return {
			width:document.body.clientWidth,
			height:document.body.clientHeight
		};
	}
	function CurtainWall(){
		this.canvas = canvas;
		this.size = getScreenSize();
		this.resize();
		this.cxt = canvas.getContext("2d");
		this.pixel = [];
		this.ctrl = new Handler();
		var _this = this;
		_this.canvas.addEventListener("touchmove",function(e){ 
			_this.x=e.clientX;
			_this.y=e.clientY;	
		},false);
		_this.canvas.addEventListener("touchstart",function(e){
			
		},false);
		_this.canvas.addEventListener("touchend",function(e){
			
		},false);
	}
	CurtainWall.prototype.init = function(){
		
	};
	CurtainWall.prototype.resize = function(option){
		var _this = this;
		option = option || _this.size;
		this.canvas.setAttribute("width",option.width);
		this.canvas.setAttribute("height",option.height);
	};
	CurtainWall.prototype.print = function(){
		
	};
	CurtainWall.prototype.shape = function(config){
		
	};
	CurtainWall.prototype.getPreviousCoordinates = function(){
		return "Coordinates: (" + this.x + "," + this.y + ")";
	};
	CurtainWall.prototype.test = function(config){
		var _this = this;
		_this.cxt.fillStyle=config.color;
		_this.cxt.fillRect(config.x,config.y,config.width,config.height);
	};
	
	function Handler(){
		
	}
	Handler.prototype.init = function(){
		
	};
	
	function Events(){
		
	}
	Events.prototype.addEventListener = function(){
		
	};
	Events.prototype.removeEvent = function(){
		
	};
	Events.prototype.fire = function(){
		
	};
	
	var curtain = new CurtainWall();
	window.curtain = curtain;
	window.onresize = function(e){ 
		curtain.size = getScreenSize();
		curtain.resize();
		console.log(" window has resize! \r\n canvas has resize!");
	};
}());

console.log("loaded cvs.js");
console.log(document.body.clientWidth);
console.log(document.body.clientHeight);
