define([
	"../virtual/action",
	"../virtual/watch",
	"./element",
],function(Action,Watch,Element){
	/**
	 * 三角形
	 * @param {Number} a a
	 * @param {Number} b b
	 * @param {Number} c c
	 * @param {Number} angle
	 * @param {Number} x 顶角x 坐标
	 * @param {Number} y 顶角y 坐标
	 */
	function Triangle(config){
		Action.call(this);
		Watch.call(this);
		Element.call(this);
		config.x = config.x || 0;
		config.y = config.y || 0;
		this.config = config;
		/* 判断是否是三角形：
		 * 1 ： 任意两边之和大于第三边
		 * 2 ： 知道两边长，和其夹角
		 */
		//if(config.a + config.b > config.c && config.b + config.c > config.a && config.a +config.c > config.b){
		if(typeof config.angle === "undefined"){
			this.abc(config.a , config.b , config.c);
		}else{
			this.angleAb(config.a, config.b, config.angle);
		}
		
		this.draw();
	}
	
	Triangle.prototype.abc = function(a,b,c){
		var _this = this;
		_this.positionXYArray = [];
		/* 顶角坐标 */
		_this.positionXYArray.push({
			x:_this.config.x,
			y:_this.config.y
		});
		/* 任意两边和大于第三边 */
		if(a + b > c && a + c > b && b + c > a){
			_this.positionXYArray.push({
				x:a,
				y:_this.config.y
			});
			/**
			 *  x*x + y*y = c*c
			 *  
			 * 
			 * 
			 */
			
		}else{
			throw("NOT A TRIANGLE!!!");
		}
	};
	
	Triangle.prototype.angleAb = function(a,b,angle){
		var _this = this;
		if(angle > 0 && angle < 180 ){
			
		}else{
			throw("angle is not avilible");
		}
	};
	
	Triangle.prototype.checkTriangle = function(){
		
	};
	
	Triangle.prototype.draw = function(){
		
	};
});