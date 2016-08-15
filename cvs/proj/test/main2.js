console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["./js/test2","../../outer/gctrl"],function(){
	console.log("ending");
});