define([
	"./snake/ScreenBox",
	"./snake/Snake",
	"./snake/Apple",
	"../../../lib/tool/button",
	"../../../outer/gctrl"
	// "../../../outer/hand"
], function(Screen, Snake, Apple,Button,gctrl) {
	main.on("show", "classical", function() {
		new gctrl((main.getCurrentFrame()).cvs);
		var frame = (main.getCurrentFrame()).cvs;
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
		var btnLeft = new Button({
			x:20,
			y:400,
			value:'左',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				clearInterval(stopFlag);
				isStop = true;
				snake.canMove(-1, 0, stopGame, screenDraw);
				starGame();
				isStop = false;
			}
		});
		var btnUp = new Button({
			x:70,
			y:350,
			value:'上',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				clearInterval(stopFlag);
				isStop = true;
				snake.canMove(0, -1, stopGame, screenDraw);
				starGame();
				isStop = false;
			}
		});
		var btnRight = new Button({
			x:120,
			y:400,
			value:'右',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				clearInterval(stopFlag);
				isStop = true;
				snake.canMove(1, 0, stopGame, screenDraw);
				starGame();
				isStop = false;
			}
		});
		var btnDown = new Button({
			x:70,
			y:450,
			value:'下',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				clearInterval(stopFlag);
				isStop = true;
				snake.canMove(0, 1, stopGame, screenDraw);
				starGame();
				isStop = false;

			}
		});

		var btnSG = new Button({
			x:300,
			y:400,
			value:'s/g',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				toggleGame();
			}
		});

		window.onkeydown = function(e) {
	        var key = e.keyCode;
	        var flag = true;
	        clearInterval(stopFlag);
			isStop = true;
	        switch (key) {
	            case 37: //left
	                // console.log("left");
	                snake.canMove(-1, 0, stopGame, screenDraw);
	                break;
	            case 38: //up
	                // console.log("up");
	                snake.canMove(0, -1, stopGame, screenDraw);
	                break;
	            case 39: //right
	                // console.log("right");
	                snake.canMove(1, 0, stopGame, screenDraw);
	                break;
	            case 40: //down
	                // console.log("down");
	                snake.canMove(0, 1, stopGame, screenDraw);
	                break;
	            case 82: //r
	                toggleGame();
	                flag = false;
	                break;
	            case 83: //s
	                toggleGame();
	                flag = false;
	                break;
	        }
	        flag? starGame():"";
			if(flag) {isStop = false};
	    };

		function screenDraw() {
			//frame.reRender();
			frame.clear();
			_screen.draw();
			apple.draw();
			snake.draw();
			btnLeft.draw();
			btnUp.draw();
			btnRight.draw();
			btnDown.draw();
			btnSG.draw();
			// new Button({
			// 	x:100,
			// 	y:150,
			// 	value:'首页',
			// 	backgroundColor:'#f00',
			// 	ontouchend:function(e){
			// 		main.open({
			// 			href:"http://www.xiaozhiga.com:8089/cvs/proj/snake/snindex.html"
			// 		});
			// 	}
			// });
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
		starGame();
		
		main.on("beforeHide","classical",function(){
			console.log("beforeHide");
			stopGame();
		});

		window._snake = {
			setPath : function(handleArray){
				snake.canMove(handleArray[0].x, handleArray[0].y, stopGame, screenDraw);
				console.log("x:"+handleArray[0].x+",y:"+ handleArray[0].y);
				handleArray.shift();
				if(handleArray.length <= 0){
					clearTimeout(sTime);
					return;
				}
				var sTime = setTimeout(function(){
					_snake.setPath(handleArray);
				},50/3);
			}
		}
	});
});