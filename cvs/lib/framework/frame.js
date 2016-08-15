define(function(){
	/**
	 * Frame : 框架，这里指视窗，一个html页面只有一个视窗
	 * 视窗作为canvas的代言人，负责把元素对象画出来，而这个元素对象既可以是一个屏幕，也可以是 一个个按钮 
	 * 一个页面可以有多个屏幕，屏幕可以相互切换；
	 * 时间：2016-08-07
	 * 作者：jinming1937@136.com
	 */
	
	/**
	 * Frame : 框架，这里指视窗，一个html页面只有一个视窗 
	 */
	function Frame(option){
		this.canvas = option.canvas;
		this.width = option.width || document.body.clientWidth;
		this.height = option.height || document.body.clientHeight;
		this.resize(this.width,this.height);
		this.cxt = this.canvas.getContext("2d");
		this.context = this;//???
		this.elementIndex = 0;
		this.elementArray = [];
		this.eventCtrl();
	}
	Frame.prototype.eventCtrl = function(){
		var _this = this;
		_this.canvas.onclick = function(e){
			//_this.fire(e);
		};
		_this.canvas.ontouchstart = function(e){
			_this.fire(e);
		};
		_this.canvas.ontouchmove = function(e){
			_this.fire(e);
		};
		_this.canvas.ontouchend = function(e){
			_this.fire(e);
		};
		_this.canvas.ontouchcancel = function(e){
			_this.fire(e);
		};
	};
	Frame.prototype.fire = function(e){
		console.log(e);
		var _this = this;
		var f = function(ev){
			for(var i=0;i<_this.elementIndex;i++){
				if(ev.clientX > _this.elementArray[i].x && ev.clientX < (_this.elementArray[i].x+_this.elementArray[i].width)
				  &&ev.clientY > _this.elementArray[i].y && ev.clientY < (_this.elementArray[i].y+_this.elementArray[i].height)){
				  	//console.log(_this.elementArray[i]);
				  	_this.elementArray[i].fire(e);
				}
			}
		}
		/* 事件过滤 */
		switch(e.type.toLowerCase()){
			case "click": 
				f({
					clientX:e.clientX,
					clientY:e.clientY,
					type:e.type.toLowerCase()
				});
				break;
			case "touchstart": 
				f({
					clientX:e.touches[0].clientX,
					clientY:e.touches[0].clientY,
					type:e.type.toLowerCase()
				});
				break;
			case "touchmove": 
				console.log("touchmove");
				break;
			case "touchend": 
				if(e.touches.length===0){return;}
				f({
					clientX:e.touches[0].clientX,
					clientY:e.touches[0].clientY,
					type:e.type.toLowerCase()
				});
				break;
			case "touchcancel": 
				console.log("touchcancel");
				break;
		}
	};
	/**
	 * reset the canvas`s width and height 
	 * @param {Number} width width
	 * @param {Number} height height
	 */
	Frame.prototype.resize = function(width,height){
		var _this = this;
		_this.width = width || _this.width;
		_this.height = height || _this.height;
		_this.canvas.setAttribute("width",_this.width);
		_this.canvas.setAttribute("height",_this.height);
	};
	
	Frame.prototype.manage = function(elementName,element){
		
	};
	Frame.prototype.draw = function(element,hasAddToArray){
		var _this = this;
		var fontSize = 20;
		_this.cxt.fillStyle= element.backgroundColor || "#FFF";
		_this.cxt.fillRect(element.x,element.y,element.width,element.height);
		_this.cxt.font= fontSize.toString()+"px"+" Georgia";
		_this.cxt.fillStyle = element.color;//_this.cxt.font;
		_this.cxt.fillText(
			element.value,
			element.x+element.width/2-element.width/4,//(element.value.length*fontSize > element.width?element.width:element.value.length*fontSize)/2,
			element.y+element.height/2+fontSize/2, //难道字自动适应从中间渲染，而不是从左上角（20 X 20 正方形的左上角）？
			element.width);
		if(!hasAddToArray){
			_this.elementArray.push(element);
			_this.elementIndex++;	
		}
	}
	Frame.prototype.destroy = function(element){
		
	};
	
	var width = document.body.clientWidth,
		height = document.body.clientHeight;
	var frame = new Frame({
		canvas:document.getElementById("cvs-main"),
		width:width > height? height:width,
		height:width > height ? width:height
	});
	window.onresize = function(e){
		var width = document.body.clientWidth,
			height = document.body.clientHeight;
		frame.resize(
			(width > height? height:width),
			(width > height ? width:height)	
		);
		for(var i=0;i<frame.elementIndex;i++){
			var ii = i;
			setTimeout(function(){
				frame.draw(frame.elementArray[ii],true);
			},0);
		}
	};
	return frame;
});