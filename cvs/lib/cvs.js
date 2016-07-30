console.log("loading cvs.js");
;(function(){
	/**
	 * @param {Object} option
	 */
	function CurtainWall(option){
		this.canvas = option.canvas;
		this.width = option.width || document.body.clientWidth;
		this.height = option.height || document.body.clientHeight;
		this.resize(this.width,this.height);
		this.cxt = this.canvas.getContext("2d");
		this.tableArray = [];
		this.x = 0;
		this.y = 0;
	}
	/**
	 * reset the canvas`s width and height 
	 * @param {Number} width width
	 * @param {Number} height height
	 */
	CurtainWall.prototype.resize = function(width,height){
		var _this = this;
		_this.width = width || _this.width;
		_this.height = height || _this.height;
		this.canvas.setAttribute("width",_this.width);
		this.canvas.setAttribute("height",_this.height);
	};
	/**
	 * @param {Object} config data:array[{}\[]],
	 */
	CurtainWall.prototype.table = function(data){
		var _this = this;
		//1. data -> data (x,y)
		var _data = data;
		var yarr = [];
		var xarr = [];
		var tableWidth = 0.95 * _this.width;
		var tableBorder = 0.01 * tableWidth;
		var tableHeight = 30;
		var inX = (_this.width - tableWidth) / 2;
		var inY = inX;
		if((data).constructor.name === "Array"){
			for(var i=0,l=data.length;i<l;i++){
				if((data[i]).constructor.name === "Object"){
					var m = 0;
					for(var it in data[i]){
						if(data[i].hasOwnProperty(it)){
							m++;
						}
					}
					var z = 0 ;
					while(z<m){
						xarr.push({
							x: inX + tableBorder + tableBorder * z + (tableWidth - tableBorder * (m+1)) / m  * z,
							y: inY + tableBorder + tableHeight * i + tableBorder * i ,
							width:(tableWidth - tableBorder * (m+1)) / m ,
							height:tableHeight
						});	
						z++;
					}
				}
			}
		}
		//2. data(x,y) -> pic
		_this.print({
			x:inX,
			y:inY,
			width:tableWidth,
			height:tableHeight * data.length + tableBorder *(data.length+1),
			color:"#808080"
		});
		for(var p =0 ,le = xarr.length;p<le;p++){
			_this.print(xarr[p]);
		}
	};
	/**
	 * @param {Object} config config
	 */
	CurtainWall.prototype.print = function(config){
		var _this = this;
		_this.cxt.fillStyle= config.color || "#FFF";
		_this.cxt.fillRect(config.x,config.y,config.width,config.height);
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
	
	var curtain = new CurtainWall({
		canvas:document.getElementById("cvs-main"),
		width:document.body.clientWidth,
		height:document.body.clientHeight
	});
	window.curtain = curtain;
	window.onresize = function(e){ 
		curtain.resize(document.body.clientWidth,document.body.clientHeight);
		console.log(" window has resize! \r\n canvas has resize!");
	};
}());