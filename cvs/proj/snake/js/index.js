define([
	"../../../lib/tool/button",
	"../../../lib/tool/extend/triangle",
	"../../../outer/gctrl"
],function(button,triangle,gctrl){
	main.on("show","index",function(){
		new gctrl((main.getCurrentFrame()).cvs);
		console.log("begin load index");
		new button({
			x:10,
			y:10,
			value:'move',
			backgroundColor:'#808080',
			ontouchmove:function(e){
				console.log("this button is moving!!!");
			}
		});
		
		new button({
			x:100,
			y:10,
			value:'联网',
			backgroundColor:'#f00',
			ontouchend:function(e){
				main.visit({
					href:"http://localhost:8089/cvs/proj/snake/classical.html"
				});
			}
		});

		new button({
			x:10,
			y:50,
			value:"-",
			ontouchend:function(){
				console.log('-');
				// ang.rotateAngle -= 5;
				// ang.rotate();
			}
		});
		
		new button({
			x:100,
			y:50,
			value:"+",
			ontouchend:function(){
				console.log('+');
				// ang.rotateAngle += 5;
				// ang.rotate();
			}
		});

		var tri = new triangle({
			a:30,
			b:40,
			c:50,
			x:100,
			y:310,
			color: "#F00",
			ontouchmove:function(e){
				console.log("this tri is moving");
			}
		});
		tri.addWatching("touchend",function(){
			console.log("addWatching touchend");
		});

		var ang = new triangle({
			a:60,
			b:60,
			angle:60,
			x:150,
			y:360,
			color:"#F00"
		});
	});
});