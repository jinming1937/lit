define([
	"../../../lib/framework/frame",
	"../../../outer/hand",
	"../../../outer/gctrl"
],function(frame){
	/* 屏幕 */
	function Screen(config){
		this.pixelWidth = config.size||20;
		this.pixelHeight = config.size||20;
		this.pixelBorder = 5;
		
		this.pixelX =  parseInt(frame.width/this.pixelWidth);
		this.pixelY = parseInt(frame.height/this.pixelHeight);
		
		this.borderX = frame.width%this.pixelWidth;
		this.borderY = frame.height%this.pixelHeight;
		
		this.pixelY = (frame.height - this.pixelY * this.pixelHeight)<this.borderX?this.pixelY-1:this.pixelY;
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
	/* 贪吃蛇 */
	function Snake(config){
		this.defaultLength = 4;
		this.bodyArray = [[[2,0,1,0],[1,0,1,0],[0,0,1,0]]];//x,y,directX,directY
		this.bodyLength = this.bodyArray.length;
		this.bodyColor = "#c0F";
		this.size = config.size||20;
		this.directX = 1;
		this.directY = 0;
	}
	Snake.prototype.down = function(e){
		this.canMove(0,1);
	};
	Snake.prototype.up = function(e){
		this.canMove(0,-1);
	};
	Snake.prototype.left = function(e){
		this.canMove(-1,0);
	};
	Snake.prototype.right = function(e){
		this.canMove(1,0);
	};
	Snake.prototype.canMove = function(directX,directY){
		var directObj = {
			directX:this.directX,
			directY:this.directY
		};
		directX = directX === undefined ? this.directX : directX;
		directY = directY === undefined ? this.directY : directY;
		/* 判断吃自己 */
		var flagEatSelf = false;
		for(var i = 0,leni = this.bodyArray.length;i<leni;i++){
			for(var j = 0,lenj = this.bodyArray[i].length;j<lenj;j++){
				if(this.bodyArray[i][j][0] === this.bodyArray[0][0][0]+directX &&
				   this.bodyArray[i][j][1] === this.bodyArray[0][0][1]+directY 
				){
					flagEatSelf = true;
				}
			}
		}
		/* 反方向，不能移动 */
		if((directObj.directX + directX) === 0 && (directObj.directY + directY) === 0){
			return;
		}else if( this.bodyArray[0][0][0]+directX < 0 || 
				  this.bodyArray[0][0][0]+directX > _screen.getPixel().x-1 || 
				  this.bodyArray[0][0][1]+directY < 0 ||
				  this.bodyArray[0][0][1]+directY > _screen.getPixel().y-1 || flagEatSelf
		){
			/* 撞墙 撞自身 游戏结束 */
			stopGame();
			if(confirm("重新开始？")){
				window.location.href = window.location.href;	
			}
		}else{
			this.directX = directX;
			this.directY = directY;
			this.move(undefined,undefined,(directObj.directX !== this.directX || directObj.directY !== this.directY));
		}
	}
	/* 移动 */
	Snake.prototype.move = function(x,y,isChangeDirect){
		x = x===undefined? this.directX : x;
		y = y===undefined? this.directY : y;
		var applePixel = apple.getPixel();
		var snakeHeadPixel = {
			x:this.bodyArray[0][0][0],
			y:this.bodyArray[0][0][1],
			direceX :this.bodyArray[0][0][2],
			direceY :this.bodyArray[0][0][3],
		};
		/*如果方向改变，把头添加到一个新的截，再依次往这个截添加节*/
		if(isChangeDirect){
			/* 最后一个截，这里面最后一个节要出栈 */
			this.bodyArray[(this.bodyArray.length -1)].pop();
			/* 最后一个截的节数量为0，删除此截 */
			if(this.bodyArray[(this.bodyArray.length -1)].length === 0){
				this.bodyArray.pop();
			}
			/* 添加截作为头，在截里添加节 */
			this.bodyArray.unshift([[
				snakeHeadPixel.x + x,
				snakeHeadPixel.y + y,
				x,
				y
			]]);
		}else{
			/* 最后一个截，这里面最后一个节要出栈 */
			//this.bodyArray.length ===1? "":
			this.bodyArray[(this.bodyArray.length -1)].pop();
			/* 最后一个截的节数量为0，删除此截 */
			if(this.bodyArray[(this.bodyArray.length -1)].length === 0){
				this.bodyArray.pop();
			}
			/* 在头部添加节，作为头 */
			this.bodyArray[0].unshift([
				snakeHeadPixel.x + x,
				snakeHeadPixel.y + y,
				x,
				y
			]);
		}
		
		/* 吃 */
		if(applePixel.x === (snakeHeadPixel.x +x) && applePixel.y=== (snakeHeadPixel.y+y)){
		   	apple.randomPixel();
			/* 向最后那一截的最后添加一个节 :
			 * 好像有bug，因为如果这段代码放在移动之前（上面的if else），似乎更合理
			 * 如果放在之后，那么，就是先移动了，后吃，但是可能呢找不到最后的一个截，因为上面删除了这个截
			 * 可是测试过程中并没有发现bug
			 * */
			var bodyIndex = this.bodyArray.length - 1;
			var _arr = this.bodyArray[bodyIndex];
			var _arrLastIndex = _arr.length-1;
			this.bodyArray[bodyIndex].push([
				_arr[_arrLastIndex][0] - _arr[0][2],
				_arr[_arrLastIndex][1] - _arr[0][3],
				_arr[0][2],
				_arr[0][3]
			]);
		}
		screenDraw();
	};
	/* 渲染 */
	Snake.prototype.draw = function(){
		frame.cxt.fillStyle = "#F00";
		for(var i=0,len = this.bodyArray.length;i<len;i++){
			for(var j=0,lenj = this.bodyArray[i].length;j<lenj;j++){
				if(i !== 0 || j !== 0){
					frame.cxt.fillStyle = "#00F";
				}
				frame.cxt.fillRect(
					this.bodyArray[i][j][0]*this.size+_screen.borderX/2,
					this.bodyArray[i][j][1]*this.size+_screen.borderX/2,
					this.size,
					this.size
				);
			}
		}
	};
	/* 苹果 */
	function Apple(config){
		this.size = config.size || 20;
		this.maxPixelX = config.maxPixelX;
		this.maxPixelY = config.maxPixelY;
		this.pixelX = parseInt((this.maxPixelX)*Math.random());
		this.pixelY = parseInt((this.maxPixelY)*Math.random());
	}
	/* 渲染 */
	Apple.prototype.draw = function(){
		var _this = this;
		frame.cxt.fillStyle = "#09bb07";
		frame.cxt.fillRect(
			_this.pixelX*_this.size+_screen.borderX/2,
			_this.pixelY*_this.size+_screen.borderX/2,
			_this.size,
			_this.size
		);
	};
	/* 产生随机位置:排除掉蛇占据的位置 */
	Apple.prototype.randomPixel =function(){
		var pixelArray = [].concat(_screen.pixelArray);
		var snakeArray = [].concat(snake.bodyArray);
		var snakeTrueArray = [];
		for(var si=0,silen = snakeArray.length;si<silen;si++){
			snakeTrueArray = snakeTrueArray.concat(snakeArray[si]);
		}
		for(var i = 0,leni=_screen.pixelArray.length;i<leni;i++){
			for(var j=0,lenj = snakeTrueArray.length;j<lenj;j++){
				if(_screen.pixelArray[i][0] === snakeTrueArray[j][0] &&
				   _screen.pixelArray[i][1] === snakeTrueArray[j][1]){
					pixelArray.splice(i,1);	
				}
			} 
		}
		if(pixelArray.length === 0){
			if(confirm(" you are NB!!! /r/n restart the game？")){
				location.href= location.href;
			}
			return;
		}
		var trueIndexArray = pixelArray[ parseInt(pixelArray.length*Math.random())];
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
	/* ------------------[start]------------------- */
	var _screen = new Screen({
		size:20
	});
	var apple = new Apple({
		maxPixelX:_screen.pixelX,
		maxPixelY:_screen.pixelY,
		size:20
	});
	var snake = new Snake({
		size:20
	});
	
	hand.on("fnn",
		function(e){
			var key = e.keyCode;
			switch(key){
				case 37://left
				snake.left();
				break;
				case 38://up
				snake.up();
				break;
				case 39://right
				snake.right();
				break;
				case 40://down
				snake.down();
				break;
				case 82://r
				console.log("r");
				break;
				case 83://s
				console.log("s");
				stopGame();
				break;
			}
		}
	);
	
	function screenDraw(){
		frame.clear();
		_screen.draw();
		apple.draw();
		snake.draw();
	}
	screenDraw();
	var stopFlag,isStop = false;
	function stopGame(){
		if(isStop){
			starGame();
			isStop = false;
		}else{
			clearInterval(stopFlag);
			isStop = true;
		}
	}
	function starGame(){
		stopFlag = setInterval(function(){
			screenDraw();
			snake.canMove();
		},300);
	}
	starGame();
});