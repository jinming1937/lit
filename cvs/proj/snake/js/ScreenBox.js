define(["../../../lib/framework/frame"],function(frame){
	/* 屏幕 */
	function Screen(config){
		this.pixelWidth = config.size||20;
		this.pixelHeight = config.size||20;
		this.screenWidth = config.screenWidth || frame.width;
		this.screenHeight = config.screenHeight || frame.height;
		this.pixelBorder = 5;
		
		this.pixelX =  parseInt(this.screenWidth/this.pixelWidth);
		this.pixelY = parseInt(this.screenHeight/this.pixelHeight);
		
		this.borderX = this.screenWidth%this.pixelWidth;
		this.borderY = this.screenHeight%this.pixelHeight;
		
		this.pixelY = (this.screenHeight - this.pixelY * this.pixelHeight)<this.borderX?this.pixelY-1:this.pixelY;
		this.pixelArray = [];
		for(var i = 0;i<this.pixelX;i++){
			for(var j=0;j<this.pixelY;j++){
				this.pixelArray.push([i,j]);
			}
		}
	}
	/* 渲染屏幕 */
	Screen.prototype.draw = function(){
		frame.cxt.fillStyle = "#ccc";
		frame.cxt.fillRect(this.borderX/2,this.borderX/2,this.pixelX*this.pixelWidth,this.pixelY*this.pixelHeight);
	};
	/* 获取屏幕‘分辨率’ */
	Screen.prototype.getPixel = function(){
		var _this = this;
		return {
			x:_this.pixelX,
			y:_this.pixelY
		};
	};
	return Screen;
});