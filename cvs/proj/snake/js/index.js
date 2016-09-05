define(["../../../lib/tool/button"],function(button){
	main.on("show","index",function(){
		console.log("begin load index");
		var moveBtn = new button({
			x:10,
			y:10,
			value:'move',
			backgroundColor:'#808080',
			ontouchmove:function(e){
				//console.log(e.changedTouches[0].clientX +"-"+e.changedTouches[0].clientY);
				moveBtn.x = e.changedTouches[0].clientX - moveBtn.width/2;
				moveBtn.y = e.changedTouches[0].clientY - moveBtn.height/2;
				moveBtn.draw();
			}
		});
		
		var btn = new button({
			x:50,
			y:210,
			value:'alert',
			backgroundColor:'#f00',
			ontouchstart:function(e){
				alert("134534121");
			}
		});
	});
});