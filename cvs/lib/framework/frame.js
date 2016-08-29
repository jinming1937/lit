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
	/* 事件分发 */
	Frame.prototype.eventCtrl = function(){
		var _this = this;
		//_this.canvas.onclick = function(e){
			//_this.fire(e);
		//};
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
	/* 事件过滤 */
	Frame.prototype.fire = function(e){
		var _this = this;
		var f = function(ev){
			/* 倒叙遍历 */
			for(var i=_this.elementIndex-1;i>=0;i--){
				if(ev.clientX > _this.elementArray[i].x &&
				   ev.clientX < (_this.elementArray[i].x+_this.elementArray[i].width) &&
				   ev.clientY > _this.elementArray[i].y && 
				   ev.clientY < (_this.elementArray[i].y+_this.elementArray[i].height)){
				  	window.setTimeout(function(){
				  		_this.elementArray[i].fire(e);
				  	},0);
				  	if(!_this.elementArray[i].isUpEvent){/* 是否允许穿透 */
				  		break;
				  	}
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
				//console.log("touchmove");
				f({
					clientX:e.changedTouches[0].clientX,
					clientY:e.changedTouches[0].clientY,
					type:e.type.toLowerCase()
				});
				break;
			case "touchend":
				f({
					clientX:e.changedTouches[0].clientX,
					clientY:e.changedTouches[0].clientY,
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
	Frame.prototype.clear = function(){
		var _this = this;
		_this.canvas.setAttribute("width",_this.width);
	}
	/**
	 * @param {Object} element 元素对象
	 * @param {Boolean} hasAddToArray 是否已经被frame管理
	 */
	Frame.prototype.manage = function(element){
		var _this = this;
		_this.elementArray.push(element);
		_this.elementIndex++;
	};
	/**
	 * @param {Object} element 被销毁的元素
	 */
	Frame.prototype.destroy = function(element){
		
	};
	
	var width = document.body.clientWidth,
		height = document.body.clientHeight;
	var frame = new Frame({
		canvas:document.getElementById("cvs-main"),
		width:document.body.clientWidth,
		height:document.body.clientHeight//width > height ? width:height
	});
	var x=width>height;
	if(x){
		frame.resize(width,height);
		if(x){
  			frame.cxt.font= "40px Georgia";
			frame.cxt.fillStyle = "#000";
			frame.cxt.fillText(
				"抱歉，不支持横屏！！！",
				10,
				40,
				300);
		}
	}
	/* resize */
	window.onresize = function(e){
		x = !x;
		var width = document.body.clientWidth,
			height = document.body.clientHeight;
		frame.resize(width,height);
		if(x){
  			frame.cxt.font= "40px Georgia";
			frame.cxt.fillStyle = "#000";
			frame.cxt.fillText(
				"抱歉，不支持横屏！！！",
				10,
				40,
				300);
			return;
		}
		for(var i=frame.elementIndex-1;i>=0;i--){
			(function(ii){
				setTimeout(function(){
					frame.elementArray[ii].draw();
				},0);
			}(i));
		}
		
	};
	window.frame = frame;
	return frame;
});