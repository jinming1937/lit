define([
	"../../../lib/tool/button",
	"../../../lib/tool/extend/triangle",
	"../../../lib/tool/circle",
	"../../../outer/gctrl"
],function(button,triangle,circle,gctrl){
	main.on("show","index",function(){
		var frame = (main.getCurrentFrame()).cvs;
		var screenWidth = (main.getCurrentFrame()).cvs.width;
		var screenHeight = (main.getCurrentFrame()).cvs.height;
		new gctrl(frame);
		console.log("begin load index");

		var red = new button({
			x:screenWidth/2 - 50,
			y:screenHeight/6 - 15,
			value:'red',
			width:100,
			height:30,
			strong:true,
			backgroundColor:'#F00',
			ontouchmove:function(e){
				red.y = screenHeight/6 - 15;
				red.x = e.changedTouches[0].clientX - this.width/2;
				console.log("red");
			}
		});
		var blue = new button({
			x:screenWidth/2 - 50,
			y:screenHeight/6 * 5 - 15,
			value:'blue',
			width:100,
			height:30,
			strong:true,
			backgroundColor:'#00F',
			ontouchmove:function(e){
				blue.y = screenHeight/6*5 - 15;
				blue.x = e.changedTouches[0].clientX - this.width/2;
				console.log("blue");
			}
		});
		
		//球
		var aimBall = new circle({
			x:60,
			y:60,
			radius:16,
			backgroundColor:"#FF0",
			color:"#FF0"
		});

		var speedX = 1;
		var speedY = 1;

		function screenDraw(){
			frame.clear();
			red.draw();
			blue.draw();
			aimBall.draw();
		}
		function move(){
			aimBall.x += speedX;
			aimBall.y += speedY;
			if(aimBall.x + aimBall.radius >= screenWidth || aimBall.Y + aimBall.radius >= screenHeight){
				clearInterval(timeTip);
			}
			screenDraw();
		}

	 	var timeTip = window.setInterval(function(){
	 		move();
		},30)
	});
});