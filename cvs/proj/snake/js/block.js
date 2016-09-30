define([
	"../../../lib/tool/extend/triangle",
	"../../../lib/tool/bar"
],function(triangle,bar){
	main.on("show","block",function(frame){
		/*  */
		var RotateBar = new bar({
			x:20,
			y:33,
			width:frame.width - 20 * 2 - 5*Math.sqrt(2),
			color:"#000",
			onscroll:function(e){
				console.log(e);
			}
		});

		var rotateTag = new triangle({
			a:10 * Math.sqrt(2),
			b:10,
			angle:45,
			x:20,
			y:20,
			color:"blue",
			limit:true
		});
		rotateTag.addWatching("touchmove",function(e){
			console.log("haha");
		});


		var block1 = new triangle({
			a:100*Math.sqrt(2),
			b:100,
			angle:45,
			x:50,
			y:50,
			color:"#F00",
			ontouchmove:function(e){
				console.log("moving block1");
			}
		});

		var block2 = new triangle({
			a:100,
			b:100*Math.sqrt(2),
			angle:45,
			x:170,
			y:170,
			color:"#F33",
			ontouchmove:function(e){
				console.log("moving block2");
			}
		});
	});
});