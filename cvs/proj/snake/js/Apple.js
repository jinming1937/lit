//define(function(){
define(function(){
	/* 苹果 */
	function Apple(config){
		this.frame = (main.getCurrentFrame()).cvs;
		this.size = config.size || 20;
		this.maxPixelX = config.maxPixelX;
		this.maxPixelY = config.maxPixelY;
		this.borderX = config.borderX;
		this.borderY = config.borderY;
		this.pixelArray = config.pixelArray;
		this.getBodyArray = config.getBodyArray;
		this.pixelX = parseInt((this.maxPixelX)*Math.random());
		this.pixelY = parseInt((this.maxPixelY)*Math.random());
		this.frame.manage(this);
	}
	/* 渲染 */
	Apple.prototype.draw = function(){
		var _this = this;
		this.frame.cxt.fillStyle = "#09bb07";
		this.frame.cxt.fillRect(
			_this.pixelX*_this.size+_this.borderX/2,
			_this.pixelY*_this.size+_this.borderX/2,
			_this.size,
			_this.size
		);
	};
	/* 产生随机位置:排除掉蛇占据的位置 */
	Apple.prototype.randomPixel =function(){
		var _pixelArray = [].concat(this.pixelArray);
		var snakeArray = [].concat(this.getBodyArray());
		var snakeTrueArray = [];
		for(var si=0,silen = snakeArray.length;si<silen;si++){
			snakeTrueArray = snakeTrueArray.concat(snakeArray[si]);
		}
		for(var i = 0,leni=this.pixelArray.length;i<leni;i++){
			for(var j=0,lenj = snakeTrueArray.length;j<lenj;j++){
				if(this.pixelArray[i][0] === snakeTrueArray[j][0] &&
				   this.pixelArray[i][1] === snakeTrueArray[j][1]){
					_pixelArray.splice(i,1);	
				}
			} 
		}
		if(_pixelArray.length === 0){
			if(confirm(" you are NB!!! /r/n restart the game？")){
				location.href= location.href;
			}
			return;
		}
		var trueIndexArray = _pixelArray[ parseInt(_pixelArray.length*Math.random())];
		this.pixelX = trueIndexArray[0];
		this.pixelY = trueIndexArray[1];
	};
	/* 获取苹果的位置 */
	Apple.prototype.getPixel = function(){
		var _this = this;
		return {
			x:_this.pixelX,
			y:_this.pixelY
		};
	};
	return Apple;
});