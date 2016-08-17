console.log("script start");
require.config({
	//baseUrl:"./js",// 
	paths:{
	}
});

define(["../../lib/framework/frame","./js/test2"],function(){
	console.log("ending");
});