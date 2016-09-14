define([
	"./ScreenBox",
	"./Snake",
	"./Apple",
	"../../../lib/tool/button",
	"../../../outer/gctrl"
	//"../../../outer/hand"
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
			y:450,
			value:'左',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				snake.canMove(-1, 0, stopGame, screenDraw);
			}
		});
		var btnUp = new Button({
			x:70,
			y:400,
			value:'上',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				snake.canMove(0, -1, stopGame, screenDraw);
			}
		});
		var btnRight = new Button({
			x:120,
			y:450,
			value:'右',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				snake.canMove(1, 0, stopGame, screenDraw);
			}
		});
		var btnDown = new Button({
			x:70,
			y:500,
			value:'下',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				snake.canMove(0, 1, stopGame, screenDraw);
			}
		});
		var btnSG = new Button({
			x:300,
			y:450,
			value:'s/g',
			width:50,
			height:50,
			backgroundColor:'#f55',
			ontouchend:function(e){
				toggleGame();
			}
		});

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
	});
});