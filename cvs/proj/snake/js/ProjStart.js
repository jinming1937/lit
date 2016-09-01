define([
	"../../../outer/gctrl",
	"./ScreenBox",
	"./Snake",
	"./Apple",
	"../../../outer/hand"
],function(gctrl,Screen,Snake,Apple){
	/* ------------------[start]------------------- */
	var _screen = new Screen({
		size:20,
		screenHeight: 155//document.clientWidth 
	});
	var snake = new Snake({
		size:20,
		maxPixelX:_screen.pixelX,
		maxPixelY:_screen.pixelY,
		borderX:_screen.borderX,
		borderY:_screen.borderY,
		randomApplePixel:function(){
			return apple.randomPixel();
		},
		getApplePixel:function(){
			return apple.getPixel();
		}
	});
	var apple = new Apple({
		size:20,
		maxPixelX:_screen.pixelX,
		maxPixelY:_screen.pixelY,
		borderX:_screen.borderX,
		borderY:_screen.borderY,
		pixelArray:_screen.pixelArray,
		getBodyArray:function(){
			return snake.bodyArray;
		}
	});
	hand.on("fnn",
		function(e){
			//stopGame();
			//starGame();
			//toggleGame();
			var key = e.keyCode;
			switch(key){
				case 37://left
				//snake.left(stopGame,screenDraw);
				snake.canMove(-1,0,stopGame,screenDraw);
				break;
				case 38://up
				//snake.up(stopGame,screenDraw);
				snake.canMove(0,-1,stopGame,screenDraw);
				break;
				case 39://right
				//snake.right(stopGame,screenDraw);
				snake.canMove(1,0,stopGame,screenDraw);
				break;
				case 40://down
				//snake.down(stopGame,screenDraw);
				snake.canMove(0,1,stopGame,screenDraw);
				break;
				case 82://r
				console.log("r");
				break;
				case 83://s
				console.log("s");
				toggleGame();
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
		clearInterval(stopFlag);
		isStop = true;
	}
	function toggleGame(){
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
			snake.canMove(undefined,undefined,stopGame,screenDraw);
		},300);
	}
	starGame();
});