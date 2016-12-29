define([
	"../../../lib/tool/button",
	"../../../lib/tool/extend/triangle",
	"../../../lib/tool/circle",
	"../../../lib/server/ws",
	"../../../outer/gctrl"	
],function(button,triangle,circle,ws,gctrl){
	main.on("show","room",function(){
		var data = JSON.parse($data);
		var arr = [];
		for(var i=0,len=data.length;i<len;i++){
		    var num = data[i].userArray.length == 0? "(0vs0)":data[i].userArray.length ==1?"(1vs0)":"(1vs1)";
		    var btn = new button({
				x:100,
				y:20*(i+1) + 30*i + 10,
				height:30,
				width:100,
				value:data[i].roomId+":"+num,
				backgroundColor:'#f55',
				ontouchend:function(e){
					main.visit({
						href:"/ball/ball?roomId="+data[i].roomId
					});
				}
			});
			arr.push(btn);
		}

		ws.onmessage = function(evt){
				
		}
			
		// 	if(!canStart && data.length == 2 ){
		// 		canStart = data.canStart;
		// 		setTimeout(function(){
		// 			start();
		// 		},1000);
		// 	}
		// 	//blue.x = data.x || blue.x;
		// 	//blue.y = data.y || blue.y;
		// 	console.log("receive message:" + data.x );
		// };

		// ws.onopen = function(){
		// 	var dt = {};
		// 	dt.x = screenWidth/2;
		// 	dt.userID = thisUser;
		// 	dt.roomNum = 0;
		// 	dt.stdn = thisStdn;
		// 	ws.send(JSON.stringify(dt));
		// };
	});
});