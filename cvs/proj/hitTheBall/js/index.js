define([
	"../../../lib/tool/button",
	"../../../lib/tool/extend/triangle",
	"../../../outer/gctrl"
],function(button,triangle,gctrl){
	main.on("show","index",function(){
		new gctrl((main.getCurrentFrame()).cvs);
		console.log("begin load index");
	});
});