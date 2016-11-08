define([
	"../../../lib/tool/button",
	"../../../lib/tool/extend/triangle",
	"../../../lib/tool/circle",
	"../../../lib/server/ws",
	"../../../outer/gctrl"
],function(button,triangle,circle,ws,gctrl){
	main.on("show","index",function(){
		var frame = (main.getCurrentFrame()).cvs;
		var screenWidth = (main.getCurrentFrame()).cvs.width;
		var screenHeight = (main.getCurrentFrame()).cvs.height;
		new gctrl(frame);
		console.log("begin load index");

		/*
			todo: 1、 适配机型，不同大小的屏幕如何无缝对战？ 
				  2、 各自控制各自的按钮，红控红，蓝控蓝
				  3、 采用创建房间的方式，进行二人对战：可以获取客户端的信息，方便适配屏幕，筛选客户端
				  4、 撞球 代码编写
				  5、 设置游戏开始、结束、 同步球 移动信息
				  6、 每个人都是蓝队：接受的数据，是红队

		 */

		var data = {};
		data = data ||{};

		ws.onopen = function(){
		  ws.send(JSON.stringify({x:0}));
		};

		var red = new circle({
			x:data.x || screenWidth/2,
			y:screenHeight/6 - 15,
			radius:15,
			strong:true,
			backgroundColor:"#F00",
			color:"#F00",
			// ontouchmove:function(e){
			// 	red.y = screenHeight/6 - 15;
			// 	if(e.changedTouches[0].clientX + this.radius > screenWidth){
			// 		red.x = screenWidth - this.radius;
			// 	}else if(e.changedTouches[0].clientX - this.radius < 0){
			// 		red.x = this.radius;
			// 	}else{
			// 		red.x = e.changedTouches[0].clientX;
			// 	}
			// 	console.log("red");
			// }
		});

		// red.addWatching("touchend",function(){
		// 	data.x = red.x;
		// 	data.y = red.y;
		// 	ws.send(data);
		// 	console.log("send message" + data.x + data.y); 
		// 	//start();
		// });	

		var blue = new circle({
			x: screenWidth/2,
			y: screenHeight/6 * 5 - 15,
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
					blue.x = parseInt(e.changedTouches[0].clientX);
				}
				console.log("blue");
			}
		});

		blue.addWatching("touchmove",function(e){
			var dt = {};
			dt.x = parseInt(blue.x);

			ws.send(JSON.stringify(dt));
			console.log("send message:" + dt.x); 
			//cancelAnimationFrame(timeTip);
		});
		
		ws.onmessage = function(evt){
			data = typeof evt.data  === "string" ? JSON.parse(evt.data): evt.data;
			red.x = data.x || red.x;
			//blue.x = data.x || blue.x;
			//blue.y = data.y || blue.y;
			console.log("receive message" + data.x );
		};


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
			co = co.concat(str.charAt(parseInt(Math.random() * 16)),str.charAt(parseInt(Math.random() * 16)));
			obj.backgroundColor = "#" + co ;
			obj.color="#" + co;
		}

	 	var timeTip;
	 	function start(){
	 		timeTip = window.requestAnimationFrame(function(){
		 		move();
		 		start();
			});
	 	}
	 	start();
	});
});