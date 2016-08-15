define([
	"../../../lib/framework/frame",
	"../../../lib/framework/action",
	"../../../lib/tool/button",
	"../../../lib/server/server",
],function(frame,action,button,server){
	/* --------------------------[start defined]------------------------------- */
	console.log("loading test,begin defined");
	var btn = new button();
	btn.init({
		x:150,
		y:60,
		name : "alert",
		width:"80",
		value : 'alert',
		ontouchstart:function(e){
			alert("type:"+e.type);
		}
	});
	frame.draw(btn);
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