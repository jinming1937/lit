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
	 */
	function Triangle(config){
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
	}
	
	Triangle.prototype.abc = function(a,b,c){
		
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