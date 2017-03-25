define([
	"../../../cvs/lib/framework/core",
	"./snake/ScreenBox",
	"./snake/Snake",
	"./snake/Apple",
	"../../../cvs/lib/tool/button"
	// "../../../outer/gctrl"
	// "../../../outer/hand"
], function(core,Screen, Snake, Apple,Button) {
	core.on("show", "classical", function() {
		// new gctrl(core.frame);
		var frame = core.frame;
		var urlPath = location.origin+(location.port === '8089'?'/dist/':'/mb/');
		console.log("begin load classical");
		/* ------------------[start]------------------- */
		var _screen = new Screen({
			size: 20,
			screenHeight: 155 //document.clientWidth 
		});
		var snake = new Snake({
			size: 20,
			maxPixelX: _screen.pixelX,
			maxPixelY: _screen.pixelY,
			borderX: _screen.borderX,
			borderY: _screen.borderY,
			isEat:false,
			randomApplePixel: function() {
				return apple.randomPixel();
			},
			getApplePixel: function() {
				return apple.getPixel();
			}
		});
		var apple = new Apple({
			size: 20,
			maxPixelX: _screen.pixelX,
			maxPixelY: _screen.pixelY,
			borderX: _screen.borderX,
			borderY: _screen.borderY,
			pixelArray: _screen.pixelArray,
			getBodyArray: function() {
				return snake.bodyArray;
			}
		});

		var goHome = new Button({
			x:frame.width - 20 - 80,
			y:frame.height - 20 - 30,
			value:'首页',
			backgroundColor:'#f00',
			ontouchend:function(e){
				_snake.auto = false;
				clearTimeout(_snake.sTime);
				// console.log('xxxxx');
				core.open({
					href:urlPath+"snake/snindex.html"
				});
			}
		});
		
		function screenDraw() {
			//frame.reRender();
			frame.clear();
			_screen.draw();
			apple.draw();
			snake.draw();
			// btnLeft.draw();
			// btnUp.draw();
			// btnRight.draw();
			// btnDown.draw();
			// btnSG.draw();
			goHome.draw();
		}
		screenDraw();
		var stopFlag, isStop = false;

		function stopGame() {
			clearInterval(stopFlag);
			isStop = true;
		}

		function toggleGame() {
			if(isStop) {
				starGame();
				isStop = false;
			} else {
				clearInterval(stopFlag);
				isStop = true;
			}
		}

		function starGame() {
			stopFlag = setInterval(function() {
				screenDraw();
				snake.canMove(undefined, undefined, stopGame, screenDraw);
			}, 300);
		}
		//starGame();
		
		core.on("beforeHide","classical",function(){
			console.log("beforeHide");
			stopGame();
		});

		var _snake = {
			auto:false,
			sTime: 0,
			setPath : function(handleArray){
				if(handleArray.length === 0 ) return;
				snake.canMove(handleArray[0].x, handleArray[0].y, stopGame, screenDraw);
				console.log("x:"+handleArray[0].x+",y:"+ handleArray[0].y);
				handleArray.shift();
				if(handleArray.length <= 0){
					clearTimeout(_snake.sTime);
					setTimeout(function(){
						_snake.auto?_snake.execEat():"";
					},100);
					return;
				}
				_snake.sTime = setTimeout(function(){
					_snake.setPath(handleArray);
				},100);
			},
			execEat: function(){
				var appleXY = {
					x: apple.getPixel().x,
					y: apple.getPixel().y
				};
				var snakeHeadXY = {
					x: snake.bodyArray[0][0][0],
					y: snake.bodyArray[0][0][1]
				};
				//蛇头单位向量
				var snakeDirect = {
					x:snake.bodyArray[0][0][2],
					y:snake.bodyArray[0][0][3]
				};
				var maxScreen = {
					x:_screen.pixelX,
					y:_screen.pixelY
				}
				console.log("apple:x:"+appleXY.x +",y:"+appleXY.y);
				console.log("snake:x:"+snakeHeadXY.x+",y:"+snakeHeadXY.y);
				console.log("dX:"+snakeDirect.x + ",dY:"+snakeDirect.y);
				var arr = [];
				var __arr = [];
				//向量蛇头－>目标
				var aimV = {
					x : appleXY.x - snakeHeadXY.x,
					y : appleXY.y - snakeHeadXY.y
				};
				//向量点积
				var result = aimV.x * snakeDirect.x + aimV.y * snakeDirect.y;
				console.log(result);
				var spX , spY;
				spX = Math.abs(appleXY.x - snakeHeadXY.x);
				spY = Math.abs(appleXY.y - snakeHeadXY.y);
				if(result > 0 ){// 大致同向
					if(appleXY.y === snakeHeadXY.y){//完全水平同向
						for (; spX>0; spX--) {
							arr.push({
								x:appleXY.x >snakeHeadXY.x? 1:-1,
								y:0
							});
						};
					}else if(appleXY.x === snakeHeadXY.x){//完全垂直同向
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y:appleXY.y >snakeHeadXY.y? 1:-1
							});
						};
					}else if(Math.abs(snakeDirect.x) > 0 && snakeDirect.y === 0){ //水平方向
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y: appleXY.y >snakeHeadXY.y? 1:-1
							});
						};

						for (; spX>0; spX--) {
							arr.push({
								x: appleXY.x > snakeHeadXY.x? 1:-1,
								y:0
							});
						};
					}else if(Math.abs(snakeDirect.y) > 0 && snakeDirect.x === 0){ //垂直方向
						for (; spX>0; spX--) {
							arr.push({
								x:appleXY.x >snakeHeadXY.x? 1:-1,
								y:0
							});
						};
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y:appleXY.y >snakeHeadXY.y?1:-1
							});
						};
					}
				} else if(result === 0){ //垂直
					if(Math.abs(snakeDirect.x)> 0){ //水平方向
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y:appleXY.y >snakeHeadXY.y? 1:-1
							});
						};
					}else if(Math.abs(snakeDirect.y)>0){//垂直方向
						for (; spX>0; spX--) {
							arr.push({
								x:appleXY.x >snakeHeadXY.x? 1:-1 ,
								y:0
							});
						};
					}
				} else { // 大致反向
					if(appleXY.y === snakeHeadXY.y){//完全水平反向
						if(snakeHeadXY.y === maxScreen.y || snakeHeadXY.y === 0){
							arr.push({
								x:0,
								y:snakeHeadXY.y===0? 1:-1
							});
						}else{
							arr.push({
								x:0,
								y:snakeHeadXY.y> maxScreen.y/2? -1:1
							});
						}
					}else if(appleXY.x === snakeHeadXY.x){//完全垂直反向
						if(snakeHeadXY.x === maxScreen.x || snakeHeadXY.x === 0){
							arr.push({
								x:snakeHeadXY.x===0? 1:-1,
								y:0
							});
						}else{
							arr.push({
								x:snakeHeadXY.x> maxScreen.x/2? -1:1,
								y:0
							});
						}
					}else if(Math.abs(snakeDirect.x) > 0 && snakeDirect.y === 0){ //水平方向
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y:appleXY.y >snakeHeadXY.y? 1:-1
							});
						};

						for (; spX>0; spX--) {
							arr.push({
								x:appleXY.x >snakeHeadXY.x? 1:-1,
								y:0
							});
						};
					}else if(Math.abs(snakeDirect.y) > 0 && snakeDirect.x === 0){ //垂直方向
						for (; spX>0; spX--) {
							arr.push({
								x:appleXY.x >snakeHeadXY.x? 1:-1,
								y:0
							});
						};
						for (; spY>0;spY--) {
							arr.push({
								x:0,
								y:appleXY.y >snakeHeadXY.y? 1:-1
							});
						};
					}
				}
				// return arr;
				this.setPath(arr);
			}
		}
		_snake.auto = true;
		_snake.execEat();
	});
});