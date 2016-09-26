define([
	"../../../lib/tool/button",
	"../../../outer/gctrl"
],function(button,gctrl){
	main.on("show","index",function(){
		new gctrl((main.getCurrentFrame()).cvs);
		console.log("begin load index");
		var moveBtn = new button({
			x:10,
			y:10,
			value:'move',
			backgroundColor:'#808080',
			ontouchmove:function(e){
				moveBtn.x = e.changedTouches[0].clientX - moveBtn.width/2;
				moveBtn.y = e.changedTouches[0].clientY - moveBtn.height/2;
				moveBtn.draw();
			}
		});
		
		var btn = new button({
			x:50,
			y:210,
			value:'联网',
			backgroundColor:'#f00',
			ontouchend:function(e){
				main.visit({
					href:"http://localhost:8089/cvs/proj/snake/classical.html"
				});
			}
		});
		
		var b = new button({
			x:100,
			y:310,
			width:60,
			height:70,
			value:'AAA',
			backgroundColor:'#f00',
			ontouchend:function(e){
				main.visit({
					href:"http://localhost:8089/cvs/proj/snake/classical.html"
				});
			}
		})
	});
});