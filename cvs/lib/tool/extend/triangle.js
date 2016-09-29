define([
	"../../virtual/action",
	"../../virtual/watch",
	"../element",
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
		Element.call(this,config);
		this.elementType = 2;
		config.x = config.x || 0;
		config.y = config.y || 0;
		this.config = config;
		this.x = config.x;
		this.y = config.y;
		this.positionXYArray = [];
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
		/**
         * [ontouchmove ontouchmove]
         * @param  {[type]} e [event]
         * @return {[type]}   [description]
         */
        this.ontouchmove = function(e) {
            config.ontouchmove && config.ontouchmove(e);
            this.eventFire(e);
            var obj = this.getHeartPoint();
            this.x = e.changedTouches[0].clientX - obj.x;
			this.y = e.changedTouches[0].clientY - obj.y;
            this.positionXYArray = [];
            this.initPositionXYArray();
            this.draw();
        };
		this.draw = function(){
			var _this = this;
			var _frame = _this.frame;
			_frame.cxt.strokeStyle = config.color || "#FFF";
			_frame.cxt.beginPath();
			_frame.cxt.moveTo(_this.positionXYArray[0].x,_this.positionXYArray[0].y);
			_frame.cxt.lineTo(_this.positionXYArray[1].x,_this.positionXYArray[1].y);
			_frame.cxt.lineTo(_this.positionXYArray[2].x,_this.positionXYArray[2].y);
			_frame.cxt.closePath();
			_frame.cxt.stroke();
			_frame.cxt.fillStyle = config.color || "#FFF";
			_frame.cxt.fill();
		};
		this.draw();
	}
	
	Triangle.prototype.abc = function(a,b,c){
		var _this = this;
		/* 顶角坐标 */
		_this.positionXYArray.push({
			x:_this.x,
			y:_this.y
		});
		/* 任意两边和大于第三边 */
		if(a + b > c && a + c > b && b + c > a){
			_this.positionXYArray.push({
				x:a + _this.x,
				y:_this.y
			});
			/**
			 * x*x + y*y = c*c
			 * (a-x)*(a-x) + y*y = b*b
			 * x > 0
			 * y > 0
			 */
			_this.positionXYArray.push({
				x : (a*a - b * b + c*c) / (2*a) + _this.x,
				y : Math.sqrt((b*b - (a-c)*(a-c))*((a+c)*(a+c)-b*b)) / (2*a) + _this.y
			});
			
			return _this.positionXYArray;
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

	/**
	 * [getHeartPoint description]
	 * @return {[type]} [description]
	 */
	Triangle.prototype.getHeartPoint = function(){
		/* todo 这里是伪重心，这是个问题 */
		var a = this.positionXYArray[0],
			b = this.positionXYArray[1],
			c = this.positionXYArray[2];
		return {
			x:( (b.x+c.x)/2-this.config.x)/2,
			y:( (b.y+c.y)/2-this.config.y)/2
		};
	}
	
	Triangle.prototype.checkTriangle = function(){
		
	};

	Triangle.prototype.initPositionXYArray = function(){
		this.abc(this.config.a , this.config.b , this.config.c);
	}
	
	return Triangle;
});