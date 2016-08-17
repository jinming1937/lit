define([
	"../../../lib/framework/frame",
	"../../../lib/tool/button",
	"../../../lib/server/server",
	"../../../outer/gctrl"
],function(frame,button,server){
	/* --------------------------[start defined]------------------------------- */
	console.log("loading test");
	var btn = new button({
		x:150,
		y:60,
		name : "alert",
		width:80,
		value : 'alert',
		ontouchstart:function(e){
			//alert("type:"+e.type);
			console.log('button touchstart');
		}
	});
	frame.draw(btn);
	
	btn.addWatching("touchend",function(e){
		console.log("button touchend");
	},false);
	
	btn.addWatching("touchend",function(e){
		console.log("button touchend2");
	},false);
	
	var bbstn = new button({
		x:150,
		y:150,
		name : "alert",
		width:80,
		value : 'alert',
	});
	frame.draw(bbstn);
	bbstn.addWatching("touchstart",function(e){
		console.log(e.type);
	},false);
	/* --------------------------[end defined]------------------------------- */
	/* --------------------------[start main]------------------------------- */
//	;(function(){
//		console.log("main star");
//		server({
//			url:"../../../../service/cvs/getClassInfo.json",
//			type:"GET",
//			success:function(data){
//				if(data && data.data && data.total > 0){
//					//cvs.table(data.data);
//				}
//			}
//		});
//		console.log("main end");
//	}());
	/* --------------------------[end main]------------------------------- */
});