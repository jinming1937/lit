define([
	"../../../cvs/lib/tool/button",
	"../../../cvs/lib/tool/extend/triangle",
	"../../../cvs/outer/gctrl"
],function(button,triangle,gctrl){
	main.on("show","index",function(cvs){
		new gctrl((main.getCurrentFrame()).cvs);
		var dom =  (main.getCurrentFrame()).cvs.canvas;
		var urlPath = location.origin+(location.port === '8089'?'/dist/':'/mb/');
		dom.classList.add("right-base");
		console.log("begin load index");
		var xxxx= new button({
			x:10,
			y:10,
			value:'move',
			backgroundColor:'#808080',
			ontouchmove:function(e){
				console.log("this button is moving!!!");
			}
		});

		xxxx.addWatching('touchend',function(){
			console.log("exec touchend");
		},false)
		
		new button({
			x:100,
			y:10,
			value:'蛇',
			backgroundColor:'#f00',
			ontouchend:function(e){
				main.open({
					href:urlPath+"snake/prosnake.html"
				});
			}
		});
		new button({
			x:100,
			y:50,
			value:'蛇',
			backgroundColor:'#f00',
			ontouchend:function(e){
				main.open({
					href:urlPath+"snake/classical.html"
				});
			}
		});

		// new button({
		// 	x:10,
		// 	y:50,
		// 	value:"-",
		// 	ontouchend:function(){
		// 		console.log('-');
		// 		main.open({
		// 			href:"http://www.xiaozhiga.com:8089/cvs/proj/snake/block.html"
		// 		});
		// 		// ang.rotateAngle -= 5;
		// 		// ang.rotate();
		// 	}
		// });
		
		// new button({
		// 	x:100,
		// 	y:50,
		// 	value:"+",
		// 	ontouchend:function(){
		// 		console.log('+');
		// 		// ang.rotateAngle += 5;
		// 		// ang.rotate();
		// 	}
		// });

		// var tri = new triangle({
		// 	a:30,
		// 	b:40,
		// 	c:50,
		// 	x:100,
		// 	y:310,
		// 	color: "#F00",
		// 	ontouchmove:function(e){
		// 		console.log("this tri is moving");
		// 	}
		// });
		// tri.addWatching("touchend",function(){
		// 	console.log("addWatching touchend");
		// });

		// var ang = new triangle({
		// 	a:60,
		// 	b:60,
		// 	angle:60,
		// 	x:150,
		// 	y:360,
		// 	color:"#F00"
		// });
	});
});