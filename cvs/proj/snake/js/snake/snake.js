//define(function(){
define(["../../../../lib/tool/element"],function(element){
	/* 贪吃蛇 */
	function Snake(config){
		//element.call(this);
		this.frame = (main.getCurrentFrame()).cvs;
		this.defaultLength = 4;
		this.bodyArray = [[[2,0,1,0],[1,0,1,0],[0,0,1,0]]];//x,y,directX,directY
		this.bodyLength = this.bodyArray.length;
		this.bodyColor = "#c0F";
		this.size = config.size||20;
		this.maxPixelX = config.maxPixelX;
		this.maxPixelY = config.maxPixelY;
		this.borderX = config.borderX;
		this.borderY = config.borderY;
		this.getApplePixel = config.getApplePixel;
		this.randomApplePixel = config.randomApplePixel;
		this.directX = 1;
		this.directY = 0;
		this.frame.manage(this);

		this.draw = function(){
			this.frame.cxt.fillStyle = "#F00";
			for(var i=0,len = this.bodyArray.length;i<len;i++){
				for(var j=0,lenj = this.bodyArray[i].length;j<lenj;j++){
					if(i !== 0 || j !== 0){
						this.frame.cxt.fillStyle = "#00F";
					}
					this.frame.cxt.fillRect(
						this.bodyArray[i][j][0]*this.size+this.borderX/2,
						this.bodyArray[i][j][1]*this.size+this.borderX/2,
						this.size,
						this.size
					);
				}
			}
		};
	}
	
	Snake.prototype.down = function(cbStopGame,cbDraw){
		this.canMove(0,1,cbStopGame,cbDraw);
	};
	
	Snake.prototype.up = function(cbStopGame,cbDraw){
		this.canMove(0,-1,cbStopGame,cbDraw);
	};
	
	Snake.prototype.left = function(cbStopGame,cbDraw){
		this.canMove(-1,0,cbStopGame,cbDraw);
	};
	
	Snake.prototype.right = function(cbStopGame,cbDraw){
		this.canMove(1,0,cbStopGame,cbDraw);
	};
	
	Snake.prototype.canMove = function(directX,directY,cbStopGame,cbDraw){
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
				  this.bodyArray[0][0][0]+directX > this.maxPixelX-1 || 
				  this.bodyArray[0][0][1]+directY < 0 ||
				  this.bodyArray[0][0][1]+directY > this.maxPixelY-1 || flagEatSelf
		){
			/* 撞墙 撞自身 游戏结束 */
			cbStopGame && cbStopGame();
			if(confirm("重新开始？")){
				window.location.href = window.location.href;	
			}
		}else{
			this.directX = directX;
			this.directY = directY;
			this.move(undefined,undefined,(directObj.directX !== this.directX || directObj.directY !== this.directY),cbDraw);
		}
	}
	/* 移动 */
	Snake.prototype.move = function(x,y,isChangeDirect,cb){
		x = x===undefined? this.directX : x;
		y = y===undefined? this.directY : y;
		var applePixel = this.getApplePixel();
		var snakeHeadPixel = {
			x:this.bodyArray[0][0][0],
			y:this.bodyArray[0][0][1],
			direceX :this.bodyArray[0][0][2],
			direceY :this.bodyArray[0][0][3],
		};

		/* 吃 */
		if(applePixel.x === (snakeHeadPixel.x +x) && applePixel.y=== (snakeHeadPixel.y+y)){
		   	this.randomApplePixel();
			/* 向最后那一截的最后添加一个节 :
			 * 好像有bug，因为如果这段代码放在移动之前（上面的if else），似乎更合理
			 * 下面两行描述邮逻辑问题
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
		// if(applePixel.x === (snakeHeadPixel.x +x) && applePixel.y=== (snakeHeadPixel.y+y)){
		//    	this.randomApplePixel();
		// 	/* 向最后那一截的最后添加一个节 :
		// 	 * 好像有bug，因为如果这段代码放在移动之前（上面的if else），似乎更合理
		// 	 * 下面两行描述邮逻辑问题
		// 	 * 如果放在之后，那么，就是先移动了，后吃，但是可能呢找不到最后的一个截，因为上面删除了这个截
		// 	 * 可是测试过程中并没有发现bug
		// 	 * */
		// 	var bodyIndex = this.bodyArray.length - 1;
		// 	var _arr = this.bodyArray[bodyIndex];
		// 	var _arrLastIndex = _arr.length-1;
		// 	this.bodyArray[bodyIndex].push([
		// 		_arr[_arrLastIndex][0] - _arr[0][2],
		// 		_arr[_arrLastIndex][1] - _arr[0][3],
		// 		_arr[0][2],
		// 		_arr[0][3]
		// 	]);
		// }
		cb && cb();
	};

	//
	//auto
	//


	return Snake;
});