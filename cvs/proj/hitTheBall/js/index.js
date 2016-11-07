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

		// var red = new button({
		// 	x:screenWidth/2 - 50,
		// 	y:screenHeight/6 - 15,
		// 	value:'red',
		// 	width:100,
		// 	height:30,
		// 	strong:true,
		// 	backgroundColor:'#F00',
		// 	ontouchmove:function(e){
		// 		red.y = screenHeight/6 - 15;
		// 		red.x = e.changedTouches[0].clientX - this.width/2;
		// 		console.log("red");
		// 	}
		// });
		// var blue = new button({
		// 	x:screenWidth/2 - 50,
		// 	y:screenHeight/6 * 5 - 15,
		// 	value:'blue',
		// 	width:100,
		// 	height:30,
		// 	strong:true,
		// 	backgroundColor:'#00F',
		// 	ontouchmove:function(e){
		// 		blue.y = screenHeight/6*5 - 15;
		// 		blue.x = e.changedTouches[0].clientX - this.width/2;
		// 		console.log("blue");
		// 	}
		// });

		var red = new circle({
			x:screenWidth/2,
			y:screenHeight/6 - 15,
			radius:15,
			strong:true,
			backgroundColor:"#F00",
			color:"#F00",
			ontouchmove:function(e){
				red.y = screenHeight/6 - 15;
				if(e.changedTouches[0].clientX + this.radius > screenWidth){
					red.x = screenWidth - this.radius;
				}else if(e.changedTouches[0].clientX - this.radius < 0){
					red.x = this.radius;
				}else{
					red.x = e.changedTouches[0].clientX;
				}
				console.log("red");
			}
		});

		red.addWatching("touchend",function(){
			start();
		});


		var blue = new circle({
			x:screenWidth/2,
			y:screenHeight/6 * 5 - 15,
			radius:15,
			strong:true,
			backgroundColor:"#00F",
			color:"#00F",
			ontouchmove:function(e){
				blue.y = screenHeight/6*5 - 15;
				if(e.changedTouches[0].clientX + this.radius > screenWidth){
					blue.x = screenWidth - this.radius;
				}else if(e.changedTouches[0].clientX - this.radius < 0){
					blue.x = this.radius;
				}else{
					blue.x = e.changedTouches[0].clientX;
				}
				console.log("blue");
			}
		});

		blue.addWatching("touchend",function(){
			clearInterval(timeTip);
		});
		
		//球
		var aimBall = new circle({
			x:60,
			y:60,
			radius:16,
			backgroundColor:"#FF0",
			color:"#FF0"
		});

		var speedX = 2;
		var speedY = 2;
		var ranSpeed = function(){
			var ran = Math.random();
			return parseInt( ran * 10) + 1;
		};
		//重绘
		function screenDraw(){
			frame.clear();
			red.draw();
			blue.draw();
			aimBall.draw();
		}

		function move(){
			aimBall.x += speedX;
			aimBall.y += speedY;
			//if(aimBall.x + aimBall.radius >= screenWidth || aimBall.y + aimBall.radius >= screenHeight){
				//aimBall.x = screenWidth - aimBall.radius;
				//aimBall.y = screenHeight - aimBall.radius;
				//clearInterval(timeTip);
				// if(aimBall.x + aimBall.radius <= screenWidth || aimBall.x - aimBall.radius <= 0){
				// 	speedX = - speedX ;//* ranSpeed();
				// 	//speedX = speedX > 10 ? speedX / ranSpeed() : speedX;
				// }
				// if(aimBall.y + aimBall.radius >= screenHeight || aimBall.y - aimBall.radius <= 0){
				// 	speedY = - speedY ;//* ranSpeed();
				// 	//speedY = speedY > 10 ? speedY / ranSpeed() : speedY;
				// }
			//}
			if(aimBall.x + aimBall.radius >= screenWidth){
				speedX = -speedX;
				changeColor(aimBall);
			}else if(aimBall.x - aimBall.radius <= 0){
				speedX = -speedX;
				changeColor(aimBall);
			}else if(aimBall.y + aimBall.radius >= screenHeight){
				speedY = -speedY;
				changeColor(aimBall);
			}else if(aimBall.y - aimBall.radius <= 0){
				speedY = -speedY;
				changeColor(aimBall);
			}

			screenDraw();
		}
		function changeColor(obj){
			var str = "1234567890ABCDEF";
			var rand = parseInt(Math.random() * 16);
			var co = str.charAt(rand);
			co = co.concat(co,co);
			obj.backgroundColor = "#" + co ;
			obj.color="#" + co;
		}

	 	var timeTip;
	 	function start(){
	 		timeTip = window.setInterval(function(){
		 		move();
			},30);
	 	}
	 	start()
	});
});